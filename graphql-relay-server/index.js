const express = require('express');
const fs = require('fs');
const cors = require('cors')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLEnumType,
    printSchema,
    GraphQLInterfaceType,
    GraphQLInputObjectType
} = require('graphql');

const { nodeDefinitions, fromGlobalId, globalIdField, mutationWithClientMutationId } = require('graphql-relay')
const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        const { type, id } = fromGlobalId(globalId);
        const slug = `${type.toLowerCase()}s`
        return db.nodes[slug][id];
    },
    (obj) => {
        if (obj.firstName) return User;
        if (obj.commentedBy) return Comment;
        if (obj.openedBy) return OpenAction;
        if (obj.fixedBy) return FixAction;
        if (obj.closedBy) return CloseAction;
        if (obj.severity) return Bug;
        if (obj.isActive) return Project;
        return null
    }
)

const {graphqlHTTP} = require('express-graphql');
const db = require('./db');

const app = express()
app.use(cors())

const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: globalIdField(),
        firstName: {type: GraphQLNonNull(GraphQLString)},
        lastName: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        fullName : {
            type: GraphQLNonNull(GraphQLString),
            resolve : (user) => {
                return `${user.firstName} ${user.lastName}`
            }
        }
    },
    interfaces: [nodeInterface]
});

const Severity = new GraphQLEnumType({
  name: 'Severity',
  values: {
    LOW: { value: 0 },
    MINOR: { value: 1 },
    MAJOR: { value: 2 },
    CRITICAL: { value: 3 },
  }
});

const Status = new GraphQLEnumType({
    name: 'Status',
    values: {
        OPEN: { value: 0 },
        IN_PROGRESS: { value: 1 },
        CLOSED: { value: 2 }
    }
});

const Action = new GraphQLInterfaceType({
    name: 'Action',
    fields: {
        id: globalIdField(),
        date : { type : GraphQLNonNull(GraphQLString)},
        bugId : { type : GraphQLNonNull(GraphQLID)},
    },
    resolveType : (obj) => {
        if (obj.comment) return CommentAction;
        if (obj.openedBy) return OpenAction;
        if (obj.fixedBy) return FixAction;
        if (obj.closedBy) return CloseAction;
        return null;
    }
});

const CommentAction = new GraphQLObjectType({
    name: 'CommentAction',
    interfaces : [Action],
    fields: {
        id: globalIdField(),
        date : { type : GraphQLNonNull(GraphQLString)},
        bugId : { type : GraphQLNonNull(GraphQLID)},
        commentedBy : { 
            type : User,
            resolve : (parent, args) => {
                return db.nodes.users[parent.commentedBy];
            }
        },
        description : { type : GraphQLNonNull(GraphQLString)},
        comment : {type: GraphQLNonNull(GraphQLString)}
    }
});

const OpenAction = new GraphQLObjectType({
    name: 'OpenAction',
    interfaces : [Action],
    fields: {
        id: globalIdField(),
        date : { type : GraphQLNonNull(GraphQLString)},
        bugId : { type : GraphQLNonNull(GraphQLID)},
        openedBy : { 
            type : User,
            resolve : (parent, args) => {
                return db.nodes.users[parent.openedBy];
            }
        },
        description : { type : GraphQLNonNull(GraphQLString)},
    }
});

const FixAction = new GraphQLObjectType({
    name: 'FixAction',
    interfaces : [Action],
    fields: {
        id: globalIdField(),
        date : { type : GraphQLNonNull(GraphQLString)},
        bugId : { type : GraphQLNonNull(GraphQLID)},
        fixedBy : { 
            type : User, 
            resolve : (parent, args) => {
                return db.nodes.users[parent.fixedBy];
            }},
        solution : { type : GraphQLNonNull(GraphQLString)},
    }
});

const CloseAction = new GraphQLObjectType({
    name: 'CloseAction',
    interfaces : [Action],
    fields: {
        id: globalIdField(),
        date : { type : GraphQLNonNull(GraphQLString)},
        bugId : { type : GraphQLNonNull(GraphQLID)},
        closedBy : { 
            type : User, 
            resolve : (parent, args) => {
                return db.nodes.users[parent.closedBy];
            }},
        reason : { type : GraphQLNonNull(GraphQLString)},
    }
});

const Bug = new GraphQLObjectType({
    name: 'Bug',
    fields: {
        id: globalIdField(),
        title : {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLNonNull(GraphQLString)},
        severity : {type: GraphQLNonNull(Severity)},
        createdBy : { 
            type : User,
            resolve : (parent, args) => {
                return db.nodes.users[parent.createdBy];
            }
        },
        status : { type : Status },
        projectId : { type: GraphQLNonNull(GraphQLID)},
        actions : { 
            type : GraphQLList(Action),
            resolve(parent, args){
                const actions = db.actions().filter(action => action.bugId === parent.id);
                console.log(actions);
                return actions;
            }
        },
    }
});

const Project = new GraphQLObjectType({
    name: 'Project',
    fields: {
        id: globalIdField(),
        name : {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLNonNull(GraphQLString)},
        isActive : {type: GraphQLNonNull(GraphQLBoolean)},
        bugs : {
            type : new GraphQLList(new GraphQLNonNull(Bug)),
            args : {
                status : {type: Status}
            },
            resolve(parent, args){
                if (typeof args.status !== 'undefined') {
                    return db.bugs().filter(bug => bug.projectId === parent.id && bug.status === args.status);
                }
                return db.bugs().filter(bug => bug.projectId === parent.id);
            }
        },
    }
});

var queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        node : nodeField,
        totalUsers : {
            type : GraphQLInt,
            resolve(parent, args){
                return Object.values(db.nodes.users).length;
            }
        },
        user: {
            type: User,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.users().find(user => user.id === args.id);
            }
        },
        users: {
            type: new GraphQLNonNull(GraphQLList(GraphQLNonNull(User))),
            resolve(parentValue, args) {
                return db.users()
            }
        },
        project : {
            type: Project,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.projects().find(project => project.id === args.id);
            }
        },
        projects: {
            type: new GraphQLList(Project),
            resolve(parentValue, args) {
                return db.projects()
            }
        },
        bug : {
            type: Bug,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.bugs().find(bug => bug.id === args.id);
            }
        },
        bugs: {
            type: new GraphQLList(Bug),
            resolve(parentValue, args) {
                return db.bugs()                
            }
        },
        openBugs: {
            type: new GraphQLList(Bug),
            args: {
                projectId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.bugs().filter(bug => bug.projectId === args.projectId);
            }
        },
        action : {
            type: Action,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.actions().find(action => action.bugId === parent.bugId);
            }
        },
        actions: {
            type: new GraphQLList(Action),
            args: {
                bugId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args) {
                return db.actions().filter(action => action.bugId === args.bugId);
            }
        }
    }
});

const ProjectInput = new GraphQLInputObjectType({
    name: 'ProjectInput',
    fields: {
        name: {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLNonNull(GraphQLString)},
        isActive: {type: GraphQLNonNull(GraphQLBoolean)}
    }
});

const BugInput = new GraphQLInputObjectType({
    name: 'BugInput',
    fields: {
        title: {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLNonNull(GraphQLString)},
        severity: {type: GraphQLNonNull(Severity)},
        projectId: {type: GraphQLNonNull(GraphQLID)},
        userId : {type: GraphQLNonNull(GraphQLID)}
    }
});

const FixBugInput = new GraphQLInputObjectType({
    name: 'FixBugInput',
    fields: {
        bugId : { type: GraphQLNonNull(GraphQLID)},
        fixedBy : {type: GraphQLNonNull(GraphQLID)},
        solution : { type : GraphQLNonNull(GraphQLString)},
    }
});

const CloseBugInput = new GraphQLInputObjectType({
    name: 'CloseBugInput',
    fields: {
        bugId : { type: GraphQLNonNull(GraphQLID)},
        closedBy : {type: GraphQLNonNull(GraphQLID)},
        reason : { type : GraphQLNonNull(GraphQLString)},
    }
});

const CommentBugInput = new GraphQLInputObjectType({
    name: 'CommentBugInput',
    fields: {
        bugId : { type: GraphQLNonNull(GraphQLID)},
        commentedBy : {type: GraphQLNonNull(GraphQLID)},
        comment : { type : GraphQLNonNull(GraphQLString)},
    }
});

const mutationType = new GraphQLObjectType({
    name : 'Mutations',
    fields : {
        /* createUser : {
            type : User,
            args : {
                firstName : {type : GraphQLNonNull(GraphQLString)},
                lastName : {type : GraphQLNonNull(GraphQLString)},
                email : {type : GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return db.createUser(args.firstName, args.lastName, args.email);
            }
        },*/
        createUser : mutationWithClientMutationId({
            name : 'CreateUser',
            inputFields : {
                firstName : {type : GraphQLNonNull(GraphQLString)},
                lastName : {type : GraphQLNonNull(GraphQLString)},
                email : {type : GraphQLNonNull(GraphQLString)}
            },
            outputFields : {
                user : {
                    type : User,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const newUser = db.createUser(args.firstName, args.lastName, args.email);
                    resolve({user : newUser});
                });
            }
        }),
        createProject : mutationWithClientMutationId({
            name : 'CreateProject',
            inputFields : {
                project : { type : ProjectInput}
            },
            outputFields : {
                project : {
                    type : Project,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const newProject = db.createProject(args.project);
                    resolve({project : newProject});
                });
            }
        }),
        createBug : mutationWithClientMutationId({
            name : 'CreateBug',
            inputFields : {
                bug : { type : BugInput}
            },
            outputFields : {
                bug : {
                    type : Bug,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const newBug = db.createBug(args.bug);
                    resolve({bug : newBug});
                });
            }
        }),
        fixBug : {
            type : Bug,
            args : {
                fixInfo : { type : FixBugInput}
            },
            resolve(parentValue, args){
                return db.fixBug(args.fixInfo);
            }
        },
        /* fixBug : mutationWithClientMutationId({
            name : 'FixBug',
            inputFields : {
                fixInfo : { 
                    type : FixBugInput
                }
            },
            outputFields : {
                bug : {
                    type : Bug,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const updatedBug = db.fixBug(args.fixInfo);
                    resolve({bug : updatedBug});
                });
            }
        }), */
        closeBug : {
            type : Bug,
            args : {
                closeBugInfo : { type : CloseBugInput}
            },
            resolve(parentValue, args){
                return db.closeBug(args.closeBugInfo);
            }
        },
        /* closeBug : mutationWithClientMutationId({
            name : 'CloseBug',
            inputFields : {
                fixInfo : { 
                    type : CloseBugInput
                }
            },
            outputFields : {
                bug : {
                    type : Bug,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const updatedBug = db.closeBug(args.fixInfo);
                    resolve({bug : updatedBug});
                });
            }
        }), */
        commentBug : {
            type : Bug,
            args : {
                commentInfo : { type : CommentBugInput}
            },
            resolve(parentValue, args){
                return db.commentBug(args.commentInfo);
            }
        },
        /* commentBug : mutationWithClientMutationId({
            name : 'CommentBug',
            inputFields : {
                commentInfo : { 
                    type : CommentBugInput
                }
            },
            outputFields : {
                bug : {
                    type : Bug,
                }
            },
            mutateAndGetPayload : (args, context) => {
                return new Promise((resolve, reject) => {
                    const updatedBug = db.commentBug(args.commentInfo);
                    resolve({bug : updatedBug});
                });
            }
        }), */
    }
});

const schema = new GraphQLSchema({
    query: queryType,
    types :[User, Severity, Status, Action, CommentAction, OpenAction, FixAction, CloseAction, Bug, Project],
    mutation : mutationType
});

fs.writeFileSync('./schema.graphql', printSchema(schema));

/* app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 3000);
}) */

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true,

}));

app.listen(8080, () => {
    console.log(`GraphQL Server running on http://localhost:8080/graphql`)
});
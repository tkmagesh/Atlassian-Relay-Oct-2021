import { useEffect } from "react";
import { useLazyLoadQuery, useMutation } from "react-relay";
import * as AllUsersQuery from './__generated__/AllUsersQuery.graphql';
import * as AllUsers_createUserMutation from './__generated__/AllUsers_createUserMutation.graphql';

const graphql = require('babel-plugin-relay/macro');

const AllUsers = () => {
    const data = useLazyLoadQuery<AllUsersQuery.AllUsersQuery>(graphql`
        query AllUsersQuery {
            totalUsers
            users {
                id
                firstName
                lastName
                email
            }
        }
    `, {})

    const [ createUser ] = useMutation(graphql`
    mutation AllUsers_createUserMutation{
        createUser(input : {
            firstName : "Magesh",
            lastName : "K",
            email : "mk@email.com"
        }){
            user{
            id
            firstName
            lastName
            email
            }
        }
        }
    `)

    const onCreateUserClick = () => {
        createUser({
            variables : {},
            updater : store => {
                const root = store.getRoot()

                //updating the total users
                const totalUsers = Number(root.getValue('totalUsers'))
                if (totalUsers) {
                    root.setValue(totalUsers + 1, 'totalUsers')
                }

                //updating the users list
                const users = root.getLinkedRecords('users')
                const payload = store.getRootField('createUser')
                
                if (!users || !payload) {
                    return
                }
                const newUser = payload.getLinkedRecord('user')
                const updatedUsers = [...users, newUser]
                root.setLinkedRecords(updatedUsers, 'users')
            }
        });
    }

    return (
        <div>
            <h1>All Users - [#{data.totalUsers}]</h1>
            <button onClick={() => onCreateUserClick()}>Create User</button>
            <ul>
                {data.users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
    

}

export default AllUsers;
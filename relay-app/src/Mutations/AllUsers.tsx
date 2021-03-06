import { useEffect, useState } from "react";
import { useLazyLoadQuery, useMutation, commitLocalUpdate } from "react-relay";
import * as AllUsersQuery from './__generated__/AllUsersQuery.graphql';
import * as AllUsers_createUserMutation from './__generated__/AllUsers_createUserMutation.graphql';
import { generateUniqueClientID } from 'relay-runtime'
import environment from '../RelayEnvironment';

const graphql = require('babel-plugin-relay/macro');

const AllUsers = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
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

    

    const [ createUser ] = useMutation<AllUsers_createUserMutation.AllUsers_createUserMutation>(graphql`
    mutation AllUsers_createUserMutation($input: CreateUserInput!) {
        createUser(input : $input) {
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
        const user : AllUsers_createUserMutation.CreateUserInput = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        createUser({
            variables : {
                "input" : user
            },
            optimisticUpdater : (store) => {
                const newUserId = generateUniqueClientID()
                const newUser = store.create(newUserId, 'User')
                newUser.setValue(newUserId, 'id')
                newUser.setValue('First Name', 'firstName')
                newUser.setValue('Last Name', 'lastName')
                newUser.setValue('Email', 'email')

                const users = store.getRoot().getLinkedRecords('users')
                if (!users){
                    return
                }
                const updatedUsers = [...users, newUser]
                store.getRoot().setLinkedRecords(updatedUsers, 'users')

            },
            updater : store => {
                window['store'] = store;
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
    };

    const onLoginClick = () => {
        commitLocalUpdate(environment, store => {
            const record = store.getRoot().getLinkedRecord('userStatus')
            if (!record) {
                return
            }
            record.setValue(true, 'loggedIn')
        })
    }
    
    return (
        <div>
            <h1>All Users - [#{data.totalUsers}]</h1>
            <button onClick={onLoginClick}>Login User</button>
            <div>
                <input type="text" placeholder="FirstName" onChange = { evt => setFirstName(evt.target.value) }/>
                <input type="text" placeholder="LastName" onChange = { evt => setLastName(evt.target.value) }/>
                <input type="text" placeholder="Email" onChange = { evt => setEmail(evt.target.value) }/>
                <button onClick={() => onCreateUserClick()}>Create User</button>
            </div>
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
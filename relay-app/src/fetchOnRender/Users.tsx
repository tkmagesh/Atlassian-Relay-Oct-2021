import {useLazyLoadQuery} from 'react-relay/hooks'
//import * as UsersQuery from './__generated__/UsersQuery.graphql'
import type { UsersQuery } from './__generated__/UsersQuery.graphql'

const graphql = require('babel-plugin-relay/macro')

const Users = () => {
    const usersQuery = graphql`
        query UsersQuery {
            users {
                id
                firstName
                lastName
                email
            }
        }
    `
    const data = useLazyLoadQuery<UsersQuery>(usersQuery, {})
    return (
        <div>
            <h3>Users</h3>
            <div>Count : {data.users.length}</div>
        </div>
    )
}
export default Users;
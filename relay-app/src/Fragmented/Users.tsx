import {usePreloadedQuery} from 'react-relay/hooks'

import  type { PreloadedQuery } from 'react-relay/hooks'
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql';
import User from './User'

interface Props {
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery> 
}

const Users = ({queryRef} : Props) => {
    
    const data = usePreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>(AppFragmentedQuery.default, queryRef)
    return (
        <div>
            <h3>Users</h3>
            <div>Count : {data.users.length}</div>
            {data.users.map(user => <User data={user}/>)}
        </div>
    )
}
export default Users;
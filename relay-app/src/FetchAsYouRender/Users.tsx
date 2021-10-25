import {usePreloadedQuery} from 'react-relay/hooks'

import  type { PreloadedQuery } from 'react-relay/hooks'
import * as AppQuery from './__generated__/AppQuery.graphql';

interface Props {
    queryRef : PreloadedQuery<AppQuery.AppQuery> 
}

const Users = ({queryRef} : Props) => {
    
    const data = usePreloadedQuery<AppQuery.AppQuery>(AppQuery.default, queryRef)
    return (
        <div>
            <h3>Users</h3>
            <div>Count : {data.users.length}</div>
        </div>
    )
}
export default Users;
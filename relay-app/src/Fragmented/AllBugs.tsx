import { PreloadedQuery, usePreloadedQuery, useRefetchableFragment } from "react-relay";
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'
import * as AllBugsFragment from './__generated__/AllBugs_Bug.graphql'
import Bug from './Bug';

const graphql = require('babel-plugin-relay/macro')

interface Props {
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery> 
}

const AllBugs = ({queryRef } : Props) => {
    const data = usePreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>(AppFragmentedQuery.default, queryRef)

    const [bugs, reload] = useRefetchableFragment<AppFragmentedQuery.AppFragmentedQuery,AllBugsFragment.AllBugs_Bug$key>(graphql`
        fragment AllBugs_Bug on RootQuery 
        @refetchable(queryName: "AllBugsQuery"){
            bugs {
                id
                title
                description
                status
            }
        }
    `, data);
    
    return (
        <div>
            <h1>All Bugs</h1>
            <ul>
                {bugs.bugs?.map((bug:any) => (
                     bug ? (<li key={bug.id}>
                           <p>{bug.title}</p>
                        </li>) : null
                ))}
            </ul>
        </div>
    );
}
export default AllBugs;
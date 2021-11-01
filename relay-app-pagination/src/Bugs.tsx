import { usePaginationFragment } from "react-relay"
import * as BugPaginationQuery from './__generated__/BugPaginationQuery.graphql'
import { Bugs_list$key } from './__generated__/Bugs_list.graphql';
import * as AppQuery from './__generated__/AppQuery.graphql';

const graphql = require('babel-plugin-relay/macro')
const Bugs = ({query} : {query : AppQuery.AppQueryResponse}) => {
    const { data, 
      loadNext,
    loadPrevious,
    hasNext,
    hasPrevious,
    isLoadingNext,
    isLoadingPrevious,
    refetch} = usePaginationFragment<BugPaginationQuery.BugPaginationQuery, Bugs_list$key>(graphql`
        fragment Bugs_list on RootQuery 
            @argumentDefinitions(
                first: { type: "Int", defaultValue: 2 },
                after: { type: "String" }
            ) 
            @refetchable(queryName: "BugPaginationQuery"){
            bugs(first: $first, after : $after) @connection(key: "Bugs_bugs") {
              edges{
                node{
                  id
                  title
                  description
                  status
                }
                cursor
              }
              pageInfo{
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
            }`, query);

    return(
        <ul>
            {data?.bugs?.edges?.map(edge => (
                <li key={edge?.node?.id}>
                    {edge?.node?.title}
                </li>
            ))}
            { hasNext && <button onClick={() => loadNext(2)}>Next</button> }
            { hasPrevious && <button onClick={() => loadPrevious(2)}>Previous</button> }
            { isLoadingNext && <span>Loading next...</span> }
            { isLoadingPrevious && <span>Loading previous...</span> }
        </ul>
    )
}

export default Bugs;
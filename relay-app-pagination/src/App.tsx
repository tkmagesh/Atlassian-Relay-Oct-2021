
import { useLazyLoadQuery } from 'react-relay'
import Bugs from './Bugs';
import * as AppQuery from './__generated__/AppQuery.graphql';

const graphql = require('babel-plugin-relay/macro')

const App = () => {
    const query = useLazyLoadQuery<AppQuery.AppQuery>(graphql`
        query AppQuery {
            users {
                id
                firstName
            }
            projects{
                id
            }
            ...Bugs_list
        }
    `, {})
    console.log(query);
    return (
        <>
        <h3>Bugs</h3>
        <Bugs query={query}/>
        </>

    )
}

export default App;
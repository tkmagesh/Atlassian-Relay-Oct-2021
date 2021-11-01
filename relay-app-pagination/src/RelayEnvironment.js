import {Environment, Network, RecordSource, Store, commitLocalUpdate} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.text} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), { gcReleaseBufferSize: 10 }),
});

//local state
commitLocalUpdate(environment, store => {
  const key = 'userStatus'
  const __typename = 'UserStatus'
  const dataId = `client:${__typename}`
  const record = store.create(dataId, __typename);

  record.setValue(false, "loggedIn")
  store.getRoot().setLinkedRecord(record, key)
});

export default environment;
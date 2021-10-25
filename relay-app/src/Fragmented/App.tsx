import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useQueryLoader } from 'react-relay/hooks';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'

const graphql = require('babel-plugin-relay/macro');

function App() {
  
  const appQuery = graphql`
    query AppFragmentedQuery  {
      users {
        ...User_user
      }
    }
  `;
  const [queryRef, loadQuery, disposeQuery] = useQueryLoader<AppFragmentedQuery.AppFragmentedQuery>(appQuery);
  
  const onLoadClick = () => {
    loadQuery({}, { fetchPolicy : 'store-and-network'});
  }
  return (
   <>
    <h1>Relay App (render as you fetch)</h1>
    <button onClick={() => onLoadClick()}>Load</button>
    <button onClick={() => disposeQuery()}>Dispose</button>
    <Suspense fallback={<div>Loading users...</div>}>
      {queryRef && <Users queryRef={queryRef}/>}
    </Suspense>
   </>
  );
}

export default App;

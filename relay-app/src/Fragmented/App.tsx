import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useQueryLoader } from 'react-relay/hooks';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'
import type { Status } from './__generated__/AppFragmentedQuery.graphql';
import Projects from './Projects';

const graphql = require('babel-plugin-relay/macro');

function App() {
  
  const appQuery = graphql`
    query AppFragmentedQuery($status : Status)  {
      users {
        ...User_user
      }
      projects {
        id
        ...Project_project @arguments(status: $status)
      }
    }
  `;
  const [queryRef, loadQuery, disposeQuery] = useQueryLoader<AppFragmentedQuery.AppFragmentedQuery>(appQuery);
  
  const onLoadClick = () => {
    //loadQuery({status : 'OPEN'} ,{ fetchPolicy : 'store-and-network'});
    loadQuery({} ,{ fetchPolicy : 'store-and-network'});
  }
  return (
   <>
    <h1>Relay App (render as you fetch)</h1>
    <button onClick={() => onLoadClick()}>Load</button>
    <button onClick={() => disposeQuery()}>Dispose</button>
    {/* <Suspense fallback={<div>Loading users...</div>}>
      {queryRef && <Users queryRef={queryRef}/>}
    </Suspense> */}
    <Suspense fallback={<div>Loading users...</div>}>
      {queryRef && <Projects queryRef={queryRef}/>}
    </Suspense>
   </>
  );
}

export default App;

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
/* import App from './FetchAsYouRender/App' */
//import App from './Fragmented/App';

//mutations
import AllUsers from './Mutations/AllUsers'
import reportWebVitals from './reportWebVitals';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from './RelayEnvironment';


declare global{
  interface Window { store : any}
}


ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}> 
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <AllUsers />
      </Suspense>
    </React.StrictMode>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

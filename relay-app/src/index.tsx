import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
/* import App from './FetchAsYouRender/App' */
import App from './Fragmented/App';

import reportWebVitals from './reportWebVitals';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from './RelayEnvironment';

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

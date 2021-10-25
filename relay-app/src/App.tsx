import React from 'react';
import { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  return (
   <>
    <h1>Relay App</h1>
    <Suspense fallback={<div>Loading users...</div>}>
      <Users />
    </Suspense>
   </>
  );
}

export default App;

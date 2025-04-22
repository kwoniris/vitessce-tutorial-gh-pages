import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Vitessce } from 'vitessce';
import { myViewConfig } from './my-view-config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Vitessce Viewer */}
      <div style={{ padding: '2rem' }}>
        <h2>Vitessce Viewer</h2>
        <Vitessce config={myViewConfig} theme="light" />
      </div>
    </div>
  );
}

export default App;

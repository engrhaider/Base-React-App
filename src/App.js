import React from 'react';
import HelloWorld from './Custom'

function App({name, age}) {
  return (
      <div id="myapp">
        <h1>Playing with components</h1>
        <HelloWorld name="Haider Ai" profession="Software Engineer" />
      </div>
  );
}

export default App;

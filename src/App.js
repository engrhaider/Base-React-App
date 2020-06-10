import React from 'react';
import './App.css';

function App({name, age}) {
  return (
      <div id="myapp">
        <h1>Playing with components</h1>
        <p>My name is {name} and age is {age}</p>
      </div>
  );
}

export default App;

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// use app
function App() {
    return <Greeting name="Tahreem" />;
 }
 
export default App;
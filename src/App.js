import React, { useState } from 'react';
import './App.css';

function App() {
  const sum = 1 + 1;
  const [todos,settodos] = useState(["I love dancing","It's my passion & profession as well","Food is life"]);
  const[input,setInput] = useState('');
  const addtodo = (event) => {
     //this will fire off whenever we click the button
    event.preventDefault(); //stops refreshing
    console.log('hey');
    settodos ([...todos,input]);
    setInput(''); //clear up the input after hitting todo button
  }
  console.log('hey',input);

  return (
    <div className="App">
      <h1> Hey there, shikha here! {sum} </h1>
      <input value = {input} onChange = {event => setInput(event.target.value)}/>

      <button type="Submit" onClick = {addtodo}> Add todo </button>
 
      <ul>
      {todos.map(todo => (
        <li> {todo}</li>
      )
        )}      
      </ul>
    </div>
  );
}

export default App;

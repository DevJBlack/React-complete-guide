import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

const App = () => {
  const [personState, setPersons] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Devin', age: 24},
      {name: 'Jesse', age: 24}
    ]});
    const [otherState] = useState('some other value')

    console.log(otherState, personState)

    const switchNameHandler = (newName) => {
      // console.log('Hello');
      // Don't do! persons[1].name = 'Devin James';
      return (
        setPersons({
          persons: [
            {name: 'Max', age: 28},
            {name: newName, age: 24},
            {name: 'Jesse', age: 24}
            
          ]
        })
      )
    }

    const nameChangedHandler = (e) => {
      return (
        setPersons({
          persons: [
            {name: 'Max', age: 28},
            {name: e.target.value, age: 24},
            {name: 'Jesse', age: 24}
            
          ]
        })
      )
    }

  return (
    <div className="App">
      <h1>Hello There</h1>
      <button onClick={() => switchNameHandler('Devin James Black') } >Switch Name</button>
      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} />
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={ switchNameHandler.bind(this,'Dev!') } 
        changed={ nameChangedHandler }
        >My Hobbies: Running</Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './sass/App.scss'

import Person from './Person/Person'

const App = () => {
  const [personState, setPersonState] = useState([
      {name: 'Max', age: 28},
      {name: 'Devin', age: 24},
      {name: 'Jesse', age: 24}
    ]);
    // const [otherState] = useState('some other value')

    const [showPersons, setShowPersons] = useState(false)


    const togglePeronHandler = () => {
      if (showPersons === true) {
        return(setShowPersons(false))
      } else {
        return(setShowPersons(true))
      }
    }

   
    const nameChangedHandler = (e) => {
      return (
        setPersonState([
            {name: 'Max', age: 28},
            {name: e.target.value, age: 24},
            {name: 'Jesse', age: 24}
            
          ]
        )
      )
    }

    const deletePersonHandler = (personIndex) => {
      // const persons = personState.slice();
      const persons = [...personState]
      persons.splice(personIndex, 1);
      setPersonState({persons: persons})
      console.log(persons)
    }

    let persons = null;
    
    if (showPersons) {
      persons = (
        <div className="hide">
          {personState.map((person, index) => {
            return <Person 
              click={() => deletePersonHandler(index)}
              changed={nameChangedHandler}
              person={person.name} 
              age={person.age} />
          })}
        </div> 
      )
    }

  return (
    <div className="App">
      <h1>Hello There</h1>

        <button onClick={ togglePeronHandler } className="btn btn-white">Toggle Person</button>
        { persons }

    </div>
  );
}

export default App;

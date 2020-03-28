import React, { useState } from 'react';
import './sass/App.scss'

import Person from './Person/Person'

const App = () => {
  const [personState, setPersons] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Devin', age: 24},
      {name: 'Jesse', age: 24}
    ]});
    // const [otherState] = useState('some other value')

    const [showPersons, setShowPersons] = useState(false)


    const togglePeronHandler = () => {
      if (showPersons === true) {
        return(setShowPersons(false))
      } else {
        return(setShowPersons(true))
      }
    }

    console.log(showPersons)

    const switchNameHandler = (newName) => {
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

    let persons = null;

    if (showPersons) {
      persons = (
        <div className="hide">
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
      )
    }

  return (
    <div className="App">
      <h1>Hello There</h1>
      {/* <button className='btn btn-white' 
        onClick={() => switchNameHandler('Devin James Black') } >Switch Name</button> */}

        <button onClick={ togglePeronHandler } className="btn btn-white">Toggle Person</button>
        { persons }

    </div>
  );
}

export default App;

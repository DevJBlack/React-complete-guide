import React, { Component } from 'react';
import './sass/App.scss'
// import Radium, { StyleRoot } from 'radium' //This is a package that we installed
// import styled from 'styled-components'
import Person from './Person/Person'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'


class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'Max', age: 28 },
      { id: 'b', name: 'Devin', age: 24 },
      { id: 'c', name: 'Jesse', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;


    this.setState( { persons: persons } )
  }

  deletePersonHandler = ( personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } )
  }

  render () {
    

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            /></ErrorBoundary>
          })}
        </div>
      )

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = []; 
    if ( this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') //classes = ['red', 'bold]
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')} >This is really working!</p>
          <button className='btn' onClick={this.togglePersonsHandler}> Toggle Persons </button>
            { persons }
        </div>
    )

  }

  
}
export default App;


// TEST ONE 
// import React from 'react'
// import TestInput from './Components/SecondTest/TestInput'

// const App = () => {

//   return(
//     <div className='App'>
//       <h1>Test One</h1>
//       <TestInput />
//     </div>
//   )
// }

// export default App










// import React, { useState } from 'react';
// import './sass/App.scss'
// import Person from './Person/Person'

// const App = () => {
//   const [personState, setPersonState] = useState({
//          person: [ 
//       { id: 'a', name: 'Max', age: 28},
//       { id: 'b', name: 'Devin', age: 24},
//       { id: 'c', name: 'Jesse', age: 24}
//     ]});
    
//     const [showPersons, setShowPersons] = useState(false)

    
    
//     const togglePeronHandler = () => {
//       if (showPersons === true) {
//         return(setShowPersons(false))
//       } else {
//         return(setShowPersons(true))
//       }
//     }
    
   
//     const nameChangedHandler = ( event, id ) => {
//       const personIndex = personState.person.findIndex(p => {
//         return p.id === id;
//       })

//       const person = {
//         ...personState.person[personIndex]
//       }
      
//       person.name = event.target.value
//       const persons = [...personState.person]
//       persons[personIndex] = person

//         setPersonState( {persons: persons} )
//       }
      
//       const deletePersonHandler = (personIndex) => {
//         const array = [...personState.person]
//         array.splice(personIndex, 1 );
//         setPersonState({array})
//         console.log(array)
//       }

      
//       let persons = null;
      
//       if (showPersons) {
//         persons = (
//           <div>
//           {personState.person.map((person, index) => {
//             return <Person 
//               click={() => deletePersonHandler(index)}
//               name={person.name} 
//               age={person.age}
//               key={person.id}
//               changed={(event) => nameChangedHandler(event, person.id)}
//               />
//             })}
//           </div> 
//       )
//     }

//   return (
//     <div className="App">
//       <h1>Hello There</h1>
//         <button onClick={ togglePeronHandler } className="btn btn-white">Toggle Person</button>

//         { persons }

//     </div>
//   );
// }

// export default App;

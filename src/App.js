import React, { Component } from 'react';
import './sass/App.scss'
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
          { persons }
      </div>
    )

  }

  
}
export default App














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

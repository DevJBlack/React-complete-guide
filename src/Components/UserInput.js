import React, { useState } from 'react'
import UserOutput from './UserOutput'

const UserInput = () => {
  const [names, setNames] = useState({
   person: [
      { name: 'Devin James Black' }
    ]
  });

  const switchNameHandler = (newName) => {
    return (
      setNames({
        person: [
          { name: newName}
        ]
      })
    )
  }

  const changeNameHandler = (e) => {
    return (
      setNames({
        person: [
          { name: e.target.value}
        ]
      })
    )
  }

  return(
    <div className="userInput">
      <button onClick={() => switchNameHandler('I want to be a Developer')} className="btn btn-blue">Change name</button>
      <UserOutput names={names.person[0].name}
       changed={changeNameHandler}
       click={switchNameHandler.bind(this, ', my name is Dev')} />
    </div>
  )
}

export default UserInput
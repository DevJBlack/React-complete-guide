import React from 'react'

const UserOutput = (props) => {
  return(
    <div className="userOutput">

      <p onClick={props.click} > Hello {props.names}</p>
      <input type="text" onChange={props.changed} value={props.names}/>

    </div>
  )
}

export default UserOutput
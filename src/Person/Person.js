import React from 'react'
import Radium from 'radium'

// const randomAge = Math.floor(Math.random() * 30)

const Person = (props) => {
  return(
   <div className="person">
      <p onClick={props.click} >I'm {props.name} and I am {props.age}</p>
      <input type="text" onChange={props.changed} value={props.name} />
   </div>
  )
}

export default Radium(Person)
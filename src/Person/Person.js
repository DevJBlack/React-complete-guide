import React from 'react'

const randomAge = Math.floor(Math.random() * 30)

const Person = (props) => {
  return(
   <div className="person">
      <p style={{cursor: 'pointer'}} onClick={props.click} >I'm a {props.name} and I am {props.age} years old put sometimes I feel {randomAge} </p>
      <p>{props.children}</p>
   </div>
  )
}

export default Person
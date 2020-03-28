import React from 'react'

const randomAge = Math.floor(Math.random() * 30)

const Person = (props) => {
  return(
   <div className="person">
      <p onClick={props.click} >I'm {props.name} and I am {props.age} years old put sometimes I feel {randomAge} </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} placeholder={props.name} />
   </div>
  )
}

export default Person
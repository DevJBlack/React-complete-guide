import React from 'react'

const randomAge = Math.floor(Math.random() * 30)

const Person = (props) => {
  return(
   <div className="person">
      <p onClick={props.click} >I'm {props.person} and I am {props.age} years old put sometimes I feel {randomAge} </p>
      <input type="text" onChange={props.changed} placeholder={props.person} />
   </div>
  )
}

export default Person
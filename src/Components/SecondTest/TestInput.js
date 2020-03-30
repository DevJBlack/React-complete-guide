import React, { useState } from 'react'
import TestOutput from './TestOutput'
import TestChart from './TestChart'

const TestInput = () => {
  const [arr,setArr] = useState('')

  const textHandler = (e) => {
    setArr(e.target.value)
  }

  const deleteCharHandler = (index) => {
    const text = arr.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    setArr({arr: updatedText})
  }


  let charlist = arr.split('').map((ch, index) => {
    return <TestChart 
      character={ch} 
      key={index} 
      click={() => deleteCharHandler(index)} />
  })

 

  return (
    <div>
      <input type="text" 
        onChange={textHandler} 
        value={arr} />
    <p>{ arr }</p>
      <TestOutput lengthArr = {arr.length} />
      {charlist}
    </div>
  )
}

export default TestInput
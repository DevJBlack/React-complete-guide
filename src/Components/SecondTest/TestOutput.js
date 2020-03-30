import React from 'react'

const TestOutput = (props) => {

 if (props.lengthArr > 10) {
    return 'List to long'
  } else if ( props.lengthArr < 5 ) {
    return 'List to short'
  }


  return (
    <div>
      <p>{props.lengthArr}</p>
    </div>
  )
}

export default TestOutput
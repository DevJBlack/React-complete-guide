import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
    margin: 1.6rem auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1.6rem;
    text-align: center;
    font-size: 1.6rem;
  
    @media(min-width: 500px) {
      width: 450px;
    }
`

const Person = (props) => {


  // const style = {
  //   '@media(min-width: 500px)': {
  //     width: '450px'
  //   }
  // }


  return(
    <StyledDiv>
        <p onClick={props.click} >I'm {props.name} and I am {props.age}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  )
}

export default Person
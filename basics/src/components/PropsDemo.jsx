import React from 'react'

function PropsDemo(props) {
  return (
    <>
    <h3>Student Details:</h3>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Course: {props.course}</p>
    </>
  )
}

export default PropsDemo
import React from 'react'

function ListRenderingDemo() {
    const users = ["Alice", "Bob", "Charlie","Tony"];

  return (
    <>
        <ul>
          {users.map((user, index) => (
            <li key={index} >{index+' '+user}</li>
          ))}
        </ul>
    </>
  )
}

export default ListRenderingDemo
import React from 'react'
import Todo from './Todo'

const Todolist = ({todos, title}) => {
    console.log(title)

    let newTodos = todos.map(todo => {
        return (
            <Todo key={todo.id} todo = {todo}/>
        )
    })
    if (todos.length === 0) {
      return (
      <>
        <p>No todos available</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
        </a>
      </>
      );
    }

  return (
    
    <>
    {newTodos}
    </>
  )
}

export default Todolist
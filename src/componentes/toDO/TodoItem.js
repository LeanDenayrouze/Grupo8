import React from 'react'
import './todoItem.css'

function TodoItem({ todo, onComplete, onDeleteTask }) {

  const getStyle = () => {
    return {
      padding: "15px",
      margin: "20px",
      fontSize: todo.completed ? "larger" : "larger",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      backgroundColor: todo.completed ? "grey" : "rgb(27, 232, 51)",
      borderRadius: "10px",
    }
  }

  return (
    <div style={getStyle()}>
      <input type='checkbox' checked={todo.completed}
        onChange={() => onComplete(todo.id)}
        className='taskCheckbox'
      />
      {todo.task}
      <button className='DeleteButton' onClick={() => onDeleteTask(todo.id)} >X</button>
      <div className='description-div'>
        {todo.description}
      </div>
      <button className='edit-button' >Editar</button>

    </div>

  )
}

export default TodoItem
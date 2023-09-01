import React from 'react'
import './MainPage.css'
import TodoList from '../../componentes/toDO/todo'
import { useState } from 'react'
import data from './data.json'


function MainPage() {

  const [todos, setTodos] = useState(data)

  const onComplete = (id) => {
    console.log("task", id);

    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? { ...todo, completed: !todo.completed } : { ...todo }
    }))
  }

  const onDeleteTask = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  return (


    <div className='mainpage1'>
      <header>
        <img
          className='imagen'
          src='./8.png'
          alt='8'
          width={100}
          height={100}
        >
        </img>
        <h1 className='maintittle'>!Bienvenido a la pagina del grupo 8!</h1>
      </header>

      <div className='taskTable'>
        <h2>Lista de tareas</h2>
        <TodoList todos={todos} onComplete={onComplete} onDeleteTask={onDeleteTask} />

      </div>
    </div>
  )
}

export default MainPage
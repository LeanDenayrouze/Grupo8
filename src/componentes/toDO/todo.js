import React from 'react'
import TodoItem from './TodoItem';
import './todo.css'
import Input from '../input/input';
import Button from '../button/button';

function TodoList({todos, onComplete, onDeleteTask}) {
  return (
    <div>

      <Input 
        id="search"
        name="search"
        type="text"
        placeholder="Buscar tarea"
        className="regular-style"
      />
      <Button
        className="create-button"    
        id="create"
        tittle="Crear nueva tarea"
      ></Button>

        {
        todos.map((todo, index)=>(
            <TodoItem key={`todo-${index}`} todo={todo} onComplete={onComplete} onDeleteTask={onDeleteTask} />
        ))
        }        
    </div>
  )
}

export default TodoList
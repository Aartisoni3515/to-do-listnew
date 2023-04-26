import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import {AiFillEdit} from "react-icons/ai"
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <AiFillEdit  onClick={() => editTodo(task.id)} />
        <BsTrashFill onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

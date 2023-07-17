import { RiTodoFill } from 'react-icons/ri'
import React from 'react'
import style from './Todo.module.css'

const Todo = ({ todo, index, deleteTodo }) => {
	return (
		<div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
			<RiTodoFill className={style.todoIcon} />
			<div className={style.todoText}>{todo}</div>
		</div>
	)
}

export default Todo

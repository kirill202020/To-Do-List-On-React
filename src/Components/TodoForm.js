import React, { useState } from 'react'
import style from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState('')
	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (text.length && text != ' ') {
			addTodo(text)
			setText('')
		}
	}

	return (
		<>
			<form className={style.todoForm} onSubmit={onSubmitHandler}>
				<input
					type='text'
					placeholder='Enter new task'
					className={style.input}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button type='submit' className={style.formBtn}>
					Add
				</button>
			</form>
		</>
	)
}

export default TodoForm

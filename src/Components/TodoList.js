import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo }) => {
	return (
		<div>
			{!todos.length && <h2>TodoList is empty</h2>}
			{todos.map((todo, index) => (
				<Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
			))}
		</div>
	)
}

export default TodoList

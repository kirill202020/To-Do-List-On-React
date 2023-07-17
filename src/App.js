import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		setTodos([text, ...todos])
	}

	const deleteTodoHandler = (index) => {
		setTodos(todos.filter((_, idx) => idx !== index))
	}

	return (
		<div className='App'>
			<h1>TodoApp</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	)
}

export default App

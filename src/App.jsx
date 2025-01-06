import React from "react"

import NewTaskForm from "./components/NewTaskForm/NewTaskForm"
import TaskList from "./components/TaskList/TaskList"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<div className="todoapp">
			<NewTaskForm title="Todos" placeholder="What needs to be done?" />
			<TaskList />
			<Footer />
		</div>
	)
}

export default App

import React from "react"
import TaskFilter from "../TaskFilter/TaskFilter"

const Footer = ({lefts, clearCompleted, changeFilter, filter}) => {
	return (
		<footer className="footer">
			<span className="todo-count">{lefts} items left</span>
			<TaskFilter filter={filter} changeFilter={changeFilter} />
			<button type="button" onClick={clearCompleted} className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}
export default Footer

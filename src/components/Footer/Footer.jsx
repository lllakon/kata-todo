import React from 'react'
import TaskFilter from '../TaskFilter/TaskFilter'

const Footer = ({}) => {
	return (
		<footer className="footer">
		<span className="todo-count">0 items left</span>
		<TaskFilter />
		<button type="button" className="clear-completed">
			Clear completed
		</button>
	</footer>
	)
}
export default Footer
import React from "react"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = ({description, createDate}) => {

	return (
		<li className="editing">
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>
					<span className="description">Editing task</span>
					<span className="created">{formatDistanceToNow(createDate)}</span>
				</label>
				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy"></button>
			</div>
			<input type="text" className="edit" value="Editing task" />
		</li>
	)
}
export default Task

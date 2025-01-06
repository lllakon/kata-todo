import React, { useState } from "react"
import Task from "../Task/Task"

const TaskList = () => {
const createDate = Date.now()

	return (
		<ul className="todo-list">
			<Task description='test' createDate={createDate}/>
		</ul>
	)
}

export default TaskList

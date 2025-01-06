import React, {useState} from "react"

const NewTaskForm = ({title, placeholder, addItem}) => {
	const [value, setValue] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
		if (value.trim()) {
			addItem(value)
			setValue("")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>{title}</h1>
			<label>
				Todo
				<input
					className="new-todo"
					onChange={(e) => {
						setValue(e.target.value)
					}}
					value={value}
					placeholder={placeholder}
				/>
			</label>
		</form>
	)
}
export default NewTaskForm

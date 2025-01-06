import React from "react"


const NewTaskForm = ({title, placeholder}) => {
	return (
		 <form>
        <h1>{title}</h1>
        <label>
          Todo
          <input
            className='new-todo'
            placeholder={placeholder}
          />
        </label>
      </form>
	)
}
export default NewTaskForm

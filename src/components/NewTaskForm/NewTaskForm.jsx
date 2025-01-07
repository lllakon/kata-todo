import { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ title = 'Todos', placeholder = 'What needs to be done?', addItem }) => {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      addItem(value);
      setValue('');
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
            setValue(e.target.value);
          }}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </form>
  );
};

NewTaskForm.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  addItem: PropTypes.func.isRequired,
};

export default NewTaskForm;

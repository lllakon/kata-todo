import React from 'react';
import Task from '../Task/Task';



const TaskList = ({ todos, changeCheck, editItem, deleteItem }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          key={todo.id}
          changeCheck={changeCheck}
          editItem={editItem}
          deleteItem={deleteItem}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TaskList;

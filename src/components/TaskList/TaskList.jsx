import Task from '../Task/Task';
import PropTypes from 'prop-types';

const TaskList = ({ todos = [], changeCheck, editItem, deleteItem }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} changeCheck={changeCheck} editItem={editItem} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TaskList;

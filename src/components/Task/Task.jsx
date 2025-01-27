import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ changeCheck, editItem, deleteItem, todo = {} }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');
  const [time, setTime] = useState(todo.time || 0);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editItem(todo.id, value);
    setValue('');
    setEditing(false);
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setValue(todo.body);
  };

  const { body, id, checked, date } = todo;

  return (
    <li className={checked ? 'completed' : editing ? 'editing' : null}>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          onChange={(event) => changeCheck(id, event.target.checked)}
          checked={checked}
        />
        <label htmlFor={id}>
          <span className="description">{body}</span>
          <span className="created">
            {`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              addSuffix: true,
            })}`}
          </span>
          <span className="timer">
            {Math.floor(time / 60)}m {time % 60}s
          </span>
        </label>
        <button type="button" onClick={toggleEditing} className="icon icon-edit" />
        <button
          type="button"
          onClick={() => deleteItem(id)}
          className="icon icon-destroy"
          style={{ marginBottom: '15px' }}
        />
      </div>
      {editing && (
        <form onSubmit={handleSubmit}>
          <input onChange={(event) => setValue(event.target.value)} type="text" className="edit" value={value} />
        </form>
      )}
    </li>
  );
};

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    time: PropTypes.number,
  }),
  deleteItem: PropTypes.func.isRequired,
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default Task;

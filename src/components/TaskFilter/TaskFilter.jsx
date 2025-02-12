import PropTypes from 'prop-types';

const TaskFilter = ({ filter = 'All', changeFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => changeFilter('All')} className={filter === 'All' ? 'selected' : null}>
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('Active')}
          className={filter === 'Active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('Completed')}
          className={filter === 'Completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default TaskFilter;

import TaskFilter from "../TaskFilter/TaskFilter"
import PropTypes from 'prop-types';

const Footer = ({lefts = 0, clearCompleted, changeFilter, filter = 'All'}) => {
	return (
		<footer className="footer">
			<span className="todo-count">{lefts} items left</span>
			<TaskFilter filter={filter} changeFilter={changeFilter} />
			<button type="button" onClick={clearCompleted} className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}

Footer.propTypes = {
  lefts: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Footer

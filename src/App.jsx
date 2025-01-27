import { useMemo, useState } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  function addItem(value) {
    const newTodo = {
      id: todos.length + 1,
      body: value,
      checked: false,
      date: new Date(),
			time: 0,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function changeCheck(id, checked) {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, checked } : todo)));
  }

  function editItem(id, text) {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, body: text } : todo)));
  }

  function clearCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.checked));
  }

  const filteredItems = useMemo(() => {
    return todos.filter(({ checked }) => {
      if (filter === 'All') return true;
      if (filter === 'Completed') return checked;
      if (filter === 'Active') return !checked;
      return true;
    });
  }, [todos, filter]);

  const lefts = useMemo(() => todos.filter(({ checked }) => !checked).length, [todos]);

  return (
    <div className="todoapp">
      <NewTaskForm title="Todos" placeholder="What needs to be done?" addItem={addItem} />
      <TaskList changeCheck={changeCheck} editItem={editItem} deleteItem={deleteItem} todos={filteredItems} />
      <Footer changeFilter={setFilter} clearCompleted={clearCompleted} lefts={lefts} filter={filter} />
    </div>
  );
}

export default App;

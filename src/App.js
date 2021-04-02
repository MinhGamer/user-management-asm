import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// import UserManagement from './user-management';

import TodoList from './todolist';

function App() {
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
}

export default App;

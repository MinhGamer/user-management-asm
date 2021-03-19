import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import UserManagement from './user-management';

function App() {
  return (
    <div className='App'>
      <UserManagement />
    </div>
  );
}

export default App;

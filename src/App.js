import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
  return (
  <>
    <div>
      <h1>Red Jack</h1>
    <ul>
      <li>
        <NavLink to='/' end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='practice'>
          Practice
        </NavLink>
      </li>
      {/* <li>
        <NavLink to='basic'>
          Basic
        </NavLink>
      </li> */}
    </ul>
    </div>
    <Outlet />
  </>
  );
};

export default App;

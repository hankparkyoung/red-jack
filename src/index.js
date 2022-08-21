import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';
import './index.css';
// import App from './App';
import Practice from './pages/Practice';
// import Basic from './pages/Basic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route exact path='/' element={<Practice />}>
  //       <Route path='/practice' element={<Practice />} />
  //       <Route path='/basic' element={<Basic />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  <Practice />
);

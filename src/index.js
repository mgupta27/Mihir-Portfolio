import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App/> } />
      <Route path='/Projects' element={ <Projects /> } />
      <Route path='/Blog' element={ <Blog /> } />
      <Route path='/Contact' element={ <Contact /> } />
      <Route path='/Blog-1' element={ <Blog1 /> } />
      <Route path='/Blog-2' element={ <Blog2 /> } />
    </Routes>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

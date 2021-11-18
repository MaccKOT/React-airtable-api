import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/Global.css';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

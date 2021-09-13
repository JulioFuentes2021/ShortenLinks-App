import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/pages/App';
// import App from './components/Cards';
import { Provider } from '../src/Context/index';



ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


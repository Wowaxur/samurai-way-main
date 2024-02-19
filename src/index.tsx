import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state'
import state from "./redux/state";


ReactDOM.render(
    <App state={state} AddPost={addPost} />,
  document.getElementById('root')
);
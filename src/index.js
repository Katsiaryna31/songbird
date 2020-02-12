import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import Header from './app/header';
import Menu from './app/menu';
import Task from './app/task';
import Answer from './app/answer';
import ChangeLevel from './app/changeLevel';

const App = () => (
    <div>
        <Header />
        <Menu />
        <Task />
        <Answer />
        <ChangeLevel />
    </div>);

ReactDOM.render(<App />, document.getElementById('root'));

window.onbeforeunload = function() {
    localStorage.clear();
 }

const zeroLevel = document.getElementById('0');
zeroLevel.classList.add('level_name--active');
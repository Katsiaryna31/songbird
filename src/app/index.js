import React from 'react';
import ReactDOM from 'react-dom';
// import '../css/main.scss';

import Header from './components/header';
import Menu from './components/menu';
import Task from './components/task';
import Answer from './components/answer';
import ChangeLevel from './components/changeLevel';

const App = () => (
    <div>
        <Header />
        <Menu />
        <Task />
        <Answer />
        <ChangeLevel />
    </div>);

ReactDOM.render(<App />, document.getElementById('root'));

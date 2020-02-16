import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import Header from './app/header';
import Menu from './app/menu';
import Task from './app/task';
import Answer from './app/answer';
import ChangeLevel from './app/changeLevel';

const App = () => {
    let [level, setLevel] = useState(0);
    let [taskBird, setTaskBird] = useState(null);
    let [isRightAnswer, setRightAnswer] = useState(false);
    let [clickedBird, setClickedBird] = useState(null);
    return (<div>
        <Header />
        <Menu level={level}/>
        <Task level={level} taskBird={taskBird} setTaskBird={setTaskBird} isRightAnswer={isRightAnswer} />
        <Answer level={level} taskBird={taskBird} setRightAnswer={setRightAnswer} clickedBird={clickedBird} setClickedBird={setClickedBird}/>
        <ChangeLevel setLevel={setLevel} isRightAnswer={isRightAnswer} setRightAnswer={setRightAnswer} setTaskBird={setTaskBird} setClickedBird={setClickedBird}/>
</div>)
};

ReactDOM.render(<App />, document.getElementById('root'));
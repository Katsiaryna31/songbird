import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import birdsData from './app/birdsData';

import Header from './app/header';
import Menu from './app/menu';
import Task from './app/task';
import Answer from './app/answer';
import ChangeLevel from './app/changeLevel';

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
    let [level, setLevel] = useState(0);
    let [score, setScore] = useState(5);
    const levelData = birdsData[level];
    const randomData = getRandomNumber(levelData.length - 1, 0);
    let [taskBird, setTaskBird] = useState(levelData[randomData]);
    let [isRightAnswer, setRightAnswer] = useState(false);
    let [clickedBird, setClickedBird] = useState(null);
    return (<div>
        <Header />
        <Menu level={level}/>
        <Task level={level} taskBird={taskBird} setTaskBird={setTaskBird} isRightAnswer={isRightAnswer} />
        <Answer level={level} taskBird={taskBird} setRightAnswer={setRightAnswer} clickedBird={clickedBird} setClickedBird={setClickedBird} setScore={setScore}/>
        <ChangeLevel setLevel={setLevel} isRightAnswer={isRightAnswer} setRightAnswer={setRightAnswer} setTaskBird={setTaskBird} setClickedBird={setClickedBird} score={score} setScore={setScore}/>
    </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));
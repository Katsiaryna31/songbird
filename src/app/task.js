import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdsData from './birdsData';
import Image from './taskImage';

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Player = ({ level, setTaskBird }) => {
    const levelData = birdsData[level];
    const randomData = getRandomNumber(levelData.length - 1, 0);
    setTaskBird(levelData[randomData]);
    console.log(levelData[randomData]);
    return (
        <AudioPlayer
            src={levelData[randomData].audio}
        />
    )
};

const Audio = ({ level, taskBird, setTaskBird, isRightAnswer }) => {
    return (<div className="audio_wrapper">
        {!isRightAnswer && <div>
            <p className="answer">*****</p>
            <Player level={level} setTaskBird={setTaskBird} />
        </div>}
        {isRightAnswer && <div>
            <p className="answer">{taskBird.name}</p>
            <Player level={level} setTaskBird={setTaskBird} />
        </div>}
    </div>)
};

const Task = ({ level, taskBird, setTaskBird, isRightAnswer }) => {
    return (<div className="task_wrapper">
        <Image level={level} taskBird={taskBird} isRightAnswer={isRightAnswer} />
        <Audio level={level} taskBird={taskBird} setTaskBird={setTaskBird} isRightAnswer={isRightAnswer} />
    </div>)
};

export default Task;

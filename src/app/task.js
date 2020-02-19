import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Image from './taskImage';

const HiddenName = () => (<p className="answer">*****</p>)
const OpenName = ({ taskBird }) => (<p className="answer">{taskBird.name}</p>);

const Audio = ({ isRightAnswer, taskBird }) => {
    return (<div className="audio_wrapper">
        {!isRightAnswer && <HiddenName />}
        {isRightAnswer && <OpenName taskBird = { taskBird }/>}
        <AudioPlayer
            src={taskBird.audio} autoPlay={false}
        />
    </div>)
};

const Task = ({ level, taskBird, isRightAnswer }) => {
    return (<div className="task_wrapper">
        <Image level={level} taskBird={taskBird} isRightAnswer={isRightAnswer} />
        <Audio isRightAnswer={isRightAnswer} taskBird={taskBird} />
    </div>)
};

export default Task;

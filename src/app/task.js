import React from 'react';
import blackBird from '../img/black_bird.jpg';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdsData from './birdsData';

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomAudio = () => {
    const level = localStorage.getItem('level');
    const levelData = birdsData[level];
    const randomData = getRandomNumber(levelData.length - 1, 0);
    if (!localStorage.getItem('answerName')) {
        localStorage.setItem('answerName', levelData[randomData].name);
    }
    return levelData[randomData].audio;
}
  
const Player = () => (
  <AudioPlayer
    src = {getRandomAudio()}
  />
);

const Image = () => (
    <div className="image_wrapper">
        <img src={blackBird} alt="black bird" width='200' height='155'></img>
    </div>
);

const Audio = () => (<div className="audio_wrapper">
    <p className="answer">*****</p>
    <Player />
</div>);

const Task = () => (
    <div className="task_wrapper">
        <Image />
        <Audio />
    </div>
);

export default Task;

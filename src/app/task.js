import React from 'react';
import blackBird from '../img/black_bird.jpg';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
 
const Player = () => (
  <AudioPlayer
    src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
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

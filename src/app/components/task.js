import React from 'react';

const Image = () => (
    <div>
        <img src='img/black_bird.jpg' alt="black bird" width='200' height='155'></img>
    </div>
);

const Audio = () => (<div>
    <p className="answer">*****</p>
    <audio src=""></audio>
</div>);


const Task = () => (
    <div>
        <Image />
        <Audio />
    </div>
);

export default Task;

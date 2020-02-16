import React from 'react';
import blackBird from '../img/black_bird.jpg';
import birdsData from './birdsData';

const DefaultImage = () => (
    <div className="image_wrapper">
        <img src={blackBird} alt="black bird" width='200' height='155'></img>
    </div>
);

const TaskBirdImage = ({ level, taskBird }) => {
    const levelData = birdsData[level];
    let image;
    levelData.forEach(bird => {
        if (bird.name === taskBird.name) {
            image = (<div className="image_wrapper">
                <img src={bird.image} alt="bird" width='200' height='155'></img>
            </div>)
        }
    })
    return image;
}

const Image = ({ level, taskBird, isRightAnswer }) => {
    let image;
    if (taskBird === null || !isRightAnswer) {
        image = <DefaultImage/>
    } else if (isRightAnswer) {
        image = (<TaskBirdImage level={level} taskBird={taskBird} />)
    } 
    return image;
}

export default Image;
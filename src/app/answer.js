import React from 'react';
import birdsData from './birdsData';


const checkAnswer = (e) => {
    const clickedBird = e.target.innerHTML;
    const rightAnswer = localStorage.getItem('answerName');
    if (clickedBird === rightAnswer) {
        console.log('Win!!!');
    }
}

const createOptionsList = () => {
    const level = localStorage.getItem('level');
    console.log(level);
    const levelData = birdsData[level];
    const optionsList = levelData.map((levelItem, index) =>
    <li className="options_item" key={index}>
        <input type="radio" id={'radio' + index} name='answer'></input>
        <label className="options_label" htmlFor={'radio' + index} onClick={(e) => checkAnswer(e)}>{levelItem.name}</label>
    </li>
);
    return optionsList;
}


const Options = () => (
    <ul className="options_list">
        {createOptionsList()}
    </ul>
);

const Description = () => (
    <div className="description_wrapper">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка.</p>
    </div>
)


const Answer = () => (
    <div className="answer_wrapper">
        <Options />
        <Description />
    </div>
);

export default Answer;

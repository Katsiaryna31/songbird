import React from 'react';
import birdsData from './birdsData';

const checkAnswer = (index, activeBird, taskBird, setClickedBird, setRightAnswer) => {
    const clickedID = `radio${index}`;
    const clickedItem = document.getElementById(clickedID);
    setClickedBird(activeBird);
    if (activeBird === taskBird.name) {
        clickedItem.classList.add('options_item--right');
        setRightAnswer(true);
    } else {
        clickedItem.classList.add('options_item--wrong');
    }
}

const createOptionsList = (level, taskBird, setClickedBird, setRightAnswer) => {
    const levelData = birdsData[level];
    const optionsList = levelData.map((levelItem, index) =>
    <li className="options_item" key={index}>
        <label className="options_label" htmlFor={'radio' + index}>
            <input type="radio" id={'radio' + index} name='answer' className="options_input" onClick={() => checkAnswer(index,levelItem.name, taskBird, setClickedBird, setRightAnswer)}></input>
        {levelItem.name}</label>
    </li>
);
    return optionsList;
}

const Options = ({level, taskBird, setClickedBird, setRightAnswer}) => (
    <ul className="options_list">
        {createOptionsList(level, taskBird, setClickedBird, setRightAnswer)}
    </ul>
);

export default Options;
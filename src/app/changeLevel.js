import React from 'react';
import birdsData from './birdsData';

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const DisableButton = ({setLevel}) => (
    <div>
        <button className="button_next" onClick = {()=>(setLevel((level)=> {
            if (level < 6) {
                return level +=1;
            } return level;
        })
      )} disabled >Next level</button>
    </div>
)

const AbleButton = ({setLevel, setTaskBird, setRightAnswer, setClickedBird, score, setScore}) => (
    <div>
        <button className="button_next button_next--active" onClick = {()=> setLevel((level)=> {
            const levelData = birdsData[level + 1];
            const randomData = getRandomNumber(levelData.length - 1, 0);
            setTaskBird(levelData[randomData]);
            setRightAnswer(false);
            setClickedBird(null);
            const optionsList = document.querySelectorAll('.options_input');
            optionsList.forEach((option) => {
                option.classList.remove('options_item--right');
                option.classList.remove('options_item--wrong');
                option.checked = false;
            })
            const scoreShow = document.querySelector('.score_number');
            console.log(scoreShow.placeholder);
            console.log(score);
            scoreShow.placeholder = score;
            setScore(score => score + 5);
            return (level += 1)})}>Next level</button>
    </div>
)

const ChangeLevel = ({setLevel, isRightAnswer, setRightAnswer, setTaskBird, setClickedBird, score, setScore}) => (
    <div>
        {!isRightAnswer && <DisableButton setLevel={setLevel} />}
        {isRightAnswer && <AbleButton setLevel={setLevel} setTaskBird={setTaskBird} setRightAnswer={setRightAnswer} setClickedBird={setClickedBird} score={score} setScore={setScore}/>}
    </div>  
) 

export default ChangeLevel;

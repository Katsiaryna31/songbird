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

const AbleButton = ({setLevel, setTaskBird, setRightAnswer, setClickedBird}) => (
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
            return (level += 1)})}>Next level</button>
    </div>
)

const ChangeLevel = ({setLevel, isRightAnswer, setRightAnswer, setTaskBird, setClickedBird}) => (
    <div>
        {!isRightAnswer && <DisableButton setLevel={setLevel} />}
        {isRightAnswer && <AbleButton setLevel={setLevel} setTaskBird={setTaskBird} setRightAnswer={setRightAnswer} setClickedBird={setClickedBird}/>}
    </div>  
) 

export default ChangeLevel;

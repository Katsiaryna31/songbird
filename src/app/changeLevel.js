import React from 'react';

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
            setTaskBird(null);
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

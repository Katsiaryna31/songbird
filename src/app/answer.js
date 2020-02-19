import React from 'react';
import Options from './optionsList';
import Description from './description';


const Answer = ({level, taskBird, setRightAnswer, clickedBird, setClickedBird, setScore}) => {
    return (<div className="answer_wrapper">
        <Options level={level} taskBird={taskBird} setClickedBird={setClickedBird} setRightAnswer={setRightAnswer} setScore={setScore}/>
        <Description level={level} clickedBird={clickedBird}/>
    </div>
)};

export default Answer;

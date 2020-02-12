import React from 'react';

let levelCounter = 0;
if (!localStorage.getItem('level')) {
    localStorage.setItem('level', 0);
}
console.log(localStorage.getItem('level'));
const changeLevel=()=> {
    if (levelCounter < 5) {
        levelCounter++;
        localStorage.setItem('level', levelCounter);
        console.log(levelCounter); 
    }  
}

const ChangeLevel = () => (
        <div>
            <button className="button_next" onClick = {changeLevel} disabled>Next level</button>
        </div>
);

export default ChangeLevel;

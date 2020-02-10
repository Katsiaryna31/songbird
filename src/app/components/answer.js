import React from 'react';

const Options = () => (
    <ul>
        <li>
            <input type="radio" id="radioRaven"></input><label htmlFor="radioRaven">Ворон</label>
        </li>
        <li>
            <input type="radio" id="radioCrane"></input><label htmlFor="radioCrane">Журавль</label>
        </li>
        <li>
            <input type="radio" id="radioSwallow"></input><label htmlFor="radioSwallow">Ласточка</label>
        </li>
        <li>
            <input type="radio" id="radioNightjar"></input><label htmlFor="radioNightjar">Козодой</label>
        </li>
        <li>
            <input type="radio" id="radioCuckoo"></input><label htmlFor="radioCuckoo">Кукушка</label>
        </li>
        <li>
            <input type="radio" id="radioTitmouse"></input><label htmlFor="radioTitmouse">Синица</label>
        </li>
    </ul>
);

const Answer = () => (
    <div>
        <Options/>
    </div>
);

export default Answer;

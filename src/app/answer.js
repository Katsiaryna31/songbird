import React from 'react';

const options = ['Ворон', 'Журавль', 'Ласточка', 'Козодой', 'Кукушка', 'Синица'];
const optionsList = options.map((option, index) =>
    <li className= "options_item" key={index}>
        <input type="radio" id={'radio' + index}></input>
        <label htmlFor={'radio' + index}>{option}</label>
    </li>
);

const Options = () => (
    <ul className="options_list">
        {optionsList}
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

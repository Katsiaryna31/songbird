import React from 'react';

const levels = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const Menu = ({level}) => {
  const levelsNamesList = levels.map((levelName, index) => {
    if (index === level) {
      return (<li className='level_name level_name--active' id={index} key={index}>{levelName}</li>)
    } return (<li className='level_name' id={index} key={index}>{levelName}</li>)
  })
  return (
        <nav>
            <ul className="level_list">
                {levelsNamesList}
            </ul>
        </nav>
)};

export default Menu;

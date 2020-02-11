import React from 'react';

const levels = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
const levelsList = levels.map((level, index) =>
  <li className="level_name" key={index}>{level}</li>
);

const Menu = () => (
        <nav>
            <ul className="level_list">
                {levelsList}
            </ul>
        </nav>
);

export default Menu;

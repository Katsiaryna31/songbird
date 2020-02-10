import React from 'react';

const Header = () => (
        <header>
            <img src='img/songbird_logo.png' alt="logo" width ='250' height ='104'></img>
            <label htmlFor="score">Score:</label>
            <input type="text" id="score" value="0" />
        </header>
);

export default Header;

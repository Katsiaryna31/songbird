import React from 'react';
import logo from '../img/songbird_logo.png'

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo" width='250' height='104'></img>
        <div>
            <label className="score_label" htmlFor="score">Score:</label>
            <input className="score_number" type="text" id="score" value="0" />
        </div>
    </header>
);

export default Header;

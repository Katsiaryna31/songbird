import React from 'react';
import logo from '../img/songbird_logo.png'

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo" width='125' height='52'></img>
        <div>
            <label className="score_label" htmlFor="score">Score:</label>
            <input className="score_number" type="number" id="score" placeholder="0"/>
        </div>
    </header>
);

export default Header;

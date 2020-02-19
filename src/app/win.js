import React from 'react';

const Win = ({score}) => (
    <div className='win_wrapper'>
        <h1 className='win_header'>Well done!</h1>
        <p className='win_text'>You finish game with the score {score}</p>
        <iframe title='Title' src="https://giphy.com/embed/peAFQfg7Ol6IE" width="480" height="455" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </div>);


export default Win;
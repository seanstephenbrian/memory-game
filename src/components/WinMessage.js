import React from 'react';

import '../styles/outcome-page.css';

export default function WinMessage(props) {

    // props:
    const { handlePlayAgainClick } = props;

    // render:
    return (
        <div className='outcome-page'>
            <div className='outcome-message win-message'>
                you won :)
            </div>
            <div className='play-again' onClick={() => handlePlayAgainClick()}>
                play again?
            </div>
        </div>
    )
}
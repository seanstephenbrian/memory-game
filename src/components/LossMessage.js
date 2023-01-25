import React from 'react';

import '../styles/outcome-page.css';

export default function LossMessage(props) {

    // props:
    const { handlePlayAgainClick } = props;

    // render:
    return (
        <div className='outcome-page'>
            <div className='outcome-message loss-message'>
                you lost :(
            </div>
            <div className='play-again' onClick={() => handlePlayAgainClick()}>
                play again?
            </div>
        </div>
    )
}
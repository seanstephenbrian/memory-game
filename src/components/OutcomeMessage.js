import React from 'react';

import '../styles/outcome-page.css';

export default function OutcomeMessage(props) {

    // props:
    const { handlePlayAgainClick, outcome } = props;

    let outcomeMessage;
    if (outcome === 'win') {
        outcomeMessage = 
            <div className='outcome-message win-message'>
                you won :)
            </div>;
    } else if (outcome === 'loss') {
        outcomeMessage = 
            <div className='outcome-message loss-message'>
                you lost :(
            </div>
    }

    // render:
    return (
        <div className='outcome-page'>
            {outcomeMessage}
            <div className='play-again' onClick={() => handlePlayAgainClick()}>
                play again?
            </div>
        </div>
    )
}
import React from 'react';

import '../styles/score.css';

export default function Score(props) {

    // props:
    const {currentScore, highScore} = props;

    // render:
    return (
        <div className='scoreboard'>
            <div className='score current-score'>
                <span className='score-label'>current score:</span>
                <span className='score-text'>{currentScore}</span>
            </div>
            <div className='score high-score'>
                <span className='score-label'>high score:</span>
                <span className='score-text'>{highScore}</span>
            </div>
        </div>
    )
}
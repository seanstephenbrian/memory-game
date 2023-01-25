import React from 'react';

import '../styles/title.css';

export default function Title(props) {

    // props:
    const { gameWon, gameLost } = props;

    // store jsx for instructions -- it will only be rendered if the game is ongoing:
    const instructions =
        <div className='instructions'>
            <div className='click-notice'>click each card <span className='underline'>only once</span> in each round</div>
            <div className='shuffle-notice'>the cards will be shuffled after each click</div>
        </div>;

    // render:
    return (
        <div className='title-section'>
            <div className='title-text'>memory game</div>
            {!gameWon && !gameLost ? instructions : ''}
        </div>
    )
}
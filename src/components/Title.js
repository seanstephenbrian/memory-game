import React from 'react';

import '../styles/title.css';

export default function Title() {
    return (
        <div className='title-section'>
            <div className='title-text'>memory game</div>
            <div className='instructions'>
                click each card <span className='underline'>only once</span> in each round
            </div>
        </div>
    )
}
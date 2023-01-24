import React, { useState } from 'react';

import Card from './Card';

import '../styles/round.css';

export default function Round(props) {
    const { cardCount } = props;
    const [clickCount, setClickCount] = useState(0);

    return (
        <div className='round'>
            <div className='round-title'>
                {cardCount} cards in this round... {clickCount} cards clicked so far
            </div>
            <div className='card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
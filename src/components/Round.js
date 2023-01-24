import React, { useEffect, useState } from 'react';

import Card from './Card';

import '../styles/round.css';

export default function Round(props) {
    const {cardCount, receiveClickStatus, receiveRoundStatus} = props;
    const [clickCount, setClickCount] = useState(0);

    function checkRoundStatus() {
        if (parseInt(cardCount) === clickCount) {
            receiveRoundStatus('won');
        }
    }

    function handleCardClick(clickStatus) {
        receiveClickStatus(clickStatus);
        if (clickStatus === true) {
            setClickCount((clickCount) => {
                return clickCount + 1;
            });
        }
    }

    useEffect(() => {
        checkRoundStatus();
    }, [clickCount]);

    return (
        <div className='round'>
            <div className='round-title'>
                {cardCount} cards in this round... {clickCount} cards clicked so far
            </div>
            <div className='card-container'>
                <Card relayClick={handleCardClick} />
                <Card relayClick={handleCardClick} />
                <Card relayClick={handleCardClick} />
                <Card relayClick={handleCardClick} />
            </div>
        </div>
    )
}
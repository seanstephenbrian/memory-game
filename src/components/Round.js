import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import Card from './Card';

import '../styles/round.css';

export default function Round(props) {
    // props:
    const {cardCount, receiveClickStatus, receiveRoundStatus} = props;

    // state:
    const [clickCount, setClickCount] = useState(0);
    const [currentCards, setCurrentCards] = useState([
        {
            id: uniqid(),
            image: ''
        },
        {
            id: uniqid(),
            image: ''
        },
        {
            id: uniqid(),
            image: ''
        },
        {
            id: uniqid(),
            image: ''
        }
    ]);

    // methods:
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
            rearrangeCards();
        }
    }

    function rearrangeCards() {
        let shuffledCardArray = currentCards;
        for (let i = shuffledCardArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCardArray[i], shuffledCardArray[j]] = [shuffledCardArray[j], shuffledCardArray[i]];
        }
        setCurrentCards(shuffledCardArray);
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
                {currentCards.map((card) => {
                    return (
                        <Card 
                            key={card.id} 
                            relayClick={handleCardClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}
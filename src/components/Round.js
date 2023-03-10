import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import Card from './Card';

import '../styles/round.css';

export default function Round(props) {

    // props:
    const {
        cardCount,
        roundNumber, 
        sendClickStatus, 
        sendRoundStatus
    } = props;

    // state:
    const [clickCount, setClickCount] = useState(0);
    const [currentCards, setCurrentCards] = useState([]);

    // methods:
    function handleCardClick(clickStatus) {
        sendClickStatus(clickStatus);
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

    // HOOKS:
    // if clickCount changes, check for winning conditions:
    useEffect(() => {
        if (parseInt(cardCount) === clickCount) {
            sendRoundStatus('won');
        }        
    }, [clickCount, cardCount, sendRoundStatus]);

    // if cardCount changes (i.e. App has advanced to a new round), render a new set of cards:
    useEffect(() => {
        // first clear out current cards & set click count to 0:
        setCurrentCards([]);
        setClickCount(0);

        // then randomize the image order:
        let possiblePaths = []; // <-- this array will contain all possible image paths for this round based on the round's cardCount
        for (let i = 1; i <= parseInt(cardCount); i++) {
            possiblePaths.push(i);
        }
        // card creation loop:
        for (let i = 1; i <= parseInt(cardCount); i++) {
            // extract a random image path from the possible image paths array:
            const random = Math.random() * (parseInt(possiblePaths.length) - 1);
            const randomPath = possiblePaths.splice(random, 1);
            // then create the new card with the random image path:
            const newCard = {
                id: uniqid(),
                imagePath: require(`../img/${randomPath}.jpg`)
            };
            // use spread operator to add the new card to end of the currentCards array:
            setCurrentCards((currentCards) => {
                return [...currentCards, newCard];
            });
        }
    }, [cardCount]);

    // conditional rendering of round number:
    let roundDeclaration;
    if (roundNumber !== 5) {
        roundDeclaration =
            <div className='round-number'>
                round {roundNumber}
            </div>;
    } else if (roundNumber === 5) {
        roundDeclaration =
            <div className='round-number'>
                final round
            </div>
    }

    // render:
    return (
        <div className='round'>
            <div className='round-title'>
                {roundDeclaration}
                <div className='round-stats'>
                    {clickCount}/{cardCount} cards clicked
                </div>
            </div>
            <div className='card-container'>
                {currentCards.map((card) => {
                    return (
                        <Card 
                            key={card.id}
                            imagePath={card.imagePath} 
                            relayClick={handleCardClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}
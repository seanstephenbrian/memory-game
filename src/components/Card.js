import React, { useState } from 'react';

import '../styles/card.css';

export default function Card(props) {
    const [clicked, setClicked] = useState(false);

    const { relayClick, id } = props;

    function handleClick() {
        if (!clicked) {
            setClicked(true);
            relayClick(true);
        } else if (clicked) {
            relayClick(false);
        }
    }

    return (
        <div className='card' onClick={handleClick}>
            this card has {!clicked ? 'not' : ''} been clicked
        </div>
    )
}
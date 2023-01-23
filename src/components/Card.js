import React, { useState } from 'react';

export default function Card(props) {
    const [clicked, setClicked] = useState(false);

    const { relayClick } = props;

    function handleClick() {
        if (!clicked) {
            setClicked(true);
            relayClick(true);
        } else if (clicked) {
            relayClick(false);
        }
    }

    

    return (
        <div onClick={handleClick}>
            this card has {!clicked ? 'not' : ''} been clicked
        </div>
    )
}
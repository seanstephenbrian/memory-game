import React, { useState } from 'react';

import '../styles/card.css';

export default function Card(props) {

    // props:
    const { relayClick, imagePath } = props;

    // state:
    const [clicked, setClicked] = useState(false);

    // methods:
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
            <img className='card-img' src={imagePath} alt='memory card'></img>
        </div>
    )
}
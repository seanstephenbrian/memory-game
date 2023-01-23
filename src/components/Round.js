import React, { useState } from 'react';

import Card from './Card';

export default function Round(props) {
    const { cardCount } = props;
    const [clickCount, setClickCount] = useState(0);

    function handleClick() {
        setClickCount(clickCount + 1);
    }

    function parseClick(clickStatus) {
        if (clickStatus) {
            setClickCount(clickCount + 1);
        } else if (!clickStatus) {
            alert('game lost');
        }
    }

    return (
        <div>
            {cardCount} cards in this round... {clickCount} cards clicked so far
            <Card onClick={handleClick} relayClick={(clickStatus) => parseClick(clickStatus)} />
        </div>
    )
}
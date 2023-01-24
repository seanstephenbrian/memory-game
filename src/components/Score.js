import React, { useState } from 'react';

export default function Score(props) {

    // props:
    const {currentScore, highScore} = props;

    return (
        <div>current score: {currentScore}, high score: {highScore}</div>
    )
}
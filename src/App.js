import React, { useEffect, useState } from "react";

import Round from './components/Round';
import Score from './components/Score';

function App() {
    
    // state:
    const [gameLost, setGameLost] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [roundNumber, setRoundNumber] = useState(1);
    const [totalClicks, setTotalClicks] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function processClickStatus(clickStatus) {
        // if it was a bad click, end the game:
        if (!clickStatus) {
            setGameLost(true);
        // if it was a good click, increment the totalClicks variable:
        } else if (clickStatus) {
            setTotalClicks((totalClicks) => {
                return totalClicks + 1;
            });
        }
        return;
    }

    function determineCardQuantity(round) {
        if (round === 1) return 4;
        if (round === 2) return 6;
        if (round === 3) return 8;
        if (round === 4) return 10;
        if (round === 5) return 15;
    }

    function incrementRound(roundStatus) {
        if (roundStatus === 'won' && roundNumber !== 5) {
            setRoundNumber((roundNumber) => {
                return roundNumber + 1;
            })
        } else if (roundStatus === 'won' && roundNumber === 5) {
            setGameWon(true);
        }
    }

    // hooks:
    // when the click count is incremented:
    useEffect(() => {
        // if there's a high score saved in localStorage and it's greater than the current # of clicks...
        if (localStorage.getItem('highScore') && parseInt(localStorage.getItem('highScore')) >= totalClicks) {
            // set the state high score to the localStore high score:
            setHighScore(localStorage.getItem('highScore'));
        // if there's a high score saved locally and it's less than the current # of clicks
        // OR if there's no high score saved locally...
        } else if ((localStorage.getItem('highScore') && parseInt(localStorage.getItem('highScore')) < totalClicks) || !localStorage.getItem('highScore')) {
            // set the state high score to the current # of clicks:
            setHighScore(totalClicks);
            // and update the localStorage high score:
            localStorage.setItem('highScore', totalClicks);
        // if there's no high score saved locally, set the current # of clicks to the state high score AND save it to localStorage:
        }
    }, [totalClicks]);
 
    return (
        <div className="game-container">
            <div className="score-section">
                <Score
                    currentScore={totalClicks}
                    highScore={highScore}
                />
            </div>
            <div>
                round number {roundNumber}
            </div>
            <Round 
                cardCount={determineCardQuantity(roundNumber)}
                sendClickStatus={processClickStatus} 
                sendRoundStatus={incrementRound}
            />
        </div>
    )
}

export default App;

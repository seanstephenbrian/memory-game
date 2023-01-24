import React, { useState } from "react";

import Round from './components/Round';

function App() {
    
    const [roundNumber, setRoundNumber] = useState(1);
    
    const [gameWon, setGameWon] = useState(false);
    
    const [gameLost, setGameLost] = useState(false);

    function checkForLoss(clickStatus) {
        if (!clickStatus) {
            setGameLost(true);
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
 
    return (
        <div className="game-container">
            <div className="score-section">
                game status: {gameWon ? 'game won!' : ''} {gameLost ? 'game lost!' : ''}
            </div>
            <div>
                round number {roundNumber}
            </div>
            <Round 
                cardCount={determineCardQuantity(roundNumber)}
                sendClickStatus={checkForLoss} 
                sendRoundStatus={incrementRound}
            />
        </div>
    )
}

export default App;

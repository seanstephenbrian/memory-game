import React, { useEffect, useState } from "react";

// components:
import Footer from "./components/Footer";
import LossMessage from "./components/LossMessage";
import Round from './components/Round';
import Score from './components/Score';
import Title from './components/Title';
import WinMessage from "./components/WinMessage";

function App() {
    
    // state:
    const [gameLost, setGameLost] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [roundNumber, setRoundNumber] = useState(1);
    const [totalClicks, setTotalClicks] = useState(0);
    const [highScore, setHighScore] = useState(0);

    // methods:
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

    function restartGame() {
        setGameLost(false);
        setGameWon(false);
        setRoundNumber(1);
        setTotalClicks(0);
    }

    // HOOKS:
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
 
    // conditions for rendering of main content based on game status:
    let mainContent;
    if (!gameLost && !gameWon) {
        mainContent = 
        <>
            <Score
                currentScore={totalClicks}
                highScore={highScore}
            />
            <Round 
                cardCount={determineCardQuantity(roundNumber)}
                roundNumber={roundNumber}
                sendClickStatus={processClickStatus} 
                sendRoundStatus={incrementRound}
            />
        </>;
    } else if (gameLost) {
        mainContent = <LossMessage handlePlayAgainClick={restartGame} />
    } else if (gameWon) {
        mainContent = <WinMessage handlePlayAgainClick={restartGame} />
    }

    // render:
    return (
        <div className="game-container">
            <Title gameWon={gameWon} gameLost={gameLost} />
            {mainContent}
            <Footer />
        </div>
    )
}

export default App;
import React from 'react'
import styles from './congrats.module.css'

export default ({ score, handlePlayAgainButton }) => {
    return (
        <div className={styles.congratsContainer}>
            <h1>Congratulations!</h1>
            <div className={styles.congratsText}>You scored {score} out of 30 points</div>
            <div className={styles.congratsText}>Let's play again and improve your result!</div>
            <button onClick={handlePlayAgainButton} className={styles.playAgainBtn} type='button'>Play again</button>
        </div>
    )
}
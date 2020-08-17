import React from 'react'
import styles from './congrats.module.css'
import Modal from '../modal/modal'
import { useState } from 'react';

export default ({ score, handlePlayAgainButton }) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.congratsContainer}>
            <h1>Congratulations!</h1>
            <div className={styles.congratsText}>You scored <span>{score}</span> out of <span>30</span> points</div>
            {score < 30 ? 
                <>
                    <div className={styles.congratsText}>Let's play again and improve your result!</div>
                    <button onClick={handlePlayAgainButton} className={styles.playAgainBtn} type='button'>Play again</button>
                </> :
                <>
                    <div className={styles.congratsText}>You're a true music lover!</div>
                    <div className={styles.congratsText}>To get your gift click the button below.</div>
                    <div className={styles.congratsText}>Have a nice day!</div>
                    <button onClick={() => setOpenModal(true)} className={styles.getGiftBtn} type='button'>Get gift</button>
                    {openModal && <Modal setOpenModal={(m) => setOpenModal(m)}/>}
                </>}
        </div>
    )
}
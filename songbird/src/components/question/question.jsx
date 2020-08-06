import React from 'react'
import styles from './question.module.css'
import DefaultMusic from '../../img/default-music.jpg'
import SoundPlayer from '../sound-player/sound-player'

export default () => {
    const track = {
        title: "AAAAAAA",
        user: {
            username: ''
        }
    }
    return (
        <div className={styles.questionContainer}>
            <img className={styles.questionImg} src={DefaultMusic} alt='' />
            <div className={styles.questionData}>
                <div className={styles.questionArtist}>**********</div>
                <div className={styles.questionAudio}>
                    <SoundPlayer trackTitle={'fffffffff'}/>
                </div>
            </div>
        </div>
    )
}
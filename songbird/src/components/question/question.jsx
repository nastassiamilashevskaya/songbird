import React from 'react'
import styles from './question.module.css'
import DefaultMusic from '../../img/default-music.jpg'
import SoundPlayer from '../sound-player/sound-player'
import data from '../../data'

const URL = 'https://raw.githubusercontent.com/nastassiamilashevskaya/songbird-data/master/'

export default ({ correct, question }) => {
    return (
        <div className={styles.questionContainer}>
            <img className={styles.questionImg} src={URL + question.imageLocation} alt='' />
            <div className={styles.questionData}>
                <div>
                    <div className={styles.trackTitle}>{correct ? question.song : '********'}</div>
                    <div className={styles.trackArtist}>{correct ? question.artist : '********'}</div>
                </div>
                <div className={styles.questionAudio}>
                    <SoundPlayer url={question.audioLocation}/>
                </div>
            </div>
        </div>
    )
}
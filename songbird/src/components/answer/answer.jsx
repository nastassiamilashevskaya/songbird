import React from 'react'
import styles from './answer.module.css'
import SmallSoundPlayer from '../small-sound-player/small-sound-player'

const URL = 'https://raw.githubusercontent.com/nastassiamilashevskaya/songbird-data/master/'

export default ({ answer }) => {
    const [...temp] = answer
    return (
        <div className={styles.answerContainer}>
            {answer.length ?
                <><div className={styles.imgAndTitleContainer}>
                    <img className={styles.answerImg} src={URL + temp[0]['imageLocation']} alt='' />
                    <div className={styles.answerInfo}>
                        <div>
                            <div className={styles.trackTitle}>{temp[0]['song']}</div>
                            <div className={styles.trackArtist}>{temp[0]['artist']}</div>
                        </div>
                        <SmallSoundPlayer url={temp[0]['audioLocation']} />
                    </div>
                </div>
                <div className={styles.discription}>
                    {temp[0]['discription']}
                </div></> :
                <div>Listen to the audio and choose the song from list</div>
            }
        </div>
    )
}
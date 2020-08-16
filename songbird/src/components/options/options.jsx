import React from 'react'
import styles from './options.module.css'
import data from '../../data'
import ErrorAudio from '../../audio/error-audio.mp3'
import ReactAudioPlayer from 'react-audio-player';
import {ReactDOM} from 'react'

export default ({ options, setCurrentOption, topicIndex, correctSong, correct, 
    setCorrect, mistakes, setMistakes, score, setScore, playingAudio, handleClickError }) => {
    const handlleClick = (event) => {
        const currentOption = event.target.classList.contains(`${styles.option}`) ? event.target.innerText : ''
        const optionObject = data[topicIndex].songs.filter(el => el.song === currentOption)
        setCurrentOption(optionObject)
        console.log('correct', correct)
        if (!correct) {
            if (currentOption === correctSong.song) {
                const player = document.querySelector('#question-audio-container').childNodes[0].childNodes[0].childNodes[0]
                if (playingAudio) {
                    player.click()
                }
                setCorrect(true)
                event.target.classList.add(`${styles.correct}`)
                if (mistakes < 5) {
                    setScore(score + 5 - mistakes)
                }
                setMistakes(0)            
            } else {
                handleClickError()
                setMistakes(mistakes + 1)
                event.target.classList.add(`${styles.uncorrect}`)
            }    
        }
    }
    return (
        <div id='options-container' onClick={(event) => handlleClick(event)} className={styles.optionsContainer}>
            {options.map(el => <div key={el.song} className={`${styles.option}`}>
            {el.song}
            </div>)}
        </div>
    )
}
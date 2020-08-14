import React from 'react'
import styles from './options.module.css'
import data from '../../data'

export default ({ options, setCurrentOption, topicIndex, correctSong, correct, setCorrect }) => {
    const handlleClick = (event) => {
        const currentOption = event.target.classList.contains(`${styles.option}`) ? event.target.innerText : ''
        const optionObject = data[topicIndex].songs.filter(el => el.song === currentOption)
        console.log(optionObject)
        setCurrentOption(optionObject)
        if (!correct) {
            if (currentOption === correctSong.song) {
                console.log('WIN')
                setCorrect(true)
                event.target.classList.add(`${styles.correct}`)
            } else {
                event.target.classList.add(`${styles.uncorrect}`)
            }    
        }
    }
    return (
        <div onClick={(event) => handlleClick(event)} className={styles.optionsContainer}>
            {options.map(el => <div key={el.song} className={`${styles.option}`}>
            {el.song}
            </div>)}
        </div>
    )
}
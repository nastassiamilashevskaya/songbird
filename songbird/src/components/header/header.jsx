import React from 'react'
import styles from './header.module.css'
import Songbird from '../../img/Songbird.svg'

export default ({ score }) => {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src={Songbird} alt=''/>
            <div className={styles.score}>Score: {score}</div>
        </div>
    )
}
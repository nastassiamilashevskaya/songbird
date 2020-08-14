import React from 'react'
import styles from './topics.module.css'
import data from '../../data'

export default ({ topics, currentTopic }) => {
    return (
        <div className={styles.topicsContainer}>
            {topics.map(el => el === currentTopic ? 
            <div key={el} className={`${styles.topicTitle} ${styles.active}`}>{el}</div> :
            <div key={el} className={`${styles.topicTitle}`}>{el}</div>)}
        </div>
    )
}
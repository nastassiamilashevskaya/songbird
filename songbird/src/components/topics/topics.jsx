import React from 'react'
import styles from './topics.module.css'

export default ({ topics }) => {
    return (
        <div className={styles.topicsContainer}>
            {topics.map(el => <div className={`${styles.topicTitle}`}>{el}</div>)}
        </div>
    )
}
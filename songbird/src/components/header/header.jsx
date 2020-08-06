import React from 'react'
import styles from './header.module.css'
import Songbird from '../../img/Songbird.svg'

export default () => {
    return (
        <div className={styles.headerContainer}>
            {/* <div className={styles.headerInner}> */}
                <img className={styles.logo} src={Songbird} alt=''/>
                <div className={styles.score}>Score: 0</div>
            {/* </div> */}
        </div>
    )
}
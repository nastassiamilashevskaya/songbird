import React, {useEffect} from 'react'
import styles from './modal.module.css'
import YouTube from 'react-youtube';

export default ({ setOpenModal }) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
    /* eslint-disable */
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains(`${styles.overlay}`)) {
                setOpenModal(false)
            }
        })
    }, [])
    /* eslint-enable */
    return (
        <div id='overlay' className={styles.overlay}>
            <div className={styles.content}>
                <YouTube
                    videoId="dQw4w9WgXcQ"
                    opts={opts}
                    className={styles.videoContainer}
                />
            </div>
        </div>
    )
}
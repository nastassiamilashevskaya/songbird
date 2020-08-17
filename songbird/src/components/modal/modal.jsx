import React, {useEffect} from 'react'
import styles from './modal.module.css'
import YouTube from 'react-youtube';

export default ({ setOpenModal }) => {
    const opts = {
        height: '448vh',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains(`${styles.overlay}`)) {
                setOpenModal(false)
            }
        })
    }, [])

    return (
        <div id='overlay' className={styles.overlay}>
            <div className={styles.content}>
                <YouTube
                    videoId="dQw4w9WgXcQ"
                    opts={opts}
                />
            </div>
        </div>
    )
}
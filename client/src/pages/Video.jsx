import React from 'react'
import styles from '../styles/video.module.scss'

const Video = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.videowrapper}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yIaXoop8gl4?si=F3DVXo4OTzj-SBa5" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        </div>
        <div className={styles.title}>

        </div>
          <div className={styles.details}>
            <div className={styles.info}>

            </div>
            <div className={styles.buttons}>

            </div>
          </div>
      </div>
      <div className={styles.recomm}>

      </div>
    </div>
  )
}

export default Video
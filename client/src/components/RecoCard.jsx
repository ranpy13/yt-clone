import React from 'react'
import styles from '../styles/recocard.module.scss'

const RecoCard = () => {
  return (
    <div className={styles.container}>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/05/03114105/7-5.jpg' alt='thumbnail'/>
        <div className={styles.info}>
            <h4>Title of Some Random Video</h4>
            <h6>Random Youtuber</h6>
            <p>234K • 4 days</p>
        </div>
    </div>
  )
}

export default RecoCard
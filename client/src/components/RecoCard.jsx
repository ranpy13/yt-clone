import React from 'react'
import styles from '../styles/recocard.module.scss'
import { Link } from 'react-router-dom'

const RecoCard = () => {
  return (
    <Link to="/video/test" style={{color: "inherit", textDecoration: "none"}}>
      <div className={styles.container} >
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/05/03114105/7-5.jpg' alt='thumbnail'/>
        <div className={styles.info}>
            <h4>Title of Some Random Video</h4>
            <h6>Random Youtuber</h6>
            <p>234K • 4 days</p>
            <p className={styles.desc}>
                Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.

                You are watching the 1st part.
                Watch the second part:   

                • React Node.js Video Sharing App Full ...  

                If it is valuable to you, you can support Lama Dev.
                Join:   

                / @lamadev  
                Buy me a coffee: https://www.buymeacoffee.com/lamadev

                Source Code: https://github.com/safak/youtube2022/...

                Join Lama Dev groups
                Facebook:  

                / lamadev  
                Instagram:  

                / lamawebdev  
                Discord:  

                / discord  
                Twitter:  

                / lamawebdev  
            </p>
        </div>
      </div>
    </Link>
  )
}

export default RecoCard
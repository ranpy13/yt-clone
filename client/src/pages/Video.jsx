import React from 'react'
import styles from '../styles/video.module.scss'
import CommentSection from '../components/CommentSection'
import RecoCard from '../components/RecoCard'

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
          React Video Sharing App UI Design | Youtube UI Clone with React
        </div>
          <div className={styles.details}>
            <div className={styles.info}>
              <img src="https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262" alt='channel-icon'/>
              <div><h2>Lama Dev</h2><p>236K Subscribers</p></div>
              <button>SUBSCRIBE</button>
            </div>
            <div className={styles.buttons}>
              <button>
                <span class="material-symbols-outlined">thumb_up</span> &nbsp;2K
              </button>
              <button>
                <span class="material-symbols-outlined">thumb_down</span>
              </button>
              <button>
                <span class="material-symbols-outlined">share</span> 
              </button>
              <button>
                <span class="material-symbols-outlined">download</span> 
              </button>
              <button>
                <span class="material-symbols-outlined">steppers</span>
              </button>
            </div>
          </div>
          <hr/>
          <div className={styles.desc}>
            <h3>90K Views • Jan 21, 2023</h3>
            <p>Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.

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
          <hr/>
          <CommentSection/>
      </div>
      <div className={styles.recomm}>
        <h3>Recommendations &nbsp; ⟩</h3>
      {Array.from({ length: 15 }).map(i => 
        <RecoCard />
      )}
      </div>
    </div>
  )
}

export default Video
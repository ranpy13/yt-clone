import React from 'react'
import styles from '../styles/comments.module.scss'

const Comments = () => {
  return (
    <div className={styles.container}>
        <div className={styles.old}>
            <img src="https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262" alt='channel-icno'/>
            <div>
                <div className={styles.topinfo}><h3>Some Random Youtuber</h3>•<p>3 days ago</p></div>
                <p>His comment right here all around... jfklasj fkj f;askdjlf jasdlkjf lkasdjflk ajsdlk;fjk ladsjfl; ds;lakfj lkasdjflk; sjda;lkf jladskfj lkadsjfl jadslfjlasd jflasdjlf jadskfjadslkfj;adslkfjlk;adsjfladsjfklasdjf</p>
            </div>
            <span class="material-symbols-outlined">more_vert</span>
        </div>
        <div className={styles.btns}>
            <div> <span class="material-symbols-outlined">thumb_up</span> 3K </div>
            <span class="material-symbols-outlined">thumb_down</span>
            <p>Reply</p>
        </div>
    </div>
  )
}

export default Comments
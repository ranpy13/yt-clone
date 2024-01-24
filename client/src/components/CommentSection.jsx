import React from 'react'
import styles from '../styles/comments.module.scss'
import Comments from './Comments'

const CommentSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.new}>
            <img src='https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262' alt='channel-icon' />
            <textarea placeholder='Write your comment here...'/>
            <button><span class="material-symbols-outlined">send</span></button>
        </div>
        <hr/>
        {Array.from({ length: 10 }).map(i => 
            <Comments />
        )}
    </div>
  )
}

export default CommentSection
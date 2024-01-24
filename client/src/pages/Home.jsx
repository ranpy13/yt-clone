import React from 'react'
import styles from "../styles/home.module.scss"
import Card from '../components/Card'

const Home = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 50 }).map(i => 
        <Card 
          key={i}
          url="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/05/03114105/7-5.jpg"
          des="Youtube Video"
          own="Random Youtuber"
          vws="232K views"
          tmn="8 hours ago"
          ttl="Some Random Youtube Video"
          icn="https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262"
        />
      )}
    </div>
  )
}

export default Home
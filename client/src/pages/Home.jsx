import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "../styles/home.module.scss"
import Card from '../components/Card'

const Home = ({type}) => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const fetchVideos = async  () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <Card 
          key={video._id}
          url={video.imgUrl}
          des={video.desc}
          own={video.userId}
          vws={video.views}
          tmn={video.createdAt || "123"}
          ttl={video.videoTitle}
          icn={video.userid}
        />
      ))}

      {Array.from({ length: 50 }).map(i => 
        <Card 
          key={i}
          url="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/05/03114105/7-5.jpg"
          des="Youtube Video"
          own="Random Youtuber"
          vws="2322778"
          tmn="8 hours ago"
          ttl="Some Random Youtube Video"
          icn="https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262"
        />
      )}
    </div>
  )
}

export default Home
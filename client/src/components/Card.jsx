import React, { useEffect, useState } from 'react'
import styles from '../styles/card.module.scss'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/locale-data/en' 

const Card = ({url, des, ttl, own, vws, tmn}) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`/users/find/${own}`)
        setUser(res.data)
      } catch (err) {
        const temp = {
          "name" : own,
          "img" : "https://www.chennaigrocers.com/cdn/shop/files/Green-Apple.jpg?v=1694866262",
        }
        setUser(temp)
      }
    }
    fetchUsers()
  }, [own])

  return (
    <div className={styles.container}>
        <Link to="/video/test" style={{textDecoration: "none"}}>
            <img src={url} alt={des} />
            <div className={styles.caption}>
                <img src={user.img} alt='channel icon'/>
                <div>
                    <h4>{ttl}</h4>
                    <h5>{user.name}</h5>
                    <p>{Intl.NumberFormat("en-US", {notation: "compact", maximumFractionDigits: 1}).format(vws)} views • {format(toString(tmn))}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card
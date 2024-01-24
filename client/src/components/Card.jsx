import React from 'react'
import styles from '../styles/card.module.scss'
import { Link } from 'react-router-dom'

const Card = ({url, des, icn, ttl, own, vws, tmn}) => {
  return (
    <div className={styles.container}>
        <Link to="/video/test" style={{textDecoration: "none"}}>
            <img src={url} alt={des} />
            <div className={styles.caption}>
                <img src={icn} alt='channel icon'/>
                <div>
                    <h4>{ttl}</h4>
                    <h5>{own}</h5>
                    <p>{vws} • {tmn}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card
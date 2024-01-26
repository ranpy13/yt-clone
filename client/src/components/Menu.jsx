import React, { useContext } from 'react'
import styles from '../styles/menu.module.scss'
import logo from '../images/logo.png'
import { ThemeContext } from '../utils/ThemeContext'
import { Link } from 'react-router-dom'


const Menu = () => {
    const {toggle, theme} = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${theme}`}>
        <div className={styles.wrapper}>
            <Link to="/" style={{textDecoration: "none", color:"inherit"}}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo'/>
                    <h1> YouTube </h1>
                </div>
            </Link>
            <div className={styles.item}>
                <Link to="/" style={{textDecoration: "none", color:"inherit"}}>
                    <div className={styles.items}>
                        <span className={`material-symbols-outlined ${styles.mso}`}>home</span> Home
                    </div>
                </Link>
                <Link to="trends" style={{textDecoration: "none", color:"inherit"}}>
                    <div className={styles.items}>
                        <span className={`material-symbols-outlined ${styles.mso}`}>explore</span> Explore
                    </div>
                </Link>
                <Link to="sub" style={{textDecoration: "none", color:"inherit"}}>
                    <div className={styles.items}>
                        <span className={`material-symbols-outlined ${styles.mso}`}>subscriptions</span> Subscriptions
                    </div>
                </Link>
                <hr/> 
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>video_library</span> Library
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>history</span> History
                </div>
                <div className={styles.signbtn}>
                    <p>Sign in to like videos, comment and subscribe</p>
                    <Link to="/login" style={{color: "inherit", textDecoration: "none"}}>
                        <button><span className="material-symbols-outlined">account_circle</span>&nbsp; SIGN IN</button>
                    </Link>
                </div>
                <hr/>
                <p style={{color: 'grey'}}>BEST OF YouTube ⨠</p>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>library_music</span> Music
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>trophy</span> Sports
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>sports_esports</span> Gaming
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>movie</span> Movies
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>newsmode</span> News
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>live_tv</span> Live
                </div>
                <hr/>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>settings</span> Settings
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>flag</span> Report
                </div>
                <div className={styles.items}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>help</span> Help
                </div>
                <div className={styles.items} onClick={toggle}>
                    <span className={`material-symbols-outlined ${styles.mso}`}>contrast</span> Light Mode
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
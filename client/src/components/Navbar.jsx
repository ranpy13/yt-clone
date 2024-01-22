import React from 'react'
import styles from '../styles/navbar.module.scss'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt='logo'/>
            <h1> YouTube </h1>
          </div>

          <div className={styles.search}>
            <span className="material-symbols-outlined">search</span>
            <input placeholder="Search for anything..."/>
          </div>

          <button><span className="material-symbols-outlined">account_circle</span>&nbsp; SIGN IN</button>
      </nav>
  )
}

export default Navbar
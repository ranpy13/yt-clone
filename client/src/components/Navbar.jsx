import React from 'react'
import styles from '../styles/navbar.module.scss'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <Link to="/" style={{textDecoration: "none", color:"inherit"}}>
          <div className={styles.logo}>
            <img src={logo} alt='logo'/>
            <h1> YouTube </h1>
          </div>
        </Link>

        <div className={styles.search}>
          <input placeholder="Search for anything..."/>
          <Link to="/search/test" style={{color: "inherit"}}> 
            <span className="material-symbols-outlined">search</span>
          </Link>
        </div>

        <button><span className="material-symbols-outlined">account_circle</span>&nbsp; SIGN IN</button>
      </nav>
  )
}

export default Navbar
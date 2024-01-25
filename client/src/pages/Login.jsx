import React, { useState } from 'react'
import styles from '../styles/login.module.scss'


const Login = () => {
    const [create, setCreate] = useState(false)

    return (
    <div className={styles.container}>
        <div className={styles.promo}>
            <img src='https://collegemarker.com/images/signin.png'alt='promo '/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1>{create ? "Create Your Account" : "SIGN IN"}</h1>
                <form action='/' method='get'>
                    <input placeholder='Enter Fullname' style={{display: !create && "none"}}/>
                    <input placeholder='Enter username' type='email'/>
                    <input placeholder='Enter password' type='password'/>
                    <input placeholder='Confirm password' type='password' style={{display: !create && "none"}}/>
                    <button type='submit'>{create ? "Register" : "Sign in"}</button>
                </form>
                <div><h2>OR</h2><a href='##' onClick={() => setCreate(!create)}>{create ? "SignIn instead" : "Create an account"}</a></div>
            </div>
            <div className={styles.more}>English(US) Help Privacy More</div>
        </div>
    </div>
  )
}

export default Login
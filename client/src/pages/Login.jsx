import React, { useState } from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'
import styles from '../styles/login.module.scss'


const Login = () => {
    const [create, setCreate] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conpass, setConpass] = useState("")

    const handleRegister = async (evt) => {
        evt.preventDefault()
            try {
                if(password === conpass) {
                    const res = await axios.post("/auth/signup", {
                        "name" : name,
                        "email" : email,
                        "password" : password,
                    })
                    if(res.status === 200) {
                        alert("Registration successful")
                        return redirect("/")
                    } else {
                        alert("Registration failed")
                    }
                } else {
                    alert("Password do not match")
                }
            } catch (err) {
                alert("User Registration Failed")
            }
        }
    
    const handleLogin = async (evt) => {
            try {
                const res = await axios.post("/auth/signin", {
                    name, password
                })
                if(res.status === 200) {
                    return redirect("/")
                } else {
                    alert("Wrong Credentials")
                }
            } catch(err) {
                alert("Wrong Credentials")
            }
        }

    return (
    <div className={styles.container}>
        <div className={styles.promo}>
            <img src='https://collegemarker.com/images/signin.png'alt='promo '/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1>{create ? "Create Your Account" : "SIGN IN"}</h1>
                <form action='/' method='get'>
                    <input placeholder='Enter Fullname' 
                        style={{display: !create && "none"}}
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder='Enter username' type='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder='Enter password' type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input placeholder='Confirm password' type='password' 
                        style={{display: !create && "none"}}
                        onChange={e => setConpass(e.target.value)}
                    />
                    <button type='submit' onClick={create ? handleRegister : handleLogin}>{create ? "Register" : "Sign in"}</button>
                </form>
                <div><h2>OR</h2><a href='##' onClick={() => setCreate(!create)}>{create ? "SignIn instead" : "Create an account"}</a></div>
            </div>
            <div className={styles.more}>English(US) Help Privacy More</div>
        </div>
    </div>
  )
}

export default Login
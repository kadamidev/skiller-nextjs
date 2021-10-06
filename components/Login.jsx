import React, { useRef, useState } from 'react';
import styles from '../styles/app/Login.module.scss'
import Image from 'next/image'


const login = ({darkMode, toggleShow}) => {

    const username = useRef(null)
    const password = useRef(null)
    const remember = useRef(null)
    const [message, setMessage] = useState()
    
    async function handleFormSubmit(e) {
        e.preventDefault()
        const response =  await fetch('/api/user/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    username: username.current.value,
                    password: password.current.value,
                    remember: remember.current.checked
                }
            })
        })
        const json = await response.json()
        setMessage(json)
    }

    return (
        <div>
            <div className={darkMode ? [styles.loginContainer, styles.darkMode].join(' ') : styles.loginContainer }>
                <section className={styles.header}>
                    <span>Login</span>
                    <div className={styles.closeButton} onClick={toggleShow}>
                    <Image src='/img/app/delete.svg' height={10} width={10}/>
                    </div>
                </section>
                <form className={styles.userForm} action="/api/user/login" method="POST">
                    <label htmlFor="username">Username</label>
                    <input ref={username} type="text" name="user[username]" id="username" />

                    <label htmlFor="password">Password</label>
                    <input ref={password} type="password" name="user[password]" id="password" />

                    <div className={styles.bottomRow}>
                        <div className={styles.checkContainer}>
                            <input ref={remember} className={styles.checkbox} id="rememberCheck" type="checkbox"/>
                            <label className={styles.customCheckbox} htmlFor="rememberCheck">Remember Me</label>
                        </div>

                    <button onClick={handleFormSubmit}>Login</button>
                    {/* <input type="submit" value="Login" /> */}
                    </div>
                </form>
                <span>{JSON.stringify(message)}</span>
            </div>
        </div>
    );
}

export default login;

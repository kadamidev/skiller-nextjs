import React, { useRef, useState } from 'react';
import styles from '../styles/app/Signup.module.scss'
import Image from 'next/image'
import Loader from '../components/Loader'



const Signup = (props) => {

    const Username = useRef(null)
    const Password = useRef(null)
    const [message, setMessage] = useState({color: '#52E9C5', msg: ''})
    const [loading, setLoading] = useState(false)
    
    async function handleFormSubmit(e) {
        e.preventDefault()
        setMessage('')
        setLoading(true)
        const response =  await fetch('/api/user/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    username: Username.current.value,
                    password: Password.current.value,
                }
            })
        })
        const json = await response.json()
        setLoading(false)
        if (response.ok) {
            // props.toggleShow()
            setMessage({color: '#52E9C5', msg: 'Success! you may now log in'})
            return
        }

        if (!response.ok) {
            setMessage({color: '#ff8282', msg: 'unable to register, try again'})
            return
        }
    }

    return (
        <div>
            <div className={props.darkMode ? [styles.loginContainer, styles.darkMode].join(' ') : styles.loginContainer }>
                <section className={styles.header}>
                    <span>Signup</span>
                    <div className={styles.closeButton} onClick={props.toggleShow}>
                    <Image src='/img/app/delete.svg' height={10} width={10}/>
                    </div>
                </section>

                <div className={loading ? styles.loadingWrapper : styles.loadingWrapperHide}>
                    <Loader />
                </div>

                <form className={loading ? [styles.userForm, styles.userFormHide].join(' ') : styles.userForm} action="/api/user/login" method="POST">
                    <label htmlFor="username">Username</label>
                    <input ref={Username} type="text" name="user[username]" id="username" />

                    <label htmlFor="password">Password</label>
                    <input ref={Password} type="password" name="user[password]" id="password" />

                    <div className={styles.bottomRow}>

                    <button onClick={handleFormSubmit}>Signup</button>
                    {/* <input type="submit" value="Login" /> */}
                    </div>
                </form>
                <span className={styles.errorMsg} style={{color: message.color}}>{message.msg}</span>
            </div>
        </div>
    );
}

export default Signup;

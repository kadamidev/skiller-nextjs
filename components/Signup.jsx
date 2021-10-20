import React, { useState } from 'react';
import styles from '../styles/app/Signup.module.scss'
import Image from 'next/image'
import Loader from '../components/Loader'
import { useFormik } from 'formik'
import * as Yup from 'yup'




const Signup = (props) => {


    const [message, setMessage] = useState({color: '#52E9C5', msg: ''})
    const [loading, setLoading] = useState(false)

    const signupFormik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                        .min(4, 'Must be 4 characters or more')
                        .max(16, `Must be 16 characters or less`)
                        .required("Required"),
            password: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .max(256, 'Must be 256 characters or less')
                        .required("Required")
        }),
        onSubmit: (values) => { handleFormSubmit(values) }
    })

    
    async function handleFormSubmit(values) {
        setMessage('')
        setLoading(true)
        const response =  await fetch('/api/user/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    username: values.username,
                    password: values.password, 
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

                <form onSubmit={signupFormik.handleSubmit} className={loading ? [styles.userForm, styles.userFormHide].join(' ') : styles.userForm} action="/api/user/login" method="POST">
                    <div className={styles.labelErrContainer}>
                    <label htmlFor="username">Username</label>
                    {signupFormik.touched.username && signupFormik.errors.username ? <p className={styles.validationError}>{signupFormik.errors.username}</p> : null}
                    </div>
                    <input onBlur={signupFormik.handleBlur} type="text" name="username" id="username" onChange={signupFormik.handleChange} value={signupFormik.values.username}/>

                    <div className={styles.labelErrContainer}>
                    <label htmlFor="password">Password</label>
                    {signupFormik.touched.password && signupFormik.errors.password ? <p className={styles.validationError}>{signupFormik.errors.password}</p> : null}
                    </div>
                    <input onBlur={signupFormik.handleBlur}  type="password" name="password" id="password" onChange={signupFormik.handleChange} value={signupFormik.values.password}/>

                    <div className={styles.bottomRow}>

                    <button type="submit">Signup</button>
                    </div>
                </form>
                <span className={styles.errorMsg} style={{color: message.color}}>{message.msg}</span>
            </div>
        </div>
    );
}

export default Signup;

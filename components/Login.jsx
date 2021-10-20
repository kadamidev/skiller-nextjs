import React, { useState } from 'react';
import styles from '../styles/app/Login.module.scss'
import Image from 'next/image'
import Loader from '../components/Loader'
import { useFormik } from 'formik'
import * as Yup from 'yup'





const Login = (props) => {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    

    const loginFormik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required")
        }),
        onSubmit: (values) => { handleFormSubmit(values) }

    })
    
    async function handleFormSubmit(values) { 
        setMessage('')
        setLoading(true)
        const response =  await fetch('/api/user/login', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    username: values.username,
                    password: values.password,
                    remember: values.remember
                }
            })
        })
        const json = await response.json()
        setLoading(false)
        if (response.ok) {
            props.loginUser(json.user)
            props.toggleShow()
            return
        }

        if (!response.ok) {
            setMessage('Wrong user/pw combination, try again')
            return
        }
    }

    return (
        <div>
            <div className={props.darkMode ? [styles.loginContainer, styles.darkMode].join(' ') : styles.loginContainer }>
                <section className={styles.header}>
                    <span>Login</span>
                    <div className={styles.closeButton} onClick={props.toggleShow}>
                    <Image src='/img/app/delete.svg' height={10} width={10}/>
                    </div>
                </section>

                <div className={loading ? styles.loadingWrapper : styles.loadingWrapperHide}>
                    <Loader />
                </div>

                <form onSubmit={loginFormik.handleSubmit} className={loading ? [styles.userForm, styles.userFormHide].join(' ') : styles.userForm} action="/api/user/login" method="POST">
                    <div className={styles.labelErrContainer}>
                    <label htmlFor="username">Username</label>
                    {loginFormik.touched.username && loginFormik.errors.username ? <p className={styles.validationError}>{loginFormik.errors.username}</p> : null}
                    </div>
                    <input onBlur={loginFormik.handleBlur} type="text" name="username" id="username" value={loginFormik.values.username} onChange={loginFormik.handleChange} />

                    <div className={styles.labelErrContainer}>
                    <label htmlFor="password">Password</label>
                    {loginFormik.touched.password && loginFormik.errors.password ? <p className={styles.validationError}>{loginFormik.errors.password}</p> : null}
                    </div>
                    <input onBlur={loginFormik.handleBlur} type="password" name="password" id="password" value={loginFormik.values.password} onChange={loginFormik.handleChange} />

                    <div className={styles.bottomRow}>
                        <div className={styles.checkContainer}>
                            <input className={styles.checkbox} name="remember" id="rememberCheck" type="checkbox" value={loginFormik.values.remember} onChange={loginFormik.handleChange}/>
                            <label className={styles.customCheckbox} htmlFor="rememberCheck">Remember Me</label>
                        </div>

                    <button type="submit">Login</button>
                    {/* <input type="submit" value="Login" /> */}
                    </div>
                </form>
                <span className={styles.errorMsg}>{message}</span>
            </div>
        </div>
    );
}

export default Login;

import styles from '../styles/LoginPage.module.scss'
import Login from "../components/Login";


import React from 'react';

const LoginPage = () => {
    return (
        <>
            <div className={styles.loginPageContainer}>
                <div className={styles.loginWrapper}>
                    <Login darkMode={true} />
                </div>
            </div>
        </>
    );
}

export default LoginPage;

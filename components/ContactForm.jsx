import React from 'react';
import styles from '../styles/ContactForm.module.scss'


const ContactForm = () => {
    return (
        <div>
            <form className={styles.formContainer} action="">
                <label className={styles.emailLabel} htmlFor="email">Email Address</label>
                <input className={styles.emailField} type="email" name="contact[email]" id="email" placeholder='example@email.com'/>

                <label htmlFor="message">Message</label>
                <textarea name="contact[message]" id="message" cols="30" rows="10" placeholder='...'></textarea>
                
                <div className={styles.submitContainer}>
                    {/* <span className={styles.sendSvg}>.</span> */}
                    <input className={styles.sendBtn} type="submit" value='SEND'/>
                    <div className={styles.submitWrap}>
                        <input className={styles.sendSvg} type="submit" value=''/>
                    </div>

                </div>
            </form>
            
        </div>
    );
}

export default ContactForm;

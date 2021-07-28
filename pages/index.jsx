import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import IndexNav from '../components/IndexNav'
import MainHeading from '../components/MainHeading'
import LaunchAppBtn from '../components/LaunchAppBtn'
import { useMediaQuery } from '../lib/useMediaQuery'
import ContactForm from '../components/ContactForm'

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 767px)')
    const isMonitor = useMediaQuery('(min-width: 1080px)')


  return (
    <div className='container'>
      <Head>
        <title>Skiller - A task app like no other</title>
        <meta name="description" content="A producitivity web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexNav />

      <section className={styles.heroSection} id='hero-section'>
        <div className={styles.heroContainer}>

          <div className={styles.heading}>
            <MainHeading />
          </div>

          <div className={styles.heroImg}>
            <Image className={styles.img} src='/img/index/hero-img.svg' width={430} height={480} />
          </div>

          <div className={styles.launchBtn}>
            { isMobile && <Link href="menu"><LaunchAppBtn textSize='2.4rem'/></Link> }
          </div>



        { isMobile ? (
            <svg className={styles.waveSvg} preserveAspectRatio="none" width="100%" height="247" viewBox="0 0 414 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-60 178.69C-14.5668 105.556 100.659 -25.5007 169.089 62.2595C237.519 150.02 355.602 62.7019 414 0V247H-60V178.69Z" fill="#AFF6E5"/>
                <path d="M-60 179.216C-14.6928 107.353 88.2154 -10.1842 156.456 76.0509C224.696 162.286 355.764 61.6122 414 0V247H-60V179.216Z" fill="#52E9C5"/>
            </svg>
          ) : (
            <svg className={styles.waveSvg} preserveAspectRatio="none" width="100%" height="249" viewBox="0 0 768 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5 180.137C69.0926 106.411 257.003 -25.7072 368.599 62.7636C480.195 151.234 672.764 63.2096 768 0V249H-5V180.137Z" fill="#AFF6E5"/>
                <path d="M-5 180.667C68.8871 108.222 236.71 -10.2667 347.996 76.6667C459.282 163.6 673.028 62.1111 768 0V249H-5V180.667Z" fill="#52E9C5"/>
            </svg>
          )
        }
        </div>
      </section>

      <section className={styles.featuresSection} id='features-section'>
        <div className={styles.container}>

          <h1 className={styles.heading}>Features</h1>

          { isMonitor && <div className={styles.left}>
            <Image src='/img/index/left-checklist.svg' width={295} height={81}/>
            <Image src='/img/index/left-progress.svg' width={191} height={208}/>
            <Image src='/img/index/left-mobile.svg' width={175} height={249}/>

          </div> }

          <ul className={styles.featuresList}>
            <li>Checklist</li>
            <li>Tabs</li>
            <li>Progress Bars</li>
            <li>Reminders</li>
            <li>Mobile Friendly</li>
            <li>Intuitive UX</li>
          </ul>

          { isMonitor && <div className={styles.right}>
            <Image src='/img/index/right-tabs.svg' width={301} height={270}/>
            <Image src='/img/index/right-email.svg' width={242} height={144}/>
            <Image src='/img/index/right-ux.svg' width={265} height={220}/>

          </div> }

        </div>
      </section>

      <section className={styles.contactSection} id='contact-section'>
        <div className={styles.container}>

          <h1>Contact & Feedback</h1>

          { !(isMonitor) && <p>We&apos;re happy to hear from you, please share any feedback or improvements you&apos;d like to see.</p> }
          
          <div className={styles.left}>
            { isMonitor && <p>We&apos;re happy to hear from you, please share any feedback or improvements you&apos;d like to see.</p> }

            <div className={styles.ideaWrap}>
              {!(isMobile) && <Image src="/img/index/ideas.svg" width={410} height={484} />}
            </div>
          </div>

            <div className={styles.formWrapper}>
              <ContactForm className={styles.contactForm} />
            </div>
          
        </div>
      </section>





    </div>
  )
}

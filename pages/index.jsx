import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import IndexNav from '../components/IndexNav'
import MainHeading from '../components/MainHeading'
import LaunchAppBtn from '../components/LaunchAppBtn'
import { useMediaQuery } from '../lib/useMediaQuery'
import Waves from '../components/Waves'

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 767px)')
    const waveHeight = (isMobile ? 247 : 347)
  return (
    <div className={styles.container}>
      <Head>
        <title>Skiller - A task app like no other</title>
        <meta name="description" content="A producitivity web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexNav />

      <section className={styles.heroSection}>
        <div className={styles.center}>
          <MainHeading class={styles.heading}/>
          <Image  src='/img/index/hero-img.svg' width={430} height={480}/>

          <div className={styles.launchBtn}>
          { isMobile && <Link href="menu"><LaunchAppBtn textSize='2.4rem'/></Link> }
          </div>


        </div>
          <svg className={styles.waveSvg} preserveAspectRatio="none" width="100vw" height={waveHeight} viewBox="0 0 414 247" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-60 178.69C-14.5668 105.556 100.659 -25.5007 169.089 62.2595C237.519 150.02 355.602 62.7019 414 0V247H-60V178.69Z" fill="#AFF6E5"/>
            <path d="M-60 179.216C-14.6928 107.353 88.2154 -10.1842 156.456 76.0509C224.696 162.286 355.764 61.6122 414 0V247H-60V179.216Z" fill="#52E9C5"/>
          </svg>
      </section>





    </div>
  )
}

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
          <MainHeading />
          <Image  src='/img/index/hero-img.svg' width={430} height={480}/>

          { isMobile && <Link href="menu"><LaunchAppBtn textSize='2.4rem'/></Link> }
          
          <div className={styles.waves}>
            <Waves />
          </div>

        </div>
      </section>





    </div>
  )
}

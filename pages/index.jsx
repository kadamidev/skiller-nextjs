import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import IndexNav from '../components/IndexNav'
import MainHeading from '../components/MainHeading'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skiller - A task app like no other</title>
        <meta name="description" content="A producitivity web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexNav />
      <div className={styles.center}>
      <MainHeading />
      </div>

      {/* <Image  /> */}
      <p className={styles.bigText}>hello</p>
    </div>
  )
}

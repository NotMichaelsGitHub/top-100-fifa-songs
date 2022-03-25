import Head from 'next/head'
import Import from '../components/Import/import.js'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Top() {
  return (
    <div>
      <Head>
        <title>Top 100 Fifa Songs</title>
        <meta name="description" content="Created by Michael Di Paolo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className={styles.container}>
        <Import/>
      </div>

    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viðburðir á næstunni</title>
        <meta name="Front page" content="Front page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Viðburðir á næstunni
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
      </div>
      </main>

      <footer className={styles.footer}>
      <a href= "" >Forsíða</a>
      <a href= "/Innskráning" >Innskráning</a>
      <a href= "/Nýskráning" >Nýskráning</a>
      </footer>
    </div>
  )
}

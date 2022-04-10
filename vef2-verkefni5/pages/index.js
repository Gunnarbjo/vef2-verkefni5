import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderComponent from '../componments/header'
import FooterComponent from '../componments/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Viðburðir á næstunni</title>
        <meta name="Front page" content="Front page" />
      </Head>
      <HeaderComponent></HeaderComponent>
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
      <FooterComponent></FooterComponent>
    </div>
  )
}

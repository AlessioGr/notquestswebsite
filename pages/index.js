import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://quests.notnot.pro">NotQuests</a>
        </h1>

        <p className={styles.description}>
          Choose your Server version
        </p>

        <div className={styles.grid}>
          <a href="/downloads/notquests-3.1.0.jar" className={styles.card}>
            <h2>PaperMC &rarr;</h2>
            <p>Choose this if your server runs on Paper! This version will use modern chat components.</p>
          </a>
          <a href="/downloads/notquests-3.1.0.jar" className={styles.spigot}>
            <h2>spigot &rarr;</h2>
            <p>Choose this if your server runs on spigot. This version will use deprecated legacy messages.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

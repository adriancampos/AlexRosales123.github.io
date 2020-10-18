import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Project Poftfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi My Name Is Alex
        </h1>

        <p className={styles.description}>
          These Are Some Of My Projects{' '}
          
        </p>

        <div className={styles.grid}>
          <a href="https://alexrosales123.github.io/Tic-Tac-Toe/" className={styles.card}>
            <h3>Tic Tac Toe &rarr;</h3>
            <p>Play Tic Tac Toe On Your Browser With This Game.</p>
            <p className = {styles.date}>August 2020</p>
          </a>


          <a href="https://repl.it/@A1exRosales123" className={styles.card}>
            <h3>Python Projects &rarr;</h3>
            <p>Here Are Some Of My Projects While Learning Python</p>
            <p className = {styles.date}>July-August 2020</p>
          </a>


         
        </div>
      </main>

      <footer className={styles.footer}>
      © Alex Rosales 2020
      </footer>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home 🍇 Mo's Next Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🍇 Grapes! 🍇
        </h1>

        <p className={styles.description}>
          <p>My first programming language was Pascal, which I learnt at Barnfield College, Luton.</p>
          <code className={styles.code}>
            writeln ('Hello, world.');
          </code>
          <h3><a href='/about'>About</a></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatum unde eum nihil at ab magni cum officiis esse labore natus porro odit, earum sapiente modi pariatur magnam? Officia, nulla!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatum unde eum nihil at ab magni cum officiis esse labore natus porro odit, earum sapiente modi pariatur magnam? Officia, nulla!</p>
          
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

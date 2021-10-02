import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | 🍇🌎 Grapeworld NextJS Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <main className={styles.main}>
        <h1 className={styles.title}>
          🍇 Grapes! 🌎
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatum unde eum nihil at ab magni cum officiis esse labore natus porro odit, earum sapiente modi pariatur magnam? Officia, nulla!</p>
          
        <p>My first programming language was Pascal, which I learnt at Barnfield College, Luton.</p>
        <code className={styles.code}>
          writeln ('Hello, world.');
        </code>
        

      </main>
    </div>
  )
}

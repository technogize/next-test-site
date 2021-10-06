import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({ products }) => {
  console.log(products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | 🍇🌎 Fruits NextJS Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <main className={styles.main}>
        <h1 className={styles.title}>
          🍇🍓 Fruit! 🍏🍐
        </h1>
        <p>Fruits. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptatum unde eum nihil at ab magni cum officiis esse labore natus porro odit, earum sapiente modi pariatur magnam? Officia, nulla!</p>
        <p>My first programming language was Pascal, which I learnt at Barnfield College, Luton.</p>
        <code className={styles.code}>
          writeln ('Hello, world.');
        </code>
      </main>
    </div>
  )
}

export default Home
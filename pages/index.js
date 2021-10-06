import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ({ products }) => {
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
        <div>
          <h4>Product Page</h4>
          <Image src='/img/qrcode/product.png' width={200} height={200} />
          <hr />
          <h4>Apple Banana product</h4>
          <Image src='/img/qrcode/apple-banana.png' width={200} height={200} />
          <hr />

          <h4>Royal Gala Apple product</h4>
          <Image src='/img/qrcode/gala.png' width={200} height={200} />
          <hr />

          <h4>Braeburn product</h4>
          <Image src='/img/qrcode/braeburn.png' width={200} height={200} />
          <hr />
        </div>
      </main>
    </div>
  )
}

export default Home
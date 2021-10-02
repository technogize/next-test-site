import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found 🤔 | 🍇🌎 Grapeworld NextJS Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>   
            <div className={styles.content}>
                <span className={styles.emoji}>🤔</span>
                <h1>Sorry...</h1>
                <h2>That page does not exists </h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
    )
}

export default NotFound

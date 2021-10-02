import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000);
    }, [])

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
                <p><strong>You will be redirected to the homepage in 5 seconds</strong> or you can go back now by clicking here: <Link href="/">Homepage</Link></p>
            </div>
        </>
    )
}

export default NotFound

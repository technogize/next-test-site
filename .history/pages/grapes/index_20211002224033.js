import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Animals.module.css'

export const getStaticProps = async () => {
    // https://jsonplaceholder.typicode.com/users
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    return {
        props: { data }
    }
}

const index = () => {
    return (
        <>
            <Head>
                <title>Grapes | 🍇🌎 Grapeworld NextJS Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Grapes</h1>
                <p>Check out our variety of grapes below.</p>
                <ul className={styles.animalsList}>
                    <li>
                        <Link href='/grapes/moon-drops'>Moon Drops</Link>
                    </li>
                    <li>
                        <Link href='/grapes/concord'>Concord</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default index
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Grapes.module.css'

export const getStaticProps = async (context) => {
    console.log('context:::', context)
    // https://jsonplaceholder.typicode.com/users
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    return {
        props: { grapeFarms: data }
    }
}

const index = props => {
    const { grapeFarms } = props
    return (
        <>
            <Head>
                <title>Grapes | 🍇🌎 Fruits NextJS Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Grapes</h1>
                <p>Check out our variety of grapes below.</p>
                <ul className={styles.list}>
                    <li>
                        <Link href='/grapes/moon-drops'>Moon Drops</Link>
                    </li>
                    <li>
                        <Link href='/grapes/concord'>Concord</Link>
                    </li>
                </ul>
                
                <h2>Grape Farms</h2>
                <p>This data below comes from an external dummy endpoint.</p>
                <ul className={styles.listFarms}>
                    {grapeFarms.map(grape => {
                        return (
                            <Link key={grape.id} href={`/grapes/${grape.id}`}>
                            <li>
                                    <p>
                                        {grape.company?.name && 
                                            `${grape.company.name}`
                                        }
                                    </p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default index
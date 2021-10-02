import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Grapes.module.css'

export const getStaticProps = async () => {
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
                <title>Grapes | 🍇🌎 Grapeworld NextJS Site</title>
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
                <ul className={styles.list}>
                    {grapeFarms.map(grape => {
                        return (
                            <li key={grape.id}>
                                <p>
                                    {grape.company?.name && 
                                        `Company: ${grape.company.name}`
                                    }
                                    {grape.name &&
                                        `Owner: ${grape.name}`
                                    }
                                    {grape.email &&
                                        `Email: ${grape.email}`
                                    }
                                    {grape.website &&
                                        `Website: ${grape.website}`
                                    }
                                    {grape.phone &&
                                        `Phone: ${grape.phone}`
                                    }
                                    {grape.address &&
                                        <address>
                                            {grape.address?.street}<br />
                                            {grape.address?.suite}<br />
                                            {grape.address?.city}<br />
                                            {grape.address?.zipcode}
                                        </address>
                                    }
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default index
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Animals.module.css'

const index = () => {
    return (
        <div>
            <h1>Animals</h1>
            <p>Check out the animals below.</p>
            <ul>
                <li>
                    <Link href='/animals/cats'>Cats</Link>
                </li>
                <li>
                    <Link href='/animals/sheep'>Sheep</Link>
                </li>
            </ul>
        </div>
    )
}

export default index
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Animals.module.css'

const index = () => {
    return (
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
    )
}

export default index
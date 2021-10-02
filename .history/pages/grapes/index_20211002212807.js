import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Animals.module.css'

const index = () => {
    return (
        <div>
            <h1>Animals</h1>
            <p>Check out the animals below.</p>
            <ul className={styles.animalsList}>
                <li>
                    <Link href='/grapes/moon-drops'>Cats</Link>
                </li>
                <li>
                    <Link href='/grapes/concord'>Sheep</Link>
                </li>
            </ul>
        </div>
    )
}

export default index
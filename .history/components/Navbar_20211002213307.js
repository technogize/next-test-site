import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className='logo'>
                    <img src='/img/grape-logo.png' />
                    <h1>Grapes</h1>
                </div>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/grapes">Grape Varieties</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Navbar

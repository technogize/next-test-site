import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className='logo'>
                    <h1>Grapeworld🍇🌎</h1>
                </div>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/animals">Animals</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Navbar

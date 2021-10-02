import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link href="/"><h1>Grapeworld</h1></Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/animals">Animals</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Navbar

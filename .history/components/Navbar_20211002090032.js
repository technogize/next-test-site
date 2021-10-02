import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <h1>LOGO</h1>
            </div>
            <Link href="/"><a >Home</a></Link>
            <Link href="/animals"><a >Animals</a></Link>
            <Link href="/about"><a >About</a></Link>
        </nav>
    )
}

export default Navbar

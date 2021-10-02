import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className='logo'>
                    <Image
                        src='/img/grape-logo.png'
                        width={60}
                        height={70}
                    />
                    <h1>Grapes</h1>
                </div>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/grapes">Grapes</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Navbar

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
                    <h1>Fruits</h1>
                </div>
            </Link>
            <div className='nav-main-menu'>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/grapes">Grapes</Link>
                <Link href="/about">About</Link>
                <Link href="/scan">Scan</Link>
            </div>
        </nav>
    )
}

export default Navbar

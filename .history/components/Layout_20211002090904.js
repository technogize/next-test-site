import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = props => {
    const { children } = props

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

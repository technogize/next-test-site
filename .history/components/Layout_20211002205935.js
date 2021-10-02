import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = props => {
    const { children } = props

    return (
        <div className='content'>
            <Navbar />
            <div className='pageContent'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

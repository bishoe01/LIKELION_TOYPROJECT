import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Guidebook from '../components/Guidebook'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'
function Home() {
    return (
        <div>
            <Hero />
            <Banner />
            <Category />
            <Guidebook />
            <BottomBanner />
            <Footer />
        </div>
    )
}

export default Home
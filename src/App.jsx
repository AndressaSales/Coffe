import React from 'react'
import Navbar from './components/Navbar'
import BannerHero from './components/BannerHero'
import Services from './components/Services'
import Banner from './components/Banner'
import Features from './components/Features'
import Tea from './components/Tea'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <BannerHero/>
      <Services />
      <Banner/>
      <Features />
      <Tea />
      <Footer />
    </div>
  )
}

export default App
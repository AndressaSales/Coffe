import React from 'react'
import Navbar from './components/Navbar'
import BannerHero from './components/BannerHero'
import Services from './components/Services'
import Banner from './components/Banner'
import Features from './components/Features'
import Tea from './components/Tea'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <BannerHero/>
      <Services />
      <Banner/>
      <Features />
      <Tea />
    </div>
  )
}

export default App
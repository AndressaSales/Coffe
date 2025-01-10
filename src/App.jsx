import React from 'react'
import Navbar from './components/Navbar'
import BannerHero from './components/BannerHero'
import Services from './components/Services'
import Banner from './components/Banner'
const App = () => {
  return (
    <div className=''>
      <Navbar />
      <BannerHero/>
      <Services />
      <Banner/>
    </div>
  )
}

export default App
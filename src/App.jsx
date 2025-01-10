import React from 'react'
import Navbar from './components/Navbar'
import BannerHero from './components/BannerHero'
import Services from './components/Services'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <BannerHero/>
      <Services />
    </div>
  )
}

export default App
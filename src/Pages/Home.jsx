import React from 'react'
import DemoRibbon from '../Components/DemoRibbon'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Welcome from '../Components/Welcome'
import HowItWorks from '../Components/HowItWorks'
import FindPartner from '../Components/FindPartner'
import LatestBlog from '../Components/LatestBlog'

const Home = () => {
  return (
    <>
      <DemoRibbon/>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <HowItWorks/>
      <LatestBlog/>
      <FindPartner/>
      
    </>
  )
}

export default Home

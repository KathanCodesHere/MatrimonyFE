import React from 'react'
import DemoRibbon from '../Components/DemoRibbon'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Welcome from '../Components/Welcome'
import HowItWorks from '../Components/HowItWorks'
import FindPartner from '../Components/FindPartner'
import LatestBlog from '../Components/LatestBlog'
import OurMembers from '../Components/OurMembers'
import Footer from '../Components/Footer'
import Stories from '../Components/Stories'
import Testimonials from '../Components/Testimonials'
const Home = () => {
  return (
    <>
      <DemoRibbon/>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <OurMembers/>
      <Testimonials/>
      <Stories/>
      <HowItWorks/>
      <LatestBlog/>
      <FindPartner/>
      <Footer/>
    </>
  )
}

export default Home

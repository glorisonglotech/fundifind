import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Navigation from '@/components/Navigation'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function Index() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Index
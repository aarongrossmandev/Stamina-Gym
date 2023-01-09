import Benefits from '@/components/benefits'
import ContactUs from '@/components/contactUs'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Home from '@/components/home'
import OurClasses from '@/components/ourClasses'
import Training from '@/components/training'
import React from 'react';


function HomePage(){
  return (
  <div className="app bg-yellow-20">  
      <Home />
        <Hero />
        <Benefits />
        <OurClasses />
        <Training  />
        <ContactUs  />
        <Footer />
     </div> 
  )
}
export default HomePage;

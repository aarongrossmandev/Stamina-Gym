import Benefits from '@/components/benefits'
import ContactUs from '@/components/contactUs'
import ContactForms from '@/components/contactUs/ContactForms'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Home from '@/components/home'
import OurClasses from '@/components/ourClasses'
import Training from '@/components/training'

function HomePage(){
  return (
  <div className="app">  
      <Home />
        <Hero />
        <Benefits />
        <OurClasses />
        <Training  />
        <ContactForms  />
        <Footer />
     </div> 
  )
}
export default HomePage;

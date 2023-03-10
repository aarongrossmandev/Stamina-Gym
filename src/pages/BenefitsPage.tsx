import BenefitHero from '@/components/benefits/BenefitHero'
import BenefitsAccordion from '@/components/benefits/BenefitsAccordion'
import IndustryBest from '@/components/benefits/IndustryBest'
import TwentyFourHour from '@/components/benefits/TwentyFourHour'
import ContactForms from '@/components/contactUs/ContactForms'
import Footer from '@/components/footer'


const BenefitsPage = () => {
  return (
     <div className="app overflow-x-hidden">
        <BenefitHero />
        <BenefitsAccordion />
        <TwentyFourHour />
        <IndustryBest />
        <ContactForms />
        <Footer />
     </div>
  )
}

export default BenefitsPage;
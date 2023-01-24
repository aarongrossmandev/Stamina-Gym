import BenefitHero from '@/components/benefits/BenefitHero'
import BenefitsAccordion from '@/components/benefits/BenefitsAccordion'
import IndustryBest from '@/components/benefits/IndustryBest'
import TwentyFourHour from '@/components/benefits/TwentyFourHour'
import ContactForms from '@/components/contactUs/ContactForms'
import Footer from '@/components/footer'
import BannerBottom from '@/shared/BannerBottom'
import React from 'react'

type Props = {}

const BenefitsPage = (props: Props) => {
  return (
     <div className="app">
        <BenefitHero />
        <BenefitsAccordion />
        <TwentyFourHour />
        <IndustryBest />
        <ContactForms />
        <Footer />
     </div>
  )
}

export default BenefitsPage
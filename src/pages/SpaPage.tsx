import Footer from '@/components/footer'
import SpaAccordion from '@/components/spa/SpaAccordion'
import SpaHero from '@/components/spa/SpaHero'
import SpaSlider from '@/components/spa/SpaSlider'
import BannerBottom from '@/shared/BannerBottom'

import React from 'react'

type Props = {}

const SpaPage = (props: Props) => {
  return (
    <div className="app">
      <SpaHero />
      <SpaAccordion />
      <SpaSlider />
      <BannerBottom />
      <Footer />
    </div>
  )
}

export default SpaPage
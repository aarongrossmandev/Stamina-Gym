import Footer from '@/components/footer'
import PoolAccordion from '@/components/pool/PoolAccordion'
import PoolHero from '@/components/pool/PoolHero'
import BannerBottom from '@/shared/BannerBottom'




const Pool = () => {
  return (
    <div className="app">
      <PoolHero />
      <PoolAccordion />
      <BannerBottom />
      <Footer />
    </div>
  )
}

export default Pool
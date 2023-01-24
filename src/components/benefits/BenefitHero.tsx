import React from 'react';
import BenefitHeroMain from '@/assets/benefits-hero.jpg';
import { Link } from 'react-router-dom';

type Props = {}

const BenefitHero = (props: Props) => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-start items-center relative">
          <img src={BenefitHeroMain} alt="benefit-hero-graphic" className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />
        
          <div className="xxs:ml-16 xs:ml-24 md:ml-56 mb-24 ">
            <h1 className="text-primary-500 text-6xl md:text-8xl font-bold leading-tight">BENEFITS <br /> 
            AT <span className="text-white font-bold text-6xl md:text-8xl">STAMINA</span></h1>
            
            <button className="action-button z-10 mt-8">
              <Link to="/contact" 
             >
              Try Free Today
            </Link>
            </button>
            
          </div>
        </div>
    </section>
  )
}

export default BenefitHero
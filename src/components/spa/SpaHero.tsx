import React from 'react'
import SpaHeroImage from '@/assets/spa-hero.jpg';
import { Link } from 'react-router-dom';

type Props = {}

const SpaHero = (props: Props) => {
  return (
    <section className="w-full" id="trainers">
        <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-end items-end relative">
          <img src={SpaHeroImage} alt="trainer-training-hero-graphic" className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />

          <div className="xxs:mr-16 xs:mr-24 md:mr-56 mb-24 ">
            <h1 className="hero-header-text"> <span className="text-primary-500">SPA DAY</span> <br /> 
            RELAXATION <br /> 
            AT <span className="text-red-500">STAMINA</span></h1>
            
            <button className="action-button z-10 mt-8">
              <Link to="/contact" 
             >
              Book Now
            </Link>
            </button>
            
          </div>
        </div>
      </section>
  )
}

export default SpaHero
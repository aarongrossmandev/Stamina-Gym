import React from 'react';
import {Link} from 'react-router-dom';
import TrainingHeroImage from '@/assets/training-hero.jpg';

type Props = {}

const TrainingHero = (props: Props) => {
  return (
    <section className="w-full" id="trainers">
        <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-end items-end relative">
          <img src={TrainingHeroImage} alt="trainer-training-hero-graphic" className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />

          <div className="xxs:mr-16 xs:mr-24 md:mr-56 mb-24 ">
            <h1 className="hero-header-text">PERSONAL <br /> 
            TRAINING <br /> 
            AT <span className="text-red-500">STAMINA</span></h1>
            
            <button className="action-button z-10 mt-8">
              <Link to="/contact" 
             >
              Learn More
            </Link>
            </button>
            
          </div>
        </div>
      </section>
  )
}

export default TrainingHero
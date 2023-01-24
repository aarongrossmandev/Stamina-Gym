import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'
import CardioHero from '../../assets/cardio-hero.jpg';
import { motion } from 'framer-motion';

type Props = {}

const Intensity = (props: Props) => {
  return (
    <section className="w-full">
        <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-end items-end relative">
          <img src={CardioHero} alt="intensity-hero-graphic" className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />
          <div className="xxs:mr-16 xs:mr-24 md:mr-56 mb-24" id="movement">
            <h1 className="hero-header-text" >Movement <br /> 
            <span className="ml-12 text-primary-500">&</span> <br /> 
            PER<span className="text-primary-500">FORMANCE</span></h1>
           </div>
        </div>
      </section>
  )
}

export default Intensity
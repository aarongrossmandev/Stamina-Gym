import { useState } from 'react'
import {AquaFitness} from '../../shared/Data';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import ClassesItem from './ClassesItem';
import { motion } from 'framer-motion';

const AquaFitnessMap = () => {
  const [isHovered, setIsHovered] = useState(-1);
  

 
 
 function toggleHover(index: any): void{
    setIsHovered(index);
  }

 
 return (
    <div className="w-full bg-black pb-8 pt-16" id="aqua">
      <motion.div 
        className="w-full md:w-5/6 mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-2 items-center" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ duration: 2, amount:1 }}
        variants={{
         hidden: { opacity: 0, y: 200 },
         visible: { opacity: 1, y:0 }
       }} 
      >
        {/* CARD */}
        {AquaFitness.map((data: any, index:any) => (
          <Link to={'/classes/' + data.id} className="w-3/4 max-h-[375px] sm:w-[350px] relative overflow-hidden" key={"index" + data.id}>
          <ClassesItem 
            title={data.title}
            image={data.image} 
            index={index}
            />
           </Link>
        ))}
        
      </motion.div>
      <div 
          className="flex justify-center my-16 p-8 transition-all duration-500 ease-in-out" 
        >
      <AnchorLink href="#strengthPerformance">
      <ChevronDoubleUpIcon className="h-12 w-12 text-primary-500 transition-all duration-500 ease-in-out hover:text-white hover:animate-bounce" />
      </AnchorLink>

      
    </div>
    </div>
  )
}

export default AquaFitnessMap;

function componentDidMount() {
  throw new Error('Function not implemented.');
}

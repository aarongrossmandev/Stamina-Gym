import React, { useState } from 'react'
import {intensityClass, BodyMovement} from '../../shared/Data';
import { Link } from 'react-router-dom';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const IntensityMap = () => {
  const [isHovered, setIsHovered] = useState(-1);
  const [pickedClasses, setPickedClasses] = useState("")
  const [chevronHovered, setChevronHovered] = useState(false);

 
 
 function toggleHover(index: any): void{
    setIsHovered(index);
  }


 
 return (
    <div className="w-full bg-black pb-8 pt-16">
      <div className="w-full md:w-5/6 mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-2 items-center">
        {/* CARD */}
        {intensityClass.map((data:any, index:number, id: any) => (
          <Link to={'/classes/' + data.id} key={"index" + data.id } className="w-3/4 max-h-[375px] sm:w-[350px] relative overflow-hidden">
         <div 
          className="card bg-primary-500 " 
          onMouseEnter={() => toggleHover(index)}
          onMouseLeave={() => toggleHover(-1)}
       >
          {/* Class IMAGE */}
          <div>
            <img src={data.image} alt="Body-pump-graphic" className="object-cover object-center w-[100%] h-[100%]" />
          </div>
          {/* Title */}
          <h4 className="absolute bottom-0 left-0 ml-2 mb-4 text-white/60 text-3xl">{data.title}</h4>
          <div className={isHovered === index ? "card-info-visible" : "card-info-hidden"}>
            <h4 className="text-3xl ml-12 -rotate-12">{data.title}</h4>
          </div>
        </div>
      </Link>
        ))}
        
    </div>
    <div 
      className="flex justify-center my-16 p-8 transition-all duration-500 ease-in-out" 
    >
      <AnchorLink href="#bodyMovement">
      <ChevronDoubleDownIcon className="h-12 w-12 text-primary-500 hover:text-white hover:animate-bounce" />
      </AnchorLink>

      
    </div>
    </div>
  )
}

export default IntensityMap;

function componentDidMount() {
  throw new Error('Function not implemented.');
}

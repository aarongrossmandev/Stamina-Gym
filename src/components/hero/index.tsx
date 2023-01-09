import Spa from '@/assets/spa.jpg';
import Pool from '@/assets/pool1.jpg';
import React from 'react';
import { useState } from 'react';

type Props = {}

const Hero = (props: Props) => {

  const [backgroundImage, setBackgroundImage] = useState(true);




  return (
    <section className="mb-0">
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full mb-20 relative flex justify-center items-end">
        {backgroundImage && ( 
          <img src={Spa} alt="Spa" className="h-full w-full object-cover absolute mix-blend-overlay" />
          )}
          {!backgroundImage && (
            <img src={Pool} alt="Spa" className="h-full w-full object-cover absolute mix-blend-overlay" />
          )}

        <div className="p-4 md:w-[1000px] mb-36 flex gap-16 justify-center text-white text-right overflow-x-auto">
          
          <div 
          className={`p-8 border-t-2 bg-primary-500/80  border-primary-500 md:hover:bg-primary-500/80 z-[1] transition duration-500 ease-in-out 
           w-[350px] md:w-[500px] ${backgroundImage === true ? 'bg-primary-500/80' : "md:bg-transparent"}`}
            onMouseEnter={() => setBackgroundImage(true)}
          >
            <h1 className="font-bold my-2 text-lg md:text-2xl text-left">The SPA</h1>
            <p className="text-left">Take time to regenerate and elevate your performance with our always-evolving selection of Spa treatments and services.</p>
            <button className="mt-5 font-bold">Discover the Spa </button>
          </div>
          
          <div 
          className={`p-8 border-t-2 bg-primary-500/80  border-primary-500 md:hover:bg-primary-500/80 z-[1] transition duration-500 ease-in-out 
          w-[350px] md:w-[500px] ${backgroundImage === false ? 'bg-primary-500/80' : "md:bg-transparent"}`}
            onMouseEnter={() => setBackgroundImage(false)}
          >
            <h1 className="font-bold my-2 text-lg md:text-2xl text-left">THE POOL</h1>
            <p className="text-left">Come visit us at the spa and recover from your fitness workout</p>
            <button className="mt-5 font-bold">Discover the Spa </button>
          </div>
        </div>
      </div>
        
       
    </section>
  )
}

export default Hero
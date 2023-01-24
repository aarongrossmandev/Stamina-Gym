import Spa from '@/assets/spa.jpg';
import Pool from '@/assets/pool1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@/hooks/useMediaQuery';



const Hero = () => {

  const [backgroundImage, setBackgroundImage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:850px)");

return (
    <section className="mb-0 overflow-hidden">
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full relative flex justify-center items-end">
        {backgroundImage && ( 
          <img src={Spa} alt="Spa" className="h-full w-full object-cover absolute mix-blend-overlay" />
          )}
          {!backgroundImage && (
            <img src={Pool} alt="Spa" className="h-full w-full object-cover absolute mix-blend-overlay" />
          )}

        <div className="p-4 md:w-[1000px] mb-36 flex gap-16 justify-center text-white text-right overflow-x-auto">
          
          <div 
          className={`p-2 md:p-8 border-t-2 bg-primary-500/80  border-primary-500 cursor-pointer md:hover:bg-primary-500/80 z-[1] transition duration-500 ease-in-out 
           w-[250px] md:w-[500px] ${backgroundImage === true ? 'bg-primary-500/80' : "xxs:bg-transparent"}`}
            onMouseEnter={() => setBackgroundImage(true)}
            onClick={() => setBackgroundImage(true)}
          >
            <h1 className="font-bold my-2 text-lg md:text-2xl text-left">The SPA</h1>
            <p className={isAboveMediumScreens ? 'visible text-left' : 'hidden'}>Take time to regenerate and elevate your performance with our always-evolving selection of Spa treatments and services.</p>
            <button className="mt-5 font-bold relative z-20 border border-transparent hover:border hover:border-white p-4">
              <Link to="/spa">
                Discover the Spa
              </Link>
            </button>
          </div>
          
          <div 
          className={`p-2 md:p-8 border-t-2 bg-primary-500/80  border-primary-500 md:hover:bg-primary-500/80 z-[1] transition duration-500 ease-in-out 
          w-[250px] md:w-[500px] cursor-pointer ${backgroundImage === false ? 'bg-primary-500/80' : "xxs:bg-transparent"}`}
            onMouseEnter={() => setBackgroundImage(false)}
            onClick={() => setBackgroundImage(false)}
          >
            <h1 className="font-bold my-2 text-lg md:text-2xl text-left">THE POOL</h1>
            <p className={isAboveMediumScreens ? 'visible text-left' : 'hidden'}>Come visit us at the pool and recover from your fitness workout</p>
            <button className="mt-5 font-bold relative z-20 border border-transparent hover:border hover:border-white p-4">
              <Link to="/pool">
                Discover the Pool
              </Link>
            </button>
          </div>
        </div>
      </div>
        
       
    </section>
  )
}

export default Hero
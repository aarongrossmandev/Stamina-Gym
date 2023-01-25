import {SpaImageSlide} from "@/shared/Data";
import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

import smallSlide1 from '@/assets/spa-slide1.jpg';
import smallSlide2 from '@/assets/spa-slide2.jpg';
import smallSlide3 from '@/assets/spa-slide3.jpg';

const SpaSlider = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SpaImageSlide.length;

  const slideBox = `absolute bottom-0 h-[100px] md:h-[100px] w-[100px] transition-all duration-500 ease-in-out bg-transparent z-30 text-center flex flex-col justify-center items-center cursor-pointer text-white 
  xs:text-sm text-md md:text-lg`;

  const autoScroll = true;
  let slideInterval:any;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, []);

  useEffect(() => {
    if(autoScroll){
      auto()
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);


  return (
    <section className="w-full h-[100vh] bg-black overflow-hidden relative">
      <div className="absolute bottom-2 left-[10%] xs:left-[20%] sm:left-[35%] md:left-[40%] flex justify-center items-center p-12 mx-auto mb-8">
      <span 
        onClick={() => setCurrentSlide(0)}
        className={`${slideBox} left-0 ${currentSlide === 0 ? "border border-primary-500" : "border border-transparent"}`}>
          <img src={smallSlide1} alt="small slide graphic one" className="w-full h-full object-cover object-center" />
         </span>
      <span
        onClick={() => setCurrentSlide(1)} 
        className={`${slideBox} left-28 ${currentSlide === 1 ? "border border-primary-500" : "border border-transparent"}`}>
           <img src={smallSlide2} alt="small slide graphic two" className="w-full h-full object-cover object-center" />
         </span>
      <span
        onClick={() => setCurrentSlide(2)}
        className={`${slideBox} left-56  ${currentSlide === 2 ? "border border-primary-500" : ""}`}>
          <img src={smallSlide3} alt="small slide graphic three" className="w-full h-full object-cover object-center" />
        </span>
      </div>

      <div className="h-[100%] w-full relative overflow-hidden">
          {SpaImageSlide.map((slide, index) => (
            <div className={index === currentSlide ? "slide slide-active" : "slide"} key={slide.id+index}>
              {index === currentSlide && (
                <>
                {isSmallScreen ? (
                  <img src={slide.image} alt="slider-graphic" className="object-cover object-center w-full h-full" />
                ): (
                  <img src={slide.image} alt="slider-graphic" className="object-cover object-center w-full h-full" />
                )}
                 
                 </>
              )}
            </div>
          ))}
      </div>
    </section>
  )
}

export default SpaSlider;
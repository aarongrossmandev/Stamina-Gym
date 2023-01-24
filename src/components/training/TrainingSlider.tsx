import {trainerImageSlide} from "@/shared/Data";
import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const TrainingSlider = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = trainerImageSlide.length;

  const slideBox = `absolute bottom-0 h-[60px] md:h-[100px] w-[33.33%] transition-all duration-500 ease-in-out bg-transparent z-30 text-center flex flex-col items-center cursor-pointer text-white 
  xs:text-sm text-md md:text-lg hover:bg-primary-500/50`;

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
      <span 
        onClick={() => setCurrentSlide(0)}
        className={`${slideBox} left-0 ${currentSlide === 0 ? "bg-primary-500/50" : ""}`}>
          Unlimited Potential
          {currentSlide === 0 && isAboveMediumScreens && (
            <span className="text-md">You only limit yourself with your mind set.</span>  
            ) }
        </span>
      <span
        onClick={() => setCurrentSlide(1)} 
        className={`${slideBox} left-[33.33%] ${currentSlide === 1 ? "bg-primary-500/50" : ""}`}>
          Beating Failure 
          {currentSlide === 1 && isAboveMediumScreens && (
            <span className="text-md">In your corner pushing you for success every step of the way. </span>  
            ) }
        </span>
      <span
        onClick={() => setCurrentSlide(2)}
        className={`${slideBox} right-0 ${currentSlide === 2 ? "bg-primary-500/50" : ""}`}>
          Dedication
          {currentSlide === 2 && isAboveMediumScreens && (
            <span className="text-md">To do it every single day and see what can be achieved with your own strength</span>  
            ) }
        </span>

      <div className="h-[100%] w-full relative overflow-hidden">
          {trainerImageSlide.map((slide, index) => (
            <div className={index === currentSlide ? "slide slide-active" : "slide"} key={slide.id+index}>
              {index === currentSlide && (
                <>
                {isSmallScreen ? (
                  <img src={slide.image} alt="slider-graphic" className="object-cover object-left w-full h-full" />
                ): (
                  <img src={slide.image} alt="slider-graphic" className="object-cover object-center w-full h-full" />
                )}
                  <div className="absolute left-[10%] top-[25%]">
                    <h1 className="text-white font-bold text-5xl max-w-[450px]">{slide.title}</h1>
                  </div>
                 </>
              )}
            </div>
          ))}
      </div>
    </section>
  )
}

export default TrainingSlider
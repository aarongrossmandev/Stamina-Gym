import { motion, AnimatePresence } from 'framer-motion';
import { BenefitsAccordionData } from '@/shared/AccordionData'
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import Benefit1 from '@/assets/benefits-image1.jpg';
import Benefit2 from '@/assets/benefits-image2.jpg';
import Benefit3 from '@/assets/benefits-image3.jpg';

type Props = {}

const BenefitsAccordion = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isActive, setIsActive] = useState(0)

  function toggle(index:any){
    if(isActive === index ){
      return setIsActive(-1)
    }
    setIsActive(index)
  }

  return (
    <section className="pb-12 md:pb-24 bg-black">
      <motion.div 
        className="h-full w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ duration: 2, amount: 1 }}
        variants={{
            hidden: { opacity: 0, x:300 },
            visible: { opacity: 1, x:0 }
        }} 
      >
        <div className="md:pb-12 pb-4 w-4/6 mx-auto pt-8 flex flex-1 md:justify-end justify-center">
        {isAboveMediumScreens ? (
          <h1 className="md:text-6xl text-5xl font-bold text-primary-500 mt-8">
         BENEFITS <br />
        OF MEMBERS 
        </h1>
        ): (
          <h1 className="md:text-6xl text-5xl font-bold text-primary-500 mt-8 text-center">
              BENEFITS OF MEMBERS
          </h1>
        )}
            
      </div>
      
        <div className="w-5/6 h-full mx-auto py-8 flex-col md:flex md:flex-row justify-between items-center overflow-hidden">
          <div className="w-full md:w-1/2 h-1/4 md:h-full">
          <AnimatePresence>
          {isActive === 0 && (
            <motion.img
              initial={{ opacity:0}}
              animate={{ opacity: 1}}
              transition={{ duration: 2 }}
              src={Benefit1} alt="benefit accordion graphic one"
              className={isActive === 0 ? "image-show" : "image-hidden"} 
            />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {isActive === 1 && (
            <motion.img
              initial={{ opacity:0}}
              animate={{ opacity: 1}}
              transition={{ duration: 2 }}
              src={Benefit2} alt="benefit accordion graphic two" 
              className={isActive === 1 ? "image-show" : "image-hidden"} 
              />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {isActive === 2 && (
            <motion.img
              initial={{ opacity:0}}
              animate={{ opacity: 1}}
              transition={{ duration: 2 }}
              src={Benefit3} alt="benefit accordion graphic three" 
              className={isActive === 2 ? "image-show" : "image-hidden"} 
              />
            )}
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 mx-auto flex flex-col">
          {BenefitsAccordionData.map((items, index) => (
            <div key={index}>
            <div className="flex flex-col my-8 border-b border-primary-500 w-1/2 mx-auto cursor-pointer" onClick={() => toggle(index)}>
              <h4 className="text-2xl font-bold text-primary-500">{items.title}</h4>
              <div  className={isActive === index ? "accordion-show" : "accordion"}>
              <p>{items.content}</p>
            </div>
            </div>
           </div>
          ))}
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}

export default BenefitsAccordion;
import React from 'react'
import Image24 from '@/assets/image5.png';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const TwentyFourHour = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-5/6 flex flex-col-reverse md:flex-row md:justify-between items-center mx-auto py-32">
       {/* Description */}
        <motion.div 
          initial={{opacity:0, x:-500}}
          whileInView={{opacity: 1, x:0}}
          transition={{duration: 2.5}}
          viewport={{once: true }}
          className="md:w-1/3 md:mx-8 text-center md:text-right">
          <h3 className="font-bold text-5xl text-primary-500 underline text-center mt-12 md:mt-0">24/7 ACCESS</h3>
          <p className="text-lg mt-8 text-white text-left">Access to our facilities are available 24/7 with our members key access. Rented lockers are also available 24 hours.
          Never miss another workout again!</p>
          <button className="mt-16 text-primary-500 border border-primary-500 py-2 px-4 hover:text-white hover:border-white transition-all duration-500 ease-in-out">
            <AnchorLink href="#contactus">Join Now</AnchorLink>
          </button>
        </motion.div>
         {/* Image */}
         <motion.div 
            initial={{opacity:0, x:500}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 2.5}}
            viewport={{once: true }}
            className="md:w-1/2">
          <img src={Image24} alt="24/7 image high fiving" className="object-cover object-center border-4 border-primary-500 rounded-lg" />
        </motion.div>
      </div>
    </section>
  )
}

export default TwentyFourHour
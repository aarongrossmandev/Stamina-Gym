import {useState, useRef} from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '@/assets/image1.png';




const IndustryBest = () => {
  
  return (
    <section className="w-full bg-black">
      <div className="w-5/6 flex flex-col md:flex-row md:justify-between items-center mx-auto py-32">
         {/* Image Slider */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true}}
           transition={{ duration: 2, amount: 1 }}
           variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x:0 }
          }}
          className="md:w-1/2">
            <img src={image1} alt="" className="w-full h-full rounded-lg border-4 border-primary-500 object-cover object-center" />
        </motion.div>

       {/* Description */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ duration: 2, amount: 1 }}
          variants={{
           hidden: { opacity: 0, x: 200 },
           visible: { opacity: 1, x:0 }
         }}
          className="md:w-1/3 md:mx-8 text-center md:text-left">
          <h3 className="font-bold text-5xl text-primary-500 underline text-center mt-12 md:mt-0">Industry Best </h3>
          <p className="text-lg mt-8 text-white">
            Meet your goals with the multitude of classes, coaching sessions, or personal training. Enjoy our top of the line fitness Industry
            and reach your peak physical performance or whatever your goals may be.
          </p>
          <p className="text-lg mt-8 text-white">
            Join now to see what all the talk is about and see what a peak industry of fitness looks like.
          </p>

          <button 
            className="mt-16 text-primary-500 border border-primary-500 py-2 px-4 hover:text-white hover:border-white transition-all duration-500 ease-in-out">
            <Link to="/contact">
              Learn More
            </Link>
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}

export default IndustryBest;
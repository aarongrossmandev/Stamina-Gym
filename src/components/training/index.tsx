import { motion } from 'framer-motion';
import Trainer from '@/assets/trainer.png';
import { Link } from 'react-router-dom';




const Training = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
          <motion.div 
          className="mx-auto w-4/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ duration: 2, amount:1 }}
          variants={{
           hidden: { opacity: 0, x: -200 },
           visible: { opacity: 1, x:0 }
         }}
        >
          <div className="md:w-3/5 basis-2/5 text-end">
            <h1 className="header-text text-yellow-20 text-start">OUR TRAINERS</h1>
            <p className="py-5 text-start text-white">
              Our fitness instructors and trainers are some of the best in the world, with years of experience and expertise we're here
              to help you reach your goals.
            </p>
            <button className="action-button">
              <Link to="/training">
              View More
              </Link>
              
            </button>
          </div>
        </motion.div>

         <div className="basis-3/5 md:justify-items-start">
          <img src={Trainer} alt="trainer-graphic" />
         </div>

        </div>
    </section>
  )
}

export default Training
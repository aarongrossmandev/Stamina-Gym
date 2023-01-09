import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Trainer from '@/assets/trainer.png';


type Props = {
setSelectedPage: (value: SelectedPage) => void;
}

const Training = ({ setSelectedPage }: Props) => {
  return (
    <section id="training" className="w-full bg-gray-1000 py-20">
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" 
        onViewportEnter={() => setSelectedPage(SelectedPage.Training)}
        >
          <motion.div 
          className="mx-auto w-4/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 1 }}
          variants={{
                hidden: { opacity: 0, x:600 },
                visible: { opacity: 1, x:0 }
          }}
        >
          <div className="md:w-3/5 basis-2/5 text-end">
            <h1 className="header-text text-yellow-20 text-start">OUR TRAINERS</h1>
            <p className="py-5 text-yellow-20">
              Our fitness instructors and trainers are some of the best in the world, with years of experience and expertise we're here
              to help you reach your goals.
            </p>
            <button className="text-primary-100">
              Meet Our Trainers
            </button>
          </div>
        </motion.div>

         <div className="basis-3/5 md:justify-items-start">
          <img src={Trainer} alt="trainer-graphic" />
         </div>

        </motion.div>
    </section>
  )
}

export default Training
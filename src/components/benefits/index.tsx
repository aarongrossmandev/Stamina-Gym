import { BenefitType} from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import Benefit from "./Benefit";
import benefitsImage from '@/assets/benefits.png';
import { Link } from 'react-router-dom';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
}



const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Top Tier Facilities",
    description: "Up to date, state of the art equipment kept clean and sanitary in a spacious area.",
    url: "/contact"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Top Tier Classes",
    description: "Well structured classes fit to get you in top tier performance shape, leader by our amazing instructors.",
    url: "/classes"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Top Tier Trainers",
    description: "Trainers who have been doing this for years and have many years of real world experience under their belts.",
    url: "/training"
  },
]



const Benefits = () => {
  return (
    <section id="benefits" className="bg-black pt-20">
      <div className="mx-auto w-5/6 pb-20">
        {/* Header */}
        <motion.div 
          className="md:my-5 md:w-3/5" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
              hidden: { opacity: 0, x:-100 },
              visible: { opacity: 1, x:0 }
          }}
          >
          <h1 className="header-text">MORE THAN JUST A GYM</h1>
          <p className="my-5 text-sm md:text-lg text-white">
            We are at the peak when it comes to the fitness industry. We provide state of the art fitness equipment, top of the line 
            fitness classes, and personal trainers. Join us today and start reaching your fitness goals, or let us help you every step of 
            the way.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          variants={container}
          >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              url={benefit.url}
             />
          ))}
        </motion.div>

            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* GRAPHIC */}
              <img 
                className="mx-auto"
                alt="benefits-graphic" 
                src={benefitsImage} 
              />

              {/* DESCRIPTION */}
              <div>
                {/* TITLE */}
                <div className="relative">
                  <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5}}
                      transition={{ delay: 0.3, duration: 1 }}
                      variants={{
                          hidden: { opacity: 0, x:100 },
                          visible: { opacity: 1, x:0 }
                      }}
                    >
                      <h1 className="header-text mt-12 md:mt-0">MILLIONS OF HAPPY MEMBERS GETTING{""}
                        <span className="text-primary-500"> FIT</span>
                      </h1>
                    </motion.div>
                  
                </div>

                {/* DESCRIPTION */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5}}
                  transition={{ delay: 0.3, duration: 1 }}
                  variants={{
                      hidden: { opacity: 0, x:100 },
                      visible: { opacity: 1, x:0 }
                  }}
                >
                  <p className="my-5 text-white">
                    No matter what your goals are with us you can come to <span className="text-primary-500 font-bold"> STAMINA </span>
                    and meet any goals you're trying to achieve and we'll be there every step forward to push you through.
                  </p>
                  <p className="mb-5 text-white">
                    We live by the words today was not tough until we've reached tomorrow. Never quit, never give up, and never back down, set your eyes
                    forward and dont ever look back.
                  </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                  <Link to="/contact"
                      className="action-button"
                    >
                      Join Now
                    </Link>
                  
                </div>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Benefits
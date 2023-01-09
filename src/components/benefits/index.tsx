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
    description: "Up to date, state of the art equipment kept clean and sanitary in a spacious area."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Top Tier Classes",
    description: "Well structured classes fit to get you in top tier performance shape, leader by our amazing instructors."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Top Tier Trainers",
    description: "Trainers who have been doing this for years and have many years of real world experience under their belts.",
    
  },
]

type Props = {}

const Benefits = (Props: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 pb-20">
      <div>
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
          <p className="my-5 text-sm md:text-lg">
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
                  <div className="before:absolute bofore:-top-20 before:-left-20 before:z-[-1] before:content-AbstractWaves">
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
                      <h1 className="header-text">MILLIONS OF HAPPY MEMBERS GETTING{""}
                        <span className="text-primary-500"> FIT</span>
                      </h1>
                    </motion.div>
                  </div>
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
                  <p className="my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quae officiis, tempora aspernatur deleniti blanditiis 
                    debitis earum necessitatibus autem explicabo pariatur assumenda quidem, eaque recusandae, voluptatem architecto. 
                    Accusamus natus architecto eum ad voluptates illum fuga vero quas facere, repellendus at omnis consequatur blanditiis, 
                    iste quasi maxime laboriosam cupiditate non delectus!
                  </p>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit cumque tempore officiis, minima tenetur assumenda 
                    iste vel magnam! Amet inventore nostrum quis. Beatae sunt laborum ipsam adipisci, necessitatibus expedita.
                  </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <Link to="/" 
                      className="action-button"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Benefits
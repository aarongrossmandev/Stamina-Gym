import { ClassType} from '@/shared/types'
import image3 from '@/assets/image3.png';
import WeightTraining from '@/assets/weightTraining.jpg';
import Cardio from '@/assets/cardio.jpg';
import Yoga from '@/assets/yoga.jpg';
import Boxing from '@/assets/boxing.jpg';
import Climbing from '@/assets/climbing.jpg';
import Swimming from '@/assets/swimming.jpg';
import Cycling from '@/assets/cycling.jpg';
import Pilates from '@/assets/pilates.jpg';
import Dance from '@/assets/dance.jpg';
import { motion } from 'framer-motion';
import Class from './Class';
import { Link } from 'react-router-dom';



const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: WeightTraining,
  },
  {
    name: "Cardio Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Cardio,
  },
  {
    name: "Ab Trainer Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: image3,
  },
  {
    name: "Yoga Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Yoga,
  },
  {
    name: "Boxing Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Boxing,
  },
  {
    name: "Rock Climbing Classes",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Climbing,
  },
  {
    name: "Swimming",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Swimming,
  },
  {
    name: "Cycling",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Cycling,
  },
  {
    name: "Pilates",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Pilates,
  },
  {
    name: "Dance",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: Dance,
  },
]



const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-white py-40">
      <div>
        <motion.div 
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.75 }}
          variants={{
                hidden: { opacity: 0, x:-100 },
                visible: { opacity: 1, x:0 }
          }}
        >
          <div className="md:w-2/5 text-end">
            <h1 className="header-text text-start">OUR CLASSES</h1>
            <p className="py-5 text-start">
              A brief look into our selection of classes you could start your journey in today.
            </p>
            <Link 
              to="/classes" 
              className="text-right border border-primary-500 p-2 text-primary-500 hover:text-white hover:bg-primary-500 rounded-md 
              transition-all duration-500 ease-in-out">
              View More
            </Link>
          </div>
        </motion.div>

        <div className="mt-10 h-[350px] w-full overflow-x-auto cursor-grab md:cursor-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-white">
          <ul className="w-[2800] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>

      </div>

    </section>
  )
}

export default OurClasses
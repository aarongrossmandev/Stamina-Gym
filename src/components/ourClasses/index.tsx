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



const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: WeightTraining,
  },
  {
    name: "Cardio Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Cardio,
  },
  {
    name: "Ab Trainer Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: image3,
  },
  {
    name: "Yoga Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Yoga,
  },
  {
    name: "Boxing Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Boxing,
  },
  {
    name: "Rock Climbing Classes",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Climbing,
  },
  {
    name: "Swimming",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Swimming,
  },
  {
    name: "Cycling",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Cycling,
  },
  {
    name: "Pilates",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Pilates,
  },
  {
    name: "Dance",
    description: "Gonna fill out a description here when i decide what kind of classes and maybe add a link to an individual page for it smile :)",
    image: Dance,
  },
]



const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-black py-40">
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
          <div className="md:w-3/5">
            <h1 className="header-text">OUR CLASSES</h1>
            <p className="py-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero nam quis sequi debitis magnam consequuntur corporis 
              omnis sit dignissimos?
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-white">
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
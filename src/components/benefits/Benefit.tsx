import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center flex-1" 
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-gray-1000 text-secondary-500 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
        <Link to="/Contact" 
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
         >
          <p>Learn More</p>
        </Link>
    </motion.div>
  )
}

export default Benefit
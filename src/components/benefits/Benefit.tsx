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
  url: string;
}

const Benefit = ({ icon, title, description, url }: Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-md border-4 bg-gradient-redyellow border-primary-500 px-5 py-16 text-center flex-1" 
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-primary-500 bg-blue-900 text-primary-500 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="my-3 text-white">{description}</p>
        <Link to={url}
          className="text-sm font-bold text-blue-900 underline hover:text-white transition-all duration-500 ease-in-out"
         >
          <p>Learn More</p>
        </Link>
    </motion.div>
  )
}

export default Benefit
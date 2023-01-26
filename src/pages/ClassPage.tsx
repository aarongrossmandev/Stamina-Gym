import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { AquaFitness, BodyMovement, intensityClass } from '../shared/Data';
import { BsClockHistory } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { TfiTarget } from 'react-icons/tfi';
import Footer from '@/components/footer';
import ContactForm from '@/components/contactUs/ContactForm';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { ClassesClassType } from '@/shared/types';



const ClassPage = () => {
  const [details, setDetails] = useState<any>({});
  const { id } = useParams();
  
 
useEffect(() => {
    const getDetails = intensityClass.map((data:any) => {
      if (data.id  === id) {
        return setDetails(data)
      } 
    })
  }, [id])
  
  
useEffect(() => {
    const getDetails = BodyMovement.map((data:ClassesClassType) => {
      if (data.id  === id) {
        return setDetails(data)
        }
     })
  }, [id])

  useEffect(() => {
    const getDetails = AquaFitness.map((data:ClassesClassType) => {
      if (data.id  === id) {
       return setDetails(data)
      } 
    })
  }, [id])



return (
    <section className="w-full h-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full relative">
        <Link to="/classes">
        <ArrowUturnLeftIcon className="absolute top-24 left-0 md:left-8 w-10 h-10 md:h-16 md:w-16 text-white" />
        </Link>

        <div className="h-full w-full bg-black/30 flex justify-between items-center">
          <img src={details.largeImage} alt={details.title} className="h-full w-full object-cover object-center absolute mix-blend-overlay z-[-1]" />
          <div className="xxs:ml-10 xs:ml-16 md:ml-56 mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-serif font-bold">{details.title}</h1>
          </div>

          <div className="mx-auto">
            <div className="">
              <BsClockHistory className="text-primary-500 w-6 h-6 sm:w-10 sm:h-10" />
              <p className="text-white mt-4">{details.time}</p>
            </div>
            <div className="">
              <SlCalender className="text-primary-500 w-6 h-6 sm:w-10 sm:h-10 md:mt-8" />
              <p className="text-white mt-2 md:mt-4">{details.schedule}</p>
            </div>
            <div>
              <TfiTarget className="text-primary-500 w-6 h-6 sm:w-10 sm:h-10 md:mt-8" />
              <p className="text-white mt-2 md:mt-4">{details.target}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* COACH AND SCHEDULE */}
      <div className="w-full bg-black">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center md:justify-between py-16">
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col items-center">
         <h4 className="text-primary-500 text-4xl md:text-5xl font-bold tracking-widest pb-2 text-center">Meet Your Coach</h4>
         <div>
          <img src={details.coachImage} alt="Coach Graphic" className="bg-white rounded-full object-cover object-center border-4 border-primary-500" />
          <p className="text-primary-500 text-center text-4xl tracking-widest pt-4">{details.coach}</p>
         </div>
        </div>
        </div>
      </div>

    <Footer />
    </section>
  )
}

export default ClassPage;

function loadContent() {
  throw new Error('Function not implemented.');
}

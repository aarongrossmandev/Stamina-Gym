import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import TopImage from '../../assets/training-top-img.jpg';


type Props = {}

const TrainerHeading = (props: Props) => {
  return (
          <>
            <div className="w-full bg-black pt-24 pb-8">
          <div className="mx-auto basis-1/3 md:flex w-5/6 justify-between items-center mb-24">
            <div className="md:w-2/4 w-full md:mr-6 mr-0">
              <h1 className="font-montserrat text-5xl font-bold leading-snug text-primary-500">Your Fitness Journey</h1>
              <p className="md:mt-8 text-white">When it comes to fitness, everyone is different. Through a fitness assessment, our certified trainers will get to 
                know you and your goals and evaluate your mobility, movement and more. From there, our trainers will create a customized 
                program, customized homework as well as dietary assistance and planning. Our trainers are dedicated to helping you reach and 
                exceed your goals.
              </p>
              <div className="text-end mr-0 md:mr-2 mt-8 text-white hover:text-primary-300">
                <a href="trainers">See Our Trainers <ArrowRightCircleIcon className="h-6 w-6 inline-block rounded-full" /></a>
              </div>
              
            </div>
            <div className="basis-2/3 text-white mt-8 md:mt-0 flex-1">
              <img src={TopImage} alt="fitness-journey-graphic" className="rounded-lg border-4 border-primary-500"/>
            </div>
          </div>
        </div>
      </>
  )
}

export default TrainerHeading
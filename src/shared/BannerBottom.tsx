import { Link } from 'react-router-dom'



const BannerBottom = () => {
  return (
    <div className="w-full bg-gradient-redblack py-12 z-10 flex ">
          <div className="md:w-5/6 w-5/6 mx-auto md:flex justify-around items-center">
            <div className="text-white">
             <h4 className="text-2xl text-center">Start your journey to a happier, healthier lifestyle now by reaching out to start your fitness assessment! 
              <br />
              Join the millions who have already started their journey.
             </h4>
            </div>
            <div className="md-w-1/2  text-center md:mt-0 mt-6">
              <button className="action-button-xl">
                <Link to="/contact">
                Start Now
                </Link>
               </button>
            </div>
          </div>
        </div>
  )
}

export default BannerBottom
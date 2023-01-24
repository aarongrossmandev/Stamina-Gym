import PoolHeroImage from '@/assets/pool-hero.jpg';
import { Link } from 'react-router-dom';



const PoolHero = () => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-start md:items-center items-end relative">
          <img src={PoolHeroImage} alt="people swimming underwater hero graphic" 
            className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />
        
          <div className="xxs:ml-16 xs:ml-24 md:ml-56 mb-24 ">
            <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="text-primary-500">SWIMMING</span> TO <br /> 
              FITNESS <br />
            AT <span className="text-primary-500 font-bold text-5xl md:text-6xl lg:text-8xl">STAMINA</span></h1>
            
            <button className="action-button z-10 mt-8">
              <Link to="/contact" 
             >
              Join Now
            </Link>
            </button>
            
          </div>
        </div>
    </section>
  )
}

export default PoolHero
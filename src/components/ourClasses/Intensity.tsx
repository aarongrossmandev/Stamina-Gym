import IntensityHeroImage from '../../assets/intensity-hero.jpg';

type Props = {}

const Intensity = (props: Props) => {
  return (
    <section className="w-full" id="strengthPerformance">
        <div className="bg-gradient-to-tr from-slate-900 to-teal-900 h-[100vh] w-full flex justify-end items-end relative">
          <img src={IntensityHeroImage} alt="intensity-hero-graphic" className="h-full w-full object-cover object-top absolute mix-blend-overlay z-[-1]"  />
          <div className="xxs:mr-16 xs:mr-24 md:mr-56 mb-24 ">
            <h1 className="hero-header-text">STRENGTH <br /> 
            <span className="ml-12 text-primary-500">&</span> <br /> 
            PER<span className="text-primary-500">FORMANCE</span></h1>
            

           </div>
        </div>
      </section>
  )
}

export default Intensity
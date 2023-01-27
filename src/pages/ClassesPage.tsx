import BodyMovementMap from '@/components/ourClasses/BodyMovementMap';
import Intensity from '@/components/ourClasses/Intensity';
import IntensityMap from '@/components/ourClasses/IntensityMap';
import BodyMovement from '@/components/ourClasses/BodyMovement'
import {useState} from 'react'
import Aqua from '@/components/ourClasses/Aqua';
import AquaFitnessMap from '@/components/ourClasses/AquaFitnessMap';
import Footer from '@/components/footer';
import BannerBottom from '@/shared/BannerBottom';





const ClassesPage = () => {
  const [sideHovered, setSideHovered] = useState(false)

    function sideToggle(){
      setSideHovered(!sideHovered);
    }

  return (
    
    <div className="app relative overflow-x-hidden">
      <Intensity />
        <IntensityMap />
      <BodyMovement />
        <BodyMovementMap />
      <Aqua />
        <AquaFitnessMap />
      <BannerBottom />
        <Footer />
  </div>

  )
}

export default ClassesPage;
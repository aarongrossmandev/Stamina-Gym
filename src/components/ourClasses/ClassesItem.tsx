import { useState } from 'react'

type Props = {
  title: string;
  image: string;
  index: number;
}



const ClassesItem = ({title, image, index}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(-1);

   
 function toggleHover(index: number): void{
  setIsHovered(index);
}


  return (
   
      <div 
          className="card bg-primary-500 " 
          onMouseEnter={() => toggleHover(index)}
          onMouseLeave={() => toggleHover(-1)}
        >
          {/* Class IMAGE */}
          <div>
            <img src={image} alt="Body-pump-graphic" className="object-cover object-center w-[100%] h-[100%]" />
          </div>
          {/* Title */}
          <h4 className="absolute bottom-0 left-0 ml-2 mb-4 text-white/60 text-3xl">{title}</h4>
          <div className={isHovered === index ? "card-info-visible" : "card-info-hidden"}>
            <h4 className="text-3xl ml-12 -rotate-12">{title}</h4>
          </div>
        </div>
     
  )
}

export default ClassesItem
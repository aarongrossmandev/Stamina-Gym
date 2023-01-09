import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import HeroText from '@/assets/HeroText.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import SponsoredSlider from './SponsoredSlider';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


  return (
    <section 
      id="home"
      className="gap-16 bg-yellow-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
            <motion.div 
              className="md:-mt-20" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ duration: 0.75 }}
              variants={{
                hidden: { opacity: 0, x:-100 },
                visible: { opacity: 1, x:0 }
              }}
              >
              <div className="relative">
                <div className="before:absolute before:-top-20 md:before:content-staminatext before:-left-24 before:z-[-1]">
                  <img src={HeroText} alt="home-page-text" />
                </div>
              </div>

              <p className="mt-8 text-sm md:text-lg">
              Welcome to the King of Fitness. Where strength is gained, confidence is grown, and greatness is born. Come get your dream body today
              with our Unmatched Gym, Top of the line fitness classes. We are strength, we are FITNESS.
              </p>
            </motion.div>
            {/* Action Buttons */}
            <motion.div 
              className="mt-8 flex items-center gap-8" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ delay: 0.3, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x:-100 },
                visible: { opacity: 1, x:0 }
              }}
              >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink 
                className="text-sm font-bold text-primary-500 underline hover:text-blue-600"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
            </AnchorLink>
            </motion.div>
        </div>

        {/* IMAGE */}
        <div className="md:z-10 basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end md:pb-32">
          <img src={HomePageGraphic} alt="home-page-graphic" height={570} width={525} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <SponsoredSlider />
      )}
    </section>
  )
}

export default Home
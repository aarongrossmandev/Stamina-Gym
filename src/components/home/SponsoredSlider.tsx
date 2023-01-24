import React from 'react'
import { motion } from 'framer-motion';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorMonster from '@/assets/SponsorMonster.png';
import SponsorGymShark from '@/assets/SponsorGymShark.png';

const SponsoredSlider = () => {
  return (
    <div className="h-[150px] w-full bg-black py-10 overflow-hidden items-center relative">
          <div className="mx-auto w-5/6">
            <motion.div className="flex w-3/5 items-center justify-between gap-8 absolute"
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.5}}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 12, ease: 'easeInOut'}}
            animate={{x: [-1500, 3000] }}
            >
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="Forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
              <img src={SponsorMonster} alt="monster-sponsor" />
              <img src={SponsorGymShark} alt="gym-shark-sponsor" />
            </motion.div>
            <motion.div className="flex w-3/5 items-center justify-between gap-8 absolute"
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.5}}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 12, ease: 'easeInOut', delay: 5 }}
            animate={{x: [-1500, 3000] }}
            >
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="Forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
              <img src={SponsorMonster} alt="monster-sponsor" />
              <img src={SponsorGymShark} alt="gym-shark-sponsor" />
            </motion.div>
          </div>
        </div>
  )
}

export default SponsoredSlider
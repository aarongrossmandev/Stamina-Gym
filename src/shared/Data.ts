// Training slider
import slideImage1 from '@/assets/trainer-slider-img1.jpg';
import slideImage2 from '@/assets/trainer-slider-img2.jpg';
import slideImage3 from '@/assets/trainer-slider-img3.jpg';

// Spa Slider
import SpaSlide1 from '@/assets/spa-slide1.jpg';
import SpaSlide2 from '@/assets/spa-slide2.jpg';
import SpaSlide3 from '@/assets/spa-slide3.jpg';

// Small image card imports
import BodyPumpImage from '@/assets/weightTraining.jpg';
import CrossFit from '@/assets/crossfit.jpg';
import IntervalTraining from '@/assets/intervalTraining.jpg';
import BootCamp from '@/assets/bootcamp.jpg';
import AbWorkout from '@/assets/abTrainer.jpg';
import BodyBuilding from '@/assets/body-building.jpg';
import PowerLifting from '@/assets/power-lifting.jpg';
import circuits from '@/assets/circuits.jpg';
import cyclingMedium from '@/assets/cycling-medium.jpg';
import boxing from '@/assets/boxing.jpg';
import kickboxing from '@/assets/kickboxing.jpg';
import rockclimbing from '@/assets/rockclimbing.jpg';
import pilates from '@/assets/pilates-small.jpg';
import yogaSmall from '@/assets/yoga-small.jpg';
import aquaAerobicsSmall from '@/assets/water-aerobics-small.jpg';
import waterCardio from '@/assets/water-cardio.jpg';
import femaleTrainer from '@/assets/female-trainer.png';
import maleTrainer from '@/assets/male-trainer.png';


// Large Class image imports
import BodyPumpLarge from '@/assets/weightTraining-large.jpg';
import CrossFitLarge from '@/assets/cross-fit-large.jpg';
import IntervalTrainingLarge from '@/assets/interval-training-large.jpg';
import BootCampLarge from '@/assets/boot-camp-large.jpg';
import AbWorkoutLarge from '@/assets/abTrainer-large.jpg';
import BodyBuildingLarge from '@/assets/body-building-large.jpg';
import PowerLiftingLarge from '@/assets/power-lifting-large.jpg';
import circuitLarge from '@/assets/circuit-large.jpg';
import zumba from '@/assets/zumba-small.jpg';
import boxingLarge from '@/assets/boxing-large.jpg';
import cyclingLarge from '@/assets/cycling-large.jpg';
import kickboxingLarge from '@/assets/kickboxing-large.jpg';
import rockclimbingLarge from '@/assets/rockclimbing-large.jpg';
import zumbaLarge from '@/assets/zumba-large.jpg';
import pilatesLarge from '@/assets/pilates-large.jpg';
import yogaLarge from '@/assets/yoga-large.jpg';
import aquaAerobics from '@/assets/water-aerobics-large.jpg';
import waterCardioLarge from '@/assets/water-cardio-large.jpg';


export const trainerImageSlide = [
  {
    image: slideImage1,
    title: "Push Through Your Limits to Achieve Greatness",
    id: 900
  },
  {
    image: slideImage2,
    title: "The Coach in Your Corner",
    id: 901
  },
  {
    image: slideImage3,
    title: "Look At What You've Achieved",
    id: 902
  }
]
export const SpaImageSlide = [
  {
    image: SpaSlide1,
    id: 903
  },
  {
    image: SpaSlide2,
    id: 904
  },
  {
    image: SpaSlide3,
    id: 905
  }
]


export const intensityClass =  [
  {
    image: BodyPumpImage,
    largeImage: BodyPumpLarge,  
    title: "Body Pump",
    id: "body-pump",
    time: "60mins.",
    schedule: "Sunday, Tuesday, Friday",
    target: "Muscle Tone",
    coach: "Amanda Doe",
    coachImage: femaleTrainer
  },
  {
    image: CrossFit,
    largeImage: CrossFitLarge, 
    title: "Cross Fit",
    id: "cross-fit",
    time: "75mins.",
    schedule: "Tuesday, Thursday, Saturday",
    target: "Muscle Tone",
    coach: "Ryan Doe",
    coachImage: maleTrainer
  },
  {
    image: IntervalTraining, 
    largeImage: IntervalTrainingLarge,
    title: "Interval Training",
    id: "interval-training",
    time: "45mins.",
    schedule: "Monday-Thursday",
    target: "Muscle Tone",
    coach: "Alicia Doe",
    coachImage: femaleTrainer
  },
  {
    image: BootCamp, 
    largeImage: BootCampLarge,
    title: "Boot Camp",
    id: "boot-camp",
    time: "55mins.",
    schedule: "Monday-Friday",
    target: "Muscle Tone",
    coach: "Bryan Doe",
    coachImage: maleTrainer
  },
  {
    image: AbWorkout,
    largeImage: AbWorkoutLarge,
    title: "Ab Trainer",
    id: "ab-trainer",
    time: "45mins.",
    schedule: "Monday, Wednesday, Friday",
    target: "Muscle Tone",
    coach: "Jade Doe",
    coachImage: femaleTrainer
  },
  {
    image: BodyBuilding,
    largeImage: BodyBuildingLarge, 
    title: "Body Building",
    id: "body-building",
    time: "90 Mins.",
    schedule: "Monday-Thursday + Saturday",
    target: "Muscle Tone",
    coach: "Jake Doe",
    coachImage: maleTrainer
  },
  {
    image: PowerLifting,
    largeImage: PowerLiftingLarge,
    title: "Power Lifting",
    id: "power-lifting",
    time: "85mins.",
    schedule: "Sunday-Tuesday, Thursday-Saturday",
    target: "Muscle Tone",
    coach: "Nick Doe",
    coachImage: maleTrainer
  },
  {
    image: circuits,
    largeImage: circuitLarge,
    title: "Circuits",
    id: "circuits",
    time: "30-45mins.",
    schedule: "Sunday-Tuesday, Thursday-Saturday",
    target: "Muscle Tone",
    coach: "Jenny Doe",
    coachImage: femaleTrainer
  },

]

export const BodyMovement: Array<any> = [
  {
    image: cyclingMedium,
    largeImage: cyclingLarge,
    title: "Cycling",
    id: "cycling",
    time: "35mins.",
    schedule: "Sunday, Tuesday, Thursday, Friday",
    target: "Fat Burn",
    coach: "Dianne Doe",
    coachImage: femaleTrainer
  },
  {
    image: boxing,
    largeImage: boxingLarge,
    title: "Boxing",
    id: "boxing",
    time: "75mins.",
    schedule: "Monday, Wednesday, Friday",
    target: "Fat Burn",
    coach: "Zane Doe",
    coachImage: maleTrainer
  },
  {
    image: kickboxing,
    largeImage: kickboxingLarge,
    title: "Kickboxing",
    id: "kickboxing",
    time: "75mins.",
    schedule: "Tuesday, Thursday, Saturday",
    target: "Full Body",
    coach: "Juan Doe",
    coachImage: maleTrainer
  },
  {
    image: rockclimbing,
    largeImage: rockclimbingLarge,
    title: "Rock Climbing",
    id: "rock-climbing",
    time: "60mins.",
    schedule: "Monday, Friday",
    target: "Full Body",
    coach: "Alicia Doe",
    coachImage: femaleTrainer
  },
  {
    image: zumba,
    largeImage: zumbaLarge,
    title: "Zumba",
    id: "zumba",
    time: "45mins.",
    schedule: "Monday-Wednesday & Friday",
    target: "Full Body",
    coach: "Brandi Doe",
    coachImage: femaleTrainer
  },
  {
    image: pilates,
    largeImage: pilatesLarge,
    title: "Pilates",
    id: "pilates",
    time: "45mins.",
    schedule: "Sunday-Tuesday, Thursday-Saturday",
    target: "Full Body",
    coach: "Camilla Doe",
    coachImage: femaleTrainer
  },
  {
    image: yogaSmall,
    largeImage: yogaLarge,
    title: "Yoga",
    id: "yoga",
    time: "45mins.",
    schedule: "Monday, Wednesday, Friday",
    target: "Full Body",
    coach: "Amy Doe",
    coachImage: femaleTrainer
  },
]

export const AquaFitness: Array<any> = [
  {
    image: aquaAerobicsSmall,
    largeImage: aquaAerobics,
    title: "Aqua Aerobics",
    id: "aqua-aerobics",
    time: "45mins.",
    schedule: "Friday-Sunday",
    target: "Full Body",
    coach: "Arnold Doe",
    coachImage: maleTrainer
  },
  {
    image: waterCardio,
    largeImage: waterCardioLarge,
    title: "Aqua Cardio",
    id: "aqua-cardio",
    time: "60mins.",
    schedule: "Monday-Friday",
    target: "Full Body",
    coach: "Matt Doe",
    coachImage: maleTrainer
  },
]


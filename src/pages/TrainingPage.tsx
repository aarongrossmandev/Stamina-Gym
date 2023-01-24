import TrainingHero from '@/components/training/TrainingHero';
import TrainerHeading from '@/components/training/TrainerHeading';
import MainContent from '@/components/training/MainContent';
import Footer from '@/components/footer';
import TrainingSlider from '@/components/training/TrainingSlider';
import ContactForms from '@/components/contactUs/ContactForms';

type Props = {}

const TrainingPage = ({}: Props) => {

  

  return (
      <div className="app">
        <TrainingHero />
        <div className="h-full md:h-full w-full bg-black">
        <MainContent />
      </div>
        <TrainingSlider />
          <TrainerHeading />
        <ContactForms />  
        <Footer />
      </div>
  )
}

export default TrainingPage;
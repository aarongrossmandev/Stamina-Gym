import TrainingHero from '@/components/training/TrainingHero';
import TrainerHeading from '@/components/training/TrainerHeading';
import MainContent from '@/components/training/MainContent';
import Footer from '@/components/footer';
import TrainingSlider from '@/components/training/TrainingSlider';
import ContactForms from '@/components/contactUs/ContactForms';

const TrainingPage = () => {

  

  return (
    <div className="app">
        <TrainingHero />
          <MainContent />
        <TrainingSlider />
          <TrainerHeading />
        <ContactForms />  
        <Footer />
      </div>
      
  )
}

export default TrainingPage;
import ContactForms from '@/components/contactUs/ContactForms'
import FullPageContact from '@/components/contactUs/FullPageContact'
import Footer from '@/components/footer'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className="app overflow-x-hidden">
      <FullPageContact />
      <Footer />
    </div>
  )
}

export default ContactPage
import ContactForms from '@/components/contactUs/ContactForms'
import FullPageContact from '@/components/contactUs/FullPageContact'
import Footer from '@/components/footer'
import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className="app">
      <FullPageContact />
      <Footer />
    </div>
  )
}

export default ContactPage
import Logo from '@/assets/logo.png';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-1000 py-16 text-white">
      <div className="mx-auto w-5/6  gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita.
          </p>
          <p>&copy; Stamina LLC. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Get Started</h4>
          <a href="#">
            <p className="my-5 hover:text-primary-300">Join a Gym Near You</p>
          </a>
          <a href="#">
            <p className="my-5 hover:text-primary-300">Get a Free Gym Pass</p>
          </a>
          <a href="#">
            <p className="hover:text-primary-300">Member Center</p>
          </a>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Policy</h4>
          <a href="#">
            <p className="my-5 hover:text-primary-300">Terms & Conditions</p>
          </a>
          <a href="#">
            <p className="my-5 hover:text-primary-300">Privacy Policy</p>
          </a>
          <p>(919)616-3136</p>
        </div>
      </div>
      <div className="w-[95%] mx-auto h-[1px] bg-primary-500 mt-4 mb-2" />

      <div className="md:flex w-5/6 mx-auto justify-end items-center">
        <div>
          <p className="text-2xl">Follow Us:</p>
        </div>
        <div className="justify-between items-center flex px-2">
         <a href="https://twitter.com" target="_blank">
         <FaTwitter size={24} className="text-white hover:text-primary-500 mx-2" /> 
         </a>
         <a href="https://instagram.com" target="_blank">
         <FaInstagram size={24} className="text-white hover:text-primary-500 mx-2" /> 
         </a>
         <a href="https://facebook.com" target="_blank">
         <FaFacebook size={24} className="text-white hover:text-primary-500 mx-2" /> 
         </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
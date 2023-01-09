import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {}

const ContactUs = (Props: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-gray-700 px-5 py-3 placeholder-white text-white border border-gray-300 focus:outline-none 
  focus:border-blue-500 focus:ring-1 focus:ring-blue-500`;

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <div>
          {/* HEADER */}
          <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x:-100 },
              visible: { opacity: 1, x:0 }
              }}
            >
              <h1 className="header-text">
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
              </h1>
              <p className="my-5">
                Get in touch with us, let us help guide you on your journey to the life of fitness.
              </p>
          </motion.div>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
              <motion.div 
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.75 }}
                variants={{
                  hidden: { opacity: 0, y:50 },
                  visible: { opacity: 1, y:0 }
                }}
              >
                <form 
                  target="_blank"
                  onSubmit={onSubmit}
                  action="https://formsubmit.co/c5173dbe7a11c9db48cda0496046acde"
                  method="POST"
                >
                  <input 
                    className={inputStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-primary-500">
                      {errors.name.type === "required" && "This Field is Required."}
                      {errors.name.type === "maxLength" && "Sorry please limit to under 100 char."}
                    </p>
                  )}

                  <input 
                    className={inputStyles}
                    type="text"
                    placeholder="EMAIL"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-primary-500">
                      {errors.email.type === "required" && "This Field is Required."}
                      {errors.email.type === "pattern" && "invalid email address."}
                    </p>
                  )}

                  <textarea 
                    className={inputStyles}
                    rows={4}
                    cols={50}
                    placeholder="TYPE YOUR MESSAGE..."
                    {...register("name", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-primary-500">
                      {errors.message.type === "required" && "This Field is Required."}
                      {errors.message.type === "maxLength" && "Sorry please limit to under 2000 char."}
                    </p>
                  )}

                  <button 
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>

              <motion.div 
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.3, duration: 0.75 }}
                variants={{
                  hidden: { opacity: 0, y:50 },
                  visible: { opacity: 1, y:0 }
                }}
              >
                <div className="md:before:content-staminatext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                  <img 
                    className="w-full"
                    src={ContactUsPageGraphic}
                    alt="contact-us-page-graphic" 
                   />
                </div>

              </motion.div>
          </div>
      </div>
    </section>
  )
}

export default ContactUs
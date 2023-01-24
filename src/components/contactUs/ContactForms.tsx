import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {}

const ContactForms = (Props: Props) => {

  const inputStyles = `mb-5 w-full bg-transparent px-5 py-3 placeholder-slate-900 text-slate-900 border-b border-slate-900 focus:outline-none 
  focus:border-blue-500`

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
    <section id="contactus" className="w-full bg-white">
      <div className="mx-auto w-5/6 pt-12 md:pt-24 pb-32 flex flex-col md:flex-row">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 2 }}
          variants={{
           hidden: { opacity: 0, x: -200 },
           visible: { opacity: 1, x:0 }
         }}
          className="w-full md:w-1/6 md:mr-48">
          <h3 className="text-primary-500 font-bold text-4xl md:text-4xl lg:text-6xl md:leading-normal lg:leading-normal">
            START YOUR <br /> FITNESS <br /> JOURNEY <br /> TODAY
          </h3>
        </motion.div>
      <motion.div 
        className="md:relative" 
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x:500 },
              visible: { opacity: 1, x:0 }
            }}
        >
          {/* HEADER */}
          <div 
            className="md:w-3/5"
            >

              <div className="md:before:absolute md:before:-left-16 md:before:top-0 md:before:w-[0.5px] md:before:h-full md:before:bg-white" />
              <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-primary-500 tracking-widest pt-8 md:pt-8">
                Sign Up Now
              </h1>
           </div>
          
          {/* FORM */}
          <div className="mt-10 gap-8 w-full">
              <div 
                className="mt-10 basis-3/5 md:mt-0"
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
                    className="rounded-md bg-primary-500 text-white border border-transparent px-16 py-2 transition-all duration-500 ease-in-out hover:bg-transparent hover:text-primary-500 hover:border-primary-500 hover:drop-shadow-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              
          </div>
      </motion.div>
    </div>
    </section>
  )
}

export default ContactForms
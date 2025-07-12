
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollDisplay from './components/ScrollDisplaySection'
import Faq from './components/FAQ'
import { ToastContainer,toast } from 'react-toastify';
import {usePop} from './context/PopUpCOntext'
const HeroSection = () => {
  // HeroSection.tsx or wherever your code is


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const companies = [
  { name: "monday.com", gradient: "from-purple-600 via-blue-600 to-emerald-500" },
  { name: "Shutterstock", gradient: "from-yellow-500 via-red-500 to-pink-600" },
  { name: "Lightspeed", gradient: "from-rose-500 via-orange-500 to-amber-600" },
  { name: "Slack", gradient: "from-sky-500 via-indigo-500 to-purple-700" },
  { name: "Calendly", gradient: "from-teal-500 via-lime-500 to-emerald-500" },
  { name: "Discord", gradient: "from-indigo-400 via-fuchsia-500 to-purple-600" },
  { name: "Notion", gradient: "from-green-400 via-cyan-500 to-blue-600" },
  { name: "Airtable", gradient: "from-amber-500 via-pink-500 to-rose-600" },
  { name: "Intercom", gradient: "from-lime-500 via-emerald-500 to-green-700" },
  { name: "Typeform", gradient: "from-fuchsia-500 via-rose-500 to-red-500" },
  { name: "ClickUp", gradient: "from-blue-500 via-sky-500 to-indigo-600" },
];
// const {showWaitList,setShowWaitList}=usePop()
const {showPopUp,setShowPopUp}=usePop()
// const {scrollYProgress}=useScroll()
  return (
   
   <main className='relative'>
    <ToastContainer />
   <div
  className={`fixed inset-0
     bg-black bg-opacity-50 flex items-center justify-center
      z-50 transition-all duration-300 ease-in-out
 transform ${
    showPopUp ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
  }`}
>
  <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
    <h3 className="text-sm font-bold">Input your email and get notified when we launch!</h3>
    <div>
      <input
        type="email"
        placeholder="Input your email"
        required
        className="w-full p-2 my-4 border caret-blue-500"
      />
    </div>
    <div className="flex justify-end gap-4">
      <button
        onClick={() => setShowPopUp(false)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          setShowPopUp(false)
          toast.success("Yay, you're now on our waitlist")
        }}
        className="px-4 py-2 bg-gray-300 text-black rounded"
      >
        Notify me
      </button>
    </div>
  </div>
</div>

   {/* <motion.div style={
    {
      scaleX:scrollYProgress,
      background:"blue",
      position:"sticky",
      top:0, 
      width:"100%",
            height:"20px",

    }
   } /> */}
{/* hero */}
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/preview-background-video.PNG"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          variants={fadeUpVariant}
          // className="text-white  font-bold mb-4"
          className="mx-auto mb-8 max-w-[15ch] text-center font-serif text-5xl/none  tracking-tighter text-white md:mb-5 md:text-7xl lg:text-8xl"

        >
          The #1 AI Agent<br />for Customer Service
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="text-white text-lg md:text-xl mb-6 max-w-md"
        >
          Automate your support, save time, and boost customer satisfaction.
        </motion.p>

        <motion.a
          href="#get-started"
          variants={fadeUpVariant}
            onClick={(()=>{
              setShowPopUp(true)
            })}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
        >
         Join Waitlist
        </motion.a>
      </motion.div>

  <div className="flex items-center gap-4 animate-marquee z-40 absolute bottom-0 mb-4 w-full hover:[animation-play-state:paused] text-2xl font-semibold tracking-tight">
       <div className="whitespace-nowrap">
  {companies.map(({ name, gradient }, index) => (
    <span
      key={index}
      className={`inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent mx-10`}
    >
      {name}
    </span>
  ))}
</div>

        
      </div>

    </section>
    
    {/*image after hero section  */}
  <section className='py-10'>
      <Image src="/fin-demo.png" className='w-full' loading='lazy' height={1000} width={1000} alt='fin-ai-demo' />
    
  </section>


  <section className='text-center py-16 h-screen px-5 flex flex-col items-center justify-center md:px-0'>
    <h1 className="text-white max-w-[6xl] font-serif text-5xl/none  tracking-tighter text-white md:mb-5 md:text-7xl">Fin is the best-performing AI Agent for customer service, [1] delivering higher-quality customer experiences and higher resolution rates than any other AI Agent.</h1>
  </section>

  <ScrollDisplay />


{/* faq */}
<Faq />
  {/* last cta */}


   <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <section
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          backgroundImage:`url('/preview-background-video.PNG')`,
          backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment:"fixed"
        }}
       
      >
      </section>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id='about'
        className="relative z-20 h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          variants={fadeUpVariant}
          // className="text-white  font-bold mb-4"
          className="mx-auto mb-8 max-w-[15ch] text-center font-serif text-5xl/none  tracking-tighter text-gray-400 md:mb-5 md:text-7xl lg:text-8xl"

        >
        Get started with the

        </motion.h1>
         <motion.h1
          variants={fadeUpVariant}
          // className="text-white  font-bold mb-4"
          className="mx-auto mb-8 max-w-[15ch] text-center font-serif text-5xl/none  tracking-tighter text-white md:mb-5 md:text-7xl lg:text-8xl"

        >
        #1 AI Agent today


        </motion.h1>
{/* 
        <motion.p
          variants={fadeUpVariant}
          className="text-white text-lg md:text-xl mb-6 max-w-md"
        >
          Automate your support, save time, and boost customer satisfaction.
        </motion.p> */}

        <motion.a
          href="#get-started"
          variants={fadeUpVariant}
          onClick={(()=>{
            setShowPopUp(true)
          })}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
        >
          Join Waitlist
        </motion.a>
      </motion.div>


    </section>
    </main>
  );
};

export default HeroSection;
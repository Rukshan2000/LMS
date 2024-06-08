import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import background from '../assets/background.jpg'; 
import homeImage from '../assets/woman.png';
import peopleImage from '../assets/people.jpeg';


function Counter({ finalCount }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (count < finalCount) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [count, finalCount, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {count}
    </motion.span>
  );
}

function Landing() {
  return (
    <motion.div
      className="font-poppins"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavBar />
      <div className="container px-8 mx-auto lg:px-40">
        <main className="flex flex-col items-center justify-between py-12 lg:flex-row lg:py-20">
          <motion.div
            className="flex justify-center w-full mb-12 lg:w-1/2 lg:mb-0 lg:order-2 lg:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img
              src={homeImage}
              alt="Home"
              className="w-full max-w-sm lg:max-w-md xl:max-w-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 lg:order-1 lg:pr-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-3xl font-bold leading-tight text-center md:text-4xl lg:text-5xl xl:text-6xl lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Professional<br />
                <strong>Fitness Workouts</strong><br />
              </motion.span>
              For Everyone
            </h1>
            <p className="mt-5 text-lg text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                You can start fitness every day through <strong>The Programs</strong> that we make for
                you. At home, <strong>Without Any Trouble</strong>, just start right now.
              </motion.span>
            </p>
            <div className="flex flex-wrap justify-center mt-8 space-x-4 lg:justify-start">
              <motion.button
                className="px-6 py-3 mb-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-6 py-3 mb-2 font-bold text-gray-800 bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </main>

        <div className="grid grid-cols-1 py-12 mt-8 bg-tranceparent lg:grid-cols-2 lg:py-10">
          <div className="grid grid-cols-1 gap-8 p-10 bg-[#FDF2E9] sm:grid-cols-3">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={12} key="experience" />
                </AnimatePresence>
                {' '} Years
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Year Experience</p>
            </motion.div>
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={87} key="trainers" />
                </AnimatePresence>
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Expert Trainers</p>
            </motion.div>
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                <AnimatePresence>
                  <Counter finalCount={432} key="classes" />
                </AnimatePresence>
              </h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Classes</p>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center p-10 bg-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <
              motion.img
              src={peopleImage}
              alt="People"
              className="h-24 mr-4 rounded-full w-30 lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <div>
              <h2 className="text-2xl font-bold lg:text-3xl">187K</h2>
              <p className="mt-2 text-lg font-bold text-gray-500">Active Customers In The World</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;

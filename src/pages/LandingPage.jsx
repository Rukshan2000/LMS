import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import background from '../assets/background.jpg'; 
import homeImage from '../assets/student.png';

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
      {count}+
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
              alt="Online Learning"
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
                Empower Your<br />
                <strong>Learning Journey</strong><br />
              </motion.span>
              Anytime, Anywhere
            </h1>
            <p className="mt-5 text-lg text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Access a wide range of courses created by top educators. Learn at your own pace, 
                from anywhere in the world.
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
                Explore Courses
              </motion.button>
            </div>
          </motion.div>
        </main>

        <section className="flex flex-col items-center py-12 lg:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-500">
                <Counter finalCount={1000} />
              </h2>
              <p className="mt-2 text-lg">Courses</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-500">
                <Counter finalCount={300} />
              </h2>
              <p className="mt-2 text-lg">Expert Instructors</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-500">
                <Counter finalCount={500000} />
              </h2>
              <p className="mt-2 text-lg">Students Enrolled</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-500">
                <Counter finalCount={200} />
              </h2>
              <p className="mt-2 text-lg">Partners Worldwide</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Landing;

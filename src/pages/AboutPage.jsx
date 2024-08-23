import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import background from '../assets/background.jpg';
import missionImage from '../assets/mission.png'; // Add a relevant image for mission
import visionImage from '../assets/mission.png'; // Add a relevant image for vision

function About() {
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
        <main className="py-12 lg:py-20">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                About Us<br />
                <strong>Our Mission</strong><br />
              </motion.span>
              & Vision
            </h1>
            <div className="flex flex-col mt-12 lg:flex-row lg:mt-16">
              <motion.div
                className="flex items-center justify-center flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="w-full max-w-xs rounded-lg shadow-lg lg:max-w-md xl:max-w-lg"
                />
              </motion.div>
              <motion.div
                className="flex-1 mt-8 lg:pl-12 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <p className="text-lg leading-relaxed">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    At [Company Name], our mission is to empower individuals through high-quality education and innovative resources. We are dedicated to fostering a community where learners can thrive and achieve their goals.
                  </motion.span>
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col mt-12 lg:flex-row lg:mt-20">
              <motion.div
                className="flex-1 mt-8 lg:pr-12 lg:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <p className="text-lg leading-relaxed">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  >
                    Our vision is to become a leading platform that bridges educational gaps globally, providing diverse learning opportunities that cater to various needs and learning styles. We aspire to be at the forefront of educational innovation, making learning accessible and impactful for everyone.
                  </motion.span>
                </p>
              </motion.div>
              <motion.div
                className="flex items-center justify-center flex-1 mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <img
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full max-w-xs rounded-lg shadow-lg lg:max-w-md xl:max-w-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </main>

        <section className="flex flex-col items-center py-12 lg:py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-blue-500">Our Achievements</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <h3 className="text-4xl font-bold text-blue-500">10+</h3>
                <p className="mt-2 text-lg">Years of Experience</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <h3 className="text-4xl font-bold text-blue-500">50+</h3>
                <p className="mt-2 text-lg">Courses Offered</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <h3 className="text-4xl font-bold text-blue-500">100+</h3>
                <p className="mt-2 text-lg">Team Members</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default About;

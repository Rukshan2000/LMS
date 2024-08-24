import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/background.jpg';
import NavBar from '../components/NavBar';
import createCourseImage from '../assets/wad.jpg';
import planCourseImage from '../assets/wad.jpg';
import quizImage from '../assets/wad.jpg';
import materialsImage from '../assets/wad.jpg';

const BecomeTeacherPage = () => {
  return (
    <motion.div
      className="font-poppins"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'black',
        paddingBottom: '100px', // Add padding at the bottom
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavBar />
      <div className="container px-6 py-12 mx-auto lg:px-20">
        {/* Login Link for Existing Teachers */}
        <div className="mb-12 text-center">
          <a
            href="/teacher-login"
            className="inline-flex items-center px-6 py-3 text-white transition-all duration-300 bg-green-600 rounded-lg shadow-lg hover:bg-green-700"
          >
            If you're already a teacher, log in here
          </a>
        </div>

        <h1 className="text-5xl font-bold leading-tight text-center text-blue-600 sm:text-6xl lg:text-7xl">Become a Teacher</h1>
        <p className="max-w-4xl mx-auto mt-6 text-xl text-center text-gray-700 sm:text-2xl lg:text-3xl">
          Share your knowledge and inspire others by becoming a teacher. Follow these steps to get started and make an impact on students worldwide!
        </p>

        <div className="grid gap-12 mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {/* Steps to Become a Teacher */}
          {/* Step 1: Identify Your Niche */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={planCourseImage} alt="Identify Niche" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 1: Identify Your Niche</h2>
            <p className="text-lg text-gray-700">
              Start by identifying the subject area where you have expertise and passion. This will help you create content that is both engaging and valuable to students.
            </p>
          </motion.div>

          {/* Step 2: Plan Your Course */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={planCourseImage} alt="Plan Course" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 2: Plan Your Course</h2>
            <p className="text-lg text-gray-700">
              Organize your ideas into a structured curriculum. Define the learning outcomes, modules, and the sequence of lessons.
            </p>
          </motion.div>

          {/* Step 3: Develop Video Tutorials */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={createCourseImage} alt="Develop Tutorials" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 3: Develop Video Tutorials</h2>
            <p className="text-lg text-gray-700">
              Create high-quality video tutorials that are clear, engaging, and informative. Focus on delivering the content in a way that is easy to understand.
            </p>
          </motion.div>

          {/* Step 4: Create Supplementary Materials */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={materialsImage} alt="Lecture Materials" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 4: Create Supplementary Materials</h2>
            <p className="text-lg text-gray-700">
              Provide downloadable resources such as slides, notes, and readings to reinforce your lessons.
            </p>
          </motion.div>

          {/* Step 5: Build an End-of-Course Quiz */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={quizImage} alt="Create Quiz" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 5: Build an End-of-Course Quiz</h2>
            <p className="text-lg text-gray-700">
              Create a comprehensive quiz at the end of your course to assess students' understanding and reinforce their learning.
            </p>
          </motion.div>

          {/* Step 6: Launch Your Course */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={planCourseImage} alt="Launch Course" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 6: Launch Your Course</h2>
            <p className="text-lg text-gray-700">
              Publish your course and promote it through various channels like social media and newsletters.
            </p>
          </motion.div>

          {/* Step 7: Engage with Your Students */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={planCourseImage} alt="Engage Students" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 7: Engage with Your Students</h2>
            <p className="text-lg text-gray-700">
              Stay active by responding to student questions, hosting Q&A sessions, and providing feedback.
            </p>
          </motion.div>

          {/* Step 8: Collect Feedback and Improve */}
          <motion.div 
            className="flex flex-col items-center p-8 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={planCourseImage} alt="Collect Feedback" className="object-cover w-32 h-32 mb-4 border border-gray-300 rounded-full" />
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">Step 8: Collect Feedback and Improve</h2>
            <p className="text-lg text-gray-700">
              Gather feedback from your students to make improvements and ensure your course remains relevant.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Contact Support Section */}
      <div className="fixed bottom-0 left-0 w-full p-4 text-white bg-blue-600 shadow-lg md:p-6 lg:p-8">
        <div className="container flex flex-col items-center justify-between mx-auto text-center md:flex-row md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold md:text-xl lg:text-2xl">Need Help with Publishing Your Course?</h2>
            <p className="text-sm md:text-base">If you have any questions or need assistance, don't hesitate to contact our support team.</p>
          </div>
          <a
            href="/contact-support"
            className="inline-flex items-center px-4 py-2 mt-2 text-sm text-white transition-all duration-300 bg-green-600 rounded-lg shadow-lg md:mt-0 hover:bg-green-700 md:text-base"
          >
            Contact Support
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BecomeTeacherPage;

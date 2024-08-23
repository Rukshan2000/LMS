// BlogPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/background.jpg';
import NavBar from '../components/NavBar';

const BlogPage = () => {
  return (
    <motion.div
      className="font-poppins"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavBar />
      <div className="flex items-center justify-center min-h-screen text-center">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl">Blog Coming Soon</h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl lg:text-2xl">We're working hard to bring you amazing content. Stay tuned!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;

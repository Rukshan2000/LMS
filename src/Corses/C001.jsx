import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import background from '../assets/background.jpg';
import NavBar from '../components/NavBar';
import courseData from './C001.json';

function C001() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [data, setData] = useState(courseData);

    useEffect(() => {
        // Optionally fetch data if not importing directly
        // fetch('/path/to/C001.json')
        //     .then(response => response.json())
        //     .then(data => setData(data));
    }, []);

    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % data.videoData.length);
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + data.videoData.length) % data.videoData.length);
    };

    return (
        <motion.div
            className="font-poppins"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <NavBar />
            <div className="container flex flex-col gap-8 py-12 mx-auto lg:flex-row lg:px-20">

                {/* Sidebar Section */}
                <aside className="p-6 text-gray-900 bg-white rounded-lg shadow-xl lg:w-1/4">
                    <h3 className="mb-4 text-2xl font-bold text-center">Course Content</h3>
                    <ul className="space-y-4">
                        {data.videoData.map((video, index) => (
                            <motion.li
                                key={index}
                                className={`cursor-pointer p-4 rounded-lg ${index === currentVideoIndex ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setCurrentVideoIndex(index)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {video.title}
                            </motion.li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content Section */}
                <section className="flex flex-col space-y-8 lg:w-3/4">
                    {/* Course Information */}
                    <motion.section
                        className="p-8 text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <h2 className="mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                            {data.courseName}
                        </h2>
                        <p className="mb-6 text-lg">{data.description}</p>
                        <div className="mb-8">
                            <p className="text-xl font-semibold">Instructor:</p>
                            <p className="text-lg text-gray-700">{data.instructor.name}</p>
                        </div>
                        <motion.a
                            href={data.instructor.contact}
                            className="inline-block px-8 py-4 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Contact Instructor via WhatsApp
                        </motion.a>
                    </motion.section>

                    {/* Video Section */}
                    <motion.section
                        className="p-8 text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <h4 className="mb-6 text-3xl font-bold">Video Tutorial</h4>
                        <iframe
                            width="100%"
                            height="500"
                            src={data.videoData[currentVideoIndex].videoLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mx-auto rounded-lg shadow-md"
                        ></iframe>
                        <div className="flex justify-center gap-4 mt-6">
                            <motion.button
                                onClick={handlePrevious}
                                className="px-6 py-3 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Previous Video
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="px-6 py-3 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                Next Video
                            </motion.button>
                        </div>
                        <p className="mt-6 text-lg text-gray-700">{data.videoData[currentVideoIndex].description}</p>
                        <motion.a
                            href={data.videoData[currentVideoIndex].lectureMaterials[0]} // Update if you want to support multiple materials
                            className="inline-block px-8 py-4 mt-6 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                            download
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Download Lecture Materials
                        </motion.a>
                    </motion.section>

                    {/* Tabs Section */}
                    <motion.section
                        className="p-6 text-gray-900 bg-white rounded-lg shadow-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="flex justify-between mb-4 border-b-2 border-gray-300">
                            <button className="pb-2 font-semibold text-blue-600 border-b-4 border-blue-600">Overview</button>
                            <button className="pb-2 font-semibold hover:text-blue-600 hover:border-blue-600">Q&A</button>
                            <button className="pb-2 font-semibold hover:text-blue-600 hover:border-blue-600">Announcements</button>
                        </div>
                        <div className="text-lg">
                            {/* Content for each tab could go here */}
                            <p>This is where the overview content or Q&A would be displayed.</p>
                        </div>
                    </motion.section>
                </section>
            </div>
        </motion.div>
    );
}

export default C001;

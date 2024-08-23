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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white',
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <NavBar />
            <div className="container px-4 py-12 mx-auto lg:px-20">
                <nav className="mb-8 text-sm text-gray-300">
                    <a href="/" className="hover:text-white">Home</a> / <a href="/courses" className="hover:text-white">Courses</a> / {data.courseName}
                </nav>

                {/* Course Information */}
                <section className="p-8 mb-12 text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <h2 className="mb-6 text-4xl font-extrabold">{data.courseName}</h2>
                    <p className="mb-6 text-lg">{data.description}</p>
                    <div className="mb-8">
                        <p className="text-xl font-semibold">Instructor:</p>
                        <p className="text-lg text-gray-700">{data.instructor.name}</p>
                    </div>
                    <a
                        href={data.instructor.contact}
                        className="inline-block px-8 py-4 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    >
                        Contact Instructor via WhatsApp
                    </a>
                </section>

                {/* Video Section */}
                <section className="p-8 text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg">
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
                        <button
                            onClick={handlePrevious}
                            className="px-6 py-3 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        >
                            Previous Video
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-6 py-3 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        >
                            Next Video
                        </button>
                    </div>
                    <p className="mt-6 text-lg text-gray-700">{data.videoDescriptions[currentVideoIndex]}</p>
                    <a
                        href={data.videoData[currentVideoIndex].lectureMaterials[0]} // Update if you want to support multiple materials
                        className="inline-block px-8 py-4 mt-6 text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        download
                    >
                        Download Lecture Materials
                    </a>
                </section>
            </div>
        </motion.div>
    );
}

export default C001;

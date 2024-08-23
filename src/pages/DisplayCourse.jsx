import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { imageMap } from '../utils/imageMap'; // Ensure this path is correct
import background from '../assets/background.jpg';
import NavBar from '../components/NavBar';
import courseData from '../jsons/courses.json'; // Ensure this path is correct

function DisplayCourse() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        console.log("Course Data:", courseData); // Log the entire JSON structure
        console.log("Looking for Course ID:", courseId);

        // Find the course with the matching courseId
        const foundCourse = courseData.courses.find(c => c.courseId === courseId);
        console.log("Found Course:", foundCourse);

        setCourse(foundCourse);
    }, [courseId]);

    if (!course) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h2 className="text-2xl font-semibold text-gray-700">Course not found.</h2>
            </div>
        );
    }

    const handlePurchaseClick = () => {
        const message = `I would like to purchase course ${courseId}. Please give me more details.`;
        const whatsappUrl = `https://wa.me/94779054385?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            className="font-poppins"
            style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <NavBar />
            <div className="container px-4 mx-auto lg:px-20">
                <section className="py-8 lg:py-16">
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg lg:flex-row lg:space-x-8 lg:p-12">
                        <div className="w-full lg:w-1/2">
                            <motion.img
                                src={imageMap[course.coverImage] || '/default-image.jpg'} // Fallback to a default image
                                alt={course.name || "Course Image"}
                                className="object-cover w-full h-64 rounded-lg sm:h-80 lg:h-96"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="flex flex-col justify-center w-full mt-6 lg:w-1/2 lg:mt-0">
                            <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl lg:text-4xl">{course.name || "Course Name Not Available"}</h3>
                            <p className="mt-4 text-base sm:text-lg">{course.description || "Description not available"}</p>
                            <div className="mt-6 space-y-2">
                                <p className="text-base font-semibold sm:text-lg">Instructor: {course.instructor || "Instructor not available"}</p>
                                <p className="text-base font-semibold sm:text-lg">Duration: {course.duration || "Duration not available"}</p>
                                <p className="text-base font-semibold sm:text-lg">Price: {course.price || "Price not available"}</p>
                            </div>
                            <h4 className="mt-6 text-xl font-bold sm:text-2xl lg:text-3xl">Course Content:</h4>
                            {course.content && course.content.length > 0 ? (
                                <ul className="pl-5 mt-2 list-disc">
                                    {course.content.map((item, index) => (
                                        <li key={index} className="text-sm sm:text-md lg:text-lg">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-2 text-sm sm:text-md lg:text-lg">No content available for this course.</p>
                            )}
                            <button
                                onClick={handlePurchaseClick}
                                className="px-6 py-3 mt-8 text-lg font-bold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                            >
                                Purchase Course
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}

export default DisplayCourse;

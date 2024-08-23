import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <motion.nav
            className="sticky top-0 z-50 bg-white bg-opacity-50 border-b border-gray-200 backdrop-filter backdrop-blur-lg"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="text-3xl">
                        <span className="font-bold text-blue-500">E </span>
                        <span className="font-bold text-black">Siphala</span>
                    </h1>
                </a>
                <div className="flex items-center space-x-3 md:order-2 rtl:space-x-reverse">
                    <Link
                        to="/login" // Link to login page
                        className="flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        <FaSignInAlt className="mr-2" />
                        Login
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <motion.div
                    className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta"
                    variants={menuVariants}
                    initial="hidden"
                    animate={isMenuOpen ? 'visible' : 'hidden'}
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {['Home', 'Courses', 'About', 'Blog'].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={`/${item.toLowerCase()}`} // Ensure this matches your routes
                                    className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default NavBar;

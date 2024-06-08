import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
                        <span className="font-bold text-blue-500">FITN</span>
                        <span className="font-bold text-black">ESSO</span>
                    </h1>
                </a>
                <div className="flex items-center space-x-3 md:order-2 rtl:space-x-reverse">
                    <motion.button
                        type="button"
                        className="flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-white border-2 border-black rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaPhoneAlt className="mr-2" />
                        Contact Us
                    </motion.button>

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
                        {['Home', 'Community', 'Classes', 'Pricing', 'Blog'].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="relative mt-3 md:mt-0 md:ml-4">
                        <input
                            type="text"
                            placeholder="Search for Coach or Exercise"
                            className="w-full px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-4.35-4.35M16.35 9.25a7.1 7.1 0 11-14.2 0 7.1 7.1 0 0114.2 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default NavBar;

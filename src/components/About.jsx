import { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import loading from "../assets/loading.jpg";
import { motion } from "framer-motion";

const About = () => {
    // State to track which image is visible
    const [isImage1Visible, setIsImage1Visible] = useState(true);

    // Use effect to handle automatic image toggle
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsImage1Visible(prev => !prev);
        }, 1000); // Change image every 1 second

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="about" className="p-6 border-b">
            <motion.span 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="block text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-center">About BGMI</motion.span>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="lg:w-1/2">
                    <motion.p 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="mt-2 text-sm sm:text-base md:text-lg text-white">
                    Battlegrounds Mobile India (abbreviated BGMI) is an online multiplayer mobile battle royale for Indian players, developed and published by KRAFTON. It was released on July 2nd, 2021 for Android platforms and August 18th, 2021 for iOS platforms.
                    </motion.p>
                </div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 flex justify-center lg:justify-end relative">
                    {isImage1Visible ? (
                        <img
                            src={image1}
                            alt="BGMI Image"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                        ) : (
                        <img
                            src={loading}
                            alt="BGMI Load"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default About;

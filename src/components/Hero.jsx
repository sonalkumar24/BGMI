import video1 from "../assets/bgmiClip.mp4"
import { motion } from "framer-motion";

const Hero = () => {
    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    }
    return (
        <motion.div 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: 1,
                ease: "easeInOut",
                duration: 1,
            }}
            id="home" className="flex flex-col items-center mt-6 lg:mt-10 border-b p-4 md:p-6">
            <motion.h1 
                animate={{rotateX:[0,360,360,0]}}
                transition={{repeat:Infinity, repeatDelay:2 ,duration:3}}
                className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                India {" "}
                </span>
                Ka
                <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                {" "}Battleground
                </span>
            </motion.h1>

            {/* Video */}
            <motion.div 
                animate={{x:[0,150,150,0,-150,-150,0]}}
                transition={{repeat:Infinity, repeatDelay:2 ,duration:3}}
                className="flex mt-8 justify-center w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border border-orange-700 shadow-lg shadow-orange-400 mx-2 my-2"
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </motion.div>
    );
};

export default Hero;

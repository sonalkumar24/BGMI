import app_bg from "../assets/app_bg.jpg";
import app from "../assets/app.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import { motion } from "framer-motion";

const Download = () => {
    return (
        <div className="relative w-full h-96 border-b bg-cover bg-center" style={{ backgroundImage: `url(${app_bg})`}}>
            <div className="flex flex-col items-center h-full justify-center  text-gray-950 p-6 text-center">
                <motion.img 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    src={app} alt="appimg" className="mb-4 max-w-full h-auto" />
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="text-lg md:text-2xl">
                    India Ka Battlegrounds Is Here
                </motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className="text-lg md:text-2xl mb-2">
                    Download Now!
                </motion.p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.a 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="hover:scale-110" href="https://play.google.com/store/apps/details?id=com.pubg.imobile" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="playstore" className="h-10 sm:h-12 w-auto" />
                    </motion.a>
                    <motion.a 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="hover:scale-110" href="https://apps.apple.com/in/app/bgmi/id1521815354" target="_blank" rel="noopener noreferrer">
                        <img src={apple} alt="applestore" className="h-10 sm:h-12 w-auto" />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Download;

import { bgmiMaps } from "../constants"
import { motion } from "framer-motion";

const Maps = () => {
    return (
        <div id="maps" className="p-4 md:p-6 border-b">
            <motion.span 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="block text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
            Classic Maps in BGMI
            </motion.span>
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
                {bgmiMaps.map((bgmiMap, index) => (
                    <div key={index} className="relative rounded-lg shadow-lg overflow-hidden group">
                        <img
                            src={bgmiMap.image}
                            alt={bgmiMap.name}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent 
                                        text-white p-4 w-full transition-opacity duration-500 group-hover:opacity-100 opacity-0">
                            <h2 className="text-lg md:text-xl drop-shadow-lg">{bgmiMap.name}</h2>
                            <p className="text-xs md:text-sm font-medium drop-shadow-lg">{bgmiMap.size}</p>
                            <p className="text-xs md:text-sm font-medium drop-shadow-lg">{bgmiMap.feature}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Maps;

import video1 from "../assets/bgmiClip.mp4"

const Hero = () => {
    return (
        <div id="home" className="flex flex-col items-center mt-6 lg:mt-10 border-b p-4 md:p-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                India {" "}
                </span>
                Ka
                <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                {" "}Battleground
                </span>
            </h1>

            {/* Video */}
            <div className="flex mt-8 justify-center w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border border-orange-700 shadow-lg shadow-orange-400 mx-2 my-2"
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Hero;

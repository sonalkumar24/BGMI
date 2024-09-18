import app_bg from "../assets/app_bg.jpg";
import app from "../assets/app.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

const Download = () => {
    return (
        <div className="relative w-full h-96 border-b bg-cover bg-center" style={{ backgroundImage: `url(${app_bg})`}}>
            <div className="flex flex-col items-center h-full justify-center  text-gray-950 p-6 text-center">
                <img src={app} alt="appimg" className="mb-4 max-w-full h-auto" />
                <p className="text-lg md:text-2xl">
                    India Ka Battlegrounds Is Here
                </p>
                <p className="text-lg md:text-2xl mb-2">
                    Download Now!
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a className="hover:scale-110" href="https://play.google.com/store/apps/details?id=com.pubg.imobile" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="playstore" className="h-10 sm:h-12 w-auto" />
                    </a>
                    <a className="hover:scale-110" href="https://apps.apple.com/in/app/bgmi/id1521815354" target="_blank" rel="noopener noreferrer">
                        <img src={apple} alt="applestore" className="h-10 sm:h-12 w-auto" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Download;

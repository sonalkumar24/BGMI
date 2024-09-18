import logo from "../assets/image 2.svg"
import {Menu, X} from "lucide-react"
import { navItems } from "../constants"
import { useState } from "react";

const Navbar = () => {
    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const section = document.querySelector(targetId);
        const navbarHeight = document.querySelector("nav").offsetHeight;
    
        if (section) {
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
    };

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    // Updated scrollToSection to also close the navbar after scrolling
    const scrollToSectionMobile = (e, href) => {
        e.preventDefault();
        
        // Scroll to the target section logic
        const target = document.querySelector(href);
        const navbarHeight = document.querySelector("nav").offsetHeight;
        if (target) {
            const sectionTop = target.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
        // Close the mobile drawer after clicking a nav item
        setMobileDrawerOpen(false);
    };
    return (
        <nav className="sticky top-0 z-50 py-7 backdrop-blur-sm">
            <div className="container px-4 mx-auto relative text-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mr-2 ml-4 sm:ml-6 md:ml-10" src={logo} alt="logo" />
                        <span className="text-xs sm:text-sm md:text-base tracking-tight">
                            Battlegrounds Mobile India
                        </span>
                    </div>

                    <ul className="hidden lg:flex space-x-12 justify-center">
                        {navItems.map((item,index) => (
                            <li key={index}>
                                <a className="hover:text-blue-500 hover:no-underline transition duration-300 ease-in-out" 
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 mr-14 items-center">
                        <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile" 
                        className="text-black bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md hover:to-yellow-900 hover:text-white transition duration-300 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer">
                            Download Now
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index) => (
                            <li key={index} className="py-4">
                                <a className="hover:text-blue-500 hover:no-underline transition duration-300 ease-in-out" 
                                    href={item.href}
                                    onClick={(e) => scrollToSectionMobile(e, item.href)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile" 
                            className="text-black bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md hover:to-yellow-900 hover:text-white transition duration-300 ease-in-out"
                            target="_blank"
                            rel="noopener noreferrer">
                                Download Now
                        </a>
                    </div>
                </div>
            )}
            </div>
        </nav>
    )
}

export default Navbar
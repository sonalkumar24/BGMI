import erangel from "../assets/Erangel.png"
import miramar from "../assets/Miramar.png"
import sanhok from "../assets/Sanhok.png"
import vikendi from "../assets/Vikendi.png"
import livik from "../assets/Livik.png"
import karakin from "../assets/Karakin.png"
import nusa from "../assets/Nusa.png"

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Maps", href: "#maps" },
];

export const bgmiMaps = [
    {
        name: "Erangel",
        size: "8km x 8km",
        feature: "Diverse terrain for combat.",
        image: erangel
    },
    {
        name: "Miramar",
        size: "8km x 8km",
        feature: "A vast desert great for sniping.",
        image: miramar
    },
    {
        name: "Sanhok",
        size: "4km x 4km",
        feature: "A dense forest where firefights cant be avoided.",
        image: sanhok
    },
    {
        name: "Vikendi",
        size: "6km x 6km",
        feature: "Confront your enemies on a frozen snowfield.",
        image: vikendi
    },
    {
        name: "Livik",
        size: "2km x 2km",
        feature: "Fast matches on all terrain.",
        image: livik
    },
    {
        name: "Karakin",
        size: "2km x 2km",
        feature: "Fast-paced firefights on hilly terrain.",
        image: karakin
    },
    {
        name: "Nusa",
        size: "1km x 1km",
        feature: "Descend into the fray!",
        image: nusa
    },
]
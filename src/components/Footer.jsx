import footerimg from "../assets/footerimg.png"

const Footer = () => {
  return (
    <div className="m-2 flex justify-center">
        <img
        src={footerimg}
        alt="footer"
        className="h-5 w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    />
    </div>
  )
}

export default Footer
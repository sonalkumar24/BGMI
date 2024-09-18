
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Maps from './components/Maps'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <>
        <Navbar/>
        <div className="max-w-screen-2xl mx-auto pt-0 px-6">
          <Hero/>
          <About/>
          <Maps/>
          <Download/>
          <Footer/>
        </div>
      </>
    </div>
  )
}

export default App
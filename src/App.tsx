import About from "./components/About"
import Contact from "./components/Content"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParallaxBG from "./components/ParallaxBG"
import Projects from "./components/Project"
import ScrollIndicator from "./components/ScrollIndicator"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <Navbar />
      <ScrollIndicator />
      <ParallaxBG />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
export default App
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import Team from './Components/Team/Team'


function App() {


  return (
    <>
      <div>
        <Nav />
        <Intro />
        <About />
        <Services />
        <Skills />
        <Team />
        <Contact />
        <Footer />
      </div>
      
      
     
    </>
  )
}

export default App

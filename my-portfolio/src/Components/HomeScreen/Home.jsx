
import Nav from '../Nav/Nav'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'

function Home() {
  return (
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
  )
}

export default Home

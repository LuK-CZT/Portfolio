import Contact from './components/contact'
import Footer from './components/Footer'
import Intro from './components/intro'
import Projects from './components/projects'
import Timeline from './components/TImeline'

function App() {

  return (
    <div className='App'>
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro/>
        <Projects/>
        <Timeline/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

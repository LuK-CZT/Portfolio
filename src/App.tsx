import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import {ThemeProvider} from 'next-themes'
import ThemeBtn from './components/ThemeBtn'


function App() {

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='App h-screen'>
        <ThemeBtn/>
        <div className="max-w-7xl w-11/12 mx-auto ">
          <Intro/>
          <Projects/>
          <Timeline/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { ContactMe } from './components/ContactMe'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'  
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-br from-blue-800 to-richblack-900">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  
  </div>
  )
}

export default App

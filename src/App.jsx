import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <>
      <div className='main-container'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

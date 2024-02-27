import { Link } from 'react-router-dom'
import './../styles/Navbar.css'
export default function Navbar() {
  return (
    <> 
      <div className='navbar-main-container'>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/projects'>Projects</Link>
        <Link className='links' to='/contact'>Contact</Link>
      </div>
    </>
  )
}

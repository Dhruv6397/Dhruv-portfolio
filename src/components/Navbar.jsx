import { Link } from 'react-router-dom'
import './../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Navbar() {
  const [navIcon,navIconToggle] = useState(true);
  return (
    <> 
      <div className='navbar-main-container'>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/projects'>Projects</Link>
        <Link className='links' to='/contact'>Contact</Link>
      </div>
      <div className='toggle-icon'>
        {navIcon && <MenuIcon fontSize='large' className='icon-item' onClick={()=>navIconToggle(!navIcon)}/>}
        {!navIcon && <CloseIcon fontSize='large' className='icon-item' onClick={()=>navIconToggle(!navIcon)}/>}
      </div>
      <div className={navIcon ?'mobile-navbar off-mobile-navbar':'mobile-navbar on-mobile-navbar'}>
        <Link className='mobiles-links' to='/'>Home</Link>
        <Link className='mobiles-links' to='/about'>About</Link>
        <Link className='mobiles-links' to='/projects'>Projects</Link>
        <Link className='mobiles-links' to='/contact'>Contact</Link>
      </div>
    </>
  ) 
}

import './navBar.css'
// import NavBar2 from './navBar2';
import DropDownMenu from '../DropDownMenu';
import {Link} from "react-router-dom";
import React, {useState} from 'react';



export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenu = () => {
      setMenuOpen(!menuOpen);
    }
  
    return (
      <div className='navBarBackground'>
        <p>
          <Link onClick={() => setMenuOpen(false)} to="*" className='logo'>thriftyThreadsIL</Link>
          <span>
            <img onClick={handleMenu}
                 className='menuLogo'
                 src='https://i.pinimg.com/736x/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.jpg'
                 alt=':::'
            />
          </span>
        </p>
  
        {menuOpen && <DropDownMenu handleSelectPage={() => setMenuOpen(false)} />}
      </div>
    )
  }
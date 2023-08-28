import './navBar.css'
// import NavBar2 from './navBar2';
import DropDownMenu from '../DropDownMenu';
import {Link} from "react-router-dom";
import React, {useState} from 'react';



export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        <div className='navBarBackground'>
            <p>
                <Link onClick={() => setMenuOpen(false)} to="/" className='logo'>thriftyThreadsIL</Link> 
                <span>
                    <img onClick={handleMenu}
                        className='menuLogo' 
                        src='menuButton.png' 
                        alt=""
                    />
                </span>
            </p>
        
            {menuOpen && <DropDownMenu handleSelectPage={() => setMenuOpen(false)} />}
        </div>
    )  
}


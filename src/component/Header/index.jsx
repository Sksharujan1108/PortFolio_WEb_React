import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (

        // Header Section
        <header 
          className = 'flex justify-between px-5 py-3 bg-primary '
        >
            <a className = 'font-bold text-white text-2xl' href="#">Sk Sarujan !!</a>

         {/* Mobile View responsive screen use so hide that element */}

            <nav className = "hidden md:block">
                <ul className = 'flex text-white text-2xl'>
                    <li><a href = "/">Home</a></li>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#project">Projects</a></li>
                    <li><a href = "#resume">Resume</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </nav>

           {/* Mobile View */}
            { toggleMenu && <nav className = "block md:hidden ">
                <ul onClick = {() => setToggleMenu(!toggleMenu)} className = 'flex flex-col text-white mobile-nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}

            {/* show the 3 icon and didn't show the desktop view */}
            <button   
              className = 'block md:hidden'
              onClick = {() => setToggleMenu(!toggleMenu)}
            > 
              <Bars3Icon className = 'text-white h-6' /> 
            </button>

        </header>
        // ***
    );
}
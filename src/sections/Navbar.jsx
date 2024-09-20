import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <div>
            <ul className='nav-ul'>
                {navLinks.map(({id, name, href}) => (
                    <li key={id} className='nav-li'>
                        <a href={href} className='text-cherry text-2xl'>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-transparent'>
            <div className='w-full mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href="/" className="text-white font-satoshiBlack text-2xl hover:text-cherry transition-colors">
                        PATRICIO
                    </a>
                    <button onClick={toggleMenu} className='text-block hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className='h-6 w-6'/>
                    </button>
                    <nav className='sm:flex hidden '>
                        <NavItems />
                    </nav>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className='p-5'>
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar

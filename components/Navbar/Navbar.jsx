import React, { useState } from 'react';
import Link from './Link';
import { AlignLeft, X } from 'lucide-react';

const navbarItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Portfolio', path: '/portfolio' },
    { id: 5, name: 'Contact', path: '/contact' },
  ];

const Navbar = () => {
    const links = navbarItems.map((route) => <Link key={route.id} route={route}></Link>)

    const [open, setOpen] = useState(false)

    return (
        <nav className='flex justify-between items-center mx-10 py-2'>
            <span className='flex ' onClick={()=> setOpen(!open)}>
                {
                    open? <X className='md:hidden'></X> :<AlignLeft className='md:hidden'></AlignLeft>
                }
                <ul className={`md:hidden absolute bg-gray-100 duration-500
                    ${open? 'top-12': '-top-40'}
                    rounded-lg 
                    `}>
                    {
                        links
                    }
                </ul>
            <h2 className='ml-4 text-2xl font-semibold'>My Navbar</h2>
            </span>
            <ul className='md:flex hidden gap-7'>
                {
                    links
                }
            </ul>
            <button className='btn btn-primary'>Sign in</button>
        </nav>
    );
};

export default Navbar;
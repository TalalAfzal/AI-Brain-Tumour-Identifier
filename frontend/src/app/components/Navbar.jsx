'use client';
import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '../data/navbarLinks';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md px-20">
            {
                <div className="container px-4 py-4 flex justify-between items-center">
                    <div className="flex text-lg font-bold">
                        <Link href={"/"} className='hover:text-gray-400'>
                            <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="mr-2" />
                        </Link>
                        <h2>Brain Tumour Detection</h2>
                    </div>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
                        {navbarLinks.map((link, index) => (
                            <li key={index} className="md:ml-6">
                                <Link href={`/${link.toLowerCase()}`} className="hover:text-gray-400">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </nav>
    );
}
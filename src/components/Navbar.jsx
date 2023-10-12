import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <section className='cursor-none backdrop-blur-lg z-20 fixed top-0 left-0 px-8 h-12 py-2 border-b border-white/50 w-full flex flex-row justify-between items-center text-white'>
            <Image 
                src="/svg/logo.svg"
                width={80}
                height={100}
            />
            <ul className='flex flex-row gap-5'>
                <li>
                    <a href="#about-me" className='cursor-none transition-all border-b border-white/0 hover:border-white top-0 hover:-top-0.5 relative ease-out'>ABOUT ME</a>
                </li>
                <li>
                    <a href="#about-me" className='cursor-none transition-all border-b border-white/0 hover:border-white top-0 hover:-top-0.5 relative ease-out'>PROJECTS</a>
                </li>
                <li>
                    <a href="#about-me" className='cursor-none transition-all border-b border-white/0 hover:border-white top-0 hover:-top-0.5 relative ease-out'>CONTACT ME</a>
                </li>
            </ul>
        </section>
    )
}
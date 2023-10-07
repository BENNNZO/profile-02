import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='h-screen'>
            <Image
                src="/img/hero-bg-grid.png"
                width={1000}
                height={1000}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none'
            />
            <div className='flex flex-row justify-between items-center h-full px-12 relative z-10'>
                <div className='flex flex-col gap-3'>
                    <Image
                        src="/svg/logo.svg"
                        width={200}
                        height={1000}
                    />
                    <h1 className='text-5xl font-semibold tracking-wide'>BENJAMIN PHILLIPS</h1>
                    <p className='text-xl font-bold opacity-50 relative -top-3'>FULL STACK WEB DEVELOPER</p>
                </div>
                <div className='mr-96 overflow-hidden aspect-square rounded-full'>
                    <Image 
                        src="/img/hero-profile.jpg"
                        width={300}
                        height={300}
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </section>
    )
}
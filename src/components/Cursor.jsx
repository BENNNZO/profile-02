"use client"

import React, { useState, useEffect } from 'react';

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePos({ x: e.clientX, y: e.clientY })
        })
    }, [])

    return (
        <section className='fixed top-0 left-0 pointer-events-none'>
            <div className='absolute w-8 h-8 bg-white/20 z-20 transition-transform ease-out duration-200 rounded-full' style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}>
            
            </div>
            <div className='absolute w-2 h-2 bg-white/70 z-20 rounded-full' style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}>
            
            </div>
        </section>
    )
}
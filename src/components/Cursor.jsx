"use client"

import React, { useState, useEffect } from 'react';

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePos({ x: e.pageX, y: e.pageY })
        })
    }, [])

    return (
        <section>
            <div className='absolute w-8 h-8 bg-white/20 z-20 transition-transform ease-out rounded-full' style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}>
            
            </div>
            <div className='absolute w-2 h-2 bg-white/70 z-20 rounded-full' style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}>
            
            </div>
        </section>
    )
}
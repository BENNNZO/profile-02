"use client"

import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Effects } from "@react-three/drei";
// import { DoubleSide } from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { motion } from 'framer-motion';

import { Model } from '@/components/models/Test'

export default function Background() {
    const [rotX, setRotX] = useState(0)
    const [rotY, setRotY] = useState(Math.PI * 1.5)
    const [rotZ, setRotZ] = useState(0)
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [posZ, setPosZ] = useState(4)

    return (
        <main className='h-screen absolute top-0 left-0 w-full'>
            <div className='absolute top-12 left-0 bg-red-400 p-4 z-10 flex flex-col'>
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={rotX} onChange={e => setRotX(e.target.value)} />
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={rotY} onChange={e => setRotY(e.target.value)} />
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={rotZ} onChange={e => setRotZ(e.target.value)} />
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={posX} onChange={e => setPosX(e.target.value)} />
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={posY} onChange={e => setPosY(e.target.value)} />
                <input type="range" min={0} max={3.14 * 2} step={0.01} className='w-96' value={posZ} onChange={e => setPosZ(e.target.value)} />
            </div>

            <Canvas>
                <EffectComposer>
                    <Bloom intensity={0.1} radius={0.5} mipmapBlur levels={10} blendFunction={BlendFunction.ADD} />
                </EffectComposer>
                <Model rotation={[rotX, rotY, rotZ]} position={[posX, posY, posZ]} />
                <OrbitControls />
            </Canvas>
        </main>
    )
}

// HEX save for blender colors
// 9D14FF
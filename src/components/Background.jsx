"use client"

import React from 'react';
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Effects } from "@react-three/drei";
// import { DoubleSide } from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { motion } from 'framer-motion';

import { Model } from '@/components/models/Test_05'

export default function Background() {
    return (
        <main className='h-screen fixed w-full'>
            <Canvas>
                <EffectComposer>
                    <Bloom intensity={0.1} radius={0.5} mipmapBlur levels={10} blendFunction={BlendFunction.ADD} />
                </EffectComposer>
                <Model rotation={[0, Math.PI / 2, 0]} position={[-0.5, 0, 4]} />
                <OrbitControls />
            </Canvas>
        </main>
    )
}

// HEX save for blender colors
// 9D14FF
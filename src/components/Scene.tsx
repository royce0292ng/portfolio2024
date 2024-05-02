'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model'

const Scene = () => {
  return (
    <Canvas style={{backgroundColor: "black"}}>
        <directionalLight intensity={3} position={[0, 3, 2]}/>
        <Environment preset='city'/>
        <Model/>
    </Canvas>
  )
}

export default Scene
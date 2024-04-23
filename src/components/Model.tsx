import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import { useControls } from 'leva'
import { BackSide } from 'three';
 
 const Model = () => {

    const mesh = useRef();
    const { nodes } = useGLTF("/models/Torus.glb")
    const { viewport } = useThree()

    useFrame(() => {
      mesh.current.rotation.x += 0.035
    })

    const materialProps = useControls({
      thickness: { value: 0.2, min: 0, max: 3, step: 0.05},
      roughness: { value: 0, min: 0, max: 1, step: 0.1},
      transmission: { value: 1, min: 0, max: 1, step: 0.1},
      ior: { value: 1.2, min: 0, max: 3, step: 0.1},
      chromaticAberration: { value: 0.02, min: 0, max: 1},
      backSide: {value: true},
    })

   return (
     <group scale={viewport.width/10}>
        <Text fontSize={1} position={[0, 0, -5]}>
          Hello World !!!
        </Text>
        <mesh ref={mesh} {...nodes.Torus001}>
          <MeshTransmissionMaterial {...materialProps}>

          </MeshTransmissionMaterial>
        </mesh>
     </group>
   )
 }
 
 export default Model

 
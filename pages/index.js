import React, { Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Environment, OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className='flex items-center justify-center w-screen h-screen p-10'>
      <Canvas className='bg-black border cursor-grab active:cursor-grabbing'>
        <OrbitControls />
        <MyScene />

        <ambientLight />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[5, 15, 10]} />
      </Canvas>
    </div>
  )
}

function MyScene() {

  const gltf = useLoader(GLTFLoader, '/green.gltf');
  console.log(gltf);

  return (

    <Fragment>
      <primitive object={gltf.scene} scale={0.4} />
    </Fragment>

  )
}

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/objts/green.gltf");
    return (
        <group ref={group} {...props} dispose={null} scale={0.4}>
            <mesh material={materials['Material.001']}>
                <primitive object={nodes['ConsoleOuter_Glass']} />
            </mesh>
        </group>
    );
}

useGLTF.preload("/Poimandres.gltf");

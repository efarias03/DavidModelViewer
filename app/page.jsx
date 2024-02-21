"use client"
import React from 'react';
import Image from "next/image";
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { DavidModel } from './david';

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }} className='canvas'>
        <ambientLight />
        <PerspectiveCamera rotateX={180}>
        <OrbitControls />
          <DavidModel />
        </PerspectiveCamera>
        <Environment preset="sunset" background={true} />
      </Canvas>
    </div>
  );
}

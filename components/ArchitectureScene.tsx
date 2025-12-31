
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Box, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Defining capitalized aliases for Three.js intrinsic elements to bypass JSX.IntrinsicElements type errors
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;
const Group = 'group' as any;

const BuildingBlock = ({ position, scale, color }: { position: [number, number, number], scale: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={scale}>
      {/* Fix: Using MeshStandardMaterial alias instead of lowercase tag */}
      <MeshStandardMaterial
        color={color}
        metalness={0.5}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </Box>
  );
};

export const HeroArchitecture: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
        {/* Fix: Using AmbientLight, PointLight, and SpotLight aliases */}
        <AmbientLight intensity={0.7} />
        <PointLight position={[10, 10, 10]} intensity={1} color="#f9b900" />
        <SpotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        {/* Fix: Using Group alias */}
        <Group rotation={[0, Math.PI / 4, 0]}>
          <BuildingBlock position={[-1, 0, -1]} scale={[1, 3, 1]} color="#4B5563" /> {/* Grey */}
          <BuildingBlock position={[1, 0, -1]} scale={[1, 1.5, 1]} color="#f9b900" /> {/* Yellow */}
          <BuildingBlock position={[0, 0, 1]} scale={[1.2, 0.5, 1.2]} color="#9CA3AF" /> {/* Light Grey */}
          <BuildingBlock position={[1.5, 0, 1.5]} scale={[0.5, 4, 0.5]} color="#1F2937" /> {/* Dark Grey */}
          <BuildingBlock position={[-2, 0, 1]} scale={[0.8, 2, 0.8]} color="#D1D5DB" /> {/* Lighter Grey */}
        </Group>

        <Grid
          infiniteGrid
          fadeDistance={20}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionColor="#f9b900"
          cellColor="#E5E7EB"
          cellThickness={0.5}
          sectionThickness={1}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export const BlueprintScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 5, 5] }}>
        {/* Fix: Using AmbientLight alias */}
        <AmbientLight intensity={0.5} />
        <Grid
          infiniteGrid
          fadeDistance={30}
          cellSize={0.5}
          cellColor="#1F2937"
          sectionColor="#f9b900"
          sectionSize={2}
          opacity={0.1}
        />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Fix: Using Group alias */}
          <Group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
            {[...Array(5)].map((_, i) => (
              <Box key={i} position={[i * 1.2 - 2, 0, 0]} args={[1, 0.1, 2]}>
                {/* Fix: Using MeshStandardMaterial alias */}
                <MeshStandardMaterial wireframe color="#1F2937" />
              </Box>
            ))}
          </Group>
        </Float>
      </Canvas>
    </div>
  );
}

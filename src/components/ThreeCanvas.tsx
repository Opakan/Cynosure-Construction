import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Environment, 
  PerspectiveCamera,
  MeshReflectorMaterial
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

function Building({ position, scale, color }: { position: [number, number, number], scale: [number, number, number], color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={scale} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.1}
      />
    </mesh>
  );
}

function Scene() {
  const { viewport } = useThree();
  const buildings = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        0,
        (Math.random() - 0.5) * 40
      ] as [number, number, number],
      scale: [
        Math.random() * 2 + 1,
        Math.random() * 10 + 2,
        Math.random() * 2 + 1
      ] as [number, number, number],
      color: i % 3 === 0 ? '#C5A059' : i % 3 === 1 ? '#1A1A1A' : '#888888'
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(t * 0.1) * 10, 0.01);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 20 + Math.cos(t * 0.1) * 5, 0.01);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C5A059" />
      
      <group position={[0, -5, 0]}>
        {buildings.map((props, i) => (
          <Building key={i} {...props} />
        ))}
        
        {/* Ground Reflector */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
            mirror={1}
          />
        </mesh>
      </group>

      {/* Floating abstract construction elements */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[5, 2, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#C5A059" metalness={1} roughness={0} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[-8, 4, -10]}>
          <octahedronGeometry args={[2]} />
          <meshStandardMaterial color="#8E8E8E" metalness={0.8} />
        </mesh>
      </Float>
    </>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-brand-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 5, 25]} fov={35} />
        <Scene />
      </Canvas>
      
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />
    </div>
  );
}

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function MedicalSculpture() {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Object */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial
            ref={materialRef}
            color="#ffffff"
            emissive="#0ea5e9"
            emissiveIntensity={0.1}
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            thickness={2}
            specularColor="#22d3ee"
          />
        </mesh>
      </Float>

      {/* Orbiting Elements */}
      {[...Array(3)].map((_, i) => (
        <Float key={i} speed={3} rotationIntensity={1} floatIntensity={2} position={[Math.sin((i / 3) * Math.PI * 2) * 3, Math.cos((i / 3) * Math.PI * 2) * 3, Math.sin(i) * 2]}>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshPhysicalMaterial
              color="#22d3ee"
              emissive="#0ea5e9"
              emissiveIntensity={0.5}
              transmission={0.5}
              roughness={0.2}
              clearcoat={1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloatingParticles() {
  return (
    <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.2} color="#67e8f9" />
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        dpr={[1, 2]} // limit pixel ratio for performance
      >
        <color attach="background" args={['#f8fafc']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        
        <MedicalSculpture />
        <FloatingParticles />

        {/* Environment for Reflections */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[5, -1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          </group>
        </Environment>

        {/* Optional: OrbitControls restricted */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
      
      {/* Gradient overlay to blend with rest of the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-light/50 to-bg-light z-10 pointer-events-none" />
    </div>
  );
}

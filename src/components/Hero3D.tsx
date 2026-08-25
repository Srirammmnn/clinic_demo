import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  const count = 36;
  const radius = 1.8;
  const height = 8.5;
  const turns = 2;

  const pairs = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const y = (t - 0.5) * height;
      const angle = t * Math.PI * 2 * turns;
      items.push({ y, angle });
    }
    return items;
  }, [count, height, turns]);

  return (
    <group ref={groupRef} rotation={[0, 0, 0.25]}>
      {pairs.map((pair, idx) => (
        <group key={idx} position={[0, pair.y, 0]} rotation={[0, -pair.angle, 0]}>
          <mesh position={[radius, 0, 0]}>
            <sphereGeometry args={[0.26, 16, 16]} />
            <meshStandardMaterial color="#122822" roughness={0.15} metalness={0.6} />
          </mesh>
          <mesh position={[-radius, 0, 0]}>
            <sphereGeometry args={[0.26, 16, 16]} />
            <meshStandardMaterial color="#122822" roughness={0.15} metalness={0.6} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, radius * 2]} />
            <meshStandardMaterial color="#bfa37c" roughness={0.25} metalness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 48 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1.2} color="#bfa37c" />
        <pointLight position={[0, 0, 6]} intensity={1.5} color="#122822" />
        
        <DNAStrand />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

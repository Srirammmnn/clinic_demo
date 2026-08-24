import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Continuous slow rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Interactive tilt based on mouse position
      const targetTiltX = state.pointer.y * 0.5; 
      const targetTiltZ = -(state.pointer.x * 0.5);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetTiltX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetTiltZ, 0.05);

      // Interactive scale pulse when hovered
      const targetScale = hovered ? 1.1 : 1.0;
      groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1);
      groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, targetScale, 0.1);
      groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, targetScale, 0.1);
    }
  });

  const numPairs = 35;
  const radius = 1.4;
  const height = 7;
  const turns = 2;

  // Pre-calculate positions and angles to avoid doing it on every render
  const pairs = useMemo(() => {
    return Array.from({ length: numPairs }).map((_, i) => {
      const t = i / numPairs;
      const y = (t - 0.5) * height;
      const angle = t * Math.PI * 2 * turns;
      return { y, angle };
    });
  }, [numPairs, height, turns]);

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      cursor={hovered ? "pointer" : "auto"}
    >
      {pairs.map((pair, i) => (
        <group key={i} position={[0, pair.y, 0]} rotation={[0, -pair.angle, 0]}>
          {/* Backbone 1 */}
          <mesh position={[radius, 0, 0]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color="#122822" roughness={0.1} metalness={0.6} />
          </mesh>
          
          {/* Backbone 2 */}
          <mesh position={[-radius, 0, 0]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color="#122822" roughness={0.1} metalness={0.6} />
          </mesh>
          
          {/* Rung connecting the two backbones */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, radius * 2]} />
            <meshStandardMaterial color="#bfa37c" roughness={0.3} metalness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#f4f1ea']} />
        
        {/* Dynamic Studio Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
        <pointLight position={[-5, -5, 5]} intensity={1.5} color="#bfa37c" />
        <pointLight position={[5, 0, -5]} intensity={1} color="#122822" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <DNAHelix />
        </Float>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
      
    </div>
  );
}

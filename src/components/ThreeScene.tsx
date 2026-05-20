import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function TopologicalWave() {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, count } = useMemo(() => {
    const width = 45;
    const depth = 45;
    const count = width * depth;
    const positions = new Float32Array(count * 3);

    let i = 0;
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        positions[i] = (x - width / 2) * 0.7; // X
        positions[i + 1] = 0;                  // Y
        positions[i + 2] = (z - depth / 2) * 0.7; // Z
        i += 3;
      }
    }

    return { positions, count };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positionAttribute = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const x = positionAttribute.getX(i);
      const z = positionAttribute.getZ(i);

      // Premium dual-sine wave formulation for rich terrain elevation
      const y = Math.sin(x * 0.15 + time * 0.8) * 0.4 + Math.cos(z * 0.15 + time * 0.8) * 0.4;

      positionAttribute.setY(i, y - 2);
    }

    positionAttribute.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#10b981"
        size={0.05}
        sizeAttenuation={true}
        transparent
        opacity={0.3}
      />
    </points>
  );
}

function FloatingOrbs() {
  const count = 12;
  const orbs = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10 - 2,
      ],
      speed: Math.random() * 0.3 + 0.1,
      size: Math.random() * 0.35 + 0.1,
      color: Math.random() > 0.5 ? "#10b981" : "#06b6d4",
    }));
  }, []);

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed * 4} rotationIntensity={1} floatIntensity={3}>
          <mesh position={orb.position as any}>
            <sphereGeometry args={[orb.size, 12, 12]} />
            <meshBasicMaterial
              color={orb.color}
              transparent
              opacity={0.12}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function AnimatedLights() {
  const light1Ref = useRef<THREE.PointLight>(null!);
  const light2Ref = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(t * 0.4) * 12;
      light1Ref.current.position.z = Math.cos(t * 0.4) * 12;
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(t * 0.3) * 12;
      light2Ref.current.position.y = Math.sin(t * 0.3) * 12;
    }
  });

  return (
    <>
      <pointLight ref={light1Ref} position={[10, 10, 10]} intensity={1.5} color="#10b981" />
      <pointLight ref={light2Ref} position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
    </>
  );
}

function StarField() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={4000}
      factor={3}
      saturation={0}
      fade
      speed={0.8}
    />
  );
}

export const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.15} />
        <AnimatedLights />

        <StarField />
        <TopologicalWave />
        <FloatingOrbs />

        <fog attach="fog" args={["#000000", 5, 25]} />
      </Canvas>

      {/* Vignette and depth overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
    </div>
  );
};

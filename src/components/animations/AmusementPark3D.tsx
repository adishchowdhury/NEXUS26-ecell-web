import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Line, Sphere, MeshDistortMaterial, Trail, Instance, Instances } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Represents abstract roller coaster track
function AbstractCoaster({ radius = 10 }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      const x = Math.cos(angle) * (radius + Math.sin(angle * 4) * 2);
      const y = Math.sin(angle * 3) * 3 + Math.cos(angle * 2) * 2;
      const z = Math.sin(angle) * (radius + Math.cos(angle * 4) * 2);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [radius]);

  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Line points={points} color="#7C3AED" lineWidth={3} dashed dashScale={50} dashSize={1} dashOffset={0} animation />
      <Line points={points} color="#22D3EE" lineWidth={1} position={[0, -0.5, 0]} transparent opacity={0.5} />
      
      {/* Moving cart/energy pulse on track */}
      <Trail width={5} length={8} color="#00F5FF" attenuation={(t) => t * t}>
        <EnergyPulse points={points} />
      </Trail>
    </group>
  );
}

function EnergyPulse({ points }: { points: THREE.Vector3[] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 0.2) % 1;
    const index = Math.floor(t * (points.length - 1));
    const nextIndex = (index + 1) % points.length;
    const lerpT = (t * (points.length - 1)) % 1;
    
    ref.current.position.lerpVectors(points[index], points[nextIndex], lerpT);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial color="#00F5FF" toneMapped={false} />
    </mesh>
  );
}

// Represents abstract glowing Ferris wheel
function FerrisWheel() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  const numCabins = 12;
  const radius = 15;

  return (
    <group position={[-15, 5, -20]}>
      {/* Main Wheel */}
      <group ref={ref}>
        {/* Inner Hub */}
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <MeshDistortMaterial color="#7C3AED" speed={2} distort={0.2} transparent opacity={0.8} />
        </mesh>
        
        {/* Spokes and glowing cabins */}
        {Array.from({ length: numCabins }).map((_, i) => {
          const angle = (i / numCabins) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <group key={i}>
              <Line points={[[0,0,0], [x,y,0]]} color="#ffffff" transparent opacity={0.1} lineWidth={1} />
              <Float speed={2} rotationIntensity={0} floatIntensity={1} position={[x, y, 0]}>
                <mesh>
                  <octahedronGeometry args={[1, 0]} />
                  <meshBasicMaterial color={i % 2 === 0 ? "#A855F7" : "#22D3EE"} wireframe />
                </mesh>
                <mesh scale={0.5}>
                  <sphereGeometry args={[1, 16, 16]} />
                  <meshBasicMaterial color="#ffffff" toneMapped={false} />
                </mesh>
              </Float>
            </group>
          );
        })}
        
        {/* Outer Ring */}
        <mesh>
          <torusGeometry args={[radius, 0.1, 16, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
        </mesh>
        <mesh>
          <torusGeometry args={[radius + 0.5, 0.05, 16, 100]} />
          <meshBasicMaterial color="#7C3AED" transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// Particles floating up like balloons or sparks
function MagicDust() {
  const count = 500;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(0.1, Math.cos(t));
      dummy.position.set(
        (particle.xFactor / 2) + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.yFactor / 2) + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.zFactor / 2) + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#00F5FF" transparent opacity={0.6} toneMapped={false} />
    </instancedMesh>
  );
}

export function AmusementPark3D() {
  return (
    <div className="absolute inset-0 z-0 bg-[#030712]">
      {/* Background glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/20 via-[#030712]/80 to-[#030712] z-0" />
      
      <div className="absolute inset-0 z-10 mix-blend-screen opacity-50 pointer-events-none">
        <Canvas camera={{ position: [0, 5, 30], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AbstractCoaster radius={18} />
          <FerrisWheel />
          <MagicDust />
          <fog attach="fog" args={['#030712', 20, 60]} />
        </Canvas>
      </div>
    </div>
  );
}

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Preload } from "@react-three/drei";

export const TechGeometry = (props) => {
  const meshRef = useRef();
  const innerRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
        innerRef.current.rotation.x -= delta * 0.1;
        innerRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh
        {...props}
        ref={meshRef}
        scale={hovered ? 2.8 : 2.5}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#a855f7" : "#67e8f9"}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh
        ref={innerRef}
        scale={1.5}
      >
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
           color="#4c1d95"
           transparent
           opacity={0.2}
        />
      </mesh>
    </Float>
  );
};

const TechCanvas = () => {
  return (
    <Canvas className="cursor-pointer" frameloop="always" camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <TechGeometry position={[0, 0, 0]} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TechCanvas;

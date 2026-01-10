import React, { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, useGLTF, Preload, Center } from "@react-three/drei";
import * as THREE from "three";
import { TechGeometry } from "./TechShape";

// Import assets
import chipUrl from "../../assets/pcb.glb";
import laptopUrl from "../../assets/laptop.glb";
import satelliteUrl from "../../assets/satellite.glb";
import speakerUrl from "../../assets/speakers.glb";
import coffeeUrl from "../../assets/coffee_shop_cup.glb";

// ... hologramMaterial definition ...
const hologramMaterial = new THREE.MeshPhysicalMaterial({
  color: "#00ffff",       // Cyan base
  emissive: "#00ffff",    // Cyan glow (matched base for hotter look)
  emissiveIntensity: 4,   // Much brighter glow
  roughness: 0.2,
  metalness: 0.8,
  transparent: true,
  opacity: 0.6,
  transmission: 0,        // Less glass, more solid light
  wireframe: false,       
});

const HolographicModel = ({ url, scale = 1, rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(url);

  // Apply hologram material to all meshes in the model
  const clonedScene = useMemo(() => {
    const s = scene.clone();
    s.traverse((child) => {
      if (child.isMesh) {
        child.material = hologramMaterial;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
    return s;
  }, [scene]);

  return (
    <Center>
      <primitive object={clonedScene} scale={scale} rotation={rotation} />
    </Center>
  );
};

// Adjusted scales and rotations for optimal framing
const Chip = () => <HolographicModel url={chipUrl} scale={0.5} rotation={[-Math.PI / 2.5, 0.2, Math.PI / 4]} />;
const Laptop = () => <HolographicModel url={laptopUrl} scale={0.13} rotation={[0.4, -0.4, 0]} />;
const Satellite = () => <HolographicModel url={satelliteUrl} scale={0.15} rotation={[0.2, 0.2, 0]} />;
const Speaker = () => <HolographicModel url={speakerUrl} scale={1} rotation={[0, -0.5, 0]} />;
const Coffee = () => <HolographicModel url={coffeeUrl} scale={2} rotation={[0, 0.5, -0.7]} />;

const MorphingAsset = ({ role }) => {
  let AssetComponent = TechGeometry; // Default Fallback

  const r = role?.toLowerCase() || "";

  if (r.includes("eletr") || r.includes("electro")) AssetComponent = Chip;
  else if (r.includes("dev") || r.includes("stack")) AssetComponent = Laptop;
  else if (r.includes("iot") || r.includes("smart")) AssetComponent = Satellite;
  else if (r.includes("music") || r.includes("músic") || r.includes("produtor")) AssetComponent = Speaker;
  else if (r.includes("caf") || r.includes("coffee")) AssetComponent = Coffee;

  return (
    <Canvas className="cursor-pointer" frameloop="always" camera={{ position: [5, 0, 0], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={10} color="#00ffff" />
      <spotLight position={[-10, -10, -10]} intensity={2} color="#ff00ff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <AssetComponent />
      </Float>
      
      <Preload all />
    </Canvas>
  );
};

// Preload GLTFs to avoid popping
useGLTF.preload(chipUrl);
useGLTF.preload(laptopUrl);
useGLTF.preload(satelliteUrl);
useGLTF.preload(speakerUrl);
useGLTF.preload(coffeeUrl);

export default MorphingAsset;
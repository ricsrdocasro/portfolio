import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { TechGeometry } from "./TechShape";

const Avatar = () => {
  // This expects a file named 'avatar.glb' in the public/models folder
  // You can get a ready-to-use avatar from https://readyplayer.me/
  const model = useGLTF("/models/avatar.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // If the model has animations (like 'Idle' or 'Wave'), play them here
    if (actions?.Idle) {
        actions.Idle.play();
    }
  }, [actions]);

  return (
    <primitive 
      object={model.scene} 
      scale={2.5} 
      position={[0, -2.5, 0]} 
      rotation={[0, -0.2, 0]}
    />
  );
};

const AvatarCanvas = () => {
  const [error, setError] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      shadows
      className="cursor-move"
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      
      <Suspense fallback={<TechGeometry />}>
          <ErrorBoundary onError={() => setError(true)}>
            {!error ? <Avatar /> : <TechGeometry />}
          </ErrorBoundary>
        <Preload all />
      </Suspense>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

// Simple Error Boundary to catch missing model
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Avatar loading error:", error);
      if(this.props.onError) this.props.onError();
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.children[1] || null; // Render fallback
      }
      return this.props.children;
    }
}

export default AvatarCanvas;

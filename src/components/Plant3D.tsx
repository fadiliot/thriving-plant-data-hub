
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function PlantModel() {
  // Using a basic pot model for now - you can replace this with your own 3D model
  return (
    <mesh position={[0, -1, 0]}>
      <cylinderGeometry args={[1, 1.2, 2, 32]} />
      <meshStandardMaterial color="#825c3c" />
      {/* Simple plant representation */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
    </mesh>
  );
}

export default function Plant3D() {
  return (
    <div className="h-[400px] w-full rounded-lg border">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />
        <Suspense fallback={null}>
          <PlantModel />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}

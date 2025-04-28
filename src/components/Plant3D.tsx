
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Color } from "three";

function PlantModel() {
  return (
    <group>
      {/* Pot */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[1, 1.2, 2, 32]} />
        <meshStandardMaterial color={new Color("#654321")} roughness={0.7} />
      </mesh>
      
      {/* Soil */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial color={new Color("#3b2507")} roughness={1} />
      </mesh>
      
      {/* Plant stem */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 1.2, 8]} />
        <meshStandardMaterial color={new Color("#2d5a27")} />
      </mesh>
      
      {/* Leaves */}
      {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
        <group key={index} rotation={[0, (rotation * Math.PI) / 180, 0]}>
          <mesh position={[0.3, 0.8, 0]} rotation={[0.3, 0, 0.5]}>
            <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color={new Color("#3a7a34")} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Plant3D() {
  return (
    <div className="h-[400px] w-full rounded-lg border">
      <Canvas
        camera={{ position: [3, 3, 5], fov: 60 }}
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

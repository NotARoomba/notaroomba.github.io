import * as THREE from "three";
import { createRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube048: THREE.Mesh;
    Cube049: THREE.Mesh;
    Cube050: THREE.Mesh;
    Cube051: THREE.Mesh;
    Cube052: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube054: THREE.Mesh;
    Cube055: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube057: THREE.Mesh;
    Cube058: THREE.Mesh;
    Cube060: THREE.Mesh;
    Cylinder048: THREE.Mesh;
    Cube056_1: THREE.Mesh;
    Cube056_2: THREE.Mesh;
    Cube056_3: THREE.Mesh;
    Cylinder049: THREE.Mesh;
    Cylinder050: THREE.Mesh;
    Cylinder051: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
  };
  materials: {
    Bage: THREE.MeshStandardMaterial;
    ["Black Glass"]: THREE.MeshStandardMaterial;
    ["Black re"]: THREE.MeshStandardMaterial;
    Gray: THREE.MeshStandardMaterial;
    Red: THREE.MeshStandardMaterial;
    White: THREE.MeshPhysicalMaterial;
    ["Gray.001"]: THREE.MeshStandardMaterial;
  };
};

// type ActionName =
//   | "Cube.048"
//   | "Cube.049"
//   | "Cube.050"
//   | "Cube.051"
//   | "Cube.052"
//   | "Cube.053"
//   | "Cube.054"
//   | "Cube.055"
//   | "Cube.056"
//   | "Cube.057"
//   | "Cube.058"
//   | "Cube.060"
//   | "Cylinder.048"
//   | "Cube.059"
//   | "Cylinder.049"
//   | "Cylinder.050"
//   | "Cylinder.051"
//   | "Plane"
//   | "Plane.001";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Computer(props: JSX.IntrinsicElements["group"]) {
  const group = createRef<THREE.Group>();
  useFrame(() => {
    if (group.current) group.current.rotateY(-0.001);
  });
  const { nodes, materials } = useGLTF("/models/Computer.glb") as GLTFResult;
  //   const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[-0, -1, 0]}>
      <group name="Scene" scale={2}>
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.Bage}
          position={[0.227, 1.552, -0.507]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.924}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials["Black Glass"]}
          position={[0.218, 1.61, -0.442]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.972, 1.074, 1.132]}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials["Black re"]}
          position={[1.035, 0.663, 0.266]}
          scale={0.807}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials["Black re"]}
          position={[0.76, 0.663, 0.266]}
          scale={0.924}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.Bage}
          position={[0.235, 0.542, -0.425]}
          scale={0.924}
        />
        <mesh
          name="Cube053"
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials.Bage}
          position={[0.227, -0.128, -0.507]}
          scale={0.924}
        />
        <mesh
          name="Cube054"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["Black re"]}
          position={[0.787, -0.175, 0.315]}
          scale={0.924}
        />
        <mesh
          name="Cube055"
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials.Gray}
          position={[1.131, -0.274, 0.721]}
          scale={0.924}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.Red}
          position={[-0.789, -0.09, 0.655]}
          scale={0.807}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials.Gray}
          position={[-0.39, -0.341, 0.315]}
          scale={0.924}
        />
        <mesh
          name="Cube058"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials.Bage}
          position={[2.387, -0.425, 1.823]}
          rotation={[0, 0.176, 0]}
          scale={[0.538, 0.176, 0.538]}
        >
          <mesh
            name="Cube060"
            castShadow
            receiveShadow
            geometry={nodes.Cube060.geometry}
            material={materials.Bage}
            position={[0, 0.831, -0.819]}
            rotation={[-0.075, 0, 0]}
            scale={[1, 3.057, 1.008]}
          />
          <mesh
            name="Cylinder048"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048.geometry}
            material={materials.Gray}
            position={[0, 0.912, -0.844]}
            rotation={[-2.236, 0, 0]}
            scale={[1.112, 1.937, 3.011]}
          />
        </mesh>
        <group name="Cube059" position={[0.227, -0.495, 1.691]} scale={0.924}>
          <mesh
            name="Cube056_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube056_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube056_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube056_2.geometry}
            material={materials.Bage}
          />
          <mesh
            name="Cube056_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube056_3.geometry}
            material={materials["Gray.001"]}
          />
        </group>
        <mesh
          name="Cylinder049"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={materials.Bage}
          position={[0.227, 0.286, -0.577]}
          scale={[0.885, 0.709, 0.885]}
        />
        <mesh
          name="Cylinder050"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={materials.Gray}
          position={[1.516, -0.383, 0.393]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.051}
        />
        <mesh
          name="Cylinder051"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={materials.Gray}
          position={[1.516, -0.383, 0.114]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.051}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.White}
          position={[1.248, -0.544, 1.117]}
          scale={0.924}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.White}
          position={[2.277, -0.481, 1.265]}
          scale={0.924}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Computer.glb");

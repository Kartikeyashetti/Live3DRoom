import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

export default function Chair({ selectedChair, color }) {
  const { scene: chair1 } = useGLTF('/Live3DRoom/glb/Chairs/smoothChair.glb');
  const { scene: chair2 } = useGLTF('/Live3DRoom/glb/Chairs/sofa3.glb');
  const { scene: chair3 } = useGLTF('/Live3DRoom/glb/Chairs/SofaResized.glb');

  let currentChair;
  if (selectedChair === 'chair2') currentChair = chair2;
  else if (selectedChair === 'chair3') currentChair = chair3;
  else currentChair = chair1;

// Create a new material whenever `color` changes
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({ color });
  }, [color]);


  // Apply material when chair changes
  useEffect(() => {
    currentChair.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [currentChair, material]);

  return <primitive object={currentChair} position={[0, 0, 0]} scale={2}/>;
}

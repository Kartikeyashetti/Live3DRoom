import { useGLTF } from '@react-three/drei';

export default function Chair({ selectedChair }) {
  const { scene: chair1 } = useGLTF('/glb/Chairs/chair.glb');
  const { scene: chair2 } = useGLTF('/glb/Chairs/chair1.glb');
  const { scene: chair3 } = useGLTF('/glb/Chairs/sofa.glb');

  let currentChair;
  if (selectedChair === 'chair2') currentChair = chair2;
  else if (selectedChair === 'chair3') currentChair = chair3;
  else currentChair = chair1;

  return <primitive object={currentChair} position={[0, 0, 0]} />;
}

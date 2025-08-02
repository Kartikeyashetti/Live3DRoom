// RoomModel.jsx
import { useGLTF } from '@react-three/drei'

export default function RoomModel(props) {
  const gltf = useGLTF('/glb/interior.glb') // path relative to public folder

  return <primitive object={gltf.scene} scale={7} {...props} />
}

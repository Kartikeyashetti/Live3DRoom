// RoomModel.jsx
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three';



export default function RoomModel(props) {
  const gltf = useGLTF('/Live3DRoom/glb/home/home.gltf') // path relative to public folder

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        //  child.castShadow = true

        child.receiveShadow = true
         // Fix for self-shadowing artifacts
      if (child.material) {
        child.material.shadowSide = THREE.DoubleSide;
      }

      }
    })
  }, [gltf.scene])

  return <primitive object={gltf.scene}  {...props} />
}

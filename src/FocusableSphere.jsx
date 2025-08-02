// FocusableSphere.jsx
import { useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function FocusableSphere({ position, controlsRef }) {
  const { camera } = useThree()
  const [color, setColor] = useState('orange') // initial color

  const handleClick = () => {
    if (controlsRef.current) {
      controlsRef.current.setLookAt(
        camera.position.x,
        camera.position.y,
        camera.position.z,
        position[0],
        position[1],
        position[2],
        true
      )
    }

    // Change color to red
    setColor('red')

    // Revert back to orange after 2 seconds
    setTimeout(() => {
      setColor('orange')
    }, 2000)
  }

  return (
    <mesh position={position} onClick={handleClick}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

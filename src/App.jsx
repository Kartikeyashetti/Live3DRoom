// App.jsx
import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { useRef, useState } from 'react'
import FocusableSphere from './FocusableSphere'
import Header from './Header'  // adjust the path if different
import './App.css'; // Ensure your CSS is imported
import RoomModel from './RoomModel'
import MenuBar from './MenuBar'
import Chair from './Chair';
import SpotLightComponent from './spotlight'
export default function App() {
  const cameraControlsRef = useRef()
  const [selectedChair, setSelectedChair] = useState('chair2');

  const [lightSettings, setLightSettings] = useState({
    intensity: 50,
    color: '#ffffff',
  });

  const [color,setColor]= useState('#796e6d')

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', height: '100vh' }}>

        <Canvas shadows camera={{ position: [-4, 2, 5], fov: 50 }} style={{
          width: '80vw',
          height: '80vh',
          // marginTop: '20vh', // 20% gap at the top
          display: 'block',  // optional, removes inline spacing
          marginLeft: 'auto',
          marginRight: 'auto', background: '#1e1e1e'
        }} >
          {/* <ambientLight /> */}
          <directionalLight position={[5, 5, 5]}  intensity={2} />
          <RoomModel position={[0, 0, 0.7]} scale={1.8} />
          <Chair selectedChair={selectedChair} color={color}/>
          <SpotLightComponent
            intensity={lightSettings.intensity}
            color={lightSettings.color}
          />

          <CameraControls ref={cameraControlsRef} minDistance={1.5}   // closest zoom-in distance
            maxDistance={5} />

          {/* <FocusableSphere position={[2, 0, 0]} controlsRef={cameraControlsRef} />
          <FocusableSphere position={[-2, 0, 0]} controlsRef={cameraControlsRef} /> */}
          {/* <Environment
            preset="night"
            background
          // ground={{
          //   height: 5,
          //   radius: 30,
          //   scale: 100,
          // }}
          /> */}

        </Canvas>
        <MenuBar
          onChairChange={setSelectedChair}
          lightSettings={lightSettings} // ✅ required
          setLightSettings={setLightSettings} // ✅ required

          onColorChange={setColor}
        />


      </div>

    </div>
  )

}

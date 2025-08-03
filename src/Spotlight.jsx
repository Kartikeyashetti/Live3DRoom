import { SpotLight } from '@react-three/drei';

export default function SpotLightComponent({ intensity, color }) {
    return (
        <SpotLight
            position={[4, 5, 0]}
            angle={0.4}
            penumbra={0.5}
            distance={20}
            intensity={intensity}
            color={color}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
              shadow-bias={-0.0005}

        />
    );
}

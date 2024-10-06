  import React from 'react'
  import './style.css';
  import { Canvas } from '@react-three/fiber'
  import { OrbitControls} from '@react-three/drei';
  import Cyl from './cyl';
  import { ToneMapping } from '@react-three/postprocessing';
  import { EffectComposer } from '@react-three/postprocessing';
  import { Bloom } from '@react-three/postprocessing';

  const App = () => {
  
    return (
      <>
  
    <Canvas  flat camera={{fov:35}} >
      <OrbitControls enableZoom={false}/>
      <ambientLight  intensity={1} />
      <directionalLight />
      <Cyl/>
      <EffectComposer>
      <Bloom  
        mipmapBlur // Enables or disables mipmap blur.
        intensity={13} // The bloom intensity.
        luminanceThreshold={.10} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={.10} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptive/>
        </EffectComposer>
    </Canvas>
    <section>
<div className='z-20 w-full  bg-white h-11 relative py-33 top-0 left-0'>lih iuyh ihui</div>
</section></>
    
    )

  }

  export default App
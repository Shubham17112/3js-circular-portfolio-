import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as Three from 'three'
import { useFrame } from '@react-three/fiber';
const Cyl = () => {

    let tex = useTexture('/image.png')
    let cyl = useRef(null)
    useFrame((state,delta)=>{
        cyl.current.rotation.y+=delta
    })
  return (
    <group rotation={[0,1,0.3]}>
    <mesh ref={cyl} >                       
      <cylinderGeometry transparent  args={[1, 1, 1, 60,60,true]}/>           
      <meshStandardMaterial transparent map={tex} side = {Three.DoubleSide}/>    

    </mesh>
    </group>
  )
}

export default Cyl
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Ducky = (props) => {
  const { nodes, materials } = useGLTF('/models/huevito.glb')
  console.log(nodes)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Huevito_Material_#20_0'].geometry}
            material={materials.Material_20}
            position={[-0.035, 32.081, 0]}
            rotation={[Math.PI / 1, 0, 1.5]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/huevito.glb')

export default Ducky

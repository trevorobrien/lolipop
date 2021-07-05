import React from "react"

const Lights = () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.2, 30, 30]} attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" wireframe="true" />
      </mesh>
    )
  }

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.6} color={0xf091ef} />
      <pointLight intensity={3.12} position={[0, 0, 100]} />
    </group>
  )
}

export default Lights 
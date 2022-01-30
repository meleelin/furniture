function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0.0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#cccccc" />
    </mesh>
  )
}

export default Plane

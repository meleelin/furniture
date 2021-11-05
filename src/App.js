import './App.css'
import React, { Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

// 模型

import Model1 from './Component/Model_13.js'
import Model2 from './Component/Model_2.js'
import Model3 from './Component/Model_3.js'
import Model4 from './Component/Model_5.js'
import Model5 from './Component/Model_6.js'
import Model6 from './Component/Model_7.js'
import Model7 from './Component/Model_8.js'
import Model8 from './Component/Model_9.js'
import Model9 from './Component/Model_11.js'
import Model10 from './Component/Model_1.js'
import Model11 from './Component/Model_14.js'

// 草地
import Plane from './Plane.js'

function App() {
  const [select, setSelect] = useState(1)
  const Selector = () => {
    let Show = []
    if (select === 1) {
      Show.push(<Model1 />)
    }
    if (select === 2) {
      Show.push(<Model2 />)
    }
    if (select === 3) {
      Show.push(<Model3 />)
    }
    if (select === 4) {
      Show.push(<Model4 />)
    }
    if (select === 5) {
      Show.push(<Model5 />)
    }
    if (select === 6) {
      Show.push(<Model6 />)
    }
    if (select === 7) {
      Show.push(<Model7 />)
    }
    if (select === 8) {
      Show.push(<Model8 />)
    }
    if (select === 9) {
      Show.push(<Model9 />)
    }
    if (select === 10) {
      Show.push(<Model10 />)
    }
    if (select === 11) {
      Show.push(<Model11 />)
    }

    return Show
  }

  const Picker = () => {
    let list = []
    for (let i = 1; i <= 11; i++) {
      list.push(
        <li
          onClick={(e) => {
            setSelect(i)
            Selector()
          }}
        >
          <figure>
            <img src={`./images/model_${i}.png`} alt="" />
          </figure>
        </li>
      )
    }
    return list
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 4, 5], fov: 90 }}>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.5} castShadow />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          attenuation={5}
          castShadow
        />
        <fog attach="fog" args={['white', 0, 30]} />

        <Suspense fallback={null}> {Selector()}</Suspense>
        <Plane />
      </Canvas>
      <div className="picker">{Picker()}</div>
    </>
  )
}

export default App

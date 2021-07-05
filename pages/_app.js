import '../styles/globals.css'

import React from "react"
import Credits from "./components/Credits"
import { Canvas } from "@react-three/fiber"
import Cubes from './components/Cubes'
import Lights from "./components/Lights"
import Environment from "./components/Environment"

const App = () => {
  return (
      <div id="root">
      <Canvas>
        <Cubes />
        <Lights /> 
        <Environment />
      </Canvas>
      </div>
  )
}

export default App

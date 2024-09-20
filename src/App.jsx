import React, {Suspense} from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import {Leva, useControls} from "leva";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "./components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import Duck from "./components/Duck.jsx";

const App = () => {
    const controls = useControls('Duck', {
        positionX: {
            value: 0,
            min: -10,
            max: 10,
        },
        positionY: {
            value: -15,
            min: -100,
            max: 10,
        }, positionZ: {
            value: 0,
            min: -10,
            max: 10,
        }, rotationX: {
            value: 0,
            min: -10,
            max: 10,
        }, rotationY: {
            value: 0,
            min: -10,
            max: 10,
        }, rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        }, scale: {
            value: 10,
            min: -10,
            max: 10,
        }
    })

    return (
        <main className='w-full mx-auto'>
            <Navbar/>
            <Hero/>
            <div className='w-full h-full absolute inset-0 canvas-container'>
                <Leva/>
                <Canvas className='w-full h-full absolute z-10'>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 50]}/>
                        <Duck scale={[controls.scale, controls.scale, controls.scale]}
                              position={[controls.positionX, controls.positionY, controls.positionZ]}
                              rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                        />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={1.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <About/>
        </main>
    )
}
export default App

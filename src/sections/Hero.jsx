import {Suspense} from 'react'
import {Canvas } from '@react-three/fiber';
import {PerspectiveCamera} from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HackerRoom from '../components/HackerRoom.jsx';
import {calculateSizes} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Ducky from "../components/Ducky.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="hero_tag text-cherry">bringing life into code, <br/>and code into life.</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 0]}/>
                        <HeroCamera isMobile={isMobile}>
                          <Ducky scale={sizes.duckScale} position={sizes.duckPosition} />
                        </HeroCamera>
                        <ambientLight intensity={1.2}/>
                        <directionalLight position={[25, 10, 10]} intensity={5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#contact" className='w-fit'>
                    <Button name="let's work together" isBeam containerClass='sm:w-fit w-fit sm:min-w-96 bg-cherry text-salt' />
                </a>
            </div>
        </section>
    )
}
export default Hero

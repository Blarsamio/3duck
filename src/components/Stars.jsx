import {useRef, useState} from "react";
import {inSphere} from "maath/random";
import {useFrame} from "@react-three/fiber";
import {PointMaterial, Points} from "@react-three/drei";

const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => inSphere(new Float32Array(10000), { radius: 10 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#af3b6e" size={0.125} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

export default Stars
import {useFrame, useThree} from "@react-three/fiber";
import {useSphere} from "@react-three/cannon";

const Pointer = () => {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
    return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
}

export default Pointer
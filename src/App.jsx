import React, {Suspense} from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {

    return (
        <main className='max-w-7xl mx-auto relative'>
            <Navbar/>
            <Hero/>
        </main>
    )
}
export default App

import React, {Suspense} from 'react'


const Hero = () => {
    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Patricio <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Bringing life into code, <br/>and code into life.</p>
            </div>
        </section>
    )
}
export default Hero

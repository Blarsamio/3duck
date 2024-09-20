import React, {Suspense} from 'react'


const Hero = () => {
    return (
        <section className='min-h-screen w-full flex flex-col relative bg-[#a7c6da]'>
            <div className='w-full flex flex-col sm:nt-36 mt-96 c-space gap-3'>
                <h1 className='lg:text-9xl text-8xl font-medium text-[#5292b7] text-center font-satoshiBlack'>HI, I AM PATRICIO <span className='waving-hand'></span></h1>
                <p className='text-white hero_tag'>I like bringing life into code, <br/> and code into life.</p>
            </div>
        </section>
    )
}
export default Hero

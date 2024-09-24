import React from 'react'

const Footer = () => {
  return (
    <section className='c-space mx-10 pt-7 pb-3 flex justify-between items-center flex-wrap gap-5 bg-ablue'>
      <div className='text-indigo flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className='flex gap-3'>
        <div className='social-icon'>
          <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
        </div>
        <div className='social-icon'>
          <img src="/assets/twitter.svg" alt="github" className='w-1/2 h-1/2'/>
        </div>
        <div className='social-icon'>
          <img src="/assets/instagram.svg" alt="github" className='w-1/2 h-1/2'/>
        </div>
      </div>
      <p className='text-indigo'>
        &copy; 2021 Patricio. All rights reserved.
      </p>
    </section>
  )
}

export default Footer

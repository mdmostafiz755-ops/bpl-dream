import React from 'react'
import heroimg from '../assets/banner-main.png'
const Hero = () => {
  return (
    <div className="min-h-[60vh] bg-linear-to-bl from-violet-500 to-fuchsia-500 mx-auto p-5 rounded-xl">
        <div className='flex flex-col justify-center text-center items-center mt-3 space-y-2'>
            <img src={heroimg} alt="" />
            <h2 className='font-bold text-2xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-white/90'>Beyond Boundaries Beyond Limits</p>
            <button className='btn  btn-soft btn-success'>Claim Free Credit</button>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { Link } from "react-scroll";
import se2 from '../assets/se2.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-between'>
        {/* <img src={se1-100.jpg} alt="" /> */}
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 pt-32 pb-8 mt-4'>
                {/* <p className='text-2xl'>Unique Sequencing & Production</p> */}
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-fuchsia-200'>Digital Watermarking</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <p className='text-2xl'>This is our Tech brand.</p>
                <p className='text-2xl'>This is our Tech brand.</p>
                
                <Link to ="watermark" className='py-3 px-6 sm:w-[60%] my-4 text-2xl text-center cursor-pointer text-indigo-900 border bg-fuchsia-200 border-fuchsia-200 hover:bg-transparent hover:text-fuchsia-200 rounded-md'>Watermark</Link>
                <Link to="extract" className='py-3 px-6 sm:w-[60%] mb-4 text-2xl text-center cursor-pointer text-indigo-900 border bg-fuchsia-200 border-fuchsia-200 hover:bg-transparent hover:text-fuchsia-200 rounded-md '>Extraction</Link>     
            </div>
            <div>
                <img className='w-full' src={se2} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero
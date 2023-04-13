import React from 'react'
import {
   CloudUploadIcon,
   DatabaseIcon,
   PaperAirplaneIcon,
   ServerIcon
} from '@heroicons/react/solid'
import heroImg from '../Assets/cyber-bg.png'

const Hero = () => {
  return (
    <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
         <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mt-20'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl mb-3'>This is our Tech Brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Getting Started</button>
            </div>
            <div>
                <img className='w-full' src={heroImg} alt="" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px]  bottom-[-15%] sm:bottom-[-7%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
                <p className='font-bold'>Data Services</p>
                <div className=' flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Description</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Hero
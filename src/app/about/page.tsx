import Image from 'next/image'
import React from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdHeadsetMic } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

function About() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container bg-pink-100 mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    
    <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our Story

      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea modi porro veniam, vel, quibusdam consequuntur quo optio sunt non quisquam praesentium, consectetur velit facilis id! Vitae magni nihil saepe!</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image className="object-cover object-center rounded" alt="hero" src="/woman.png" width={300} height={300}/>
    </div>
  </div>
</section>

{/* 2 section */}
<section className="text-gray-600 body-font  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
  <div className="container px-5 py-24 mx-auto">
   
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white bg-black rounded-full p-1 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white bg-black rounded-full p-1 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white bg-black rounded-full p-1 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">Files</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white bg-black rounded-full p-1 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3 section */}
{/* section 3 */}

         <div className='flex flex-wrap mx-auto justify-center gap-6 text-4xl my-12 '>
        <div className='bg-gray-400 p-1 rounded-full'> <TbTruckDelivery className='bg-black text-white rounded-full p-1' /></div>
       
       <div className='bg-gray-400 p-1 rounded-full'>  <MdHeadsetMic className='bg-black text-white rounded-full p-1'/> </div> 
        <div className='bg-gray-400 p-1 rounded-full'>     <IoShieldCheckmarkOutline className='bg-black text-white rounded-full p-1'/> </div>
         </div>
    </>
  )
}

export default About
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink href="/" 
      className='w-16 h-16 bg-blue-950 !text-white flex items-center justify-center rounded-full text-2xl font-bold'
      
      whileHover ={{
        backgroundColor: ["#252525", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#252525"],
        transition: {duration:1, repeat: Infinity}
      }}
      > AI </MotionLink>
    </div>
  )
}

export default Logo

import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
  return (
    <figure className='absolute left-0 stroke-[rgb(var(--foreground-rgb))]'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            {/* Base Circle - Outline */}
            <circle cx="75" cy="50" r="20" className='stroke-pink-700 stroke-1 fill-none' />
            
            {/* Progress Circle */}
            <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-[rgb(var(--background-start-rgb))]'
            style={{
                pathLength: scrollYProgress
            }}/>
            
            {/* Pulsing Core */}
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-pink-700'/>
        </svg>
    </figure>
  )
}

export default LiIcon

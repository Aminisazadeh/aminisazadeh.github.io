import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';


const Details = ({type, time, place, info, subInfo}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-lg sm:text-xl md:text-2xl'> {type} </h3>
                <span className='capitalize font-medium text-sm sm:text-base text-[rgb(var(--foreground-rgb))]/75'>
                    {time} | {place}
                </span>
                <p className='font-bold w-full mt-2 text-sm sm:text-base text-pink-600/80'>
                    {subInfo}
                </p>
                <p className='font-medium w-full mt-1 text-sm sm:text-base'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "start start"]
        }
    )

    return (
        <div className='my-24'>
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 sm:mb-16 md:mb-24 w-full text-center'>
                <AnimatedText text="Education" />
            </h2>

            <div ref={ref} className='w-[85%] mx-auto relative'>
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className='absolute left-9 top-0 w-[4px] h-full bg-[rgb(var(--foreground-rgb))] origin-top'
                />
                
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type="Mechanical Engineering | Direct Ph.D." 
                        time="May 2026 | GPA: 3.86/4.00"
                        place="Texas A&M University (College Station, TX, USA)"
                        subInfo="Dissertation: Amorphous Micro-Channel Heat Sink with Adaptive Channel Structure To Dissipate Heat From High-Heat-Flux (HHF) Electronics"
                        info="Advisor: Prof. David Claridge. Key Coursework: Microscale Thermodynamics, Two-Phase Flow and Heat Transfer, Advanced Thermodynamics, Gas Dynamics."
                    />

                    <Details 
                        type="Mechanical Engineering | M.Sc." 
                        time="May 2023 | GPA: 3.90/4.00"
                        place="Texas A&M University (College Station, TX, USA)"
                        subInfo="Projects: PINN Model Development, Quantum Algorithms (Qiskit), DFT (Gaussian16) & MD (LAMMPS)"
                        info="Key Coursework: Statistical Analysis, Quantum Mechanics, Pattern Recognition, Deep Learning, Artificial Intelligence, Multi-disciplinary System Design and Analysis Optimization."
                    />

                    <Details 
                        type="Mechanical Engineering | B.Sc." 
                        time="May 2017 | GPA: 4.00/4.00"
                        place="Iran University of Science and Technology (Tehran, Iran)"
                        subInfo="Thesis: Design, Fabrication, and Analysis of Micro-Combustion of Al2O3 Catalytic Fibrous Media for Premixed Fuel-Air Mixtures"
                        info="Key Coursework: Computational Fluid Dynamics (CFD), Bio-Microfluidics, Material Science, Engineering Mathematics, Numerical Methods."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education

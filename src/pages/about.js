import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/personal_photo_noBg.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experiences from '@/components/Experiences'
import Education from '@/components/Education'
import Honors from '@/components/Honors'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })

    return () => unsubscribe()
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
        <meta
          name="description"
          content="Professional background of Amin Isazadeh, Ph.D. Candidate in Thermal Sciences."
        />
      </Head>

      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-10 md:pt-16'>
          <AnimatedText
            text="Passion Fuels Purpose!"
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-16'
          />

          <div className='grid w-full grid-cols-1 gap-10 md:gap-12 lg:grid-cols-8 xl:grid-cols-12 xl:gap-16 lg:items-center'>
            
            {/* Biography Section */}
            <div className='lg:col-span-5 xl:col-span-5 flex flex-col items-start justify-start order-2 lg:order-1'>
              <h2 className='mb-4 text-lg font-bold uppercase'>Biography</h2>

              <p className='font-medium text-base leading-relaxed'>
                I am a Mechanical Engineer and Ph.D. Candidate at Texas A&amp;M University,
                specializing in the intersection of fundamental thermofluid physics and intelligent,
                field-aware design. My research addresses the thermal wall and high-heat-flux
                challenges in next-generation electronics and data centers.
              </p>

              <p className='font-medium my-4 text-base leading-relaxed'>
                At the core of my work is ThermoMechanoSensing (TMS), a paradigm that transforms thermal
                signatures into real-time deformation commands within microchannel heat sinks.
                I have built a multi-fidelity modeling ladder that enables these smart surfaces to mitigate
                hotspots while strictly enforcing hydraulic pressure-drop budgets.
              </p>

              <p className='font-medium text-base leading-relaxed'>
                Beyond research, I serve as a Graduate Lecturer at Texas A&amp;M University, integrating
                computational tools like MATLAB and EES into thermodynamics education.
                I am dedicated to advancing thermal science through digital twins and adaptive cooling platforms.
              </p>
            </div>

            {/* Profile Image */}
            <div className='lg:col-span-3 xl:col-span-4 relative w-full max-w-sm md:max-w-md lg:max-w-full mx-auto order-1 lg:order-2 rounded-2xl p-4 sm:p-6 md:p-8'>
              <div className='absolute top-0 -right-2 md:-right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]' />
              <Image
                src={profilePic}
                alt="Amin Isazadeh"
                className='w-full h-auto rounded-2xl'
                priority
              />
            </div>

            {/* Statistics Section */}
            <div className='lg:col-span-8 xl:col-span-3 flex flex-col sm:flex-row lg:flex-row xl:flex-col items-center justify-between gap-8 order-3'>
              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className='text-base sm:text-lg md:text-xl font-medium capitalize text-center'>
                  Publications&nbsp;&amp;&nbsp;Presentations
                </h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-base sm:text-lg md:text-xl font-medium capitalize text-center'>
                  Awards&nbsp;&amp;&nbsp;Honors
                </h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-base sm:text-lg md:text-xl font-medium capitalize text-center'>
                  Years&nbsp;of&nbsp;Experience
                </h2>
              </div>
            </div>
          </div>

          <div className='w-full h-1 bg-zinc-400/30 dark:bg-zinc-600/30 my-10 rounded-full' />

          <Skills />

          <div className='w-full h-1 bg-zinc-400/30 dark:bg-zinc-600/30 my-10 rounded-full' />

          <Honors variant="full" />

          <div className='w-full h-1 bg-zinc-400/30 dark:bg-zinc-600/30 my-10 rounded-full' />

          <Education />

          <div className='w-full h-1 bg-zinc-400/30 dark:bg-zinc-600/30 my-10 rounded-full' />

          <Experiences />
        </Layout>
      </main>
    </>
  )
}

export default About

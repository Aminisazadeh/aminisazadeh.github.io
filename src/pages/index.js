import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ProcessorIcon, EnergyIcon, AtomIcon, NeuralIcon, LinkArrow } from "../components/Icons";
import Link from "next/link";
import AnimatedText from '@/components/AnimatedText';
import Honors from '@/components/Honors';
import ServiceHighlights from '@/components/ServiceHighlights';
import TransitionEffect from '@/components/TransitionEffect';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Research and Engineering Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className={styles.main}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-3 mb-16">
          <Image
            src="/images/profile/personal_photo_artistic.png"
            alt="Artistic Profile Photo"
            width={500}
            height={500}
            priority
          />
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div>
              <AnimatedText text="Bridging Physics with Intelligent Design" className='text-3xl'/>
              <div className="w-full h-[4px] bg-zinc-600 mb-6 opacity-50"></div>
            </div>

            <p className={`${inter.className} text-medium opacity-80 max-w-xl leading-relaxed mb-2`}>
              Driven by a passion for discovery, I specialize in developing fully coupled conjugate heat transfer (CHT)
              models to solve next-generation cooling challenges in advanced electronics. 
              Whether I am diving into Molecular Dynamics at the nanoscale or 
              leveraging deep learning for fault detection, I strive to push the 
              boundaries of what is possible in thermal science. I am always eager to 
              learn, adapt, and apply new tools—from microchannel architectures to 
              intelligent surfaces—to build a more efficient and sustainable future.
            </p>

            <div className='flex items-center self-center md:self-start mt-2 gap-6'>
              <Link 
                // href="/dummy.pdf"
                href="https://www.linkedin.com/in/aminisazadeh/"
                target="_blank"
                className='flex items-center 
                bg-transparent 
                text-[rgb(var(--foreground-rgb))]
                p-2.5 px-6 rounded-lg text-lg font-semibold 
                border-2 border-solid border-[rgb(var(--foreground-rgb))] 
                transition-all duration-300'
                // download={true}
              >
                Resume <LinkArrow className="w-6 ml-2 fill-current"/>
              </Link>
              <Link
                href="mailto:amin.isazadeh@tamu.edu" 
                target="_blank" 
                className="ml-4 text-lg font-medium capitalize text-[rgb(var(--foreground-rgb))] !underline underline-offset-8 decoration-[2px] hover:opacity-70 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.grid}>
          <Link href="/projects#advanced-electronics" className={styles.card}>
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <ProcessorIcon className="!w-7" /> Advanced Electronics
            </h2>
            <p className={`${inter.className} text-center`}>
              Thermal management for 2D and 3D integrated circuits using&nbsp;microchannels.
            </p>
          </Link>

          <Link href="/projects#energy-sustainability" className={styles.card}>
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <EnergyIcon className="!w-7 text-green-500" /> Energy and Sustainability
            </h2>
            <p className={`${inter.className} text-center`}>
              Optimizing data center cooling and evaluating energy commissioning efficiency.
            </p>
          </Link>

          <Link href="/projects#physics-fundamentals" className={styles.card}>
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <AtomIcon className="!w-7 text-blue-400" /> Physics Fundamentals
            </h2>
            <p className={`${inter.className} text-center`}>
              Studying deformable particle dynamics, Molecular Dynamics, and Quantum Mechanics.
            </p>
          </Link>

          <Link href="/projects#machine-learning-ai" className={styles.card}>
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <NeuralIcon className="!w-7 text-purple-500" /> Machine Learning and AI
            </h2>
            <p className={`${inter.className} text-center`}>
              Applying FDD, PINNs, and Quantum Algorithms to optimize complex systems.
            </p>
          </Link>
        </div>

        <div className="w-full mt-16">
          <Honors variant="featured" />
        </div>

        <div className="w-full mt-16">
          <ServiceHighlights />
        </div>
      </main>
    </>
  )
}

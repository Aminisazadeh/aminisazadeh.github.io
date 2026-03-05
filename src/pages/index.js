import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ProcessorIcon, EnergyIcon, AtomIcon, NeuralIcon } from "../components/Icons";

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
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            src="/images/profile/personal_photo_artistic.png"
            alt="Artistic Profile Photo"
            width={300}
            height={300}
            priority
          />
        </div>
        
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <ProcessorIcon className="!w-7" /> Advanced Electronics
            </h2>
            <p className={`${inter.className} text-center`}>
              Thermal management for 2D and 3D integrated circuits using&nbsp;microchannels.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <EnergyIcon className="!w-7 text-green-500" /> Energy and Sustainability
            </h2>
            <p className={`${inter.className} text-center`}>
              Optimizing data center cooling and evaluating energy commissioning efficiency.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <AtomIcon className="!w-7 text-blue-400" /> Physics Fundamentals
            </h2>
            <p className={`${inter.className} text-center`}>
              Studying deformable particle dynamics, Molecular Dynamics, and Quantum Mechanics.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} flex items-center gap-2 justify-center`}>
              <NeuralIcon className="!w-7 text-purple-500" /> Machine Learning and AI
            </h2>
            <p className={`${inter.className} text-center`}>
              Applying FDD, PINNs, and Quantum Algorithms to optimize complex systems.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

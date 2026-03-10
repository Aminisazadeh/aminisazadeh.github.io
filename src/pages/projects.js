import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { motion } from "framer-motion"
import proj_1 from "../../public/gifs/advanced_electronics.png"
import proj_2 from "../../public/gifs/energy_sustainability.png"
import proj_3 from "../../public/gifs/physics_fundamentals.png"
import proj_4 from "../../public/gifs/machine_learning.png"
import TransitionEffect from "@/components/TransitionEffect"


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, tools, img, link, github }) => {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid bg-linear-to-br from-blue-300 via-cyan-300 to-indigo-300 shadow-2xl p-6 lg:p-12 dark:border-light dark:bg-dark"
    >
      <Link
        href={link}
        // target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative w-full h-80 lg:h-140 rounded-lg bg-black/5 dark:bg-white/5">
          <FramerImage
            src={img}
            alt={title}
            fill
            className="object-contain p-2"
            priority
            whileHover={{scale:1.05}} transition={{duration:0.2}}
          />
        </div>
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-between mt-6 lg:mt-0 lg:pl-6 text-center lg:text-left">
        <span className="text-pink-700 font-medium text-xl xs:text-base dark:text-pink-400">
          {type}
        </span>

        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-3xl lg:text-4xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>

        {Array.isArray(summary) ? (
          <ul className="my-2 list-disc list-inside font-medium text-dark dark:text-light sm:text-sm text-left mx-auto w-fit lg:w-full lg:mx-0">
            {summary.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        )}

        {tools && tools.length > 0 && (
          <div className="my-4 w-full rounded-xl border border-black/15 bg-black/5 p-4 shadow-md dark:border-white/15 dark:bg-white/5">
            <h3 className="mb-3 font-semibold text-dark dark:text-light">
              Tools Used
            </h3>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded-md border border-black/15 bg-white px-3 py-1 text-sm font-medium text-dark shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-2 flex items-center justify-center lg:justify-start">
          <Link href={github} target="_blank" className="w-10 text-dark dark:text-light">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            // target="_blank"
            className="ml-4 rounded-lg bg-dark text-white p-2 px-6 text-lg font-semibold border-2 border-solid border-[rgb(var(--foreground-rgb))] dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const FeaturedProject_reverse = ({ type, title, summary, tools, img, link, github }) => {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl border border-solid bg-linear-to-br from-red-300 via-pink-300 to-rose-300 shadow-2xl p-6 lg:p-12 dark:border-light dark:bg-dark"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-between mt-6 lg:mt-0 lg:pr-6 text-center lg:text-left">
        <span className="text-pink-700 font-medium text-xl xs:text-base dark:text-pink-400">
          {type}
        </span>

        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-3xl lg:text-4xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>

        {Array.isArray(summary) ? (
          <ul className="my-2 list-disc list-inside font-medium text-dark dark:text-light sm:text-sm text-left mx-auto w-fit lg:w-full lg:mx-0">
            {summary.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        )}

        {tools && tools.length > 0 && (
          <div className="my-4 w-full rounded-xl border border-black/15 bg-black/5 p-4 shadow-md dark:border-white/15 dark:bg-white/5">
            <h3 className="mb-3 font-semibold text-dark dark:text-light">
              Tools Used
            </h3>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded-md border border-black/15 bg-white px-3 py-1 text-sm font-medium text-dark shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-light"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-2 flex items-center justify-center lg:justify-start">
          <Link href={github} target="_blank" className="w-10 text-dark dark:text-light">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-white p-2 px-6 text-lg font-semibold border-2 border-solid border-[rgb(var(--foreground-rgb))] dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>

      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative w-full h-80 lg:h-160 rounded-lg bg-black/5 dark:bg-white/5">
          <FramerImage
            src={img}
            alt={title}
            fill
            className="object-contain p-2"
            whileHover={{scale:1.05}} transition={{duration:0.2}}
          />
        </div>
      </Link>
    </motion.article>
  )
}


const projects = () => {
  return (
    <>
      <Head>
        <title>Amin Isazadeh | Projects Page</title>
        <meta name="description" content="Portfolio of Amin Isazadeh focusing on thermal management and RIS." />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 sm:px-8 xs:px-4">
          <AnimatedText text="Insight Transcends Innovation!" className='text-4xl md:text-6xl mb-16 dark:text-light text-center' />

          <div className="grid grid-cols-12 gap-y-16 lg:gap-24">
            <div id="advanced-electronics" className="col-span-12">
              <FeaturedProject
                title="Advanced Electronics (HHF)"
                img={proj_1}
                summary={[
                  "Reconfigurable Intelligent Surface (RIS) with ThermoMechanoSensing (TMS).",
                  "Electronics Cooling Design with Reduced-Order Modeling (ROM).",
                  "Thermal–Mechanical Modeling with computational fluid dynamics (CFD) and finite element analysis (FEA).",
                  "Multiphase Micro/Nano-Channel Heat Sinks for high-heat-flux (HHF) electronics.",
                  "Heat Sink Modeling with conjugate heat transfer (CHT).",
                  "Multi-Scale Microchannel Heat Sink Analysis for data communication (Datacom) facilities."
                ]}
                tools={[
                  "OpenFOAM",
                  "ANSYS Fluent",
                  "ANSYS Icepak",
                  "ANSYS Mechanical",
                  "ANSYS Workbench",
                  "COMSOL",
                  "MATLAB",
                  "Python",
                  "Julia",
                  "Simulink",
                  "EES",
                  "SpaceClaim",
                  "DesignModeler",
                  "ANSYS Meshing",
                  "ICEM-CFD",
                  "Gmsh",
                  "GAMBIT",
                  "CFD-Post",
                  "ParaView",
                  "Tecplot",
                  "Shell/Bash",
                  "HPC",
                  "Git/GitHub"
                ]}
                link="/projects_details/tms_microchannel"
                github="/"
                type="Research Division"
              />
            </div>

            <div id="energy-sustainability" className="col-span-12">
              <FeaturedProject_reverse
                title="Energy and Sustainability"
                img={proj_2}
                summary={[
                  "Continuous Commissioning (CCx) of healthcare and large-scale thermal systems.",
                  "Central Plant Optimization for energy-cost reduction.",
                  "Commercial Building Energy Modeling and Optimization.",
                  "Machine-Learning-Based Building Energy Modeling.",
                  "Performance Deficiency Detection in healthcare facilities.",
                  "Legacy Air-Cooled Data Center Thermal Management.",
                  "Datacom Facility Energy Metrics and Reduction Strategies.",
                  "Thermal Management of Mission-Critical Environments."
                ]}
                tools={[
                  "EES",
                  "EnergyPlus",
                  "WinAM",
                  "Carrier",
                  "NIST REFPROP",
                  "Simulink",
                  "Python",
                  "MATLAB",
                  "R",
                  "JMP",
                  "AutoCAD",
                  "OpenFOAM",
                  "ANSYS Fluent",
                  "Git/GitHub",
                  "HPC"
                ]}
                link="/"
                github="/"
                type="Research Division"
              />
            </div>

            <div id="physics-fundamentals" className="col-span-12">
              <FeaturedProject
                title="Physics Fundamentals"
                img={proj_3}
                summary={[
                  "Bubble Dynamics under Rayleigh collapse and pressure-wave interaction.",
                  "Immersed Bubble Stability in quiescent liquid.",
                  "Spherical Harmonics (SPH) Mode Extraction for deformable particles.",
                  "Molecular Dynamics (MD) and reactive atomistic simulations.",
                  "Lennard–Jones (LJ) fluid transport simulation.",
                  "Carbon Nanotube (CNT) tensile-failure simulation.",
                  "Polymer-in-Water Molecular Dynamics (MD) simulation.",
                  "Nanosheared Electrolyte transport under confinement.",
                  "Reactive Silicon Dioxide (SiO2) deformation and fracture simulation.",
                  "Water Adsorption in cracked silica.",
                  "Free-Energy Profile Reconstruction with umbrella sampling.",
                  "Reactive Molecular Dynamics (MD) of Carbon Nanotube (CNT) in polymerizing media.",
                  "Density Functional Theory (DFT) simulation in quantum mechanics.",
                  "Catalytic Combustion in fibrous porous media.",
                  "Micro-Combustion in aluminum oxide (Al2O3) catalytic media.",
                  "Piston Pump Structural Analysis with finite element analysis (FEA).",
                  "Bubble Growth and Collapse under pressure perturbation.",
                  "Stress and Strain-Rate analysis in non-spherical bubble systems."
                ]}
                tools={[
                  "LAMMPS",
                  "Gaussian16",
                  "OVITO",
                  "VMD",
                  "AtomEye",
                  "OpenFOAM",
                  "ANSYS Fluent",
                  "MATLAB",
                  "Python",
                  "Julia",
                  "Shell/Bash",
                  "CATIA",
                  "SolidWorks",
                  "ANSYS Mechanical APDL",
                  "DesignModeler",
                  "SpaceClaim",
                  "Tecplot",
                  "ParaView"
                ]}
                link="/projects_details/lennard_jones_fluid"
                github="/"
                type="Research Division"
              />
            </div>

            <div id="machine-learning-ai" className="col-span-12">
              <FeaturedProject_reverse
                title="Machine Learning and AI"
                img={proj_4}
                summary={[
                  "Physics-Informed Neural Networks (PINNs) for deformable-particle dynamics.",
                  "Machine-Learning (ML)-based building energy modeling.",
                  "Artificial Intelligence (AI) and Machine Learning (ML) methods.",
                  "Planning Domain Definition Language (PDDL)-based automated planning.",
                  "Bayesian Network modeling and probabilistic inference.",
                  "Monte Carlo (MC)-based computational intelligence.",
                  "Deep Learning (DL) for dynamic hand-gesture recognition.",
                  "Bayesian Statistics for probabilistic modeling.",
                  "Quantum algorithms for network-flow optimization.",
                  "Quantum Fourier Transform (QFT)-based algorithm development."
                ]}
                tools={[
                  "Python",
                  "MATLAB",
                  "R",
                  "Julia",
                  "Google Colab",
                  "Qiskit",
                  "LaTeX",
                  "HPC",
                  "Git/GitHub",
                  "Bayesian Networks",
                  "Monte Carlo Methods",
                  "PINNs",
                  "LSTM"
                ]}
                link="/"
                github="/"
                type="Research Division"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects

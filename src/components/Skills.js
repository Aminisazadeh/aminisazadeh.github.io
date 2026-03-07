import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from './AnimatedText';

// Level 3: Red Items - High density, No line breaks
const Level3Skill = ({ name, x, y }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    className='absolute flex items-center justify-center rounded-full font-bold 
               bg-red-600 text-white py-1.5 px-3 text-[11px] shadow-lg whitespace-nowrap z-30'
    style={{ left: x, top: y }}
  >
    {name}
  </motion.div>
)

// Level 2: Blue Items - Category Hubs
const Level2Skill = ({ name, x, y, subSkills = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='absolute flex items-center justify-center rounded-full font-bold 
                 bg-blue-600 text-white py-2.5 px-4 text-xs shadow-xl cursor-pointer z-20 whitespace-nowrap'
      style={{ left: x, top: y }}
    >
      {name}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute w-[320px] h-[320px] rounded-full border-[3px] border-red-500/30 -z-10"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                background: `repeating-radial-gradient(rgba(239, 68, 68, 0.12) 4px, transparent 8px, transparent 35px)` }}
            />
            {subSkills.map((s, i) => <Level3Skill key={i} {...s} />)}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Level 1: Main Pillars - Primary Research Domains
const Pillar = ({ name, x, y, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div 
      className='flex items-center justify-center rounded-full font-black 
                 bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-start-rgb))] 
                 p-6 shadow-2xl cursor-pointer absolute z-10 whitespace-nowrap'
      initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }}
      onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}
    >
      <span className="text-sm uppercase tracking-tighter">{name}</span>
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute w-[500px] h-[500px] rounded-full border-[5px] border-blue-500/20 -z-10"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                background: `repeating-radial-gradient(rgba(59, 130, 246, 0.08) 5px, transparent 10px, transparent 60px)` }}
            />
            {children}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-2'>
      <h2 className='font-bold text-8xl mb-2 w-full text-center'>
        <AnimatedText text="Specialized Expertise" className='mb-4' /></h2>
      
      <div className='w-full h-[700px] relative flex items-center justify-center rounded-full'
           style={{ 
             background: `repeating-radial-gradient(rgba(var(--foreground-rgb), 0.15) 4px, transparent 8px, transparent 100px)`           }}>
        
        <motion.div className='flex items-center justify-center rounded-full font-black bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-start-rgb))] p-14 text-3xl shadow-2xl z-40'>
          PHYSICS
        </motion.div>

        {/* 1. Advanced Electronics */}
        <Pillar name="Advanced Electronics" x="-26vw" y="-16vw">
          <Level2Skill name="Near-Source Cooling" x="-180px" y="-80px" subSkills={[
            {name: "Microchannel Heat Sinks", x: "-100px", y: "-50px"}, {name: "Microchannel Cold Plates", x: "40px", y: "-80px"},
            {name: "Near-Junction Cooling", x: "80px", y: "40px"}, {name: "High-Heat-Flux (HHF) Design", x: "-50px", y: "80px"},
            {name: "Hotspot Mitigation", x: "-140px", y: "20px"}
          ]} />
          <Level2Skill name="Adaptive Thermal Systems" x="80px" y="-160px" subSkills={[
            {name: "ThermoMechanoSensing (TMS)", x: "0px", y: "-70px"}, {name: "Adaptive Channel Structures", x: "110px", y: "-20px"},
            {name: "Field-Aware Sensing-to-Actuation", x: "60px", y: "60px"}, {name: "Real-time Geometry Modulation", x: "-100px", y: "30px"}
          ]} />
          <Level2Skill name="Packaging & Reliability" x="-40px" y="140px" subSkills={[
            {name: "2.5D / 3D-IC Packaging", x: "-100px", y: "40px"}, {name: "Chiplet Arrays", x: "80px", y: "50px"},
            {name: "Interface-Stress & Warpage", x: "0px", y: "90px"}, {name: "Tolerance & Fit Analysis", x: "-130px", y: "-20px"},
            {name: "JEDEC Thermal Characterization (θJA/θJC)", x: "30px", y: "-70px"}
          ]} />
          <Level2Skill name="Engineering Design & V&V" x="-220px" y="60px" subSkills={[
            {name: "CAD Design (SolidWorks, CATIA, AutoCAD)", x: "-80px", y: "-60px"}, {name: "Prototype Build & Assembly", x: "60px", y: "70px"},
            {name: "Design for Manufacturability (DFM)", x: "80px", y: "-20px"}, {name: "Design of Experiments (DoE)", x: "-110px", y: "30px"}
          ]} />
        </Pillar>

        {/* 2. Energy and Sustainability */}
        <Pillar name="Energy and Sustainability" x="26vw" y="-16vw">
          <Level2Skill name="Datacenter Infrastructure" x="-140px" y="-140px" subSkills={[
            {name: "Air-Cooled Systems (CRAC/CRAH)", x: "-70px", y: "-60px"}, {name: "Liquid Cooling (DLC/DRC/Immersion)", x: "80px", y: "-50px"},
            {name: "Rear-Door Heat Exchangers", x: "90px", y: "30px"}, {name: "Containment (Cold/Hot Aisle)", x: "-30px", y: "80px"},
            {name: "Rack/Server-to-Facility Integration", x: "-130px", y: "20px"}
          ]} />
          <Level2Skill name="Performance Metrics & KPIs" x="140px" y="-40px" subSkills={[
            {name: "PUE (Power Usage Effectiveness)", x: "30px", y: "-80px"}, {name: "WUE (Water Usage Effectiveness)", x: "110px", y: "0px"},
            {name: "CUE (Carbon Usage Effectiveness)", x: "50px", y: "70px"}, {name: "Energy Use Intensity (EUI) Reduction", x: "-90px", y: "40px"}
          ]} />
          <Level2Skill name="HVAC & Plant Systems" x="-20px" y="160px" subSkills={[
            {name: "Chillers & Cooling Towers", x: "-80px", y: "40px"}, {name: "Central Plant Optimization", x: "90px", y: "40px"},
            {name: "Continuous Commissioning (CC)", x: "20px", y: "90px"}, {name: "Economizer / Free Cooling", x: "-40px", y: "-80px"}
          ]} />
          <Level2Skill name="Analysis Software" x="200px" y="100px" subSkills={[
            {name: "EnergyPlus", x: "-50px", y: "70px"}, {name: "Engineering Equation Solver (EES)", x: "80px", y: "10px"},
            {name: "NIST REFPROP", x: "10px", y: "-60px"}, {name: "WinAM", x: "-90px", y: "-10px"}
          ]} />
        </Pillar>

        {/* 3. Physics Fundamentals */}
        <Pillar name="Physics Fundamentals" x="-26vw" y="16vw">
          <Level2Skill name="Fluid Dynamics & Multiphase" x="-160px" y="80px" subSkills={[
            {name: "Bubble Growth & Collapse", x: "-100px", y: "30px"}, {name: "Re-entrant Jet Formation", x: "40px", y: "80px"},
            {name: "Rayleigh-Plesset Analysis", x: "90px", y: "-30px"}, {name: "Rheology of Non-Spherical Particles", x: "-30px", y: "-80px"},
            {name: "Conjugate Heat Transfer (CHT)", x: "-130px", y: "-20px"}, {name: "Fluid-Structure Interaction (FSI)", x: "60px", y: "40px"}
          ]} />
          <Level2Skill name="Multiscale & Molecular Simulation" x="80px" y="150px" subSkills={[
            {name: "Molecular Dynamics (LAMMPS)", x: "0px", y: "80px"}, {name: "Density Functional Theory (Gaussian16)", x: "110px", y: "20px"},
            {name: "Interfacial Interaction Modeling", x: "50px", y: "-70px"}, {name: "Phonon/Vibration Analysis", x: "-100px", y: "-10px"}
          ]} />
          <Level2Skill name="Numerical Methods & Tools" x="-40px" y="-160px" subSkills={[
            {name: "OpenFOAM", x: "-80px", y: "-40px"}, {name: "ANSYS (Fluent, Icepak, Mechanical)", x: "90px", y: "-40px"},
            {name: "COMSOL Multiphysics", x: "80px", y: "50px"}, {name: "MATLAB / Simulink", x: "-30px", y: "90px"},
            {name: "High-Performance Computing (HPC) Workflows", x: "-120px", y: "30px"}
          ]} />
          <Level2Skill name="Thermodynamics & Combustion" x="-240px" y="-40px" subSkills={[
            {name: "Microscale Thermodynamics", x: "-70px", y: "-60px"}, {name: "Two-Phase Flow & Boiling", x: "60px", y: "70px"},
            {name: "Catalytic Micro-Combustion", x: "80px", y: "-10px"}
          ]} />
        </Pillar>

        {/* 4. Machine Learning and AI */}
        <Pillar name="Machine Learning and AI" x="26vw" y="16vw">
          <Level2Skill name="Scientific Computing & AI" x="-140px" y="100px" subSkills={[
            {name: "Physics-Informed Neural Networks (PINNs)", x: "-100px", y: "30px"}, {name: "Surrogate / Reduced-Order Modeling (ROM)", x: "40px", y: "80px"},
            {name: "Uncertainty & Sensitivity Analysis", x: "90px", y: "-20px"}, {name: "Bayesian Inference", x: "-40px", y: "-80px"},
            {name: "Monte Carlo Simulations", x: "-130px", y: "-20px"}
          ]} />
          <Level2Skill name="Data Analytics" x="140px" y="40px" subSkills={[
            {name: "Fault Detection & Diagnosis (FDD)", x: "40px", y: "-70px"}, {name: "Ensemble Regression Models", x: "90px", y: "20px"},
            {name: "Time-Series Prediction (LSTM)", x: "-20px", y: "80px"}, {name: "Trend-Based Mission-Critical Analytics", x: "-120px", y: "-10px"}
          ]} />
          <Level2Skill name="Quantum Computing" x="40px" y="-160px" subSkills={[
            {name: "Quantum Algorithms (Grover’s, Shor’s)", x: "20px", y: "-80px"}, {name: "Network Flow Optimization", x: "110px", y: "10px"},
            {name: "Qiskit Library", x: "-80px", y: "-30px"}
          ]} />
          <Level2Skill name="Programming" x="220px" y="120px" subSkills={[
            {name: "Python", x: "-30px", y: "80px"}, {name: "C++ / Julia", x: "80px", y: "-10px"},
            {name: "R / Shell Scripting", x: "10px", y: "-70px"}
          ]} />
        </Pillar>

      </div>
    </div>
  )
}

export default Skills

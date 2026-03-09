import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';


const Details = ({position, company, companylink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] sm:w-[80%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-lg sm:text-xl md:text-2xl text-[rgb(var(--foreground-rgb))]'> 
                    {position}&nbsp;
                    <a href={companylink} target='_blank' rel='noreferrer' className='!text-pink-600 capitalize'>
                        {company ? `@${company}` : ""}
                    </a>
                </h3>
                <span className='capitalize font-medium text-sm sm:text-base text-[rgb(var(--foreground-rgb))]/75'>
                    {time} | {address}
                </span>
                <div className='font-medium w-full mt-2 text-sm sm:text-base text-[rgb(var(--foreground-rgb))] whitespace-pre-line'>
                    {work}
                </div>
            </motion.div>
        </li>
    )
}


const Experiences = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "end center"]
        }
    )

    return (
        <div className='my-24'>
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 sm:mb-16 md:mb-24 w-full text-center'>
                <AnimatedText text="Experience" />
            </h2>

            <div ref={ref} className='w-[85%] mx-auto relative pb-30'>
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className='absolute left-9 top-0 bottom-0 w-[4px] bg-[rgb(var(--foreground-rgb))] origin-top'
                />
                
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        position="Graduate Lecturer" 
                        company="Texas A&M University"
                        companylink="https://www.tamu.edu"
                        time="Jan. 2025 – May 2025" 
                        address="College Station, TX"
                        work={`Problem: Effectively teaching complex thermodynamics principles to a large, diverse undergraduate cohort.
                        Solution: Delivered engaging lectures for 60+ students, focusing on first-principles modeling and engineering judgment.
                        Tools: EES, MATLAB, Simulink, and NIST Refprop datasets.
                        Findings: Enhanced student engagement through active-learning workshops and real-world thermo-fluid case studies.
                        Publications: Developed comprehensive materials including syllabi and custom computational workshops.`}
                    />

                    <Details 
                        position="Doctoral Researcher (TMS)" 
                        company="Energy Systems Laboratory (ESL)"
                        companylink="https://esl.tamu.edu"
                        time="Jan. 2022 – Present" 
                        address="Texas A&M University"
                        work={`Problem: High-heat-flux electronics require adaptive cooling to mitigate hotspots without excessive pressure-drop penalties.
                        Solution: Developed ThermoMechanoSensing (TMS), a field-aware sensing-to-actuation paradigm for adaptive microchannels.
                        Tools: OpenFOAM, ANSYS Fluent, MATLAB, and HPC workflows.
                        Findings: Achieved a peak temperature reduction of 9.574 K with a bounded hydraulic penalty of +33.8%.
                        Publications: Ph.D. Dissertation (2026) and upcoming submissions to IJHMT and ASME Journal of Heat Transfer.`}
                    />

                    <Details 
                        position="Research Collaborator (Multiphase CFD)" 
                        company="Purdue University"
                        companylink="https://www.purdue.edu"
                        time="Apr. 2021 – Present" 
                        address="West Lafayette, IN"
                        work={`Problem: Understanding non-spherical deformable particle dynamics under Rayleigh collapse for advanced thermal management.
                        Solution: Studied dispersed phase rheology and developed physics-informed neural networks (PINNs) for modeling.
                        Tools: OpenFOAM, ANSYS Fluent, Python, and ATA (Asymptotic Time-marching Algorithm).
                        Findings: Quantified the impact of surface tension and particle size on bubble stability and interfacial perturbations.
                        Publications: Published two review articles in 'Renewable and Sustainable Energy Reviews' (RSER) and presented at APS-DFD.`}
                    />

                    <Details 
                        position="Graduate Assistant Researcher" 
                        company="Energy Systems Laboratory"
                        companylink="https://esl.tamu.edu"
                        time="Apr. 2021 – Present" 
                        address="Texas A&M University"
                        work={`Problem: Inefficient thermal management and high energy costs in large-scale healthcare facilities and central plants.
                        Solution: Conducted continuous commissioning and optimized HVAC systems using gradient-based and heuristic algorithms.
                        Tools: EES, Simulink, and custom optimization scripts.
                        Findings: Identified measurable energy cost reduction measures and optimized central plant layouts.
                        Publications: Published research findings in 'Energy and Buildings' journal.`}
                    />

                    <Details 
                        position="Research Collaborator (ML)" 
                        company="Lawrence Berkeley National Lab"
                        companylink="https://www.lbl.gov"
                        time="Jan. 2021 – Apr. 2021" 
                        address="Berkeley, CA"
                        work={`Problem: Traditional deep learning models like LSTM can be computationally heavy and less accurate for specific energy time-series data.
                        Solution: Created an ensemble regression framework for building energy modeling.
                        Tools: Python, Scikit-learn, and time-series processing libraries.
                        Findings: Achieved a 99% R-squared, outperforming deep learning architectures for the specific building technology datasets.
                        Publications: Delivered final technical presentation and internal modeling framework.`}
                    />

                    <Details 
                        position="Molecular Dynamics Researcher" 
                        company="LAMMPS & ReaxFF"
                        companylink="#"
                        time="Aug. 2023 – Present" 
                        address="College Station, TX"
                        work={`Problem: Capturing reactive bond reconfiguration and free-energy profiles during nanoscale material failure and solvation.
                        Solution: Simulated CNT tensile failure and PEG solvation with reactive force fields and free-energy sampling.
                        Tools: LAMMPS, ReaxFF, VMD, and WHAM (Weighted Histogram Analysis Method).
                        Findings: Reconstructed unbiased PMF profiles with excellent agreement to imposed barrier potentials.
                        Publications: Documented reactive bond reconfiguration and fracture signatures under large deformation.`}
                    />

                    <Details 
                        position="Electronics Cooling Design" 
                        company="ANSYS Icepak"
                        companylink="#"
                        time="2022 – Present" 
                        address="Technical Project"
                        work={`Problem: Optimizing fan placement and heat sink architecture for RF amplifier enclosures under buoyancy constraints.
                        Solution: Developed conjugate heat transfer (CHT) models and executed Design-of-Experiments (DoE).
                        Tools: ANSYS Icepak, Workbench, and CFD-Post.
                        Findings: Identified optimal staggered fin arrays and fan configurations to minimize recirculation zones and hotspots.
                        Publications: Created end-to-end heat-sink design and evaluation workflows for system-level documentation.`}
                    />

                    <Details 
                        position="Quantum Algorithm Developer" 
                        company="Qiskit"
                        companylink="#"
                        time="Jan. 2023 – May 2023" 
                        address="Texas A&M University"
                        work={`Problem: Exploring speed optimization for solving complex network flow problems using quantum computing.
                        Solution: Implemented Grover’s search and Bernstein-Vazirani algorithms for graph problems.
                        Tools: Python, Qiskit, and LaTeX.
                        Findings: Demonstrated theoretical speed improvements for specific flow-based graph scenarios.
                        Publications: Documented implementation of Shor’s and Quantum Fourier Transform algorithms.`}
                    />

                    <Details 
                        position="Deep Learning Researcher" 
                        company="Python / Google Colab"
                        companylink="#"
                        time="Jan. 2020 – Jul. 2020" 
                        address="Texas A&M University"
                        work={`Problem: Robustly recognizing dynamic hand gestures from video frames in real-time.
                        Solution: Developed a deep learning model integrating LSTM layers with transfer learning.
                        Tools: Python, TensorFlow/Keras, and Google Colab.
                        Findings: Achieved over 90% accuracy on a massive dataset of 90,000 samples.
                        Publications: Technical report documenting robustness in gesture-based human-computer interaction.`}
                    />

                    <Details 
                        position="Undergraduate Assistant Researcher" 
                        company="CFD Laboratory, IUST"
                        companylink="http://www.iust.ac.ir"
                        time="Sep. 2014 – 2017" 
                        address="Tehran, Iran"
                        work={`Problem: Measuring transport phenomena in high-porosity fibrous porous media for catalytic combustion.
                        Solution: Designed and built a micro combustion chamber for experimental and numerical study.
                        Tools: CATIA, ANSYS Fluent, and MATLAB.
                        Findings: Optimized catalytic fibrous media for eco-friendly food baking and portable power systems.
                        Publications: Published in 'Energy' journal as the corresponding author.`}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experiences

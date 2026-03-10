import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"

import art_h1 from "../../public/gifs/aps_dfd_poster_1.svg"
import art_h2 from "../../public/gifs/aps_dfd_poster_2.svg"
import art_h3 from "../../public/gifs/asme_fedsm.png"

import art_1 from "../../public/gifs/2024__asme_fedsm__rheological__frontPage.png"
import art_2 from "../../public/gifs/2024__aps_dfd__algorithmic__frontPage.png"
import art_3 from "../../public/gifs/2024__aps_dfd__tms__frontPage.png"
import art_4 from "../../public/gifs/2024__asme_imece__dynamics__frontPage.png"
import art_5 from "../../public/gifs/2023__aps_dfd__impact__frontPage.png"
import art_6 from "../../public/gifs/2023__rser__thermalLegacy__frontPage.png"
import art_7 from "../../public/gifs/2023__rser__globalTrends__frontPage.png"
import art_8 from "../../public/gifs/2022__iracc__coolingTech__frontPage.png"
import art_9 from "../../public/gifs/2022__energy__experimental__frontPage.png"
import art_10 from "../../public/gifs/2021__energyBuilding__detecting__frontPage.png"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none"
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg'
      />
    </Link>
  )
}

const Article = ({ img, title, publisher, date, link, abstract }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'
    >
      <div className='flex items-start justify-between gap-6'>
        <div className='flex-1 min-w-0'>
          <MovingImg title={title} img={img} link={link} />
          {publisher && (
            <p className='mt-2 text-base text-dark/70'>
              {publisher}
            </p>
          )}
        </div>

        <span className='text-pink-300 font-semibold pl-4 shrink-0 whitespace-nowrap self-start'>
          {date}
        </span>
      </div>

      {abstract && (
        <div className='mt-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='rounded-lg border border-dark px-4 py-2 text-sm font-semibold hover:bg-dark hover:text-light transition-colors'
          >
            {isOpen ? 'Hide Abstract' : 'Show Abstract'}
          </button>

          {isOpen && (
            <div className='mt-4 rounded-lg border border-dark/20 bg-white/60 p-4 text-sm leading-relaxed text-dark/80'>
              {abstract}
            </div>
          )}
        </div>
      )}
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <motion.li
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className='relative col-span-1 w-full h-full p-4 bg-light border border-solid border-dark rounded-2xl flex flex-col'
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-bar-3xl' />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-pink-100 via-cyan-100 to-indigo-100">
          <FramerImage
            src={img}
            alt={title}
            fill
            className="object-contain p-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </Link>

      <div className="flex flex-col flex-1 mt-4 items-center text-center">
        <Link href={link} target="_blank">
          <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>
            {title}
          </h2>
        </Link>

        <p className='text-sm mb-4 flex-1'>{summary}</p>

        <span className='text-pink-300 font-semibold'>{time}</span>
      </div>
    </motion.li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Articles Page</title>
        <meta name="description" content="Professional background of Amin Isazadeh, Ph.D. Candidate in Thermal Sciences." />
      </Head>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='text-4xl md:text-6xl mb-16 dark:text-light text-center' />

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <FeaturedArticle
              title="Flow Boiling Confinied by Reconfigurable Intelligent Surface (RIS) with ThermoMechanoSensing (TMS)"
              summary="A research highlight on adaptive microchannel heat-sink design using ThermoMechanoSensing for enhanced thermal management of high-heat-flux electronics. This work reflects my ongoing focus on reconfigurable cooling architectures, thermo-fluid design, and next-generation electronics thermal control."
              time="Nov. 24-26, 2024 | APS DFD | 5 min read"
              link="https://meetings.aps.org/Meeting/DFD24/Session/S01.86"
              img={art_h1}
            />
            <FeaturedArticle
              title="Dynamics of Bubble Growth and Collapse Under Pressure Perturbation"
              summary="This study investigates the dynamic response of deformable particles under internal and ambient pressure perturbations using analytical modeling and numerical simulations in Fluent. The work highlights damped oscillatory behavior, equilibrium-state shifts, and size-dependent spectral characteristics, showing that smaller particles exhibit higher equilibrium pressures and peak frequencies but smaller deformation."
              time="Jul. 15–17, 2024 | ASME FEDSM 2024 | 15 mins read"
              link="https://asmedigitalcollection.asme.org/FEDSM/proceedings/FEDSM2024/88124/V001T04A026/1205528"
              img={art_h3}
            />
          </ul>

          <div className='w-full h-1 bg-zinc-400/30 dark:bg-zinc-600/30 my-10 rounded-full' />

          <h2 className='font-bold text-5xl w-full text-center my-16 mt-20'>All Articles</h2>

          <ul>
            <Article
              title="Rheological Analysis of Stress and Strain Rate of Non-Spherical Bubble With Multi-Mode Interfacial Perturbation in a Single and Multi-Bubble Systems Under Pressure Waves"
              publisher="Publisher: ASME International Mechanical Engineering Congress and Exposition"
              date="Nov. 17, 2024"
              link="https://asmedigitalcollection.asme.org/IMECE/proceedings/IMECE2024/88667/V008T10A047/1212047"
              img={art_1}
              abstract="This paper introduces a multi-mode perturbation model for non-spherical bubbles, developed using potential function theory and spherical harmonics. Employing a sophisticated numerical framework that integrates adaptive time advancement (ATA) and mesh refinement (AMR), the study rigorously solves coupled ordinary differential equations (ODEs) and partial differential equations (PDEs) in a non-dimensional framework. Analysis is split between Rayleigh collapse under constant external pressure and dynamic collapse influenced by acoustic pressure waves. The study systematically investigates the effects of initial particle size, perturbation amplitude, and mode degree on Rayleigh collapse dynamics, revealing that larger bubbles exhibit longer collapse and rebound times, while smaller bubbles rapidly reach equilibrium. In scenarios involving acoustic waves, the investigation focuses on the impact of wave frequency and medium compressibility. Results indicate that higher wave frequencies and fluid compressibility significantly reduce the time for system oscillations to synchronize with external pressure waves, enhancing damping effects. Specifically, compressibility was found to accelerate synchronization, reducing large-amplitude oscillation cycles more than twofold compared to incompressible conditions. Additionally, at higher perturbation modes, amplitude damping occurs more rapidly, underscoring the influence of mode degree on the damping characteristics. Spanning Reynolds numbers from 1.65 to 1.65E+7 for Rayleigh collapses and 9.98E−4 to 9.98E+3 for acoustic-driven scenarios, the research highlights the substantial impact of fluid compressibility and perturbation parameters on bubble dynamics, providing insights that contrast sharply between micro-scale and macro-scale particle behaviors."
            />

            <Article
              title="Algorithmic Spherical Mode Decomposition and Rheological Analysis of Nonlinear Interactions in Variable Density Deformable Particle Domains"
              publisher="Publisher: APS Division of Fluid Dynamics Meeting Abstracts"
              date="Nov. 10, 2024"
              link="https://archive.aps.org/dfd/2024/a19/8/"
              img={art_2}
              abstract="This study investigates nonlinear interactions from pressure waves emitted during particle deformation in domains with variable particle density distributions. We propose a novel algorithm to generate irregular 3D shapes by combining spherical harmonic modes and decomposing them into dominant modes. The domain includes particles ranging from nanometers to millimeters. We examine the impact of centroid distance, initial shape, and material properties on interaction dynamics. Geometry and mesh generation are performed using GMSH, creating a structured quad mesh with smaller cell sizes near the particles to avoid mass diffusion. CFD modeling is conducted using the compressibleInterDyMFoam solver in OpenFOAM. The study includes rheological analysis via analytically derived equations and explores the use of physics-informed neural networks (PINNs) to predict dynamics of nonspherical deformable particles. Preliminary findings indicate smaller particle sizes correlate with increased equilibrium pressure, higher peak frequency, and smaller deformation. Factors such as particle size, perturbation amplitude, and fluid compressibility influence damping effects and bubble stability. Our results provide insights into pressure wave behavior in non-uniform particle distributions, advancing the understanding of wave-particle interactions in heterogeneous media with significant implications for fluid dynamics and material science."
            />

            <Article
              title="Adaptive Microchannel Heat Sink for Enhanced Thermal Management Using ThermoMechanoSensing"
              publisher="Publisher: APS Division of Fluid Dynamics Meeting Abstracts"
              date="Nov. 5, 2024"
              link="https://meetings.aps.org/Meeting/DFD24/Session/S01.86"
              img={art_3}
              abstract="This study introduces an adaptive microchannel heat sink designed to dynamically alter channel geometry, reducing thermal and flow resistances while ensuring uniform surface temperature. Our evolutionary smart adaptive amorphous microchannel heat sink employs ThermoMechanoSensing, a novel technique that leverages material deformation under thermal and mechanical stress for real-time optimization. Channels are equipped with temperature sensors along their length, allowing for dynamic adjustments that improve temperature uniformity and hotspot control. This deformation acts as a flow modulator and creates dynamic microstructures, such as micro-fins and micro-cavities, enhancing heat dissipation. Additionally, a memristor-based sensor system records thermal stress and pressure oscillations, generating precise thermal maps for optimization algorithms. Our research includes extensive literature reviews, numerical simulations, and a comparative analysis with state-of-the-art designs, aiming to optimize flow distribution and surface structure. This innovative approach promises significant advancements in thermal management for various applications."
            />

            <Article
              title="Dynamics of Bubble Growth and Collapse Under Pressure Perturbation"
              publisher="Publisher: Fluids Engineering Division Summer Meeting"
              date="Jul. 15, 2024"
              link="https://asmedigitalcollection.asme.org/FEDSM/proceedings/FEDSM2024/88124/V001T04A026/1205528"
              img={art_4}
              abstract="This study investigates the dynamic response of deformable particles to pressure perturbations, utilizing analytical and numerical analyses. Numerical simulations using Fluent software explore the impact of internal pressure deviations, step changes, and oscillations in ambient pressure across a wide size range. The study uncovers systematic and damped oscillatory responses to pressure deviations, highlighting the significance of liquid viscosity and surface tension in determining equilibrium states. Particle size emerges as a key factor, influencing equilibrium pressures, dynamic responses, and power spectral characteristics. Findings include smaller particles exhibiting higher equilibrium pressures and longer stabilization times. Power Spectral Density (PSD) analysis reveals a consistent dominant frequency, with smaller particles displaying higher peak frequencies. Analytical exploration emphasizes the roles of surface tension, viscosity, temperature, and mean ambient pressure in shaping peak frequency and deformation magnitude. The analysis shows smaller particle size have larger peak frequency, but smaller deformation. Moreover, raising surface tension leads to a wider range of particle sizes whose peak frequencies are not zero."
            />

            <Article
              title="Impact of Homogeneous Pressure Perturbation on the Dynamics of Bubble Collapse and Coalescence in a Single and Multi-Bubble Systems"
              publisher="Publisher: Bulletin of the American Physical Society"
              date="Nov. 20, 2023"
              link="https://archive.aps.org/dfd/2023/t13/7/"
              img={art_5}
              abstract="The objective of this study is investigation of the influence of homogeneous pressure perturbation on rising bubble morphology by analyzing shear stress and strain effects at the bubble-liquid interface. A numerical model is developed using the finite volume method with a Dirichlet pressure-inlet boundary and side walls, capturing bubble dynamics qualitatively and quantitatively, and validated with RMSE <1% against experimental data containing optical diagnostics and quantitative measurements, ensuring accurate representation of key parameters like the morphology of the rising bubble and its local velocity during ascent. The numerical model uses approximately 10^{5} elements with a mesh size 0.0025 times the domain dimension, employs volume of fluid scheme for multiphase physics, and achieves stability through relaxation factors of 0.3 for pressure and 0.4 for momentum, along with a geometric reconstruction scheme for volume fraction discretization to capture sharp interfaces between the two phases. The study observed critical bubble behaviors, including deformation, breakup (re-entrant jet), and coalescence. Analysis of non-dimensional numbers (Atwood), compressibility, pressure perturbation strength, perturbation type (planar and radial), and bubble location reveals their individual and collective effects on bubble dynamics. The study offers valuable insights into the interplay between pressure perturbation and rising bubbles with a robust CFD model for multiphase physics."
            />

            <Article
              title="Thermal management in legacy air-cooled data centers: An overview and perspectives"
              publisher="Publisher: Renewable and Sustainable Energy Reviews"
              date="Nov. 1, 2023"
              link="https://doi.org/10.1016/j.rser.2023.113707"
              img={art_6}
              abstract="Depletion of fossil fuel reservoirs, greenhouse gas emissions' impact on global warming, and rising energy costs are pushing the data center sector to reduce energy use. This paper reviews strategies for improving the energy performance of air-cooled systems in datacom facilities and enhancing temperature and flow distribution in white space by analyzing different airflow delivery architectures (hard floor and raised floor designs), eliminating cold and hot air mixing by incorporating cold/hot aisle containment or exhaust chimneys, and potential energy savings achievable by utilizing evaporative cooling systems. It was found that the optimal ventilation system is hard-floor architecture with locally-ducted supply and return air. Hard floor is less complicated than raised floor design, and overhead supply air can minimize hot spots at the top of racks. Airflow management strategies including cold and hot aisle formation, aisle containment, and exhaust chimneys can reduce annual cooling energy usage by 10–50% in conjunction with air-side and water-side economizers, minimize hot spots, and enhance thermal performance during cooling system failure. Hot-Aisle Containment or exhaust chimneys provide better thermal and energy performance than open and/or cold-aisle containment, but they require new ducting in traditional data centers. Depending on the climate and geographical location, evaporative cooling can reduce annual cooling energy usage by 20–70% and lead to Power Usage Effectiveness as low as 1.06. Evaporative coolers are more suitable for dry climates, but this limitation can be ameliorated by incorporating desiccant wheels and thermal energy storage."
            />

            <Article
              title="Global trends, performance metrics, and energy reduction measures in datacom facilities"
              publisher="Publisher: Renewable and Sustainable Energy Reviews"
              date="Mar. 1, 2023"
              link="https://doi.org/10.1016/j.rser.2023.113149"
              img={art_7}
              abstract="Over the last decade, the demand for data center and network services has increased dramatically. To meet this demand, global average rack power density has risen from 2.4 kW/rack in 2011 to 8.4 kW/rack in 2020 with the aid of technological advancements. About 36% of global data centers have racks above 30 kW/rack. Average Power Usage Effectiveness (PUE) dropped from 2.5 in 2007 to 1.65 in 2013, but has been almost flat since then, at 1.59 in 2020. The depletion of finite fossil fuel reservoirs, adverse impact of greenhouse gas emissions on global warming, recyclability of electronic waste, and the rising cost of energy are pushing the datacom industry toward more energy-efficient and sustainable technologies including renewable energy, highly efficient electronics cooling, waste heat recovery, passive cooling systems, and energy storage, which are broadly reviewed in this paper. Use of renewable energy resources through power purchase agreements rose by 346% from 2.4 GW in 2017 to 10.7 GW in 2020. Air-side economizers can reduce PUE by 30–50% and water-side economizers by 10–30%. The server/rack outlet is an ideal spot for waste heat recovery and can be coupled with a multi-stage heat pump to save significant energy if coupled to a district heating system. Active and passive deployment of thermal energy storage can save more than 20% of cooling energy and reduce temperature fluctuations by more than 60%. Edge computing, decentralization, and virtualization can lead to lower latency, higher scalability, and reliability during failure."
            />

            <Article
              title="Cooling Technologies in Datacom Facilities: An Overview and Perspectives"
              publisher="Publisher: International Refrigeration and Air Conditioning Conference"
              date="Sep. 7, 2022"
              link="https://docs.lib.purdue.edu/iracc/2492/"
              img={art_8}
              abstract="The demand for data center and network services has been rising rapidly over the last decade. However, the power demand has become stable in recent years, owing to more efficient electronic hardware, migrating to hyperscale and cloud data centers, and more efficient cooling infrastructure, among others. This paper provides a critical overview of cooling technologies and a discussion of research gaps. Cooling technologies in datacom facilities can be broadly categorized into air-cooled and liquid-cooled systems. Overhead/underfloor air delivery, hot/cold aisle layout, and hot/cold aisle containment are the primary strategies used to optimize air cooled system performance. The raised floor architecture has been widely adopted in datacom facilities, but has substantial air flow leakage (about 25–50%). It was found that the optimal ventilation system is a hard floor design with overhead cold air delivery and hot air return duct instead of room-based supply and return. Cold-aisle containment can better reduce the maximum inlet temperature of the racks and suppress temperature rise during cooling system failure, while hot-aisle containment can provide lower average inlet temperature of the racks with smaller standard deviation and is less affected by air tightness around the servers. As rack power density rises above 10 kW/rack and heat flux beyond 100 kW/cm², conventional air-cooled systems are not a viable solution for thermal management. Liquid cooling methods like spray cooling, impingement jet, immersion cooling, liquid-cooled micro-channels, and heat pipes are among the emerging technologies to overcome the capacity limitations of air-cooled systems. Pertaining to immersion cooling, transitioning into sub-cooled two-phase flow boiling, enhancing heat transfer by adding micro structures or irregularities to create more nucleation sites and higher heat transfer surface area, and utilizing nanofluids are prominent enhancement strategies gaining attention among scholars. Submerging a power electronics module in a fluid can lead to a thermal resistance of 25% that of an air-cooled system, or 30-50% that of a liquid-cooled system like microchannel or spray cooling. Depending on the existing cooling system, overall heat load, and hot spots, the heat pipe system can serve the data center as a stand-alone unit or in conjunction with an air-cooled system, a so-called hybrid system. Compared to typical air-cooled systems, the hybrid system can lower annual cooling load factor and energy consumption by 37-58% and 20-70%, respectively."
            />

            <Article
              title="Experimental and numerical study of catalytic combustion and pore-scale numerical study of mass diffusion in high porosity fibrous porous media"
              publisher="Publisher: Energy"
              date="Jan. 1, 2022"
              link="https://doi.org/10.1016/j.energy.2021.121831"
              img={art_9}
              abstract="Pore structure has a significant effect on transport phenomena inside porous media. This effect can be considered in simulations by using suitable transport coefficients. Some correlations are reported in the literature, which can be applied for simple pore geometries. In the present study, a pore-scale simulation approach is presented to determine mass diffusion coefficient considering molecular and Knudsen diffusion in a fibrous porous medium as a complex porous geometry. The methodology is employed for species in catalytic combustion of Methane inside a fibrous porous structure. The effect of Solid Volume Fraction (SVF), fibers orientation, and diameter are discussed in different temperatures. It is found that SVF plays the dominant role in mass diffusion, specifically above 600K. Mass diffusion coefficients obtained in the present study and flow permeability, conduction and radiation heat transfer coefficients from the previous study are used to simulate methane combustion inside the fibrous structure on the macro scale. An experimental setup is developed for validation. The results indicated that the simulation could well predict the temperature distribution, also 6.4% error in estimating the Methane conversion rate was observed. Due to the low Peclet number, the concentration of CH4 and O2 decreased unexpectedly before entering the catalytic zone."
            />

            <Article
              title="Detecting deficiencies using building performance data in healthcare facilities: Improving operational efficiency with Continuous Commissioning®"
              publisher="Publisher: Energy and Buildings"
              date="Jun. 15, 2021"
              link="https://doi.org/10.1016/j.enbuild.2021.110953"
              img={art_10}
              abstract="The Continuous Commissioning® version of the Existing Building Commissioning process was implemented in three large hospitals and optimized the HVAC operations to improve their energy use while maintaining comfort without any capital system investment. In the hospitals studied, measures accounting for 64% of the total annual commissioning cost savings of $592,816 were identified by analyzing trend data. Trend analysis of AHU ON/OFF status, economizer, outside air damper position, supply air temperature, and supply air static pressure corresponded to 51%, 8%, 5%, 31%, and 4% of the total projected savings, respectively. The use of trend analysis identified measures in the three case-study hospitals that are projected to reduce the EUI of the three hospitals by 16%, 21% and 19% respectively, even though the average consumption of the three hospitals was below the 5th percentile of hospital consumption. The availability and use of trend data in these facilities saved time in identifying these operational improvements and likely identified some improvements that would not have been identified using manual diagnostic techniques. Continuous engagement of this low cost and resource-intensive analysis tool can significantly reduce the operational costs for facilities."
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles

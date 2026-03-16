import Head from "next/head";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

import fig_temp from "../../../public/codes/lammps/lennard_jones_fluid/study_1___type_iso.gif";

import fig1_type from "../../../public/codes/lammps/lennard_jones_fluid/study_1___type_iso.gif";
import fig1_type_s from "../../../public/codes/lammps/lennard_jones_fluid/study_1___type_iso_s.png";
import fig1_pe from "../../../public/codes/lammps/lennard_jones_fluid/study_1___pe_iso.gif";
import fig1_pe_s from "../../../public/codes/lammps/lennard_jones_fluid/study_1___pe_iso_s.png";

import fig2_type_e from "../../../public/codes/lammps/lennard_jones_fluid/study_2___type_iso_e.png";
import fig2_pe_e from "../../../public/codes/lammps/lennard_jones_fluid/study_2___pe_iso_e.png";
import fig2_ke_e from "../../../public/codes/lammps/lennard_jones_fluid/study_2___ke_iso_e.png";
import fig2_vmeg_e from "../../../public/codes/lammps/lennard_jones_fluid/study_2___vmeg_iso_e.png";

import fig3_type from "../../../public/codes/lammps/lennard_jones_fluid/study_3___type_iso.gif";
import fig3_pe from "../../../public/codes/lammps/lennard_jones_fluid/study_3___pe_iso.gif";
import fig3_ke from "../../../public/codes/lammps/lennard_jones_fluid/study_3___ke_iso.gif";
import fig3_vmeg from "../../../public/codes/lammps/lennard_jones_fluid/study_3___vmeg_iso.gif";

import fig4_type from "../../../public/codes/lammps/lennard_jones_fluid/study_4___type_xy.gif";
import fig4_type_s from "../../../public/codes/lammps/lennard_jones_fluid/study_4___type_xy_s.png";
import fig4_type_m from "../../../public/codes/lammps/lennard_jones_fluid/study_4___type_xy_m.png";
import fig4_type_e from "../../../public/codes/lammps/lennard_jones_fluid/study_4___type_xy_e.png";

import fig5_type from "../../../public/codes/lammps/lennard_jones_fluid/study_5___type_iso.gif";
import fig5_type_s from "../../../public/codes/lammps/lennard_jones_fluid/study_5___type_iso_s.png";
import fig5_type_e from "../../../public/codes/lammps/lennard_jones_fluid/study_5___type_iso_e.png";
import fig5_pe from "../../../public/codes/lammps/lennard_jones_fluid/study_5___pe_iso.gif";


export default function LennardJonesFluid() {
  return (
    <>
      <Head>
        <title>Binary Lennard–Jones Fluid | Portfolio</title>
        <meta
          name="description"
          content="Project detail page for a binary Lennard–Jones fluid study in LAMMPS, covering system definition, relaxation, molecular dynamics, ensemble behavior, mixing, and dense-phase demixing."
        />
      </Head>

      <ProjectDetailTemplate
        category="Molecular Dynamics"
        title="Binary Lennard–Jones Fluid in LAMMPS"
        period="2023 – Present"
        institution="Texas A&M University"
        backLink="/projects"
        quickSummary={{
          intro: [
            "This study presents a molecular dynamics investigation of a binary Lennard–Jones fluid in a three-dimensional periodic domain using LAMMPS. The system is composed of two particle populations with different characteristic sizes and masses, providing a compact yet powerful framework for examining how microscopic interaction rules generate emergent thermodynamic and morphological behavior. Starting from a randomized initial configuration, the study follows the system through structural relaxation, equilibration, thermalization, interspecies mixing, phase separation, and molecular-architecture extensions. At its foundation, the work uses the Lennard–Jones interaction model to capture the competition between short-range repulsion and intermediate-range attraction. Within this setting, the binary fluid becomes an effective platform for studying how disordered particle assemblies evolve toward organized states, how energy is redistributed across ensembles, and how changes in density, interaction contrast, and molecular connectivity reshape system-scale behavior. Rather than treating the system as a single isolated simulation, this work develops it as a sequence of linked studies, each aimed at revealing a different aspect of particle-scale physics and emergent structure.",
          ],
          scope: [
            "The series is organized as a progression from baseline structural relaxation to increasingly rich dynamical and morphological regimes. It begins by establishing how a randomly initialized two-species system relaxes into a lower-energy configuration through minimization. It then examines equilibrium-seeking behavior in the NVE ensemble, followed by thermostat-controlled thermalization and ensemble comparison. Once the baseline thermodynamic response is established, the focus shifts toward species transport and spatial redistribution through a dedicated mixing study. The later studies extend the same framework into dense-phase demixing and bonded molecular architectures, broadening the system from a binary atomic fluid to a more general coarse-grained molecular platform.",
          ],
          toolsUsed: [
            "LAMMPS",
            "LAMMPS input scripting",
            "OVITO",
            "VMD",
            "Shell scripting",
            "Post-processing",
          ],
        }}
        sections={[
          {
            type: "compositeBlock",
            title: "Study 1 — Configuration Relaxation and Energy Minimization",
            subtitle:
              "Initial structural stabilization of the binary Lennard–Jones system.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The first study establishes a physically admissible starting state for the binary Lennard–Jones fluid before any time-dependent molecular dynamics is performed. In the computational model, a three-dimensional periodic simulation box is populated with 1500 type-1 atoms and 100 type-2 atoms placed stochastically throughout the domain. This random initialization is useful for constructing a binary particle system, but it also introduces many unrealistically close particle pairs. As a result, the initial configuration contains severe local overlap, large repulsive forces, and artificially elevated potential energy."
                  },
                  {
                    text: "The interactions between particles are described by the Lennard–Jones potential:"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "E_{ij}(r) = 4\\epsilon_{ij} \\left[ \\left( \\frac{\\sigma_{ij}}{r} \\right)^{12} - \\left( \\frac{\\sigma_{ij}}{r} \\right)^6 \\right], \\quad r < r_c",
                    definitions: [
                      { latex: "r", text: ": is the interparticle distance" },
                      { latex: "\\epsilon_{ij}", text: ": is the interaction strength between particle types i and j" },
                      { latex: "\\sigma_{ij}", text: ": is the effective interaction diameter" },
                      { latex: "r_c", text: ": is the cutoff radius beyond which pair interactions are neglected" }
                    ]
                  },
                  {
                    text: "In this expression, the first term represents steep short-range repulsion and the second term represents longer-range attraction. When particles are initialized too close together, the repulsive contribution dominates strongly, making the starting configuration mechanically unfavorable. To remove these artificial contacts, the model applies an energy-minimization procedure rather than immediately advancing the system in time."
                  },
                  {
                    text: "Because this stage is purely configurational and does not yet include dynamical integration, kinetic energy is absent and the total energy reduces to ",
                    type: "equationInline",
                    latex: "E = U",
                    textAfter: ", where U is the total potential energy of the particle arrangement. The minimization algorithm iteratively adjusts particle positions to reduce this configurational energy, thereby relaxing the random initial packing into a stable low-energy reference state. The resulting minimized structure then serves as the physically meaningful starting point for the later studies of equilibration, thermalization, mixing, and demixing."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The study demonstrates a clear transition from an artificial random packing to a mechanically stable low-energy configuration suitable for subsequent molecular-dynamics analysis.",
                  "Potential energy decreases rapidly during the early minimization iterations, showing that the most severe particle overlaps and repulsive contacts are removed first, then gradually approaches a stable negative plateau as the structure converges.",
                  "The relaxed configuration exhibits more physically admissible particle spacing and a more coherent short-range arrangement than the initial random field, confirming that energy minimization is a necessary preprocessing step before meaningful dynamical simulation."
                ]
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Initial particle configuration",
                  "Post-minimization configuration",
                  "Potential energy versus minimization step",
                  "Before/after structural comparison figure"
                ]
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig1_type_s,
                    label: "Initial Configuration",
                    description: "Randomized two-species Lennard–Jones particle distribution in a three-dimensional periodic simulation box before energy minimization."
                  },
                  {
                    src: fig1_type,
                    label: "Minimization Dynamics",
                    description: "Animation of particle motion during the iterative minimization process, illustrating structural relaxation from a highly unfavorable initial state."
                  },
                  {
                    src: fig1_pe_s,
                    label: "Initial Potential Energy",
                    description: "Visualization of the system’s potential energy field before relaxation, highlighting the energetically unfavorable character of the random initialization."
                  },
                  {
                    src: fig1_pe,
                    label: "Potential Energy Evolution",
                    description: "Animation showing the progressive reduction and redistribution of potential energy during minimization as the system approaches a stable low-energy state."
                  }
                ]
              },
              {
                type: "codeEnd",
                title: "LAMMPS Minimization Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_1___minimization.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for constructing the initial binary system and performing the energy-minimization stage.",
                defaultExpanded: false,
              },
              // {
              //   type: "linksRow",
              //   items: [
              //     {
              //       label: "LAMMPS Tutorial Page",
              //       href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
              //       kind: "external",
              //     },
              //     {
              //       label: "Tutorial 1 Input Files",
              //       href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
              //       kind: "github",
              //     },
              //   ],
              // },
            ],
          },

          {
            type: "compositeBlock",
            title: "Study 2 — Equilibration Dynamics in the NVE Ensemble",
            subtitle:
              "Microcanonical evolution of the relaxed binary fluid and the emergence of equilibrium-like fluctuations.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The second study examines how the minimized binary Lennard–Jones fluid evolves once it is released into true molecular motion. The relaxed configuration produced in Study 1 is used as the initial condition, and particle velocities are assigned so that the system begins with finite kinetic energy. The simulation is then advanced in the NVE ensemble, meaning that the number of particles, the system volume, and the total energy are conserved. In physical terms, this corresponds to an isolated molecular system that evolves without externally imposed heating, cooling, or compression."
                  },
                  {
                    text: "The particle trajectories are governed by Newton’s second law:"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "m_i\\frac{d^2\\mathbf{r}_i}{dt^2}=\\mathbf{F}_i",
                    definitions: [
                      { latex: "m_i", text: ": is the mass of particle i" },
                      { latex: "\\mathbf{r}_i", text: ": is the position vector of particle i" },
                      { latex: "t", text: ": is time" },
                      { latex: "\\mathbf{F}_i", text: ": is the net force on particle i generated by all pairwise interactions" }
                    ]
                  },
                  {
                    text: "These forces are obtained from the Lennard–Jones interaction model introduced in Study 1, so the same interparticle physics is preserved while the system now evolves dynamically rather than through static relaxation. As particles accelerate, collide, and rearrange, the system continuously exchanges energy between configurational storage and particle motion."
                  },
                  {
                    text: "The principal thermodynamic quantities monitored in this study are temperature T, potential energy U, kinetic energy K, total energy E, and pressure. Their basic relation is"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "E=U+K",
                    definitions: [
                      { latex: "E", text: ": is the total energy of the system" },
                      { latex: "U", text: ": is the total potential energy associated with interparticle interactions" },
                      { latex: "K", text: ": is the total kinetic energy associated with particle motion" }
                    ]
                  },
                  {
                    text: "Because the simulation is performed in the NVE ensemble, the total energy remains approximately constant, while potential and kinetic energy fluctuate in a complementary manner as the binary fluid approaches a dynamically equilibrated state. This study therefore reveals how a mechanically relaxed structure transitions into a thermally active molecular system through purely internal energy redistribution."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The NVE evolution reveals a clear equilibration pathway in which the initially relaxed structure develops sustained molecular motion and transitions into a fluctuating steady state.",
                  "Potential energy and kinetic energy adjust in opposite directions during the transient stage, while the total energy remains approximately conserved, confirming the expected behavior of an isolated microcanonical system.",
                  "The final state exhibits persistent microscopic motion, spatially varying local energy content, and equilibrium-like fluctuations, demonstrating that structural relaxation alone is not sufficient to describe the full thermodynamic behavior of the binary fluid."
                ]
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Temperature history",
                  "Potential energy history",
                  "Kinetic energy history",
                  "Total energy history",
                  "Pressure history",
                  "Annotated equilibration window separating transient and stabilized regimes"
                ]
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig2_type_e,
                    label: "Final Atomic Configuration",
                    description:
                      "Final spatial arrangement of the binary Lennard–Jones atoms after NVE evolution, showing the dynamically equilibrated structure obtained from the minimized initial state."
                  },
                  {
                    src: fig2_vmeg_e,
                    label: "Final Velocity Magnitude Distribution",
                    description:
                      "Final particle-scale distribution of velocity magnitude, illustrating the range of atomic speeds established through internal energy redistribution during equilibration."
                  },
                  {
                    src: fig2_pe_e,
                    label: "Final Potential Energy Distribution",
                    description:
                      "Final spatial distribution of per-atom potential energy, highlighting how local interaction environments differ across the equilibrated binary fluid."
                  },
                  {
                    src: fig2_ke_e,
                    label: "Final Kinetic Energy Distribution",
                    description:
                      "Final distribution of per-atom kinetic energy, showing the nonuniform microscopic motion that persists even after the system reaches an equilibrium-like fluctuating regime."
                  }
                ]
              },
              {
                type: "codeEnd",
                title: "LAMMPS NVE Dynamics Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_2___nve.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for propagating the minimized binary fluid in the microcanonical ensemble and tracking its thermodynamic equilibration.",
                defaultExpanded: false,
              },
              // {
              //   type: "linksRow",
              //   items: [
              //     {
              //       label: "LAMMPS Tutorial Page",
              //       href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
              //       kind: "external",
              //     },
              //     {
              //       label: "Tutorial 1 Input Files",
              //       href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
              //       kind: "github",
              //     },
              //   ],
              // },
            ],
          },

          {
            type: "compositeBlock",
            title: "Study 3 — Thermostat-Controlled Thermalization and Ensemble Comparison",
            subtitle:
              "Comparison of natural NVE equilibration and externally regulated thermalization under thermostat control.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The third study introduces explicit temperature regulation and compares it with the natural equilibration behavior observed in the NVE simulation. The same minimized binary Lennard–Jones fluid is used, but the system is now coupled to a Langevin thermostat that drives the particles toward a prescribed target temperature. In physical terms, this means that the fluid no longer evolves as a perfectly isolated system: thermal energy can be effectively removed from or supplied to the particle motion through external damping and stochastic forcing."
                  },
                  {
                    text: "The particle motion still follows Newtonian dynamics,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "m_i\\frac{d^2\\mathbf{r}_i}{dt^2}=\\mathbf{F}_i",
                    definitions: [
                      { latex: "m_i", text: ": is the mass of particle i" },
                      { latex: "\\mathbf{r}_i", text: ": is the position vector of particle i" },
                      { latex: "t", text: ": is time" },
                      { latex: "\\mathbf{F}_i", text: ": is the net force on particle i due to interparticle interactions and thermostat-driven effects" }
                    ]
                  },
                  {
                    text: "The conservative forces are still generated by the same Lennard–Jones interaction model used in the earlier studies, so the underlying particle-scale physics is unchanged. What changes here is the thermal environment: instead of allowing temperature to emerge solely from internal energy redistribution, the thermostat actively guides the kinetic state of the system toward a controlled value."
                  },
                  {
                    text: "The energetic bookkeeping remains"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "E=U+K",
                    definitions: [
                      { latex: "E", text: ": is the total energy of the particle system" },
                      { latex: "U", text: ": is the total potential energy associated with interparticle interactions" },
                      { latex: "K", text: ": is the total kinetic energy associated with particle motion" }
                    ]
                  },
                  {
                    text: "but, unlike the NVE case, the total energy of the simulated particle system is not expected to remain strictly constant because the thermostat can inject or remove energy in order to maintain the target temperature. The purpose of this study is therefore comparative: it reveals how ensemble choice changes the transient pathway to equilibrium, the rate of thermal stabilization, and the fluctuation structure of the binary fluid."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The thermostat-controlled system reaches its target thermal state more rapidly than the unforced NVE case, showing that external regulation strongly accelerates thermalization.",
                  "Temperature rises from the near-quiescent post-minimization condition and stabilizes around the prescribed value, while the potential and kinetic energy histories evolve toward fluctuation patterns characteristic of a regulated ensemble.",
                  "The comparison demonstrates that equilibrium is not defined only by the final state, but also by the pathway through which that state is reached, with externally controlled dynamics producing a different transient response than natural NVE equilibration.",
                  "This study therefore clarifies how ensemble choice influences thermalization rate, fluctuation character, and the interpretation of apparent thermal stability in molecular-dynamics simulations."
                ]
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "NVE versus thermostat-controlled temperature comparison",
                  "NVE versus thermostat-controlled U(t), K(t), and E(t)",
                  "Ensemble comparison summary figure",
                  "Thermalization-rate comparison",
                  "Optional comparison of alternative thermostat strategies"
                ]
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig3_type,
                    label: "Atomic Motion During Thermalization",
                    description:
                      "Animation of atom movements during the thermostat-controlled simulation, illustrating how the binary Lennard–Jones system evolves structurally while approaching the prescribed thermal state."
                  },
                  {
                    src: fig3_vmeg,
                    label: "Velocity Magnitude Dynamics",
                    description:
                      "Time-dependent evolution of particle velocity magnitude, showing how atomic speed fluctuations develop and stabilize under external temperature regulation."
                  },
                  {
                    src: fig3_pe,
                    label: "Potential Energy Dynamics",
                    description:
                      "Time-dependent evolution of the per-atom potential energy field, highlighting changes in local interaction environments as the regulated system approaches steady thermal behavior."
                  },
                  {
                    src: fig3_ke,
                    label: "Kinetic Energy Dynamics",
                    description:
                      "Time-dependent evolution of per-atom kinetic energy, showing how microscopic motion intensifies and stabilizes as thermostat control drives the system toward the target temperature."
                  }
                ]
              },
              {
                type: "codeEnd",
                title: "LAMMPS Thermostat-Controlled Dynamics Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_3___langevinThermostat.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for simulating thermostat-controlled thermalization and comparing it against natural NVE equilibration.",
                defaultExpanded: false,
              },
              // {
              //   type: "linksRow",
              //   items: [
              //     {
              //       label: "LAMMPS Tutorial Page",
              //       href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
              //       kind: "external",
              //     },
              //     {
              //       label: "Tutorial 1 Input Files",
              //       href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
              //       kind: "github",
              //     },
              //   ],
              // },
            ],
          },

          {
            type: "compositeBlock",
            title: "Study 4 — Mixing Dynamics and Interspecies Coordination Evolution",
            subtitle:
              "Tracking macroscopic species redistribution and microscopic cross-species contact during binary-fluid mixing.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The fourth study shifts attention from bulk equilibration to interspecies transport and spatial redistribution. Instead of beginning from a randomly mixed binary fluid, the two particle populations are initialized in different regions of the simulation domain so that the system starts from a deliberately separated state. This creates a clear compositional interface at the outset and allows the molecular-dynamics model to examine how mixing develops over time through particle migration, interface erosion, and local contact formation between unlike species."
                  },
                  {
                    text: "The particle motion continues to follow Newtonian dynamics,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "m_i\\frac{d^2\\mathbf{r}_i}{dt^2}=\\mathbf{F}_i",
                    definitions: [
                      { latex: "m_i", text: ": is the mass of particle i" },
                      { latex: "\\mathbf{r}_i", text: ": is the position vector of particle i" },
                      { latex: "t", text: ": is time" },
                      { latex: "\\mathbf{F}_i", text: ": is the net force on particle i generated by the Lennard–Jones interactions" }
                    ]
                  },
                  {
                    text: "What distinguishes this study is therefore not a change in the underlying interaction law, but a change in the initial morphology and in the diagnostics used to quantify the subsequent evolution. The objective is no longer simply to observe equilibration of a bulk binary fluid, but to track how two initially separated species progressively mix at both macroscopic and microscopic levels."
                  },
                  {
                    text: "Two complementary diagnostics are used. The first is region occupancy, defined through the number of particles of each type inside a selected inner cylinder,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex:
                      "N_{1,\\mathrm{in}}=\\text{count of type-1 atoms in the inner region}, \\qquad N_{2,\\mathrm{in}}=\\text{count of type-2 atoms in the inner region}",
                    definitions: [
                      {
                        latex: "N_{1,\\mathrm{in}}",
                        text: "is the number of type-1 atoms inside the selected inner region",
                      },
                      {
                        latex: "N_{2,\\mathrm{in}}",
                        text: "is the number of type-2 atoms inside the selected inner region",
                      },
                    ],
                  },
                  {
                    text: "These occupancy measures provide a transport-oriented description of how far each population has migrated away from its initial location. The second diagnostic is the cross-species coordination number,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex:
                      "C_{1-2}=\\left\\langle \\text{number of type-2 neighbors surrounding a type-1 atom within a cutoff} \\right\\rangle",
                    definitions: [
                      {
                        latex: "C_{1-2}",
                        text: "measures the average local contact between unlike particle species",
                      },
                    ],
                  },
                  {
                    text: "Together, these quantities connect domain-scale redistribution to particle-scale interspecies contact, allowing the study to capture both the geometric and interaction-level aspects of mixing. In that sense, the simulation tracks not only where the two species move, but also how their local environments become increasingly intermixed as the initial interface breaks down."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The initially separated populations progressively interpenetrate, producing visible morphological mixing and a measurable rise in interspecies coordination.",
                  "As the simulation advances, the region-occupancy histories confirm migration across the initial interface, while the coordination number increases, indicating more frequent local contact between unlike particles.",
                  "The study shows that mixing in the binary fluid is inherently multiscale: large-scale species redistribution and microscopic neighbor-level interpenetration develop together rather than independently.",
                  "This combined morphology-and-metrics analysis makes Study 4 one of the clearest demonstrations of emergent transport-like behavior within the binary-fluid framework."
                ]
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Early-, mid-, and late-time mixing snapshots",
                  "N_{1,in}(t) history",
                  "N_{2,in}(t) history",
                  "Cross-species coordination history C_{1-2}(t)",
                  "Combined morphology-and-metrics figure"
                ]
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig4_type_s,
                    label: "Initial Top-View Atomic Configuration",
                    description:
                      "Top-view snapshot of the initially de-mixed binary Lennard–Jones system, where the two species begin in spatially separated regions before mixing starts."
                  },
                  {
                    src: fig4_type_m,
                    label: "Mid-Simulation Atomic Configuration",
                    description:
                      "Top-view snapshot from the intermediate stage of the simulation, showing partial interpenetration of the two species as mixing develops from the initially separated state."
                  },
                  {
                    src: fig4_type_e,
                    label: "Final-Simulation Atomic Configuration",
                    description:
                      "Top-view snapshot near the end of the simulation, illustrating the substantially mixed morphology reached after continued interspecies redistribution."
                  },
                  {
                    src: fig4_type,
                    label: "Atomic Mixing Dynamics",
                    description:
                      "Animation of atom movements during the mixing process, showing the time-dependent evolution of the binary system from its initial de-mixed configuration toward a more intermixed state."
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS Mixing and Coordination Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_4___mixing.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for simulating interspecies mixing, tracking region occupancy, and quantifying cross-species coordination during time evolution.",
                defaultExpanded: false,
              },
              // {
              //   type: "linksRow",
              //   items: [
              //     {
              //       label: "LAMMPS Tutorial Page",
              //       href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
              //       kind: "external",
              //     },
              //     {
              //       label: "Tutorial 1 Input Files",
              //       href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
              //       kind: "github",
              //     },
              //   ],
              // },
            ],
          },

          {
            type: "compositeBlock",
            title: "Study 5 — Dense-Phase Demixing and Morphological Separation",
            subtitle:
              "Transition from an initially mixed binary fluid to segregation-dominated domain formation under weak unlike-particle affinity.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The fifth study investigates the opposite physical trend of Study 4. Instead of asking how two initially separated species become intermixed, this stage asks how an initially mixed binary Lennard–Jones fluid can spontaneously separate into compositionally distinct regions when unlike-particle attraction is made sufficiently weak. In the computational model, both particle species are first distributed randomly throughout the simulation box so that the starting morphology is macroscopically mixed. The system is then evolved under interaction parameters chosen to favor like-like aggregation and suppress unlike association, allowing demixing to emerge dynamically from the particle physics itself."
                  },
                  {
                    text: "The particle motion is still governed by Newtonian dynamics,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "m_i\\frac{d^2\\mathbf{r}_i}{dt^2}=\\mathbf{F}_i",
                    definitions: [
                      { latex: "m_i", text: ": is the mass of particle i" },
                      { latex: "\\mathbf{r}_i", text: ": is the position vector of particle i" },
                      { latex: "t", text: ": is time" },
                      { latex: "\\mathbf{F}_i", text: ": is the net force on particle i generated by all pairwise interactions" }
                    ]
                  },
                  {
                    text: "The key distinction in this study lies not in the governing equation of motion, but in the interaction design. The same Lennard–Jones potential is retained, but the self-interactions of each species are made much stronger than the cross-interaction between unlike particles. This makes same-species association energetically favorable while reducing the stability of local unlike contact."
                  },
                  {
                    text: "The underlying pair-interaction energy is described by"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "E_{ij}(r)=4\\epsilon_{ij}\\left[\\left(\\frac{\\sigma_{ij}}{r}\\right)^{12}-\\left(\\frac{\\sigma_{ij}}{r}\\right)^6\\right], \\quad r<r_c",
                    definitions: [
                      { latex: "r", text: ": is the interparticle distance" },
                      { latex: "\\epsilon_{ij}", text: ": is the interaction strength between particle types i and j" },
                      { latex: "\\sigma_{ij}", text: ": is the effective interaction diameter" },
                      { latex: "r_c", text: ": is the cutoff radius" }
                    ]
                  },
                  {
                    text: "In this study, large self-attraction parameters for type-1 and type-2 particles promote intraspecies cohesion, while a much smaller unlike interaction weakens mixing between the two populations. As a result, the energetically preferred evolution is no longer toward homogeneous intermixing, but toward the formation of species-rich domains and sharper compositional boundaries."
                  },
                  {
                    text: "To quantify this transition, the simulation monitors the cross-species coordination number,"
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex: "C_{1-2}=\\left\\langle \\text{number of type-2 neighbors surrounding a type-1 atom within a cutoff} \\right\\rangle",
                    definitions: [
                      {
                        latex: "C_{1-2}",
                        text: "measures the average local contact between unlike particle species"
                      }
                    ]
                  },
                  {
                    text: "A decrease in this quantity indicates that the two species are becoming less intermixed at the particle scale. In parallel, the atomic snapshots and time-resolved morphology reveal whether that local reduction in unlike contact is accompanied by visible domain growth and large-scale structural separation. The study therefore links microscopic coordination loss to macroscopic demixing behavior in a single dense binary-fluid framework."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The initially mixed binary fluid does not remain homogeneous when unlike-particle attraction is sufficiently weak; instead, it progressively reorganizes into species-enriched regions.",
                  "As the simulation advances, local contact between unlike particles decreases while same-species clustering becomes more pronounced, indicating a clear shift from mixed morphology toward demixed structure.",
                  "The evolving snapshots show that demixing is not only a local neighbor-level effect but also a spatially resolved morphological transition with increasingly distinct compositional domains.",
                  "This study demonstrates that binary-fluid morphology is controlled not only by initial placement, but also by the balance of microscopic interaction strengths that governs whether mixing or segregation is energetically favored."
                ]
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Initial mixed atomic configuration",
                  "Final demixed atomic configuration",
                  "Time-resolved atomic evolution during demixing",
                  "Potential energy dynamics during simulation",
                  "Morphology comparison showing the transition from mixed to segregated structure"
                ]
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig5_type_s,
                    label: "Initial Atomic Placement",
                    description:
                      "Initial three-dimensional binary Lennard–Jones particle arrangement, showing the randomly mixed starting state before demixing begins."
                  },
                  {
                    src: fig5_type_e,
                    label: "Final Atomic Placement",
                    description:
                      "Final atomic configuration after time evolution, illustrating the emergence of compositionally enriched domains and visible morphological separation."
                  },
                  {
                    src: fig5_type,
                    label: "Dynamic Atomic Placement",
                    description:
                      "Time-resolved animation of atomic rearrangement during the demixing process, showing how the initially mixed binary fluid progressively reorganizes into a segregated structure."
                  },
                  {
                    src: fig5_pe,
                    label: "Potential Energy Dynamics During Simulation",
                    description:
                      "Time-dependent evolution of the per-atom potential energy field during demixing, highlighting how local interaction environments change as same-species aggregation strengthens and unlike contact decreases."
                  }
                ]
              },
              {
                type: "codeEnd",
                title: "LAMMPS Dense-Phase Demixing Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_5___demixing.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for simulating spontaneous demixing in an initially mixed binary fluid under segregation-favoring interaction conditions.",
                defaultExpanded: false,
              },
              // {
              //   type: "linksRow",
              //   items: [
              //     {
              //       label: "LAMMPS Tutorial Page",
              //       href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
              //       kind: "external",
              //     },
              //     {
              //       label: "Tutorial 1 Input Files",
              //       href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
              //       kind: "github",
              //     },
              //   ],
              // },
            ],
          },

          // {
          //   type: "compositeBlock",
          //   title: "Study 6 — From Atomic Fluids to Bonded Molecular Architectures",
          //   subtitle:
          //     "Extension of the binary-fluid framework from monatomic particles to bonded dumbbells and short polymer-like chains.",
          //   subSections: [
          //     {
          //       type: "narrative",
          //       content: [
          //         {
          //           text: "The final study extends the binary-fluid model beyond atomic particles by introducing bonded molecular structures. In this formulation, selected particles are linked into dumbbell-like pairs and then into short polymer-like chains. This seemingly simple extension significantly broadens the physical scope of the system: connectivity becomes a governing variable alongside mass, size, and nonbonded attraction.",
          //         },
          //         {
          //           text: "The addition of bonding introduces restricted relative motion, anisotropic local geometry, and chain-level conformational effects that are absent in a monatomic fluid. As a result, the study begins to bridge the gap between simple particle mixtures and coarse-grained molecular matter. What emerges is no longer only a binary atomic suspension, but a platform for examining how structure, motion, and morphology are altered once particles are organized into connected architectures.",
          //         },
          //       ],
          //     },
          //     {
          //       type: "findingsBlock",
          //       title: "Findings",
          //       items: [
          //         "The introduction of bonded dumbbells and short polymeric structures produces richer configurational behavior than the baseline atomic case.",
          //         "Connectivity modifies how particles occupy space, how they orient locally, and how they interact with the surrounding medium.",
          //         "Compared with the original binary fluid, the bonded systems display greater structural complexity and open the door to studying shape effects, conformational behavior, and molecule-environment coupling within the same general simulation framework.",
          //       ],
          //     },
          //     {
          //       type: "outputsBlock",
          //       title: "Outputs",
          //       items: [
          //         "Dumbbell-structure configuration image",
          //         "Polymer-structure configuration image",
          //         "Trajectory renderings of bonded systems in the surrounding fluid",
          //         "Optional bond-length or angle statistics",
          //         "Comparison figure: atomic particles versus dumbbells versus polymer chains",
          //       ],
          //     },
          //     {
          //       type: "visualGrid",
          //       items: [
          //         {
          //           src: fig_temp,
          //           label: "Dumbbell Configuration",
          //           description:
          //             "Representative bonded-pair structure showing how particle connectivity changes local geometry relative to the atomic-fluid baseline.",
          //         },
          //         {
          //           src: fig_temp,
          //           label: "Polymer-Like Chains",
          //           description:
          //             "Short bonded chain architecture illustrating the transition from isolated particles to connected molecular structures.",
          //         },
          //         {
          //           src: fig_temp,
          //           label: "Bonded-System Trajectories",
          //           description:
          //             "Trajectory rendering of bonded particles evolving within the surrounding fluid, highlighting restricted motion and conformational effects.",
          //         },
          //         {
          //           src: fig_temp,
          //           label: "Architecture Comparison",
          //           description:
          //             "Comparative view contrasting atomic particles, dumbbells, and polymer-like chains within the same coarse-grained simulation framework.",
          //         },
          //       ],
          //     },
          //     {
          //       type: "codeEnd",
          //       title: "LAMMPS Bonded Molecular Architecture Script",
          //       language: "lammps",
          //       codePath: "/codes/lammps/lennard_jones_fluid/study_1___minimization.lmp",
          //       description:
          //         "LAMMPS input file loaded from the public folder for extending the binary-fluid model to bonded dumbbells and short polymer-like chains using harmonic bonds together with Lennard–Jones nonbonded interactions.",
          //       defaultExpanded: false,
          //     },
          //     {
          //       type: "linksRow",
          //       items: [
          //         {
          //           label: "LAMMPS Tutorial Page",
          //           href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
          //           kind: "external",
          //         },
          //         {
          //           label: "Tutorial 1 Input Files",
          //           href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
          //           kind: "github",
          //         },
          //       ],
          //     },
          //   ],
          // },

          {
            type: "infoCard",
            title: "Closing Summary",
            paragraphs: [
              "Taken together, this series of studies establishes a coherent molecular-dynamics framework for examining how simple interaction laws generate complex emergent behavior. Beginning with structural relaxation and equilibration, the work then progresses through ensemble-dependent thermalization, interspecies mixing, dense-phase segregation, and molecular-architecture effects. Across these stages, the same binary Lennard–Jones foundation supports a broad range of physical questions, from energy redistribution and equilibration pathways to morphology evolution and connectivity-driven structural complexity.",
              "The broader value of the study lies in its layered construction. Each stage stands on its own as a focused investigation, but together they form a unified narrative about how microscopic rules shape system-scale organization. This makes the framework especially useful not only for understanding binary fluids, but also for building intuition for more advanced molecular, soft-matter, and coarse-grained simulation problems.",
            ],
          },
        ]}
      />
    </>
  );
}

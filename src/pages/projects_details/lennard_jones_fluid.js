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
                "type": "narrative",
                "content": [
                  {
                    "text": "The first study examines the structural relaxation of a randomly initialized binary Lennard–Jones system. The simulation domain is periodic in all three directions and contains 1500 type-1 atoms and 100 type-2 atoms distributed stochastically with only limited overlap control. Because random initialization can place particles unrealistically close together, the starting configuration contains highly repulsive contacts and elevated potential energy. This study therefore focuses on how energy minimization transforms a disordered, mechanically unfavorable configuration into a stable low-energy arrangement."
                  },
                  {
                    "text": "The pairwise interaction energy is governed by the Lennard–Jones potential:"
                  },
                  {
                    "type": "equationInlineWithDefs",
                    "latex": "E_{ij}(r) = 4\\epsilon_{ij} \\left[ \\left( \\frac{\\sigma_{ij}}{r} \\right)^{12} - \\left( \\frac{\\sigma_{ij}}{r} \\right)^6 \\right], \\quad r < r_c",
                    "definitions": [
                      { "latex": "r", "text": "is interparticle distance" },
                      { "latex": "\\epsilon_{ij}", "text": "is the interaction strength" },
                      { "latex": "\\sigma_{ij}", "text": "is the effective particle size" },
                      { "latex": "r_c", "text": "is the cutoff radius" }
                    ]
                  },
                  {
                    "text": "The two species are assigned distinct self-interaction parameters, while cross-interactions are generated through mixing rules. During minimization, kinetic energy is absent, so the total energy reduces to the configurational contribution, E = U."
                  }
                ]
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "This study shows a clear transition from an unstable random packing to a lower-energy configuration with more physically admissible spacing.",
                  "The potential energy drops sharply at early minimization steps as overlapping or near-overlapping particles separate, then gradually approaches a stable negative plateau.",
                  "Structurally, the minimized state exhibits a more coherent and clustered arrangement than the initial random field, indicating that the system has relaxed away from highly repulsive contacts and into a mechanically favorable configuration.",
                ],
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Initial particle configuration",
                  "Post-minimization configuration",
                  "Potential energy versus minimization step",
                  "Before/after structural comparison figure",
                ],
              },
              {
                "type": "visualGrid",
                "items": [
                  {
                    "src": fig1_type_s,
                    "label": "Initial Configuration",
                    "description": "Randomized two-species Lennard–Jones particle distribution in a three-dimensional periodic simulation box before energy minimization."
                  },
                  {
                    "src": fig1_type,
                    "label": "Minimization Dynamics",
                    "description": "Animation of particle motion during the iterative minimization process, illustrating the structural relaxation from an unstable state."
                  },
                  {
                    "src": fig1_pe_s,
                    "label": "Initial Potential Energy",
                    "description": "Visualization of the initial potential energy distribution across the system before the start of the relaxation process."
                  },
                  {
                    "src": fig1_pe,
                    "label": "Potential Energy Evolution",
                    "description": "Animation showing the change in potential energy during minimization, highlighting the transition toward a stable negative plateau."
                  }
                ]
              },
              {
                type: "codeEnd",
                title: "LAMMPS Minimization Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_1___minimization.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for the initial structural relaxation and energy minimization stage.",
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
                    text: "The second study investigates how the relaxed binary fluid evolves under microcanonical dynamics. After minimization, the system is propagated using \"fix NVE\", which integrates Newton’s equations of motion through the velocity-Verlet scheme. With no thermostat or barostat applied, the system evolves as a closed molecular system with fixed particle number and volume. This study is designed to reveal how internal energy redistribution drives spontaneous equilibration once the particles are released into dynamical motion.",
                  },
                  {
                    text: "The principal thermodynamic quantities monitored during the simulation are temperature T, potential energy U, kinetic energy K, total energy E, and pressure, with the standard energy relation",
                  },
                  {
                    type: "equationInline",
                    latex: "E = U + K.",
                  },
                  {
                    text: "Because the system begins from a minimized low-energy state, the early dynamics reflect the conversion of configurational imbalance into particle motion and the gradual emergence of equilibrium-like fluctuations.",
                  },
                ],
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The NVE evolution reveals a characteristic equilibration pathway in which potential energy and kinetic energy adjust in opposite directions before approaching quasi-stationary behavior.",
                  "Total energy remains approximately conserved, as expected for a closed system, while the transient dynamics gradually give way to plateau-like fluctuations.",
                  "The study demonstrates that even a comparatively simple binary fluid can exhibit a rich equilibration process in which microscopic rearrangement, energy redistribution, and thermal stabilization occur simultaneously.",
                ],
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
                  "Annotated equilibration window separating transient and stabilized regimes",
                ],
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig2_type_e,
                    label: "Final Atomic Configuration",
                    description:
                      "Final spatial arrangement of the binary Lennard–Jones atoms after NVE evolution, showing the equilibrated configuration reached from the minimized initial state.",
                  },
                  {
                    src: fig2_vmeg_e,
                    label: "Final Velocity Magnitude Distribution",
                    description:
                      "Particle-scale distribution of velocity magnitude at the end of the NVE simulation, illustrating the spread of atomic speeds established during equilibration.",
                  },
                  {
                    src: fig2_pe_e,
                    label: "Final Potential Energy Distribution",
                    description:
                      "Final spatial distribution of per-atom potential energy, highlighting how local interaction environments vary across the equilibrated binary fluid.",
                  },
                  {
                    src: fig2_ke_e,
                    label: "Final Kinetic Energy Distribution",
                    description:
                      "Final distribution of per-atom kinetic energy, showing the nonuniform microscopic energy content associated with ongoing equilibrium-like thermal fluctuations.",
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS NVE Dynamics Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_2___nve.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for propagating the minimized configuration in the microcanonical ensemble while tracking thermodynamic evolution.",
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
                    text: "The third study introduces explicit temperature control and compares natural equilibration with externally regulated thermalization. Here, the system retains the same underlying particle interactions but is coupled to a Langevin thermostat with prescribed target temperature. This imposes friction and stochastic forcing on the particles, steering the fluid toward a controlled thermal state rather than allowing temperature to emerge solely from internal redistribution.",
                  },
                  {
                    text: "The central purpose of this study is comparative: it contrasts the response of the same binary fluid under two distinct ensemble treatments. In the NVE case, equilibration is governed by internal energy exchange alone. Under thermostat control, the kinetic state is actively driven toward a target temperature, altering both the transient pathway and the eventual fluctuation structure. The same energetic bookkeeping remains in place,",
                  },
                  {
                    type: "equationInline",
                    latex: "E = U + K,",
                  },
                  {
                    text: "but the physical route to equilibrium differs substantially once external thermal control is introduced.",
                  },
                ],
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The thermostat-controlled system reaches its target thermal state much more rapidly than the unforced NVE case.",
                  "Temperature rises from near zero and stabilizes around the prescribed value, while the potential and kinetic energy trajectories evolve toward new steady behaviors characteristic of a regulated ensemble.",
                  "This comparison highlights a key methodological and physical point: equilibrium is not defined only by the final state, but also by the pathway through which that state is reached.",
                  "The study therefore clarifies how ensemble choice influences transient dynamics, fluctuation character, and apparent thermal stability.",
                ],
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "NVE versus thermostat-controlled temperature comparison",
                  "NVE versus thermostat-controlled U(t), K(t), and E(t)",
                  "Ensemble comparison summary figure",
                  "Thermalization-rate comparison",
                  "Optional comparison of alternative thermostat strategies",
                ],
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig3_type,
                    label: "Atomic Motion During Thermalization",
                    description:
                      "Animation of atom movements during the thermostat-controlled simulation, illustrating how the binary Lennard–Jones system evolves structurally while approaching the target thermal state.",
                  },
                  {
                    src: fig3_vmeg,
                    label: "Velocity Magnitude Dynamics",
                    description:
                      "Time-dependent distribution of particle velocity magnitude during thermalization, showing how atomic speed fluctuations develop under external temperature regulation.",
                  },
                  {
                    src: fig3_pe,
                    label: "Potential Energy Dynamics",
                    description:
                      "Time-dependent evolution of the per-atom potential energy field, highlighting changes in local interaction environments as the regulated system approaches steady behavior.",
                  },
                  {
                    src: fig3_ke,
                    label: "Kinetic Energy Dynamics",
                    description:
                      "Time-dependent evolution of per-atom kinetic energy, showing how microscopic motion intensifies and stabilizes as thermostat control drives the system toward the prescribed temperature.",
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS Thermostat-Controlled Dynamics Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_3___langevinThermostat.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for comparing externally regulated thermalization against natural NVE equilibration.",
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
                    text: "The fourth study shifts attention from bulk equilibration to interspecies transport and spatial redistribution. The two particle populations are initially placed in different regions of the domain, creating a distinct compositional separation at the start of the simulation. The subsequent evolution is then used to examine how mixing develops over time, both in terms of large-scale migration and particle-level contact between species.",
                  },
                  {
                    text: "Two complementary diagnostics are used. The first is region occupancy, defined through the number of particles of each type inside a selected inner cylinder,",
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex:
                      "N_{1,\\mathrm{in}} = \\text{count of type-1 atoms in the inner region}, \\qquad N_{2,\\mathrm{in}} = \\text{count of type-2 atoms in the inner region}.",
                    definitions: [
                      {
                        latex: "N_{1,\\mathrm{in}}",
                        text: " = number of type-1 atoms in the selected inner region",
                      },
                      {
                        latex: "N_{2,\\mathrm{in}}",
                        text: " = number of type-2 atoms in the selected inner region",
                      },
                    ],
                  },
                  {
                    text: "The second is the cross-species coordination number,",
                  },
                  {
                    type: "equationInline",
                    latex:
                      "C_{1-2} = \\langle \\text{number of type-2 neighbors surrounding a type-1 atom within a cutoff} \\rangle.",
                  },
                  {
                    text: "Together, these quantities connect macroscopic redistribution to microscopic interspecies contact, allowing the study to capture both geometric and interaction-level aspects of mixing.",
                  },
                ],
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "The initially separated populations progressively interpenetrate, producing visible morphological mixing and a measurable rise in interspecies coordination.",
                  "As the simulation advances, region-based occupancy changes confirm migration across the initial interface, while the coordination number increases, indicating a higher frequency of local contact between unlike particles.",
                  "This study establishes a clear connection between evolving morphology and quantitative transport-like metrics, making it one of the strongest demonstrations of emergent behavior within the binary-fluid framework.",
                ],
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Early-, mid-, and late-time mixing snapshots",
                  "N_{1,in}(t) history",
                  "N_{2,in}(t) history",
                  "Cross-species coordination history C_{1-2}(t)",
                  "Combined morphology-and-metrics figure",
                ],
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig4_type_s,
                    label: "Initial Top-View Atomic Configuration",
                    description:
                      "Top-view snapshot of the initially de-mixed binary Lennard–Jones system, where the two species begin in a spatially separated configuration before mixing starts.",
                  },
                  {
                    src: fig4_type_m,
                    label: "Mid-Simulation Atomic Configuration",
                    description:
                      "Top-view snapshot taken during the intermediate stage of the simulation, showing partial interpenetration of the two species as mixing develops from the initially separated state.",
                  },
                  {
                    src: fig4_type_e,
                    label: "Final-Simulation Atomic Configuration",
                    description:
                      "Top-view snapshot of the binary fluid near the end of the simulation, illustrating the substantially mixed morphology reached after continued interspecies redistribution.",
                  },
                  {
                    src: fig4_type,
                    label: "Atomic Mixing Dynamics",
                    description:
                      "Animation of atom movements during the mixing process, showing the time-dependent evolution of the binary system from its initial de-mixed configuration toward a more intermixed state.",
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS Mixing and Coordination Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_4___mixing.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for studying interspecies mixing, region occupancy, and cross-species coordination during time evolution.",
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
              "Transition from transport-dominated mixing to segregation-dominated domain formation in a dense binary-fluid regime.",
            subSections: [
              {
                type: "narrative",
                content: [
                  {
                    text: "The fifth study explores conditions under which the same binary-fluid framework moves away from mixing and instead develops phase segregation. By adjusting density, size contrast, and interaction conditions, the system is driven toward a dense regime in which the two particle populations no longer remain interpenetrated but instead reorganize into distinct compositional domains. This transforms the problem from a mixing study into a phase-behavior study.",
                  },
                  {
                    text: "The significance of this study lies in showing that qualitative system behavior can be reversed through parameter selection. A regime that supports progressive interspecies contact under one set of conditions can produce domain-scale separation under another. In that sense, the study probes the sensitivity of mesoscale morphology to particle-scale interaction design and system density. The same Lennard–Jones framework is retained, but the resulting physics shifts from transport-dominated mixing to segregation-dominated structure formation.",
                  },
                ],
              },
              {
                type: "findingsBlock",
                title: "Findings",
                items: [
                  "Under dense-phase conditions, the system evolves toward visible compositional separation and the emergence of larger demixed regions.",
                  "Instead of increasing interspecies interpenetration, the fluid organizes into domains with clearer species identity and sharper spatial boundaries.",
                  "This study demonstrates that morphology in binary particle systems is not fixed by composition alone; it is highly responsive to the interplay among density, size, and interaction contrast.",
                ],
              },
              {
                type: "outputsBlock",
                title: "Outputs",
                items: [
                  "Time-resolved demixing snapshots",
                  "Domain-growth visualization",
                  "Density or box-relaxation history",
                  "Optional composition profile across the domain",
                  "Mixed-regime versus demixed-regime comparison figure",
                ],
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig_temp,
                    label: "Early Demixing",
                    description:
                      "Initial development of compositional separation as the dense binary fluid begins to reorganize into distinct species-rich regions.",
                  },
                  {
                    src: fig_temp,
                    label: "Domain Growth",
                    description:
                      "Intermediate-to-late-time morphology showing the growth and sharpening of demixed domains within the simulation box.",
                  },
                  {
                    src: fig_temp,
                    label: "Density Relaxation",
                    description:
                      "Representative density or box-relaxation history associated with the transition into the dense segregated regime.",
                  },
                  {
                    src: fig_temp,
                    label: "Mixed vs Demixed Comparison",
                    description:
                      "Side-by-side comparison highlighting the morphological contrast between a mixing-supporting regime and a demixing-supporting regime.",
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS Dense-Phase Demixing Script",
                language: "lammps",
                codePath: "/codes/lammps/lennard_jones_fluid/study_1___minimization.lmp",
                description:
                  "LAMMPS input file loaded from the public folder for driving the binary fluid into a dense regime where interaction contrast and packing conditions promote demixing and domain formation.",
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

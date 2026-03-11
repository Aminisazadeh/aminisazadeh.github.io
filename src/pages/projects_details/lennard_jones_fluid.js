import Head from "next/head";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";
import fig1 from "../../../public/gifs/aaa.gif";
import fig2 from "../../../public/gifs/bbb.gif";

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
                    text: "The first study examines how a randomly initialized binary Lennard–Jones system reorganizes into a lower-energy configuration through iterative energy minimization. This stage establishes the structural baseline for all subsequent simulations by removing highly unfavorable overlaps and allowing the two-species assembly to settle into a mechanically admissible arrangement.",
                  },
                  {
                    text: "The pairwise interaction energy is defined by the Lennard–Jones potential. The first equation block below preserves the original single-panel presentation.",
                  },
                  {
                    type: "equationInline",
                    latex:
                      "E_{ij}(r) = 4\\epsilon_{ij} \\left[ \\left( \\frac{\\sigma_{ij}}{r} \\right)^{12} - \\left( \\frac{\\sigma_{ij}}{r} \\right)^6 \\right], \\quad r < r_c",
                  },
                  {
                    text: "The same relation can also be shown with a compact definition panel so the governing terms are immediately visible alongside the equation.",
                  },
                  {
                    type: "equationInlineWithDefs",
                    latex:
                      "E_{ij}(r) = 4\\epsilon_{ij} \\left[ \\left( \\frac{\\sigma_{ij}}{r} \\right)^{12} - \\left( \\frac{\\sigma_{ij}}{r} \\right)^6 \\right], \\quad r < r_c",
                    definitions: [
                      { latex: "r", text: " = separation distance" },
                      { latex: "\\epsilon_{ij}", text: " = interaction strength" },
                      { latex: "\\sigma_{ij}", text: " = characteristic size" },
                      { latex: "r_c", text: " = cutoff radius" },
                    ],
                  },
                  {
                    text: "Here, r is the separation distance, epsilon controls interaction strength, and sigma sets the characteristic particle size. Because this stage is purely a minimization step, kinetic energy is absent and the total system energy reduces to the potential contribution, E = U.",
                  },
                  {
                    text: "Findings: The potential energy decreases from an initially positive value to a negative plateau, indicating that the system transitions from an unstable random configuration toward a more favorable packed arrangement. Particle redistribution reduces overlap-driven repulsion and promotes energetically preferred local structure.",
                  },
                ],
              },
              {
                type: "visualGrid",
                items: [
                  {
                    src: fig1,
                    label: "System Definition",
                    description:
                      "Initial two-species Lennard–Jones configuration in a three-dimensional periodic box.",
                  },
                  {
                    src: fig1,
                    label: "Relaxation",
                    description:
                      "Transition from randomized placement toward a lower-energy minimized state.",
                  },
                  {
                    src: fig2,
                    label: "Mixing Dynamics",
                    description:
                      "Representative transient redistribution of the two particle populations during structural evolution.",
                  },
                  {
                    src: fig2,
                    label: "Dense-Phase Demixing",
                    description:
                      "Illustrative morphology associated with species separation in a more compact phase regime.",
                  },
                ],
              },
              {
                type: "codeEnd",
                title: "LAMMPS Minimization Script",
                language: "bash",
                code: `units lj
atom_style atomic
boundary p p p

pair_style lj/cut 2.5
pair_coeff 1 1 1.0 1.0
pair_coeff 2 2 0.5 3.0

minimize 1.0e-4 1.0e-6 100 1000`,
                description:
                  "Representative LAMMPS setup used to define reduced Lennard–Jones units, periodic boundaries, pairwise interactions, and the minimization controls for the initial structural relaxation stage.",
                defaultExpanded: false,
              },
              {
                type: "linksRow",
                items: [
                  {
                    label: "LAMMPS Tutorial Page",
                    href: "https://lammpstutorials.github.io/sphinx/build/html/tutorial1/lennard-jones-fluid.html#",
                    kind: "external",
                  },
                  {
                    label: "Tutorial 1 Input Files",
                    href: "https://github.com/lammpstutorials/lammpstutorials-inputs/tree/main/tutorial1",
                    kind: "github",
                  },
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
}

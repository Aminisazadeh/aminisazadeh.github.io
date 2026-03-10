import Head from "next/head";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

// =========================
// Replace these placeholders with your real visuals later
// =========================
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
        quickSummary="This project studies a binary Lennard–Jones fluid using molecular dynamics in LAMMPS, progressing from force-field definition and configuration relaxation to time-dependent thermodynamic response, species mixing, local structural evolution, and dense-phase demixing behavior. The page is organized as a research narrative rather than a tutorial, emphasizing how each stage builds a more physically interpretable picture of the system."
        backLink="/projects"
        sections={[
          {
            type: "heroMedia",
            title: "Project Overview",
            subtitle:
              "A staged molecular-dynamics study of a binary Lennard–Jones fluid, moving from initialization and relaxation to ensemble behavior, mixing, and phase-structure evolution.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Binary Lennard-Jones fluid setup",
                shortLabel: "System definition",
                caption:
                  "Placeholder for a visual showing the initial two-species Lennard–Jones configuration in a 3D periodic box.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Relaxed Lennard-Jones configuration",
                shortLabel: "Relaxation",
                caption:
                  "Placeholder for a minimized configuration illustrating the transition from randomized placement to a lower-energy state.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "Mixing and structural evolution",
                shortLabel: "Mixing dynamics",
                caption:
                  "Placeholder for a time-sequence or composition plot highlighting species redistribution during MD.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Dense phase demixing behavior",
                shortLabel: "Dense-phase demixing",
                caption:
                  "Placeholder for the advanced extension showing structural separation in a denser phase configuration.",
                cover: false,
              },
            ],
          },

          {
            type: "text",
            title: "Scientific Narrative",
            paragraphs: [
              "The study begins with a reduced-order molecular model that is simple enough to interpret clearly, yet rich enough to exhibit nontrivial thermodynamic and structural behavior.",
              "Instead of presenting the work as a command-by-command tutorial, the page is organized as a sequence of physical questions: how the system is defined, how a randomized configuration is made admissible, how dynamics unfold in time, how different ensemble treatments influence behavior, and how local structure evolves during mixing and phase segregation.",
            ],
          },

          {
            type: "methodsTools",
            title: "Methods & Tools",
            subtitle:
              "Computational ingredients used to construct, evolve, and interpret the binary-fluid simulations.",
            methods: [
              "Classical molecular dynamics (MD)",
              "Binary Lennard–Jones interaction modeling",
              "Energy minimization for pre-equilibration",
              "Time-history analysis of thermodynamic observables",
              "Region-based composition tracking",
              "Coordination-number-based structural interpretation",
              "Dense-phase demixing exploration",
            ],
            tools: [
              "LAMMPS",
              "LAMMPS input scripting",
              "OVITO",
              "VMD",
              "Shell scripting",
              "Post-processing",
            ],
          },

          {
            type: "text",
            title: "Stage 1 — Physical System Definition and Interaction Model",
            paragraphs: [
              "The first stage defines the binary Lennard–Jones fluid as a two-species particle system contained in a cubic box with periodic boundary conditions. This stage establishes the physical language of the simulation: particle types, masses, interaction coefficients, and the characteristic length and energy scales that govern pairwise behavior.",
              "Although reduced in form, this model is valuable because it isolates how differences in particle size and interaction strength influence the collective dynamics of a mixture. The result is a clean starting point for studying relaxation, transport, and structural evolution without the added complexity of chemically detailed force fields.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 1 Visuals",
            subtitle:
              "Use this section for the geometry, particle distribution, and force-field schematic.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Initial binary fluid configuration",
                shortLabel: "Initial configuration",
                caption:
                  "Placeholder for the initial random placement of the two particle species inside the periodic simulation domain.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Lennard-Jones interaction schematic",
                shortLabel: "Interaction model",
                caption:
                  "Placeholder for a force-field schematic or pair-potential illustration summarizing the LJ interaction model.",
                cover: false,
              },
            ],
          },

          {
            type: "equations",
            title: "Representative Governing Relation",
            subtitle:
              "A compact expression of the pair interaction at the heart of the study.",
            items: [
              {
                title: "Lennard–Jones Pair Potential",
                latex: String.raw`E_{ij}(r)=4\epsilon_{ij}\left[\left(\frac{\sigma_{ij}}{r}\right)^{12}-\left(\frac{\sigma_{ij}}{r}\right)^6\right], \qquad r<r_c`,
                description:
                  "The binary-fluid behavior is governed by the Lennard–Jones pair potential, where the interaction strength and effective particle diameter vary by species pair.",
                inlineNotes: [
                  { symbol: String.raw`\epsilon_{ij}`, meaning: "interaction energy scale" },
                  { symbol: String.raw`\sigma_{ij}`, meaning: "effective particle diameter" },
                  { symbol: String.raw`r_c`, meaning: "interaction cutoff distance" },
                ],
              },
            ],
          },

          {
            type: "codeBlocks",
            title: "Stage 1 — Representative Input Structure",
            subtitle:
              "Selected script structure for initializing the LJ simulation domain and particle species.",
            items: [
              {
                title: "Initial setup skeleton",
                language: "lammps",
                description:
                  "Placeholder block for selected lines from your initial input script showing units, box creation, atom creation, masses, and pair coefficients.",
                defaultExpanded: false,
                maxCollapsedLines: 12,
                code: `# Placeholder: replace with selected lines from initial.lmp
units lj
dimension 3
atom_style atomic
boundary p p p

region simbox block -20 20 -20 20 -20 20
create_box 2 simbox

# Add selected create_atoms, mass, pair_style, and pair_coeff lines here`,
              },
            ],
          },

          {
            type: "text",
            title: "Stage 2 — Configuration Relaxation and Equilibrium Preparation",
            paragraphs: [
              "A random initial placement of particles is convenient, but not necessarily physically admissible as a production starting state. The second stage therefore focuses on relaxation: evaluating the raw initial state, identifying the need to remove unfavorable overlaps and excessive local forces, and then minimizing the system energy before time integration.",
              "This stage is important not only numerically, but scientifically. It clarifies the difference between an arbitrary initial condition and a prepared state with a more credible local arrangement, making subsequent MD results easier to interpret.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 2 Visuals",
            subtitle:
              "This section works well with before/after snapshots and a simple energy-drop graphic.",
            items: [
              {
                type: "image",
                src: fig2,
                alt: "Before minimization",
                shortLabel: "Initial state",
                caption:
                  "Placeholder for a particle snapshot before minimization, showing the randomized starting configuration.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "After minimization",
                shortLabel: "Relaxed state",
                caption:
                  "Placeholder for the relaxed configuration after minimization.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Energy descent during preparation",
                shortLabel: "Energy reduction",
                caption:
                  "Placeholder for a plot or annotation showing the drop in total energy during the minimization stage.",
                cover: false,
              },
            ],
          },

          {
            type: "results",
            title: "Stage 2 Findings",
            subtitle:
              "Key physical interpretation from the relaxation stage.",
            items: [
              "Energy minimization converts a randomized placement into a lower-energy and more physically interpretable starting point for dynamics.",
              "The preparation stage reduces the risk that later transient behavior is dominated by artificial initial overlaps rather than meaningful fluid evolution.",
              "This stage establishes a clean bridge between model definition and time-dependent MD analysis.",
            ],
          },

          {
            type: "text",
            title: "Stage 3 — Molecular-Dynamics Evolution and Thermodynamic Response",
            paragraphs: [
              "With a prepared configuration in hand, the study advances to time integration. The focus shifts from static geometry to evolving thermodynamic response: how kinetic energy, potential energy, total energy, temperature, and pressure change during the transient and whether the system approaches a stable statistical regime.",
              "This stage is one of the most visually engaging parts of the project because it naturally generates time-history plots and trajectory snapshots that let the reader see the difference between an early nonequilibrium response and a later, more settled regime.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 3 Visuals",
            subtitle:
              "Use this section for time-history plots and selected trajectory frames.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Thermodynamic response curves",
                shortLabel: "Energy and temperature histories",
                caption:
                  "Placeholder for curves of temperature, total energy, potential energy, kinetic energy, and pressure versus time.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Particle trajectory evolution",
                shortLabel: "Trajectory evolution",
                caption:
                  "Placeholder for representative particle snapshots at early, intermediate, and later MD times.",
                cover: false,
              },
            ],
          },

          {
            type: "codeBlocks",
            title: "Stage 3 — Representative MD Block",
            subtitle:
              "Use a compact excerpt that shows the move from preparation into production dynamics.",
            items: [
              {
                title: "Production MD skeleton",
                language: "lammps",
                description:
                  "Placeholder block for selected MD lines showing thermo output, integration, thermostat choice, dump settings, and run length.",
                defaultExpanded: false,
                maxCollapsedLines: 12,
                code: `# Placeholder: replace with selected lines from improved.md.lmp
thermo 1000
thermo_style custom step temp pe ke etotal press

# Add fix nve / thermostat / dump / run lines here`,
              },
            ],
          },

          {
            type: "text",
            title: "Stage 4 — Ensemble Behavior: NVE versus Thermostatted NVT",
            paragraphs: [
              "A particularly important interpretive stage is the distinction between unconstrained dynamics and thermostat-assisted evolution. Here, the same physical system can be examined under energy-conserving integration and under thermostatted conditions to understand how the imposed ensemble affects thermal regulation, transient damping, and the apparent approach to a steady regime.",
              "This stage is not just methodological; it strengthens the physical story. It helps the reader see that observed trends are not only properties of the particle interactions, but also of the statistical ensemble used to sample the system.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 4 Visuals",
            subtitle:
              "A side-by-side comparison works especially well here.",
            items: [
              {
                type: "image",
                src: fig2,
                alt: "NVE response",
                shortLabel: "NVE behavior",
                caption:
                  "Placeholder for energy and temperature behavior under energy-conserving integration.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "Thermostatted NVT response",
                shortLabel: "Thermostatted NVT behavior",
                caption:
                  "Placeholder for the corresponding thermostatted response, highlighting how the thermostat alters the trajectory toward equilibrium.",
                cover: false,
              },
            ],
          },

          {
            type: "results",
            title: "Stage 4 Findings",
            subtitle:
              "Interpretive takeaways from comparing ensemble treatments.",
            items: [
              "The ensemble treatment influences how rapidly thermodynamic quantities stabilize and how fluctuations are distributed over time.",
              "A thermostatted run can make the evolution easier to interpret when the objective is controlled sampling of a target thermal condition.",
              "Comparing NVE and thermostatted NVT behavior deepens the physical reading of the same underlying binary-fluid model.",
            ],
          },

          {
            type: "text",
            title: "Stage 5 — Binary-Fluid Mixing and Local Structural Evolution",
            paragraphs: [
              "Once the global thermodynamic behavior is understood, the study turns to a more spatially resolved question: how the two species mix when initialized in different regions of the domain. This stage transforms the project from a generic MD run into a richer transport-and-structure study.",
              "Two complementary metrics make the story stronger. Regional particle counts reveal how species redistribute spatially, while coordination-number analysis reveals how the local neighborhood around a particle changes as mixing progresses. Together, they connect visual snapshots to quantifiable structural evolution.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 5 Visuals",
            subtitle:
              "This section is ideal for a combination of snapshots and mixing metrics.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Species segregation to mixing progression",
                shortLabel: "Spatial mixing",
                caption:
                  "Placeholder for snapshots showing how initially separated species redistribute during MD.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Region-based population counts",
                shortLabel: "Composition tracking",
                caption:
                  "Placeholder for a plot of species counts in the selected region versus simulation time.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "Coordination-number evolution",
                shortLabel: "Local structure",
                caption:
                  "Placeholder for a coordination-number curve used to interpret structural mixing at the particle scale.",
                cover: false,
              },
            ],
          },

          {
            type: "results",
            title: "Stage 5 Findings",
            subtitle:
              "The mixing stage provides the clearest bridge between dynamics and emergent structure.",
            items: [
              "Region-based population counts convert visual intuition about mixing into a measurable transport narrative.",
              "Coordination-number evolution adds a local structural perspective, showing how particle environments change as the binary fluid becomes more mixed.",
              "Together, the mixing metrics transform the study from a simple demonstration of MD into a physically interpretable analysis of evolving microstructure.",
            ],
          },

          {
            type: "text",
            title: "Stage 6 — Dense-Phase Demixing as an Advanced Extension",
            paragraphs: [
              "The final stage extends the study into a denser structural regime where remixing and phase organization can be interpreted in a different light. Rather than treating this as a debugging exercise, it is better presented as an advanced structural study: how the balance of interactions, confinement, and relaxation can lead to a more visibly organized phase state.",
              "This stage is especially valuable for a portfolio because it shows progression beyond the baseline tutorial flow. It signals that the project is not limited to reproducing a single canonical example, but also explores how the same framework can be pushed toward more revealing phase-behavior questions.",
            ],
          },

          {
            type: "heroMedia",
            title: "Stage 6 Visuals",
            subtitle:
              "Use this final block for the most striking structure snapshots on the page.",
            items: [
              {
                type: "image",
                src: fig2,
                alt: "Dense phase demixing snapshot",
                shortLabel: "Dense-phase structure",
                caption:
                  "Placeholder for a visually strong snapshot of the denser demixed state.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "Demixing metric or coordination trend",
                shortLabel: "Demixing metric",
                caption:
                  "Placeholder for a plot or coordination metric supporting the demixing interpretation.",
                cover: false,
              },
            ],
          },

          {
            type: "outputsFuture",
            outputs: [
              "A complete binary Lennard–Jones molecular-dynamics study page for the portfolio",
              "A staged research narrative linking force-field definition, relaxation, ensemble behavior, mixing, and phase structure",
              "Reusable LAMMPS / OVITO / VMD content for future molecular simulation project pages",
            ],
            futureDirections: [
              "Add your own exported OVITO/VMD snapshots and time-history plots to replace placeholders",
              "Include a refined NVE versus NVT comparison with matched post-processing figures",
              "Extend the study toward diffusion metrics, radial distribution functions, or phase-separation descriptors",
            ],
          },

          {
            type: "links",
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
        ]}
      />
    </>
  );
}

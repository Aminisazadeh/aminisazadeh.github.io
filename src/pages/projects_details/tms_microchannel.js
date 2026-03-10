import Head from "next/head";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

import fig1 from "../../../public/gifs/aaa.gif";
import fig2 from "../../../public/gifs/bbb.gif";

export default function TMS_Microchannel() {
  return (
    <>
      <Head>
        <title>Adaptive Microchannel Heat Sink | Portfolio</title>
        <meta
          name="description"
          content="Project detail page for adaptive microchannel heat sink research with ThermoMechanoSensing."
        />
      </Head>

      <ProjectDetailTemplate
        category="Advanced Electronics"
        title="Adaptive Microchannel Heat Sink with ThermoMechanoSensing"
        period="2022 – Present"
        institution="Texas A&M University"
        quickSummary="This project investigates adaptive microchannel heat sinks that respond to thermal and mechanical fields to improve hotspot mitigation in high-heat-flux electronics while respecting hydraulic pressure-drop constraints. The broader vision is to create intelligent cooling architectures that reconfigure locally in response to evolving thermal signatures."
        backLink="/projects"
        sections={[
          {
            type: "heroMedia",
            title: "Project Overview",
            subtitle:
              "Top-level visual summary of the adaptive microchannel cooling concept, response logic, and system tradeoffs.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Adaptive microchannel heat sink visualization 1",
                shortLabel: "Baseline",
                caption:
                  "Representative baseline cooling configuration before adaptive response is introduced.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Adaptive microchannel heat sink visualization 2",
                shortLabel: "Adaptation",
                caption:
                  "Illustrative adaptive response showing local reconfiguration near elevated thermal gradients.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "Adaptive microchannel heat sink visualization 3",
                shortLabel: "TMS Logic",
                caption:
                  "Conceptual sensing-to-response framework enabled by ThermoMechanoSensing.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Adaptive microchannel heat sink visualization 4",
                shortLabel: "Tradeoff",
                caption:
                  "Visual comparison of thermal benefit versus hydraulic cost across design cases.",
                cover: false,
              },
            ],
          },

          {
            type: "twoColumn",
            left: {
              title: "Problem / Motivation",
              body: "Conventional fixed-geometry microchannel heat sinks often struggle to respond dynamically to localized hotspots and nonuniform thermal loading in advanced electronics. The challenge is to improve temperature uniformity and hotspot mitigation without introducing excessive flow resistance, manufacturing impracticality, or unacceptable pumping-power penalties.",
            },
            right: {
              title: "My Role",
              body: "I developed the modeling framework, technical problem definition, simulation workflow, and broader design logic for adaptive channel geometry and ThermoMechanoSensing-based cooling concepts. My work included thermal-fluid modeling, comparative performance assessment, reduced-order interpretation, and the integration of adaptive response logic into a dissertation-ready research framework.",
              accent: "from-cyan-500/15 to-indigo-500/15",
            },
          },

          {
            type: "methodsTools",
            title: "Methods & Tools",
            subtitle:
              "Core methodologies and computational platforms used to study adaptive cooling behavior.",
            methods: [
              "Conjugate heat transfer (CHT) modeling",
              "Adaptive geometry and field-aware cooling concepts",
              "Thermal-fluid performance benchmarking",
              "Pressure-drop and hydraulic tradeoff analysis",
              "Reduced-order and comparative analysis workflows",
              "Design-oriented interpretation for next-generation electronics cooling",
            ],
            tools: [
              "OpenFOAM",
              "ANSYS Fluent",
              "ANSYS Icepak",
              "MATLAB",
              "Python",
              "COMSOL",
              "ParaView",
              "Tecplot",
              "HPC",
            ],
          },

          {
            type: "workflow",
            title: "Research Workflow",
            subtitle:
              "A stage-by-stage view of how the study is organized from baseline definition to adaptive interpretation.",
            steps: [
              {
                title: "Baseline Definition",
                text: "Defined the baseline microchannel cooling problem, operating assumptions, and thermal constraints for high-heat-flux electronics.",
              },
              {
                title: "Comparative Framework",
                text: "Constructed a thermal-fluid analysis workflow to compare fixed-channel and adaptive-channel concepts under common loading scenarios.",
              },
              {
                title: "Adaptive Logic",
                text: "Introduced ThermoMechanoSensing as a field-aware mechanism for localized geometry modulation and targeted cooling response.",
              },
              {
                title: "Performance Evaluation",
                text: "Evaluated temperature reduction, temperature uniformity, and hydraulic tradeoffs across design scenarios.",
              },
              {
                title: "Research Synthesis",
                text: "Synthesized the findings into a dissertation-oriented framework for adaptive cooling surfaces and future intelligent thermal systems.",
              },
            ],
          },

          {
            type: "text",
            title: "Stage 1 — Baseline Microchannel Study",
            body: "The first stage establishes the fixed-geometry reference case. This baseline is essential because it defines the thermal bottlenecks, pressure-drop behavior, and hotspot patterns against which later adaptive designs are judged.",
          },

          {
            type: "heroMedia",
            title: "Stage 1 Visuals",
            subtitle:
              "Baseline reference views can now appear mid-page, demonstrating repeated media-strip usage.",
            items: [
              {
                type: "image",
                src: fig1,
                alt: "Baseline microchannel configuration",
                shortLabel: "Reference layout",
                caption: "Baseline cooling layout used as the comparison anchor.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Baseline hotspot response",
                shortLabel: "Hotspot behavior",
                caption: "Illustrative thermal nonuniformity under fixed-geometry operation.",
                cover: false,
              },
            ],
          },

          {
            type: "equations",
            title: "Baseline Governing Equations",
            subtitle:
              "Core conservation relations used in the thermal-fluid model.",
            items: [
              {
                title: "Continuity Equation",
                latex: String.raw`\nabla \cdot \mathbf{u} = 0`,
                description:
                  "Mass conservation for incompressible flow within the microchannel domain.",
                inlineNotes: [
                  {
                    symbol: String.raw`\mathbf{u}`,
                    meaning: "fluid velocity vector",
                  },
                ],
              },
              {
                title: "Momentum Transport",
                latex: String.raw`\rho\left(\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u}\cdot\nabla\mathbf{u}\right) = -\nabla p + \mu\nabla^2\mathbf{u}`,
                description:
                  "Navier–Stokes formulation used to describe viscous incompressible flow and pressure-drop behavior in the channel network.",
                inlineNotes: [
                  { symbol: String.raw`\rho`, meaning: "fluid density" },
                  { symbol: String.raw`p`, meaning: "pressure" },
                  { symbol: String.raw`\mu`, meaning: "dynamic viscosity" },
                ],
              },
              {
                title: "Energy Equation",
                latex: String.raw`\rho c_p\left(\frac{\partial T}{\partial t} + \mathbf{u}\cdot\nabla T\right) = k\nabla^2 T + \dot{q}`,
                description:
                  "Energy transport equation governing heat diffusion and convection under imposed electronic heat generation.",
                inlineNotes: [
                  { symbol: String.raw`T`, meaning: "temperature" },
                  { symbol: String.raw`c_p`, meaning: "specific heat capacity" },
                  { symbol: String.raw`k`, meaning: "thermal conductivity" },
                  { symbol: String.raw`\dot{q}`, meaning: "volumetric heat source" },
                ],
              },
            ],
          },

          {
            type: "codeBlocks",
            title: "Baseline / Screening Logic",
            subtitle:
              "Illustrative solver and screening snippets shown as reusable code sections.",
            items: [
              {
                title: "Illustrative Pressure-Drop / Thermal Tradeoff Sweep",
                language: "python",
                description:
                  "Example pseudo-workflow for screening adaptive-channel candidates against both thermal and hydraulic objectives.",
                defaultExpanded: false,
                maxCollapsedLines: 12,
                code: `for case in design_cases:
    thermal_result = run_cht_simulation(case)
    delta_t_peak = reference_peak_temp - thermal_result["peak_temp"]
    pressure_penalty = (
        thermal_result["pressure_drop"] - reference_pressure_drop
    ) / reference_pressure_drop * 100.0

    if pressure_penalty <= max_penalty:
        viable_cases.append({
            "case": case["name"],
            "peak_temp_reduction": delta_t_peak,
            "pressure_penalty_percent": pressure_penalty
        })`,
              },
            ],
          },

          {
            type: "results",
            title: "Stage 1 Findings",
            subtitle:
              "Baseline study findings before field-aware adaptation is introduced.",
            metrics: [
              { value: "CHT", label: "Core modeling basis" },
              { value: "Fixed", label: "Reference geometry mode" },
            ],
            items: [
              "The baseline study reveals where thermal gradients become most severe under nonuniform electronic loading.",
              "Fixed geometry provides a necessary reference, but it cannot redistribute flow intelligently in response to shifting hotspots.",
              "This stage defines the thermal and hydraulic benchmark used for all adaptive comparisons.",
            ],
          },

          {
            type: "text",
            title: "Stage 2 — Adaptive ThermoMechanoSensing Concept",
            body: "The second stage introduces a reduced-order adaptive logic that links local thermal signatures to geometry modification. This provides a conceptual pathway toward real-time, field-aware cooling architectures.",
          },

          {
            type: "heroMedia",
            title: "Stage 2 Visuals",
            subtitle:
              "A second repeated media section demonstrates adaptive response visuals deeper in the page.",
            items: [
              {
                type: "image",
                src: fig2,
                alt: "Adaptive response map",
                shortLabel: "Adaptive response",
                caption:
                  "Illustrative local response of the channel structure to elevated thermal gradients.",
                cover: false,
              },
              {
                type: "image",
                src: fig1,
                alt: "TMS conceptual logic",
                shortLabel: "Field-aware control",
                caption:
                  "Conceptual logic linking sensed field conditions to geometric actuation.",
                cover: false,
              },
              {
                type: "image",
                src: fig2,
                alt: "Performance tradeoff comparison",
                shortLabel: "Thermal-hydraulic tradeoff",
                caption:
                  "Adaptive designs are judged by simultaneous thermal benefit and hydraulic cost.",
                cover: false,
              },
            ],
          },

          {
            type: "equations",
            title: "Adaptive Response Formulation",
            items: [
              {
                title: "Adaptive Response Concept",
                latex: String.raw`\delta(\mathbf{x},t) = \alpha\,\max\!\left(0,\; |\nabla T(\mathbf{x},t)| - \nabla T_{\mathrm{crit}}\right)`,
                description:
                  "A reduced-order conceptual relation showing how local channel deformation or adaptive response may be tied to thermal-gradient intensity above a threshold.",
                inlineNotes: [
                  { symbol: String.raw`\delta`, meaning: "local geometric response" },
                  { symbol: String.raw`\alpha`, meaning: "adaptation gain factor" },
                  {
                    symbol: String.raw`\nabla T_{\mathrm{crit}}`,
                    meaning: "critical thermal-gradient threshold",
                  },
                ],
              },
            ],
          },

          {
            type: "codeBlocks",
            title: "Adaptive Logic",
            subtitle:
              "A separate repeated code section for control-oriented or reduced-order adaptive response logic.",
            items: [
              {
                title: "Conceptual Adaptive Controller",
                language: "matlab",
                description:
                  "Illustrative reduced-order logic showing how a local thermal-gradient field can drive channel adaptation in a simulation or control-oriented study.",
                defaultExpanded: false,
                maxCollapsedLines: 12,
                code: `for i = 1:Ncells
    if gradT(i) > gradT_crit
        deformation(i) = deformation(i) + alpha * (gradT(i) - gradT_crit);
    else
        deformation(i) = deformation(i);
    end
end

deformation = min(deformation, deformation_max);
channelHeight = baseHeight + deformation;`,
              },
            ],
          },

          {
            type: "metrics",
            title: "Representative Project Metrics",
            subtitle:
              "Illustrative top-line indicators associated with the adaptive concept.",
            items: [
              { value: "9.574 K", label: "Peak temperature reduction" },
              { value: "+33.8%", label: "Hydraulic penalty bound" },
              { value: "RIS / TMS", label: "Adaptive cooling concept" },
              { value: "Multi-stage", label: "Research structure" },
            ],
          },

          {
            type: "results",
            title: "Overall Key Results",
            subtitle:
              "Consolidated research findings from the adaptive microchannel study.",
            items: [
              "Adaptive channel concepts improved hotspot mitigation compared with fixed-geometry baselines.",
              "The analysis showed that meaningful thermal improvements can be achieved while maintaining bounded hydraulic penalties.",
              "ThermoMechanoSensing provided a conceptual pathway for converting thermal signatures into real-time geometric response.",
              "The framework supports future development of reconfigurable and intelligent cooling architectures for advanced electronics.",
            ],
          },

          {
            type: "outputsFuture",
            outputs: [
              "Ph.D. dissertation chapter development",
              "Research framework for adaptive microchannel heat sinks",
              "Conference and publication-oriented technical content",
              "Portfolio flagship project in advanced electronics cooling",
            ],
            futureDirections: [
              "Closed-loop sensing-to-actuation implementation",
              "Experimental realization of adaptive microchannel structures",
              "Extension to two-phase and near-junction cooling regimes",
              "Integration with digital twins and intelligent thermal control workflows",
            ],
          },

          {
            type: "links",
            items: [
              { label: "GitHub", href: "/", kind: "github" },
              { label: "External Link", href: "/", kind: "external" },
            ],
          },
        ]}
      />
    </>
  );
}

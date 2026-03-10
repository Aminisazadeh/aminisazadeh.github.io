import Head from "next/head";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

import heroGif from "../../../public/gifs/aps_dfd_poster_2.jpg";
// Optional: replace duplicated hero items below with real additional visuals later
// import fig1 from "../../../public/images/projects/tms/fig1.png";
// import fig2 from "../../../public/images/projects/tms/fig2.png";
// import fig3 from "../../../public/images/projects/tms/fig3.png";
// import fig4 from "../../../public/images/projects/tms/fig4.png";

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
        heroVariant="slider"
        heroMedia={[
          {
            type: "image",
            src: heroGif,
            alt: "Adaptive microchannel heat sink visualization 1",
            caption:
              "Conceptual rendering of adaptive microchannel cooling architecture and field-responsive thermal management.",
            cover: true,
          },
          {
            type: "image",
            src: heroGif,
            alt: "Adaptive microchannel heat sink visualization 2",
            caption:
              "Adaptive channel geometry can redistribute cooling capacity toward localized hotspots.",
            cover: true,
          },
          {
            type: "image",
            src: heroGif,
            alt: "Adaptive microchannel heat sink visualization 3",
            caption:
              "ThermoMechanoSensing enables a pathway for thermal signatures to influence local structural response.",
            cover: true,
          },
          {
            type: "image",
            src: heroGif,
            alt: "Adaptive microchannel heat sink visualization 4",
            caption:
              "The framework targets improved hotspot mitigation while maintaining acceptable hydraulic penalties.",
            cover: true,
          },
          {
            type: "image",
            src: heroGif,
            alt: "Adaptive microchannel heat sink visualization 5",
            caption:
              "This project explores intelligent, reconfigurable cooling for future high-heat-flux electronics.",
            cover: true,
          },
        ]}
        quickSummary="This project investigates adaptive microchannel heat sinks that respond to thermal and mechanical fields to improve hotspot mitigation in high-heat-flux electronics while respecting hydraulic pressure-drop constraints. The broader vision is to create intelligent cooling architectures that reconfigure locally in response to evolving thermal signatures."
        problem="Conventional fixed-geometry microchannel heat sinks often struggle to respond dynamically to localized hotspots and nonuniform thermal loading in advanced electronics. The challenge is to improve temperature uniformity and hotspot mitigation without introducing excessive flow resistance, manufacturing impracticality, or unacceptable pumping-power penalties."
        role="I developed the modeling framework, technical problem definition, simulation workflow, and broader design logic for adaptive channel geometry and ThermoMechanoSensing-based cooling concepts. My work included thermal-fluid modeling, comparative performance assessment, reduced-order interpretation, and the integration of adaptive response logic into a dissertation-ready research framework."
        methods={[
          "Conjugate heat transfer (CHT) modeling",
          "Adaptive geometry and field-aware cooling concepts",
          "Thermal-fluid performance benchmarking",
          "Pressure-drop and hydraulic tradeoff analysis",
          "Reduced-order and comparative analysis workflows",
          "Design-oriented interpretation for next-generation electronics cooling",
        ]}
        tools={[
          "OpenFOAM",
          "ANSYS Fluent",
          "ANSYS Icepak",
          "MATLAB",
          "Python",
          "COMSOL",
          "ParaView",
          "Tecplot",
          "HPC",
        ]}
        workflow={[
          "Defined the baseline microchannel cooling problem, operating assumptions, and thermal constraints for high-heat-flux electronics.",
          "Constructed a thermal-fluid analysis workflow to compare fixed-channel and adaptive-channel concepts under common loading scenarios.",
          "Introduced ThermoMechanoSensing as a field-aware mechanism for localized geometry modulation and targeted cooling response.",
          "Evaluated temperature reduction, temperature uniformity, and hydraulic tradeoffs across design scenarios.",
          "Synthesized the findings into a dissertation-oriented framework for adaptive cooling surfaces and future intelligent thermal systems.",
        ]}
        governingEquations={[
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
        ]}
        codeBlocks={[
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
        ]}
        metrics={[
          { value: "9.574 K", label: "Peak temperature reduction" },
          { value: "+33.8%", label: "Hydraulic penalty bound" },
          { value: "CHT", label: "Core modeling basis" },
          { value: "RIS / TMS", label: "Adaptive cooling concept" },
        ]}
        keyResults={[
          "Adaptive channel concepts improved hotspot mitigation compared with fixed-geometry baselines.",
          "The analysis showed that meaningful thermal improvements can be achieved while maintaining bounded hydraulic penalties.",
          "ThermoMechanoSensing provided a conceptual pathway for converting thermal signatures into real-time geometric response.",
          "The framework supports future development of reconfigurable and intelligent cooling architectures for advanced electronics.",
        ]}
        figures={[
          {
            src: heroGif,
            alt: "Adaptive microchannel project visual",
            caption:
              "Representative project visual for adaptive microchannel thermal management and ThermoMechanoSensing-driven response.",
          },
          // Replace with real project figures later, for example:
          // {
          //   src: fig1,
          //   alt: "Temperature contour comparison",
          //   caption: "Comparison of hotspot mitigation between fixed and adaptive channel cases.",
          // },
          // {
          //   src: fig2,
          //   alt: "Pressure-drop tradeoff curve",
          //   caption: "Hydraulic penalty versus thermal performance across adaptive design scenarios.",
          // },
          // {
          //   src: fig3,
          //   alt: "Adaptive geometry schematic",
          //   caption: "Illustrative adaptive deformation mechanism for localized cooling enhancement.",
          // },
          // {
          //   src: fig4,
          //   alt: "Simulation framework overview",
          //   caption: "Integrated workflow combining thermal gradients, adaptive logic, and performance evaluation.",
          // },
        ]}
        outputs={[
          "Ph.D. dissertation chapter development",
          "Research framework for adaptive microchannel heat sinks",
          "Conference and publication-oriented technical content",
          "Portfolio flagship project in advanced electronics cooling",
        ]}
        futureDirections={[
          "Closed-loop sensing-to-actuation implementation",
          "Experimental realization of adaptive microchannel structures",
          "Extension to two-phase and near-junction cooling regimes",
          "Integration with digital twins and intelligent thermal control workflows",
        ]}
        githubLink="/"
        externalLink="/"
        backLink="/projects"
      />
    </>
  );
}

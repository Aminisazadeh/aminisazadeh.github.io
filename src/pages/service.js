import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const StatCard = ({ number, label }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/20 bg-white/5 dark:bg-white/5 backdrop-blur-md p-6 text-center shadow-xl"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600">{number}</div>
      <div className="mt-2 text-sm sm:text-base font-medium opacity-80">{label}</div>
    </motion.div>
  )
}

const PillarCard = ({ title, accent, surface, items }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl border border-[rgb(var(--foreground-rgb))]/20 bg-gradient-to-br ${surface} p-6 md:p-8 shadow-2xl`}
    >
      <div className={`absolute top-0 left-0 h-1.5 w-full ${accent}`} />

      <div className="flex h-full flex-col items-center justify-start text-center pt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 min-h-[88px] flex items-start justify-center">
          {title}
        </h2>

        <ul className="space-y-4 text-sm md:text-base leading-relaxed w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="rounded-xl bg-white/60 dark:bg-white/5 px-4 py-4 shadow-sm text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const CollaborationCard = ({ org, role, location, points, accent, surface }) => {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl border border-[rgb(var(--foreground-rgb))]/20 bg-gradient-to-br ${surface} p-6 md:p-8 shadow-xl`}
    >
      <div className={`absolute inset-y-0 left-0 w-1.5 ${accent}`} />
      <div className="pl-3">
        <h3 className="text-2xl font-bold">{org}</h3>
        <p className="mt-1 text-pink-600 font-semibold">{role}</p>
        <p className="mt-1 text-sm md:text-base opacity-75">{location}</p>

        <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed">
          {points.map((point, index) => (
            <li
              key={index}
              className="rounded-xl bg-white/60 dark:bg-white/5 px-4 py-3 shadow-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

const Service = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Leadership, Service & Collaborations</title>
        <meta
          name="description"
          content="Leadership, academic service, peer-review activities, and research collaborations of Amin Isazadeh."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          {/* Hero */}
          <section className="relative w-full mb-16 md:mb-20">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 left-8 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="absolute right-10 top-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            </div>

            <AnimatedText
              text="Leadership Beyond Research"
              className="text-4xl md:text-6xl mb-8 text-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-3xl border border-[rgb(var(--foreground-rgb))]/20 bg-white/5 dark:bg-white/5 backdrop-blur-md p-6 md:p-10 text-center shadow-2xl"
            >
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                My academic profile extends beyond technical research into leadership,
                peer-review service, and interdisciplinary collaboration. Through teaching,
                professional engagement, reviewer activity, and research partnerships,
                I contribute to the broader engineering and scientific community while
                strengthening the impact of my technical work.
              </p>
            </motion.div>
          </section>

          {/* Impact stats */}
          <section className="w-full mb-16 md:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <StatCard number="10+" label="Leadership & service roles" />
              <StatCard number="20+" label="Peer-reviewed journals served" />
              <StatCard number="2" label="Major institutional collaborations" />
            </div>
          </section>

          {/* Three pillars */}
          <section className="w-full mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <PillarCard
                title="Leadership & Service"
                accent="bg-gradient-to-r from-pink-500 to-rose-500"
                surface="from-pink-50 via-white to-rose-50 dark:from-pink-500/10 dark:via-white/5 dark:to-rose-500/10"
                items={[
                  "Judge — Texas Junior Academy of Science",
                  "Treasurer — ASHRAE Student Branch at Texas A&M University",
                  "Team Lead — TAMU U-Challenge",
                  "Contributed to student and professional engagement through academic and organizational service"
                ]}
              />

              <PillarCard
                title="Peer Review & Academic Service"
                accent="bg-gradient-to-r from-cyan-500 to-blue-500"
                surface="from-cyan-50 via-white to-blue-50 dark:from-cyan-500/10 dark:via-white/5 dark:to-blue-500/10"
                items={[
                  "Reviewer — Scientific Reports (Nature Portfolio)",
                  "Reviewer — Renewable and Sustainable Energy Reviews",
                  "Contributed to scholarly quality assurance through manuscript evaluation",
                  "Engaged with emerging research across thermal systems, energy, and applied engineering science"
                ]}
              />

              <PillarCard
                title="Collaborations"
                accent="bg-gradient-to-r from-violet-500 to-indigo-500"
                surface="from-violet-50 via-white to-indigo-50 dark:from-violet-500/10 dark:via-white/5 dark:to-indigo-500/10"
                items={[
                  "Research collaboration with Purdue University",
                  "Research collaboration with Lawrence Berkeley National Laboratory",
                  "Worked across thermal systems, multiphase dynamics, machine learning, and energy modeling",
                  "Integrated cross-institutional research into publications, modeling workflows, and technical presentations"
                ]}
              />
            </div>
          </section>

          {/* Collaboration highlight cards */}
          <section className="w-full mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
              Featured Collaborations
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CollaborationCard
                org="Purdue University"
                role="Research Collaboration"
                location="Herrick Laboratories | West Lafayette, Indiana"
                accent="bg-gradient-to-b from-pink-500 to-rose-500"
                surface="from-pink-50 via-white to-rose-50 dark:from-pink-500/10 dark:via-white/5 dark:to-rose-500/10"
                points={[
                  "Worked on enhanced thermal management concepts for high-heat-flux electronics.",
                  "Studied deformable-particle and bubble dynamics under Rayleigh collapse and pressure-wave interaction.",
                  "Developed analytical and computational methods including PINN-based modeling and spherical-mode analysis.",
                  "Contributed to data-center thermal management and energy-system research with peer-reviewed outputs."
                ]}
              />

              <CollaborationCard
                org="Lawrence Berkeley National Laboratory"
                role="Research Collaboration"
                location="Building Technology Department | Berkeley, California"
                accent="bg-gradient-to-b from-cyan-500 to-blue-500"
                surface="from-cyan-50 via-white to-blue-50 dark:from-cyan-500/10 dark:via-white/5 dark:to-blue-500/10"
                points={[
                  "Collaborated on machine-learning-based building energy modeling.",
                  "Developed an ensemble regression framework for energy forecasting and performance modeling.",
                  "Processed and modeled time-series data in Python for research-grade analysis.",
                  "Delivered technical results in presentation format for institutional stakeholders."
                ]}
              />
            </div>
          </section>

          {/* Closing banner */}
          <section className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[rgb(var(--foreground-rgb))]/20 bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-indigo-500/10 p-6 md:p-10 text-center shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Engineering impact grows through community.
              </h2>
              <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                Whether through leadership, scholarly review, or cross-institutional collaboration,
                I aim to contribute not only to technical advancement, but also to the academic
                and professional ecosystems that make meaningful engineering progress possible.
              </p>
            </motion.div>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Service

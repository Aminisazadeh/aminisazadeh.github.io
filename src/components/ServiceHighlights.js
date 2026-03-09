import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const highlights = [
  {
    title: "Leadership & Service",
    items: [
      "Judge — Texas Junior Academy of Science",
      "Treasurer — ASHRAE Student Branch at Texas A&M",
      "Team Lead — TAMU U-Challenge"
    ],
    accent: "from-pink-500 to-rose-500",
    surface: "from-pink-50 via-white to-rose-50 dark:from-pink-500/10 dark:via-white/5 dark:to-rose-500/10"
  },
  {
    title: "Peer Review",
    items: [
      "Reviewer — Scientific Reports",
      "Reviewer — Renewable and Sustainable Energy Reviews",
      "Reviewer — International Journal of Hydrojen Energy"
    ],
    accent: "from-cyan-500 to-blue-500",
    surface: "from-cyan-50 via-white to-blue-50 dark:from-cyan-500/10 dark:via-white/5 dark:to-blue-500/10"
  },
  {
    title: "Collaborations",
    items: [
      "Purdue University",
      "Lawrence Berkeley National Laboratory"
    ],
    accent: "from-violet-500 to-indigo-500",
    surface: "from-violet-50 via-white to-indigo-50 dark:from-violet-500/10 dark:via-white/5 dark:to-indigo-500/10"
  }
]

const ServiceHighlights = () => {
  return (
    <section className="w-full mt-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Leadership, Service & Collaborations</h2>
        <p className="mt-3 text-sm md:text-base opacity-75 max-w-3xl mx-auto">
          Academic leadership, scholarly service, and cross-institutional collaboration beyond research and teaching.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {highlights.map((block, index) => (
          <motion.article
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-gradient-to-br ${block.surface} p-6 shadow-xl`}
          >
            <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${block.accent}`} />

            <div className="flex h-full flex-col items-center justify-start text-center pt-6">
              <h3 className="text-xl md:text-2xl font-bold mb-5 min-h-[64px] flex items-start justify-center">
                {block.title}
              </h3>

              <ul className="space-y-4 text-sm md:text-base leading-relaxed w-full">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-white/60 dark:bg-white/5 px-4 py-4 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/service"
          className="inline-flex items-center rounded-lg bg-dark text-white p-2 px-6 text-sm sm:text-lg font-semibold border-2 border-solid border-[rgb(var(--foreground-rgb))] dark:bg-light dark:text-dark"
        >
          Explore Full Service Page
        </Link>
      </div>
    </section>
  )
}

export default ServiceHighlights

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
    // Forced background shift using the CSS variables
    surface: "from-pink-50 via-[rgb(var(--background-rgb))] to-rose-50 dark:from-pink-950/30 dark:via-[rgb(var(--background-rgb))] dark:to-rose-950/30"
  },
  {
    title: "Peer Review",
    items: [
      "Reviewer — Scientific Reports",
      "Reviewer — Renewable and Sustainable Energy Reviews",
      "Reviewer — International Journal of Hydrogen Energy"
    ],
    accent: "from-cyan-500 to-blue-500",
    surface: "from-cyan-50 via-[rgb(var(--background-rgb))] to-blue-50 dark:from-cyan-950/30 dark:via-[rgb(var(--background-rgb))] dark:to-blue-950/30"
  },
  {
    title: "Collaborations",
    items: [
      "Purdue University",
      "Lawrence Berkeley National Laboratory"
    ],
    accent: "from-violet-500 to-indigo-500",
    surface: "from-violet-50 via-[rgb(var(--background-rgb))] to-indigo-50 dark:from-violet-950/30 dark:via-[rgb(var(--background-rgb))] dark:to-indigo-950/30"
  }
]

const ServiceHighlights = () => {
  return (
    <section className="w-full mt-16 !text-[rgb(var(--foreground-rgb))]">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold !text-[rgb(var(--foreground-rgb))]">
          Leadership, Service & Collaborations
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-75 max-w-3xl mx-auto !text-[rgb(var(--foreground-rgb))]">
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
            // Border and Background now strictly follow the CSS variables
            className={`relative overflow-hidden rounded-3xl border border-[rgb(var(--foreground-rgb))]/20 bg-gradient-to-br ${block.surface} p-6 shadow-xl`}
          >
            <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${block.accent}`} />

            <div className="flex h-full flex-col items-center justify-start text-center pt-6">
              <h3 className="text-xl md:text-2xl font-bold mb-5 min-h-[64px] flex items-start justify-center !text-[rgb(var(--foreground-rgb))]">
                {block.title}
              </h3>

              <ul className="space-y-4 text-sm md:text-base leading-relaxed w-full">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    // Forced foreground for text and forced background/border for visibility
                    className="rounded-xl bg-[rgb(var(--foreground-rgb))]/5 dark:bg-[rgb(var(--foreground-rgb))]/10 border border-[rgb(var(--foreground-rgb))]/10 px-4 py-4 shadow-sm !text-[rgb(var(--foreground-rgb))]"
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
          // Swapping background/foreground variables for the button to make it pop
          className="inline-flex items-center rounded-lg p-2 px-6 text-sm sm:text-lg font-semibold border-2 border-solid border-[rgb(var(--foreground-rgb))] transition-all hover:opacity-90"
        >
          Explore Full Service Page
        </Link>
      </div>
    </section>
  )
}

export default ServiceHighlights

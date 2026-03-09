import React from 'react'
import { motion } from 'framer-motion'

const honorsData = [
  {
    title: "J. Mike Walker ’66 Impact Award",
    year: "2024",
    note: "Selected as the outstanding graduate student of the year."
  },
  {
    title: "Graduate Lecturer Fellowship",
    year: "2025",
    note: "Awarded to teach Thermodynamics (MEEN 315-504)."
  },
  {
    title: "Graduate Summer Research Grant",
    year: "2024",
    note: "Awarded $4,000 for innovative research ideas."
  },
  {
    title: "Continuing Student Fellowships",
    year: "2024–2025",
    note: "Awarded to outstanding graduate students."
  },
  {
    title: "AFS Aggie Leader Scholarship",
    year: "2025",
    note: "Scholarship supporting academics and student engagement."
  },
  {
    title: "J. L. Dellis Scholarship Fund (GR)",
    year: "2025",
    note: "Scholarship awarded to accomplished continuing students."
  },
  {
    title: "Gen Scholarship Merit",
    year: "2025",
    note: "Merit scholarship awarded to highly accomplished students."
  },
  {
    title: "Eppright Outstanding Student",
    year: "2025",
    note: "Scholarship awarded by an academic college or department."
  },
  {
    title: "Sam & Mary Richards Martin Endowment",
    year: "2024",
    note: "Awarded for academic excellence and leadership."
  },
  {
    title: "J. George H. Thompson Grad. Fellowship",
    year: "2024",
    note: "Awarded for research excellence."
  },
  {
    title: "IEFS Graduate ISS Scholarship",
    year: "2023",
    note: "Awarded for outstanding academic performance."
  },
  {
    title: "Tina Watkins Scholarship",
    year: "2023",
    note: "Awarded to successful leaders."
  },
  {
    title: "TX Public Education Grant-Intl.",
    year: "2023",
    note: "Awarded for international student support."
  },
  {
    title: "Non-Res Competitive Scholarship Tuition Waiver",
    year: "2022–2026",
    note: "Enables payment of resident tuition rates."
  }
]

const featuredHonors = [
  "J. Mike Walker ’66 Impact Award",
  "Graduate Lecturer Fellowship",
  "Graduate Summer Research Grant",
  "Continuing Student Fellowships"
]

const HonorsCard = ({ title, year, note }) => {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="rounded-2xl border border-solid border-[rgb(var(--foreground-rgb))] p-5 md:p-6 bg-[rgba(var(--foreground-rgb),0.03)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <span className="text-sm md:text-base font-semibold text-pink-600 shrink-0">
          {year}
        </span>
      </div>
      <p className="mt-3 text-sm md:text-base leading-relaxed opacity-80">
        {note}
      </p>
    </motion.article>
  )
}

const Honors = ({ variant = "full" }) => {
  const items =
    variant === "featured"
      ? honorsData.filter((item) => featuredHonors.includes(item.title))
      : honorsData

  return (
    <section className="w-full">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Honors & Awards</h2>
        <p className="mt-3 text-sm md:text-base opacity-75 max-w-3xl mx-auto">
          Recognition across research, teaching, leadership, and academic excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {items.map((item, index) => (
          <HonorsCard
            key={index}
            title={item.title}
            year={item.year}
            note={item.note}
          />
        ))}
      </div>
    </section>
  )
}

export default Honors
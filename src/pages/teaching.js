import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'

const TeachingCard = ({ course, role, term, place, bullets }) => {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full rounded-3xl border border-solid border-[rgb(var(--foreground-rgb))] p-6 md:p-8 bg-[rgba(var(--foreground-rgb),0.03)]"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{course}</h2>
          <p className="text-lg font-semibold text-pink-600 mt-1">{role}</p>
          <p className="text-sm md:text-base opacity-75 mt-1">{place}</p>
        </div>

        <div className="text-sm md:text-base font-medium opacity-75 lg:text-right shrink-0">
          {term}
        </div>
      </div>

      <ul className="mt-5 list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.article>
  )
}

const InfoBlock = ({ title, items }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-solid border-[rgb(var(--foreground-rgb))] p-6 bg-[rgba(var(--foreground-rgb),0.03)]"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

const Teaching = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Teaching & Mentorship</title>
        <meta
          name="description"
          content="Teaching and mentorship experience of Amin Isazadeh in thermodynamics, heat transfer, and engineering education."
        />
      </Head>

      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Teaching Shapes Engineers!"
            className="text-4xl md:text-6xl mb-12 md:mb-16 text-center"
          />

          {/* Teaching philosophy */}
          <section className="w-full mb-12 md:mb-16">
            <div className="w-full rounded-3xl border border-solid border-[rgb(var(--foreground-rgb))] p-6 md:p-10 bg-[rgba(var(--foreground-rgb),0.03)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Teaching Philosophy</h2>
              <p className="text-sm md:text-lg leading-relaxed font-medium">
                I approach teaching as an extension of engineering practice: students learn best when
                first principles, physical intuition, and computational tools are connected in a clear
                and purposeful way. My goal is to help students move beyond memorization toward true
                problem-solving ability by combining conceptual explanation, worked derivations,
                engineering judgment, and real-world examples. In thermodynamics and heat transfer,
                I emphasize both analytical foundations and practical tools such as EES, MATLAB,
                Simulink, and engineering datasets so that students can build confidence in theory,
                modeling, and decision-making.
              </p>
            </div>
          </section>

          {/* Featured teaching role */}
          <section className="w-full mb-12 md:mb-16">
            <TeachingCard
              course="MEEN 315-504: Principles of Thermodynamics"
              role="Graduate Lecturer"
              term="Jan. 2025 – May 2025"
              place="Mechanical Engineering Department, Texas A&M University"
              bullets={[
                "Delivered lectures twice weekly and led instruction for undergraduate thermodynamics students.",
                "Developed course materials including syllabus, quizzes, homework assignments, and exams.",
                "Integrated EES, MATLAB, Simulink, and engineering datasets into course delivery.",
                "Used active-learning strategies, problem-based learning, and real-world engineering examples.",
                "Mentored students during office hours and supported them through conceptual and computational challenges.",
                "Collaborated with teaching assistants, graders, and faculty through regular course coordination."
              ]}
            />
          </section>

          {/* Teaching experience timeline/cards */}
          <section className="w-full mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
              Courses, Roles, and Instructional Experience
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <TeachingCard
                course="Heat Transfer"
                role="Graduate Teaching Assistant"
                term="Texas A&M University"
                place="Instructional support, problem solving, and student guidance"
                bullets={[
                  "Supported student learning in transport phenomena and heat-transfer analysis.",
                  "Guided students through applied engineering problem solving and coursework.",
                  "Helped bridge theoretical content with numerical and practical understanding."
                ]}
              />

              <TeachingCard
                course="Thermodynamics II / Automatic Control / Turbomachinery"
                role="Undergraduate Teaching Assistant"
                term="Iran University of Science and Technology"
                place="Undergraduate engineering instruction and student support"
                bullets={[
                  "Assisted with course delivery, student support, and concept reinforcement.",
                  "Helped students strengthen understanding of analytical and applied engineering topics.",
                  "Contributed to mentoring and academic guidance across multiple core mechanical-engineering subjects."
                ]}
              />
            </div>
          </section>

          {/* Methods + mentorship */}
          <section className="w-full mb-12 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InfoBlock
                title="Teaching Methods"
                items={[
                  "First-principles explanation with strong physical interpretation",
                  "Problem-based learning and worked engineering examples",
                  "Integration of computational tools into traditional coursework",
                  "Use of real datasets and realistic thermo-fluid case studies",
                  "Continuous refinement through student and peer feedback"
                ]}
              />

              <InfoBlock
                title="Mentorship & Student Support"
                items={[
                  "Office-hour mentoring focused on conceptual clarity and independent problem solving",
                  "Guidance on homework, quizzes, and exam preparation",
                  "Support for students with different learning styles and technical backgrounds",
                  "Encouragement of confidence-building through structured reasoning and iterative practice"
                ]}
              />
            </div>
          </section>

          {/* Tools */}
          <section className="w-full">
            <div className="rounded-3xl border border-solid border-[rgb(var(--foreground-rgb))] p-6 md:p-10 bg-[rgba(var(--foreground-rgb),0.03)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Instructional Tools & Teaching Assets</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "EES",
                  "MATLAB",
                  "Simulink",
                  "NIST REFPROP",
                  "Problem-Based Learning",
                  "Quiz/Exam Design",
                  "Course Coordination",
                  "Office-Hour Mentoring",
                  "Engineering Case Studies"
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-solid border-[rgb(var(--foreground-rgb))] px-4 py-2 text-sm md:text-base font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Teaching
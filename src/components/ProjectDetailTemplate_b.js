import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BlockMath, InlineMath } from "react-katex";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";

const fadeUp = {
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.45, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const SectionTitle = ({ children, subtitle }) => (
  <motion.div {...fadeUp} className="mb-5 md:mb-6">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
      {children}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm md:text-base opacity-75 max-w-3xl">{subtitle}</p>
    )}
  </motion.div>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    {...fadeUp}
    className={`rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${className}`}
  >
    {children}
  </motion.div>
);

const InfoCard = ({ title, children, accent = "from-pink-500/15 to-cyan-500/15" }) => (
  <GlassCard className="p-5 md:p-6 overflow-hidden relative">
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${accent} blur-2xl`}
    />
    <div className="relative">
      <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
      <div className="text-sm md:text-base leading-relaxed opacity-90">{children}</div>
    </div>
  </GlassCard>
);

const TagList = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: index * 0.03 }}
          viewport={{ once: true }}
          className="rounded-full border border-[rgb(var(--foreground-rgb))]/15 px-3.5 py-1.5 text-xs sm:text-sm md:text-base font-medium bg-white/70 dark:bg-white/5 shadow-sm"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
};

const BulletList = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <ul className="space-y-2.5 text-sm md:text-base leading-relaxed">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2 h-2.5 w-2.5 min-w-[10px] rounded-full bg-pink-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const MetricCard = ({ value, label, note }) => (
  <motion.div
    initial={{ y: 20, opacity: 0, scale: 0.98 }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 0.35 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-gradient-to-br from-pink-500/10 via-white/80 to-cyan-500/10 dark:from-pink-500/10 dark:via-white/5 dark:to-cyan-500/10 p-5 md:p-6 text-center shadow-lg"
  >
    <div className="text-2xl md:text-4xl font-extrabold text-pink-600">{value}</div>
    <div className="mt-2 text-sm md:text-base font-semibold opacity-85">{label}</div>
    {note && <div className="mt-1 text-xs md:text-sm opacity-65">{note}</div>}
  </motion.div>
);

const FigureCard = ({ src, alt, caption }) => (
  <GlassCard className="p-4 md:p-5">
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
      <Image src={src} alt={alt} fill className="object-contain p-2" />
    </div>
    {caption && (
      <p className="mt-3 text-sm md:text-base text-center opacity-80">{caption}</p>
    )}
  </GlassCard>
);

const MediaFrame = ({ item, priority = false, className = "" }) => {
  if (!item) return null;

  const type = item.type || "image";

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-black/10 dark:bg-white/5 ${className}`}
    >
      {type === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          controls={item.controls ?? true}
          autoPlay={item.autoPlay || false}
          muted={item.muted !== false}
          loop={item.loop || false}
          playsInline
          className={`w-full h-full ${item.cover ? "object-cover" : "object-contain"}`}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt || "Project media"}
          fill
          priority={priority}
          className={`${
            item.cover ? "object-cover" : "object-contain p-2 sm:p-3 md:p-4"
          }`}
        />
      )}
    </div>
  );
};

const HeroGallery = ({ items = [], title }) => {
  const normalizedItems = useMemo(() => {
    return items.filter(Boolean).map((item) =>
      typeof item === "string"
        ? { type: "image", src: item, alt: title || "Project media" }
        : item
    );
  }, [items, title]);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!normalizedItems.length) return null;

  const activeItem = normalizedItems[activeIndex];

  return (
    <motion.section {...fadeUp} className="w-full mb-14">
      <GlassCard className="p-3 md:p-4 lg:p-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-[1.75rem] overflow-hidden border border-[rgb(var(--foreground-rgb))]/10">
              <MediaFrame item={activeItem} priority />
            </div>
          </motion.div>
        </AnimatePresence>

        {(activeItem.caption || normalizedItems.length > 1) && (
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {activeItem.caption ? (
              <p className="text-sm md:text-base opacity-80">{activeItem.caption}</p>
            ) : (
              <div />
            )}

            {normalizedItems.length > 1 && (
              <div className="flex items-center gap-2 self-start lg:self-auto overflow-x-auto pb-1">
                {normalizedItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-20 sm:h-18 sm:w-24 rounded-xl overflow-hidden border transition-all ${
                      activeIndex === index
                        ? "border-pink-500 ring-2 ring-pink-500/20"
                        : "border-[rgb(var(--foreground-rgb))]/15 opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Show media ${index + 1}`}
                    type="button"
                  >
                    {item.type === "video" ? (
                      <div className="h-full w-full flex items-center justify-center bg-black/20 dark:bg-white/5 text-xs font-semibold">
                        Video
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt || `Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </GlassCard>
    </motion.section>
  );
};

const HeroSliderCard = ({ item, isActive, offset, onActivate }) => {
  const absOffset = Math.abs(offset);

  const radiusX = 185;
  const angleStep = 18;
  const angle = offset * angleStep;
  const rad = (angle * Math.PI) / 180;

  const x = Math.sin(rad) * radiusX;
  const y = Math.abs(Math.sin(rad)) * 12;
  const rotateY = -angle;
  const scale = isActive ? 1 : Math.max(0.8, 1 - absOffset * 0.08);
  const opacity = Math.max(0.18, 1 - absOffset * 0.18);
  const zIndex = 100 - absOffset;
  const blur = absOffset >= 4 ? 1.5 : 0;

  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={false}
      animate={{
        x,
        y,
        scale,
        opacity,
        rotateY,
        zIndex,
        filter: `blur(${blur}px)`,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="absolute top-1/2 left-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 sm:h-[145px] sm:w-[145px] md:h-[185px] md:w-[185px] lg:h-[220px] lg:w-[220px] rounded-[1.75rem] overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-pink-500/40"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        pointerEvents: absOffset > 3 ? "none" : "auto",
      }}
      aria-label={item.alt || "Hero media item"}
    >
      <div className="absolute inset-0 bg-black/5 dark:bg-black/10 z-10 pointer-events-none" />
      <MediaFrame
        item={{ ...item, cover: false }}
        priority={isActive}
        className="rounded-[1.75rem]"
      />
    </motion.button>
  );
};

const HeroPreviewPanel = ({ item }) => {
  if (!item) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.alt || item.caption || "preview"}
        initial={{ opacity: 0, x: 18, scale: 0.985 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -18, scale: 0.985 }}
        transition={{ duration: 0.35 }}
        className="w-full"
      >
        <div className="rounded-[1.75rem] border border-[rgb(var(--foreground-rgb))]/12 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] p-3 md:p-4">
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] rounded-[1.35rem] overflow-hidden bg-black/5 dark:bg-white/5 border border-[rgb(var(--foreground-rgb))]/10">
            <MediaFrame item={{ ...item, cover: false }} priority />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Hero3DSlider = ({ items = [], title }) => {
  const normalizedItems = useMemo(() => {
    return items.filter(Boolean).map((item) =>
      typeof item === "string"
        ? { type: "image", src: item, alt: title || "Project media" }
        : item
    );
  }, [items, title]);

  const [activeIndex, setActiveIndex] = useState(Math.floor(normalizedItems.length / 2));

  if (!normalizedItems.length) return null;

  const activeItem = normalizedItems[activeIndex];

  return (
    <motion.section {...fadeUp} className="w-full mb-14">
      <GlassCard className="p-4 md:p-6 lg:p-8 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-12 h-28 w-28 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="absolute right-[12%] bottom-10 h-28 w-28 rounded-full bg-cyan-500/15 blur-3xl" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] gap-8 xl:gap-10 items-center">
          <div
            className="relative mx-auto w-full max-w-[520px] xl:max-w-[460px] order-2 xl:order-1"
            style={{ perspective: "1600px" }}
          >
            <div className="relative h-[220px] sm:h-[250px] md:h-[310px] lg:h-[360px] xl:h-[400px]">
              {normalizedItems.map((item, index) => {
                const offset = index - activeIndex;
                return (
                  <HeroSliderCard
                    key={index}
                    item={item}
                    isActive={index === activeIndex}
                    offset={offset}
                    onActivate={() => setActiveIndex(index)}
                  />
                );
              })}

              <div className="pointer-events-none absolute left-1/2 bottom-4 h-8 w-[58%] -translate-x-1/2 rounded-full bg-black/20 dark:bg-black/30 blur-2xl" />
            </div>

            {normalizedItems.length > 1 && (
              <>
                <div className="hidden sm:flex mt-5 flex-wrap items-center justify-center gap-2">
                  {normalizedItems.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-14 w-20 md:h-16 md:w-24 rounded-xl overflow-hidden border transition-all ${
                        activeIndex === index
                          ? "border-pink-500 ring-2 ring-pink-500/20 scale-105"
                          : "border-[rgb(var(--foreground-rgb))]/15 opacity-80 hover:opacity-100"
                      }`}
                      aria-label={`Activate slide ${index + 1}`}
                    >
                      {item.type === "video" ? (
                        <div className="h-full w-full flex items-center justify-center bg-black/20 dark:bg-white/5 text-xs font-semibold">
                          Video
                        </div>
                      ) : (
                        <Image
                          src={item.src}
                          alt={item.alt || `Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex sm:hidden items-center justify-center gap-2">
                  {normalizedItems.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? "w-8 bg-pink-500"
                          : "w-2.5 bg-[rgb(var(--foreground-rgb))]/25"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="order-1 xl:order-2">
            <HeroPreviewPanel item={activeItem} />

            {activeItem?.caption && (
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.82, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 px-1 text-center xl:text-left text-sm md:text-base"
              >
                {activeItem.caption}
              </motion.p>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.section>
  );
};

const WorkflowCard = ({ step, index }) => (
  <motion.div
    initial={{ y: 18, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.35, delay: index * 0.04 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="group rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-white/70 dark:bg-white/5 p-5 shadow-md"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-500 text-white flex items-center justify-center font-bold shadow-lg">
        {index + 1}
      </div>
      <div className="text-sm md:text-base font-semibold opacity-85">Step {index + 1}</div>
    </div>
    <p className="text-sm md:text-base leading-relaxed opacity-90">{step}</p>
  </motion.div>
);

const EquationCard = ({ title, latex, description, inlineNotes = [] }) => (
  <GlassCard className="p-5 md:p-6">
    {title && <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>}

    {description && (
      <p className="text-sm md:text-base leading-relaxed opacity-85 mb-4">{description}</p>
    )}

    <div className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 bg-white/80 dark:bg-black/20 px-4 py-5 overflow-x-auto">
      <BlockMath math={latex} />
    </div>

    {inlineNotes.length > 0 && (
      <div className="mt-4 space-y-2">
        {inlineNotes.map((note, idx) => (
          <p key={idx} className="text-sm md:text-base opacity-80 leading-relaxed">
            <InlineMath math={note.symbol} /> {note.meaning ? `= ${note.meaning}` : ""}
          </p>
        ))}
      </div>
    )}
  </GlassCard>
);

const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-xl border border-[rgb(var(--foreground-rgb))]/15 px-3 py-1.5 text-xs md:text-sm font-medium bg-white/80 dark:bg-white/5 hover:scale-[1.02] transition"
      type="button"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const CodeBlockCard = ({
  title,
  language = "txt",
  code = "",
  description,
  defaultExpanded = false,
  maxCollapsedLines = 12,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!code) return null;

  const lines = code.replace(/\t/g, "  ").split("\n");
  const visibleLines = expanded ? lines : lines.slice(0, maxCollapsedLines);
  const hiddenCount = Math.max(lines.length - maxCollapsedLines, 0);

  return (
    <GlassCard className="overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-[rgb(var(--foreground-rgb))]/10 p-4 md:p-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{title || "Code Snippet"}</h3>
          <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] opacity-60">
            {language}
          </p>
          {description && (
            <p className="mt-2 text-sm md:text-base opacity-80 max-w-3xl">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <CopyButton value={code} />
          {lines.length > maxCollapsedLines && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="rounded-xl border border-[rgb(var(--foreground-rgb))]/15 px-3 py-1.5 text-xs md:text-sm font-medium bg-white/80 dark:bg-white/5 hover:scale-[1.02] transition"
            >
              {expanded ? "Collapse" : "Expand"}
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full bg-[#0b1020] text-slate-100">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <pre className="m-0 p-0 text-[12px] sm:text-[13px] md:text-sm leading-6 overflow-x-auto">
            {visibleLines.map((line, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] hover:bg-white/5"
              >
                <span className="select-none px-3 md:px-4 text-right text-slate-400 border-r border-white/10">
                  {idx + 1}
                </span>
                <code className="px-3 md:px-4 whitespace-pre">{line || " "}</code>
              </div>
            ))}
          </pre>

          {!expanded && hiddenCount > 0 && (
            <div className="px-4 py-3 text-xs md:text-sm text-slate-300 border-t border-white/10 bg-white/5">
              + {hiddenCount} more line{hiddenCount > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default function ProjectDetailTemplate({
  category,
  title,
  period,
  institution,

  heroImage,
  heroAlt,
  heroCaption,

  heroMedia = [],
  heroVariant = "slider",

  quickSummary,
  problem,
  role,
  methods = [],
  tools = [],
  workflow = [],
  keyResults = [],
  metrics = [],
  figures = [],

  governingEquations = [],
  codeBlocks = [],

  outputs = [],
  futureDirections = [],
  githubLink,
  externalLink,
  backLink = "/projects",
}) {
  const normalizedHeroMedia =
    heroMedia.length > 0
      ? heroMedia
      : heroImage
      ? [
          {
            type: "image",
            src: heroImage,
            alt: heroAlt || title,
            caption: heroCaption,
            cover: false,
          },
        ]
      : [];

  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <Layout className="pt-16 md:pt-20">
        <div className="mb-8">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition"
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="relative w-full mb-8 md:mb-10">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl" />
            <div className="absolute right-0 top-12 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />
          </div>

          <AnimatedText
            text={title}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 text-center"
          />

          <div className="w-full text-center">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-pink-600 tracking-wide">
              {category}
            </p>
            {(period || institution) && (
              <p className="mt-2 text-sm md:text-base opacity-75">
                {[period, institution].filter(Boolean).join(" | ")}
              </p>
            )}
          </div>
        </div>

        {quickSummary && (
          <motion.div
            {...fadeUp}
            className="w-full max-w-5xl mx-auto rounded-[2rem] border border-[rgb(var(--foreground-rgb))]/15 bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-indigo-500/10 p-6 md:p-8 text-center shadow-xl mb-12"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              {quickSummary}
            </p>
          </motion.div>
        )}

        {normalizedHeroMedia.length > 0 &&
          (heroVariant === "slider" && normalizedHeroMedia.length > 1 ? (
            <Hero3DSlider items={normalizedHeroMedia} title={title} />
          ) : (
            <HeroGallery items={normalizedHeroMedia} title={title} />
          ))}

        <section className="w-full mb-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {problem && (
              <InfoCard title="Problem / Motivation">
                <p>{problem}</p>
              </InfoCard>
            )}

            {role && (
              <InfoCard title="My Role" accent="from-cyan-500/15 to-indigo-500/15">
                <p>{role}</p>
              </InfoCard>
            )}
          </div>
        </section>

        {(methods.length > 0 || tools.length > 0) && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="Core methodologies and software or experimental stack used in this project.">
              Methods & Tools
            </SectionTitle>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <InfoCard title="Methods">
                <BulletList items={methods} />
              </InfoCard>

              <InfoCard title="Tools Used" accent="from-indigo-500/15 to-cyan-500/15">
                <TagList items={tools} />
              </InfoCard>
            </div>
          </section>
        )}

        {workflow.length > 0 && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="A clean, stepwise breakdown of the simulation, modeling, or experimental pipeline.">
              Technical Workflow
            </SectionTitle>

            <GlassCard className="p-5 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5">
                {workflow.map((step, index) => (
                  <WorkflowCard key={index} step={step} index={index} />
                ))}
              </div>
            </GlassCard>
          </section>
        )}

        {governingEquations.length > 0 && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="Key equations can be rendered directly from LaTeX for a professional technical presentation.">
              Governing Equations
            </SectionTitle>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {governingEquations.map((eq, index) => (
                <EquationCard
                  key={index}
                  title={eq.title}
                  latex={eq.latex}
                  description={eq.description}
                  inlineNotes={eq.inlineNotes || []}
                />
              ))}
            </div>
          </section>
        )}

        {codeBlocks.length > 0 && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="Simulation scripts, solver fragments, controller logic, or post-processing routines can be expanded inline with numbered lines.">
              Simulation Code
            </SectionTitle>

            <div className="space-y-6">
              {codeBlocks.map((block, index) => (
                <CodeBlockCard
                  key={index}
                  title={block.title}
                  language={block.language}
                  code={block.code}
                  description={block.description}
                  defaultExpanded={block.defaultExpanded}
                  maxCollapsedLines={block.maxCollapsedLines || 12}
                />
              ))}
            </div>
          </section>
        )}

        {(keyResults.length > 0 || metrics.length > 0) && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="Quantitative performance indicators and the most important engineering takeaways.">
              Key Results
            </SectionTitle>

            {metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <MetricCard
                    key={index}
                    value={metric.value}
                    label={metric.label}
                    note={metric.note}
                  />
                ))}
              </div>
            )}

            {keyResults.length > 0 && (
              <GlassCard className="p-5 md:p-6">
                <BulletList items={keyResults} />
              </GlassCard>
            )}
          </section>
        )}

        {figures.length > 0 && (
          <section className="w-full mb-12">
            <SectionTitle subtitle="Figures, contour plots, validation charts, CAD views, or experimental visuals.">
              Figures & Visuals
            </SectionTitle>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {figures.map((figure, index) => (
                <FigureCard
                  key={index}
                  src={figure.src}
                  alt={figure.alt}
                  caption={figure.caption}
                />
              ))}
            </div>
          </section>
        )}

        {(outputs.length > 0 || futureDirections.length > 0) && (
          <section className="w-full mb-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {outputs.length > 0 && (
                <InfoCard title="Outputs">
                  <BulletList items={outputs} />
                </InfoCard>
              )}

              {futureDirections.length > 0 && (
                <InfoCard title="Future Directions" accent="from-indigo-500/15 to-pink-500/15">
                  <BulletList items={futureDirections} />
                </InfoCard>
              )}
            </div>
          </section>
        )}

        {(githubLink || externalLink) && (
          <section className="w-full pb-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  className="flex items-center gap-2 rounded-2xl border border-[rgb(var(--foreground-rgb))]/20 bg-white/80 dark:bg-white/5 px-5 py-3 text-sm md:text-base font-semibold shadow-md hover:-translate-y-0.5 transition"
                >
                  <span className="w-5">
                    <GithubIcon />
                  </span>
                  GitHub
                </Link>
              )}

              {externalLink && (
                <Link
                  href={externalLink}
                  target="_blank"
                  className="flex items-center gap-2 rounded-2xl bg-dark text-white dark:bg-light dark:text-dark px-5 py-3 text-sm md:text-base font-semibold border border-[rgb(var(--foreground-rgb))]/20 shadow-md hover:-translate-y-0.5 transition"
                >
                  External Link
                  <span className="w-5">
                    <LinkArrow className="fill-current" />
                  </span>
                </Link>
              )}
            </div>
          </section>
        )}
      </Layout>
    </main>
  );
}

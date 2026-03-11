import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlockMath, InlineMath } from "react-katex";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";

const fadeUp = {
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.45, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 },
};

const panelLabels = ["(a)", "(b)", "(c)", "(d)"];

const SectionTitle = ({ children, subtitle, align = "left" }) => (
  <motion.div
    {...fadeUp}
    className={`mb-5 md:mb-6 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
      {children}
    </h2>
    {subtitle && (
      <p
        className={`mt-2 text-sm md:text-base opacity-75 ${
          align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"
        }`}
      >
        {subtitle}
      </p>
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

const InfoCard = ({
  title,
  children,
  accent = "from-pink-500/15 to-cyan-500/15",
  className = "",
}) => (
  <GlassCard className={`p-5 md:p-6 overflow-hidden relative ${className}`}>
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${accent} blur-2xl`}
    />
    <div className="relative">
      {title && <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>}
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
    <div className="text-2xl md:text-4xl font-extrabold text-pink-600 break-words">
      {value}
    </div>
    <div className="mt-2 text-sm md:text-base font-semibold opacity-85">{label}</div>
    {note && <div className="mt-1 text-xs md:text-sm opacity-65">{note}</div>}
  </motion.div>
);

const MediaFrame = ({ item, priority = false, className = "" }) => {
  if (!item) return null;

  const type = item.type || "image";

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-black/5 dark:bg-white/5 ${className}`}
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
          className={`${item.cover ? "object-cover" : "object-contain p-2 sm:p-3 md:p-4"}`}
        />
      )}
    </div>
  );
};

const normalizeMediaItems = (items = [], title = "") =>
  items
    .filter(Boolean)
    .map((item, index) =>
      typeof item === "string"
        ? {
            type: "image",
            src: item,
            alt: title || "Project media",
            cover: false,
            shortLabel: `Panel ${index + 1}`,
          }
        : {
            cover: false,
            shortLabel: item.shortLabel || `Panel ${index + 1}`,
            ...item,
          }
    );

const HeroStrip = ({
  items = [],
  title,
  sectionTitle,
  sectionSubtitle,
  caption,
  maxItems = 4,
}) => {
  const normalizedItems = useMemo(
    () => normalizeMediaItems(items, title).slice(0, maxItems),
    [items, title, maxItems]
  );

  if (!normalizedItems.length) return null;

  const count = normalizedItems.length;

  const cells =
    count === 1
      ? "grid-cols-1"
      : count === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : count === 3
      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";

  return (
    <motion.section {...fadeUp} className="w-full mb-12">
      {(sectionTitle || sectionSubtitle) && (
        <SectionTitle subtitle={sectionSubtitle}>{sectionTitle}</SectionTitle>
      )}

      <GlassCard className="p-4 sm:p-5 md:p-6 overflow-hidden">
        <div className={`grid ${cells} gap-4 md:gap-5`}>
          {normalizedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="relative rounded-[1.5rem] border border-[rgb(var(--foreground-rgb))]/10 bg-white/50 dark:bg-white/[0.03] shadow-sm p-3 md:p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-zinc-700/90 px-2.5 py-1 text-[11px] sm:text-xs md:text-sm font-semibold text-white shadow-sm">
                    {panelLabels[index] || `(${index + 1})`}
                  </span>
                </div>

                <div className="relative aspect-square rounded-[1.1rem] overflow-hidden bg-white/70 dark:bg-white/[0.04]">
                  <MediaFrame item={item} priority={index < 2} />
                </div>

                {(item.shortLabel || item.caption) && (
                  <div className="mt-3 space-y-2">
                    {item.shortLabel && (
                      <div className="rounded-lg bg-zinc-700/90 px-3 py-2 text-center text-xs sm:text-sm md:text-base font-medium text-white shadow-sm">
                        {item.shortLabel}
                      </div>
                    )}
                    {item.caption && (
                      <p className="text-xs sm:text-sm md:text-base opacity-75 leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {caption && (
          <p className="mt-4 text-sm md:text-base opacity-75 leading-relaxed">{caption}</p>
        )}
      </GlassCard>
    </motion.section>
  );
};

const WorkflowCard = ({ step, index }) => {
  const text =
    typeof step === "string"
      ? step
      : step?.text || step?.description || step?.body || `Step ${index + 1}`;

  const title =
    typeof step === "string" ? `Step ${index + 1}` : step?.title || `Step ${index + 1}`;

  return (
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
        <div className="text-sm md:text-base font-semibold opacity-85">{title}</div>
      </div>
      <p className="text-sm md:text-base leading-relaxed opacity-90">{text}</p>
    </motion.div>
  );
};

const EquationCard = ({ title, latex, description, inlineNotes = [] }) => (
  <GlassCard className="p-5 md:p-6">
    {title && <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>}

    {description && (
      <p className="text-sm md:text-base leading-relaxed opacity-85 mb-4">{description}</p>
    )}

    <div className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 bg-white/80 dark:bg-black/20 px-3 sm:px-4 py-5 overflow-x-auto">
      <BlockMath math={latex} />
    </div>

    {inlineNotes.length > 0 && (
      <div className="mt-4 space-y-2">
        {inlineNotes.map((note, idx) => (
          <p key={idx} className="text-sm md:text-base opacity-80 leading-relaxed break-words">
            <InlineMath math={note.symbol} /> {note.meaning ? `= ${note.meaning}` : ""}
          </p>
        ))}
      </div>
    )}
  </GlassCard>
);

const CopyButton = ({ value }) => {
  const [copied, setCopied] = React.useState(false);

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
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  if (!code) return null;

  const lines = code.replace(/\t/g, "  ").split("\n");
  const visibleLines = expanded ? lines : lines.slice(0, maxCollapsedLines);
  const hiddenCount = Math.max(lines.length - maxCollapsedLines, 0);

  return (
    <GlassCard className="overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-[rgb(var(--foreground-rgb))]/10 p-4 md:p-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-bold break-words">{title || "Code Snippet"}</h3>
          <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] opacity-60">
            {language}
          </p>
          {description && (
            <p className="mt-2 text-sm md:text-base opacity-80 max-w-3xl">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
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
                className="grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr] hover:bg-white/5 min-w-[640px]"
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

const RichTextCard = ({
  title,
  body,
  paragraphs = [],
  accent = "from-pink-500/15 to-cyan-500/15",
}) => {
  const normalizedParagraphs =
    paragraphs.length > 0
      ? paragraphs
      : body
      ? Array.isArray(body)
        ? body
        : [body]
      : [];

  if (!title && !normalizedParagraphs.length) return null;

  return (
    <InfoCard title={title} accent={accent}>
      <div className="space-y-3">
        {normalizedParagraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </InfoCard>
  );
};

const MetricsSection = ({ title, subtitle, metrics = [] }) => {
  if (!metrics.length) return null;

  return (
    <section className="w-full mb-12">
      {(title || subtitle) && <SectionTitle subtitle={subtitle}>{title || "Metrics"}</SectionTitle>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            label={metric.label}
            note={metric.note}
          />
        ))}
      </div>
    </section>
  );
};

const ButtonLinks = ({ githubLink, externalLink, links = [] }) => {
  const normalizedLinks = [...links];

  if (githubLink) {
    normalizedLinks.unshift({
      label: "GitHub",
      href: githubLink,
      kind: "github",
    });
  }

  if (externalLink) {
    normalizedLinks.push({
      label: "External Link",
      href: externalLink,
      kind: "external",
    });
  }

  if (!normalizedLinks.length) return null;

  return (
    <section className="w-full pb-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {normalizedLinks.map((link, index) => {
          const isGithub = link.kind === "github";
          const isPrimary = link.kind === "external" || link.variant === "primary";

          return (
            <Link
              key={index}
              href={link.href}
              target={link.target || "_blank"}
              className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base font-semibold border border-[rgb(var(--foreground-rgb))]/20 shadow-md hover:-translate-y-0.5 transition ${
                isPrimary
                  ? "bg-dark text-white dark:bg-light dark:text-dark"
                  : "bg-white/80 dark:bg-white/5"
              }`}
            >
              {isGithub && (
                <span className="w-5">
                  <GithubIcon />
                </span>
              )}

              {link.label}

              {!isGithub && (
                <span className="w-5">
                  <LinkArrow className="fill-current" />
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const TwoColumnInfo = ({
  left,
  right,
  leftAccent = "from-pink-500/15 to-cyan-500/15",
  rightAccent = "from-cyan-500/15 to-indigo-500/15",
}) => {
  if (!left && !right) return null;

  return (
    <section className="w-full mb-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {left ? (
          <RichTextCard
            title={left.title}
            body={left.body}
            paragraphs={left.paragraphs || []}
            accent={left.accent || leftAccent}
          />
        ) : (
          <div className="hidden xl:block" />
        )}

        {right ? (
          <RichTextCard
            title={right.title}
            body={right.body}
            paragraphs={right.paragraphs || []}
            accent={right.accent || rightAccent}
          />
        ) : (
          <div className="hidden xl:block" />
        )}
      </div>
    </section>
  );
};

const renderSection = (section, index, pageTitle) => {
  if (!section || !section.type) return null;

  switch (section.type) {
    case "heroMedia":
    case "mediaStrip":
      return (
        <HeroStrip
          key={index}
          items={section.items || []}
          title={pageTitle}
          sectionTitle={section.title}
          sectionSubtitle={section.subtitle}
          caption={section.caption}
          maxItems={section.maxItems || 4}
        />
      );

    case "text":
    case "infoCard":
      return (
        <section key={index} className="w-full mb-12">
          <RichTextCard
            title={section.title}
            body={section.body}
            paragraphs={section.paragraphs || []}
            accent={section.accent || "from-pink-500/15 to-cyan-500/15"}
          />
        </section>
      );

    case "twoColumn":
      return (
        <TwoColumnInfo
          key={index}
          left={section.left}
          right={section.right}
          leftAccent={section.leftAccent}
          rightAccent={section.rightAccent}
        />
      );

    case "methodsTools":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle || "Core methodologies and software or experimental stack used in this project."}>
            {section.title || "Methods & Tools"}
          </SectionTitle>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <InfoCard title={section.methodsTitle || "Methods"}>
              <BulletList items={section.methods || []} />
            </InfoCard>

            <InfoCard
              title={section.toolsTitle || "Tools Used"}
              accent={section.toolsAccent || "from-indigo-500/15 to-cyan-500/15"}
            >
              <TagList items={section.tools || []} />
            </InfoCard>
          </div>
        </section>
      );

    case "bulletList":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle}>{section.title || "Highlights"}</SectionTitle>
          <GlassCard className="p-5 md:p-6">
            <BulletList items={section.items || []} />
          </GlassCard>
        </section>
      );

    case "tagList":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle}>{section.title || "Tags"}</SectionTitle>
          <GlassCard className="p-5 md:p-6">
            <TagList items={section.items || []} />
          </GlassCard>
        </section>
      );

    case "workflow":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle || "A clean, stepwise breakdown of the simulation, modeling, or experimental pipeline."}>
            {section.title || "Technical Workflow"}
          </SectionTitle>

          <GlassCard className="p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5">
              {(section.steps || []).map((step, stepIndex) => (
                <WorkflowCard key={stepIndex} step={step} index={stepIndex} />
              ))}
            </div>
          </GlassCard>
        </section>
      );

    case "equations":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle || "Key equations can be rendered directly from LaTeX for a professional technical presentation."}>
            {section.title || "Governing Equations"}
          </SectionTitle>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {(section.items || []).map((eq, eqIndex) => (
              <EquationCard
                key={eqIndex}
                title={eq.title}
                latex={eq.latex}
                description={eq.description}
                inlineNotes={eq.inlineNotes || []}
              />
            ))}
          </div>
        </section>
      );

    case "code":
    case "codeBlocks":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle || "Simulation scripts, solver fragments, controller logic, or post-processing routines can be expanded inline with numbered lines."}>
            {section.title || "Simulation Code"}
          </SectionTitle>

          <div className="space-y-6">
            {(section.items || []).map((block, blockIndex) => (
              <CodeBlockCard
                key={blockIndex}
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
      );

    case "metrics":
      return (
        <MetricsSection
          key={index}
          title={section.title || "Metrics"}
          subtitle={section.subtitle}
          metrics={section.items || []}
        />
      );

    case "results":
      return (
        <section key={index} className="w-full mb-12">
          <SectionTitle subtitle={section.subtitle || "Quantitative performance indicators and the most important engineering takeaways."}>
            {section.title || "Key Results"}
          </SectionTitle>

          {section.metrics?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {section.metrics.map((metric, metricIndex) => (
                <MetricCard
                  key={metricIndex}
                  value={metric.value}
                  label={metric.label}
                  note={metric.note}
                />
              ))}
            </div>
          )}

          {section.items?.length > 0 && (
            <GlassCard className="p-5 md:p-6">
              <BulletList items={section.items} />
            </GlassCard>
          )}
        </section>
      );

    case "outputsFuture":
      return (
        <section key={index} className="w-full mb-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {section.outputs?.length > 0 && (
              <InfoCard title={section.outputsTitle || "Outputs"}>
                <BulletList items={section.outputs} />
              </InfoCard>
            )}

            {section.futureDirections?.length > 0 && (
              <InfoCard
                title={section.futureTitle || "Future Directions"}
                accent={section.futureAccent || "from-indigo-500/15 to-pink-500/15"}
              >
                <BulletList items={section.futureDirections} />
              </InfoCard>
            )}
          </div>
        </section>
      );

    case "links":
      return (
        <ButtonLinks
          key={index}
          githubLink={section.githubLink}
          externalLink={section.externalLink}
          links={section.items || []}
        />
      );

    default:
      return null;
  }
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

  quickSummary,
  problem,
  role,
  methods = [],
  tools = [],
  workflow = [],
  keyResults = [],
  metrics = [],
  governingEquations = [],
  codeBlocks = [],
  outputs = [],
  futureDirections = [],
  githubLink,
  externalLink,
  backLink = "/projects",

  sections = [],
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
            shortLabel: heroCaption || "Panel",
            cover: false,
          },
        ]
      : [];

  const derivedLegacySections = useMemo(() => {
    const legacySections = [];

    if (normalizedHeroMedia.length > 0) {
      legacySections.push({
        type: "heroMedia",
        items: normalizedHeroMedia,
      });
    }

    if (problem || role) {
      legacySections.push({
        type: "twoColumn",
        left: problem
          ? {
              title: "Problem / Motivation",
              body: problem,
            }
          : null,
        right: role
          ? {
              title: "My Role",
              body: role,
              accent: "from-cyan-500/15 to-indigo-500/15",
            }
          : null,
      });
    }

    if (methods.length > 0 || tools.length > 0) {
      legacySections.push({
        type: "methodsTools",
        title: "Methods & Tools",
        subtitle:
          "Core methodologies and software or experimental stack used in this project.",
        methods,
        tools,
      });
    }

    if (workflow.length > 0) {
      legacySections.push({
        type: "workflow",
        title: "Technical Workflow",
        subtitle:
          "A clean, stepwise breakdown of the simulation, modeling, or experimental pipeline.",
        steps: workflow,
      });
    }

    if (governingEquations.length > 0) {
      legacySections.push({
        type: "equations",
        title: "Governing Equations",
        subtitle:
          "Key equations can be rendered directly from LaTeX for a professional technical presentation.",
        items: governingEquations,
      });
    }

    if (codeBlocks.length > 0) {
      legacySections.push({
        type: "codeBlocks",
        title: "Simulation Code",
        subtitle:
          "Simulation scripts, solver fragments, controller logic, or post-processing routines can be expanded inline with numbered lines.",
        items: codeBlocks,
      });
    }

    if (keyResults.length > 0 || metrics.length > 0) {
      legacySections.push({
        type: "results",
        title: "Key Results",
        subtitle:
          "Quantitative performance indicators and the most important engineering takeaways.",
        metrics,
        items: keyResults,
      });
    }

    if (outputs.length > 0 || futureDirections.length > 0) {
      legacySections.push({
        type: "outputsFuture",
        outputs,
        futureDirections,
      });
    }

    if (githubLink || externalLink) {
      legacySections.push({
        type: "links",
        githubLink,
        externalLink,
      });
    }

    return legacySections;
  }, [
    normalizedHeroMedia,
    problem,
    role,
    methods,
    tools,
    workflow,
    governingEquations,
    codeBlocks,
    keyResults,
    metrics,
    outputs,
    futureDirections,
    githubLink,
    externalLink,
  ]);

  const activeSections = sections.length > 0 ? sections : derivedLegacySections;

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
            className="w-full max-w-none rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-gradient-to-br from-pink-500/5 via-white/40 to-cyan-500/5 dark:via-zinc-900/40 p-4 md:p-6 text-center md:text-justify lg:text-justify shadow-lg mb-8 backdrop-blur-md"
          >
            <div className="space-y-4">
              
              {/* --- INTRODUCTION SECTION --- */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-600 dark:text-pink-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm md:text-medium lg:text-lg font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
                    Introduction
                  </h4>
                </div>
                
                <div className="md:pl-11 text-zinc-800 dark:text-zinc-300">
                  {Array.isArray(quickSummary.intro) ? (
                    quickSummary.intro.map((p, i) => (
                      <p key={i} className="text-base leading-snug mb-3 last:mb-0 text-normal">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-base leading-snug text-normal">{quickSummary.intro}</p>
                  )}
                </div>
              </section>

              <div className="border-t border-zinc-300 dark:border-zinc-700 mx-2"></div>

              {/* --- SCOPE OF THE STUDY SERIES --- */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
                    </svg>
                  </div>
                  <h4 className="text-sm md:text-medium lg:text-lg font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
                    Scope of the Study Series
                  </h4>
                </div>

                <div className="md:pl-11 text-zinc-800 dark:text-zinc-300">
                  {Array.isArray(quickSummary.scope) ? (
                    quickSummary.scope.map((p, i) => (
                      <p key={i} className="text-base leading-snug mb-3 last:mb-0">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-base leading-snug">{quickSummary.scope}</p>
                  )}
                </div>
              </section>
              
            </div>
          </motion.div>
        )}

        {activeSections.map((section, index) => renderSection(section, index, title))}
      </Layout>
    </main>
  );
}

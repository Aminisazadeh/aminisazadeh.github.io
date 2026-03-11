import React, { useMemo, useState } from "react";
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

const panelLabels = ["(A)", "(B)", "(C)", "(D)"];

const shellGradient =
  "from-pink-500/12 via-cyan-500/12 to-indigo-500/12";

const sectionDividerGradient =
  "bg-gradient-to-r from-pink-500/25 via-cyan-500/45 to-indigo-500/25";

const gradientSurface =
  "bg-gradient-to-br from-pink-500/8 via-cyan-500/6 to-indigo-500/8 dark:from-pink-500/10 dark:via-cyan-500/8 dark:to-indigo-500/10";

const softPanelSurface =
  "bg-white/60 dark:bg-white/[0.04]";

const sharedButtonClass =
  "inline-flex h-10 items-center justify-center rounded-xl border border-[rgb(var(--foreground-rgb))]/20 px-4 text-xs md:text-sm font-semibold transition";

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

const GlowShell = ({ children, className = "", glow = shellGradient }) => (
  <motion.div
    {...fadeUp}
    className={`relative overflow-hidden rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${className}`}
  >
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-r ${glow} blur-3xl`}
    />
    <div className="relative">{children}</div>
  </motion.div>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    {...fadeUp}
    className={`rounded-3xl border border-[rgb(var(--foreground-rgb))]/15 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${className}`}
  >
    {children}
  </motion.div>
);

const InfoCard = ({
  title,
  children,
  accent = shellGradient,
  className = "",
}) => (
  <GlowShell className={`p-5 md:p-6 ${className}`} glow={accent}>
    {title && <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>}
    <div className="text-sm md:text-base leading-relaxed opacity-90">{children}</div>
  </GlowShell>
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

const Separator = ({ className = "my-8 md:my-10" }) => (
  <div className={`h-1 w-full rounded-full ${sectionDividerGradient} ${className}`} />
);

const PanelBadge = ({ children }) => (
  <span className="inline-flex min-h-[2.25rem] items-center justify-center rounded-md bg-zinc-800/95 px-3 py-1 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white shadow-sm">
    {children}
  </span>
);

const PanelTitle = ({ children }) => (
  <div className="flex min-h-[3.25rem] items-center justify-center rounded-lg border border-[rgb(var(--foreground-rgb))]/10 bg-transparent px-3 py-2 text-center text-sm sm:text-base md:text-lg font-semibold shadow-sm">
    {children}
  </div>
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

      <GlowShell className="p-4 sm:p-5 md:p-6" glow={shellGradient}>
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
                  <PanelBadge>{panelLabels[index] || `(${index + 1})`}</PanelBadge>
                </div>

                <div className="relative aspect-square rounded-[1.1rem] overflow-hidden bg-white/70 dark:bg-white/[0.04]">
                  <MediaFrame item={item} priority={index < 2} />
                </div>

                {(item.shortLabel || item.caption) && (
                  <div className="mt-3 space-y-2">
                    {item.shortLabel && <PanelTitle>{item.shortLabel}</PanelTitle>}
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
      </GlowShell>
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
  <GlowShell className="p-5 md:p-6">
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
  </GlowShell>
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
      className={`${sharedButtonClass} bg-white/80 dark:bg-white/5 hover:scale-[1.06]`}
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
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!code) return null;

  const lines = code.replace(/\t/g, "  ").split("\n");

  return (
    <GlowShell className={`overflow-hidden border-2 border-[rgb(var(--foreground-rgb))]/10 ${gradientSurface}`}>
      <div className={`flex flex-col gap-4 p-4 md:p-5 sm:flex-row sm:items-start sm:justify-between ${gradientSurface} bg-white/5 dark:bg-white/[0.03]`}>
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-bold">{title || "Code Snippet"}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-60">{language}</p>
          {description && <p className="mt-2 text-sm md:text-base opacity-80">{description}</p>}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <CopyButton value={code} />
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className={`${sharedButtonClass} bg-white/80 dark:bg-white/5 hover:scale-[1.06]`}
          >
            {expanded ? "Hide Code" : "Show Code"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="overflow-x-auto border-t border-[rgb(var(--foreground-rgb))]/10">
          <div className="min-w-full bg-[#0b1020] text-slate-100">
            <pre className="m-0 p-0">
              {lines.map((line, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[64px_minmax(0,1fr)] border-b border-white/5 text-xs sm:text-sm md:text-[15px] leading-6"
                >
                  <span className="select-none px-4 py-1.5 text-right text-slate-500 bg-white/[0.03] border-r border-white/5">
                    {idx + 1}
                  </span>
                  <code className="px-4 py-1.5 whitespace-pre font-mono">
                    {line || " "}
                  </code>
                </div>
              ))}
            </pre>
          </div>
        </div>
      )}
    </GlowShell>
  );
};

const RichTextCard = ({
  title,
  body,
  paragraphs = [],
  accent = shellGradient,
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
  leftAccent = shellGradient,
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

const InlineLinksRow = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className={`rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 p-4 md:p-5 ${gradientSurface} ${softPanelSurface}`}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {items.map((link, index) => {
          const isGithub = link.kind === "github";
          const isPrimary = link.kind === "external" || link.variant === "primary";

          return (
            <Link
              key={index}
              href={link.href}
              target={link.target || "_blank"}
              className={`inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base font-semibold border border-[rgb(var(--foreground-rgb))]/20 shadow-md hover:-translate-y-0.5 transition ${
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
    </div>
  );
};

const CompositeNarrative = ({ content = [] }) => (
  <div className="space-y-5 text-left xl:text-justify text-base md:text-lg leading-relaxed">
    {content.map((item, i) => {
      if (item.type === "equation") {
        return (
          <div
            key={i}
            className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 bg-black/20 dark:bg-black/25 px-4 py-6 overflow-x-auto"
          >
            <BlockMath math={item.latex} />
          </div>
        );
      }

      if (item.type === "equationInline") {
        return <CompositeEquationInline key={i} latex={item.latex} />;
      }

      if (item.type === "equationInlineWithDefs") {
        return (
          <CompositeEquationInlineWithDefs
            key={i}
            latex={item.latex}
            definitions={item.definitions || []}
          />
        );
      }

      return <p key={i}>{item.text}</p>;
    })}
  </div>
);

const CompositeEquationInline = ({ latex }) => {
  if (!latex) return null;

  return (
    <div className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 bg-zinc-300 dark:bg-transparent px-4 md:px-5 py-5 md:py-6 overflow-x-auto">
      <BlockMath math={latex} />
    </div>
  );
};

const CompositeEquationInlineWithDefs = ({
  latex,
  definitions = [],
}) => {
  if (!latex) return null;

  return (
    <div className="rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 bg-zinc-300 dark:bg-transparent px-4 md:px-5 py-5 md:py-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_auto_2fr] items-center gap-4 md:gap-5">
        {/* Left: equation */}
        <div className="flex items-center justify-center overflow-x-auto">
          <BlockMath math={latex} />
        </div>

        {/* Middle: separator */}
        <div className="hidden md:flex items-stretch justify-center self-stretch">
          <div className="w-px h-full bg-[rgb(var(--foreground-rgb))]/15" />
        </div>

        {/* Right: definitions */}
        <div className="text-sm md:text-base leading-relaxed space-y-2">
          {definitions.map((item, idx) => (
            <div key={idx} className="break-words">
              {item.latex ? <InlineMath math={item.latex} /> : null}
              {item.text ? <span>{item.text}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CompositeVisualGrid = ({ items = [] }) => {
  const normalizedItems = normalizeMediaItems(items);

  return (
    <div
      className={`rounded-[2rem] border border-[rgb(var(--foreground-rgb))]/10 p-4 md:p-6 ${gradientSurface} ${softPanelSurface}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
        {normalizedItems.map((img, imgIdx) => (
          <div
            key={imgIdx}
            className={`flex h-full flex-col rounded-2xl border border-[rgb(var(--foreground-rgb))]/10 p-3 md:p-4 shadow-sm ${gradientSurface} ${softPanelSurface}`}
          >
            {/* Top label */}
            <div className="mb-3 flex justify-center">
              <PanelBadge>{panelLabels[imgIdx] || `(${imgIdx + 1})`}</PanelBadge>
            </div>

            {/* Image zone */}
            <div className="relative mb-3 aspect-square rounded-xl overflow-hidden border border-[rgb(var(--foreground-rgb))]/5 bg-transparent">
              <MediaFrame
                item={{
                  src: img.src,
                  alt: img.alt || img.label || "Composite panel",
                  type: img.type || "image",
                  cover: img.cover ?? true,
                }}
                priority={imgIdx < 2}
              />
            </div>

            {/* Bottom content zone */}
            <div className="mt-auto flex flex-1 flex-col">
              {img.label && <PanelTitle>{img.label}</PanelTitle>}

              <div className="mt-2 flex flex-1 items-start">
                {img.description && (
                  <p className="w-full text-center text-xs sm:text-sm md:text-base opacity-80 leading-snug">
                    {img.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompositeBlock = ({ title, subtitle, subSections = [] }) => (
  <section className="w-full mb-12">
    <SectionTitle subtitle={subtitle}>{title}</SectionTitle>

    <GlowShell className={`p-6 md:p-8 lg:p-10 ${gradientSurface}`} glow={shellGradient}>
      <div className="relative flex flex-col">
        {subSections.map((sub, subIdx) => {
          if (sub.type === "narrative") {
            return (
              <div key={subIdx}>
                <CompositeNarrative content={sub.content || []} />
              </div>
            );
          }

          if (sub.type === "visualGrid") {
            return (
              <div key={subIdx}>
                <Separator />
                <CompositeVisualGrid items={sub.items || []} />
              </div>
            );
          }

          if (sub.type === "equationInline") {
            return (
              <div key={subIdx}>
                <Separator />
                <CompositeEquationInline latex={sub.latex} />
              </div>
            );
          }

          if (sub.type === "equationInlineWithDefs") {
            return (
              <div key={subIdx}>
                <Separator />
                <CompositeEquationInlineWithDefs
                  latex={sub.latex}
                  definitions={sub.definitions || []}
                />
              </div>
            );
          }

          if (sub.type === "codeEnd") {
            return (
              <div key={subIdx}>
                <Separator />
                <CodeBlockCard
                  title={sub.title}
                  language={sub.language}
                  code={sub.code}
                  description={sub.description}
                  defaultExpanded={sub.defaultExpanded ?? false}
                />
              </div>
            );
          }

          if (sub.type === "linksRow") {
            return (
              <div key={subIdx}>
                <Separator />
                <InlineLinksRow items={sub.items || []} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </GlowShell>
  </section>
);

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
            accent={section.accent || shellGradient}
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

    case "compositeBlock":
      return (
        <CompositeBlock
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          subSections={section.subSections || []}
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
          <GlowShell className="p-5 md:p-8 mb-12" glow={shellGradient}>
            <div className="space-y-6">
              <section className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/20 text-pink-600 dark:text-pink-400 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm md:text-lg font-bold uppercase tracking-[0.2em]">
                    Introduction
                  </h4>
                </div>

                <div className="text-center md:text-justify md:pl-12">
                  {Array.isArray(quickSummary.intro) ? (
                    quickSummary.intro.map((p, i) => (
                      <p key={i} className="text-base md:text-lg leading-relaxed mb-4 last:mb-0">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-base md:text-lg leading-relaxed">{quickSummary.intro}</p>
                  )}
                </div>
              </section>

              <div className="border-t border-[rgb(var(--foreground-rgb))]/10 mx-2" />

              <section className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
                    </svg>
                  </div>
                  <h4 className="text-sm md:text-lg font-bold uppercase tracking-[0.2em]">
                    Scope of the Study Series
                  </h4>
                </div>

                <div className="text-center md:text-justify md:pl-12">
                  {Array.isArray(quickSummary.scope) ? (
                    quickSummary.scope.map((p, i) => (
                      <p key={i} className="text-base md:text-lg leading-relaxed mb-4 last:mb-0">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-base md:text-lg leading-relaxed">{quickSummary.scope}</p>
                  )}
                </div>
              </section>

              <div className="border-t border-[rgb(var(--foreground-rgb))]/10 mx-2" />

              <section className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="text-sm md:text-lg font-bold uppercase tracking-[0.2em]">
                    Tools Used
                  </h4>
                </div>

                <div className="md:pl-12">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {(Array.isArray(quickSummary.tools)
                      ? quickSummary.tools
                      : quickSummary.toolsUsed || []
                    ).map((tool, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-full border border-[rgb(var(--foreground-rgb))]/10 bg-white/40 dark:bg-white/5 text-sm md:text-base font-medium shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </GlowShell>
        )}

        {activeSections.map((section, index) => renderSection(section, index, title))}
      </Layout>
    </main>
  );
}

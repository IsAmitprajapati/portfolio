"use client";

import React from "react";
import { Cpu, Cloud, Code } from "lucide-react";

// Custom inline Github icon
const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Inline SVG Icon components for maximum reliability and styling
const HtmlIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M1.5 22L0 2h24l-1.5 20L12 24zM4 5l1.2 12.5L12 19.3l6.8-1.8L20 5zM12 7.5H8v3h4v3H8v3h8v-9z"/>
  </svg>
);

const CssIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M1.5 22L0 2h24l-1.5 20L12 24zM4 5l1.2 12.5L12 19.3l6.8-1.8L20 5zM12 7.5h4.5l-.5 4.5H12v3h4l-.4 3L12 19l-3.6-1-.2-2.5h-3l.3 4.5 6.5 1.8 6.5-1.8 1.2-12.5H6.2l-.2-3h14z"/>
  </svg>
);

const JSIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M24 0v24H0V0h24zM19.7 13.1c-.5-.3-1-.6-1.7-.8-.7-.2-1.1-.4-1.4-.6-.2-.1-.3-.3-.3-.6 0-.3.2-.5.5-.6.3-.1.7-.2 1.2-.2.6 0 1.1.2 1.5.5.2.1.5.1.7-.1l1.2-1.2c.2-.2.2-.5 0-.7-1.1-.9-2.4-1.3-3.9-1.3-1.6 0-2.9.5-3.8 1.4-.9.9-1.3 2.1-1.3 3.5 0 1.3.4 2.4 1.3 3.1.9.8 2.1 1.3 3.6 1.7 1.2.3 2 .6 2.4.9.4.3.6.7.6 1.2 0 .6-.3 1-.8 1.3-.6.3-1.3.4-2.2.4-1.1 0-2.1-.3-2.9-.9-.2-.2-.5-.1-.7.1l-1.4 1.3c-.2.2-.2.5 0 .7 1.4 1.2 3.1 1.8 5.1 1.8 2 0 3.6-.5 4.6-1.6 1-1 1.5-2.4 1.5-4 0-1.6-.5-2.8-1.5-3.5zm-8.8-4.5c0-.4-.3-.7-.7-.7H1.7c-.4 0-.7.3-.7.7v12.7c0 .4.3.7.7.7h8.5c.4 0 .7-.3.7-.7v-5.2c0-.4-.3-.7-.7-.7H6.5v-2.3h3.7c.4 0 .7-.3.7-.7V8.6z" fill="currentColor"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const NodeJSIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm7 13.9l-7 3.9-7-3.9V8.1l7-3.9 7 3.9v7.8zM12 6.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm0 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 .5c-.5 0-8 6.5-8 12.5C4 18.5 7.5 24 12 24c4.5 0 8-5.5 8-11C20 7 12.5.5 12 .5zm0 20c-2.8 0-5.5-3.8-5.5-8 0-4 4.5-8.5 5.5-9.3V20.5z"/>
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 18l-4.9-6.3V18h-1.6V8.7h1.6l4.6 6v-6h1.6V18h-1.3z M10.4 8.7v4.6l-2-2.7V8.7h2z"/>
  </svg>
);

const ReactNativeIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const TailwindcssIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1-1.2 2.2-1.6 3.6-1.2.8.2 1.4.8 2 1.5 1.1 1.1 2.4 2.5 5.2 2.5 2.4 0 4-1.2 4.8-3.6-1 1.2-2.2 1.6-3.6 1.2-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.4-2.5-5.2-2.5zm-8 7c-2.4 0-4 1.2-4.8 3.6 1-1.2 2.2-1.6 3.6-1.2.8.2 1.4.8 2 1.5 1.1 1.1 2.4 2.5 5.2 2.5 2.4 0 4-1.2 4.8-3.6-1 1.2-2.2 1.6-3.6 1.2-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.4-2.5-5.2-2.5z"/>
  </svg>
);

const BootstrapIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M4 0h16c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4zm4.8 6.4v11.2h4c1.6 0 2.8-.4 3.4-1.2.6-.7.9-1.7.9-2.9 0-1.8-1-2.7-3-2.9v-.1c1.5-.3 2.3-1.2 2.3-2.6 0-1.1-.3-2-1-2.6-.7-.6-1.7-.9-3.1-.9H8.8zm2.2 2.1h1.5c.7 0 1.2.1 1.5.4.3.3.4.7.4 1.2 0 1-.6 1.5-1.9 1.5h-1.5V8.5zm0 5.1h1.8c1.3 0 2 .5 2 1.6 0 .5-.1.9-.4 1.2-.3.3-.8.4-1.5.4h-1.9v-3.2z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 0h-3.5c-2.5 0-4.5 2-4.5 4.5S6 9 8.5 9H12V0zm0 9H8.5c-2.5 0-4.5 2-4.5 4.5S6 18 8.5 18H12V9zm0 9h3.5c2.5 0 4.5-2 4.5-4.5S18 9 15.5 9H12v9zm0-18v9h3.5c2.5 0 4.5-2.0 4.5-4.5S18.5 0 16 0H12z"/>
  </svg>
);

// Behance inline SVG icon
const BehanceIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M8.2 5c-1.8 0-3.3.4-4.5 1.1C2.5 6.9 2 8 2 9.5c0 1 .3 1.8.9 2.4.6.6 1.5 1 2.7 1.2-.9.2-1.6.6-2.1 1.2-.5.6-.8 1.4-.8 2.5 0 1.5.6 2.6 1.8 3.3C5.7 20.8 7.3 21 9.2 21H16V5H8.2zm1.6 6.2H5.6v-2h4.2v2zm1.2 6.5H5.6v-2.3H11v2.3zm10.4-3.7c0 1.5-.4 2.6-1.3 3.3-.9.7-2.1 1-3.6 1-1.7 0-3-.4-3.8-1.2s-1.3-2.1-1.3-3.8c0-1.8.4-3.1 1.3-4 .8-.8 2.1-1.3 3.7-1.3 1.5 0 2.7.4 3.5 1.2.8.8 1.2 2 1.2 3.5v.7h-8.2c0 1.1.2 1.9.7 2.4.5.5 1.2.7 2.1.7.9 0 1.6-.2 2.1-.7l1.1 1.1c-.8.9-2 1.4-3.5 1.4-1.7 0-3-.5-3.8-1.4-.8-.9-1.2-2.1-1.2-3.8s.4-2.9 1.2-3.8c.8-.9 2.1-1.4 3.7-1.4s2.8.5 3.6 1.4c.9.9 1.3 2.1 1.3 3.7v.5zm-1.6-1.5c0-.8-.2-1.4-.5-1.8-.3-.4-.8-.6-1.5-.6s-1.2.2-1.5.6c-.3.4-.5 1-.5 1.8h4zM16 1.7h5V3h-5z"/>
  </svg>
);

// Whatsapp inline SVG icon
const WhatsappIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.688 2.006 14.218.98 11.585.98c-5.442 0-9.866 4.372-9.87 9.802 0 1.724.482 3.411 1.396 4.887l-.991 3.625 3.722-.962zm10.916-4.59c-.29-.145-1.716-.848-1.982-.944-.266-.096-.46-.145-.654.145-.194.291-.749.944-.92 1.138-.17.194-.341.218-.631.073-.29-.145-1.226-.453-2.337-1.439-.865-.77-1.448-1.721-1.618-2.012-.17-.29-.018-.448.127-.592.13-.13.29-.34.436-.509.145-.17.194-.291.291-.485.097-.194.048-.364-.024-.509-.073-.145-.654-1.577-.896-2.158-.236-.569-.475-.492-.654-.501-.17-.008-.364-.01-.557-.01s-.508.073-.774.364c-.266.291-1.016.994-1.016 2.424s1.04 2.81 1.185 3.004c.145.194 2.046 3.125 4.957 4.38.692.298 1.233.477 1.654.61.696.22 1.329.19 1.83.114.558-.083 1.717-.702 1.959-1.381.242-.679.242-1.261.17-1.381-.073-.12-.266-.194-.557-.34z"/>
  </svg>
);

interface SkillItem {
  title: string;
  element: React.ReactNode;
  className: string;
}

const skillsData: SkillItem[] = [
  {
    title: "HTML",
    element: <HtmlIcon />,
    className: "hover:text-red-600"
  },
  {
    title: "CSS",
    element: <CssIcon />,
    className: "hover:text-blue-600"
  },
  {
    title: "JavaScript",
    element: <JSIcon />,
    className: "hover:text-yellow-400"
  },
  {
    title: "React Js",
    element: <ReactIcon />,
    className: "hover:text-blue-400"
  },
  {
    title: "Node JS",
    element: <NodeJSIcon />,
    className: "hover:text-green-600"
  },
  {
    title: "MongoDB",
    element: <MongoDBIcon />,
    className: "hover:text-green-800"
  },
  {
    title: "NextJS",
    element: <NextjsIcon />,
    className: "hover:text-black dark:hover:text-white"
  },
  {
    title: "React Native",
    element: <ReactNativeIcon />,
    className: "hover:text-teal-400"
  },
  {
    title: "Tailwind CSS",
    element: <TailwindcssIcon />,
    className: "hover:text-blue-400"
  },
  {
    title: "Bootstrap",
    element: <BootstrapIcon />,
    className: "hover:text-purple-400"
  },
  {
    title: "Figma",
    element: <FigmaIcon />,
    className: "grayscale hover:grayscale-0 hover:text-pink-500"
  }
];

const otherTechData = [
  "GPT AI Tools", "Claude AI", "Cursor AI", "Anthropic AI", "NestJS", 
  "TypeScript", "Supabase", "Redis", "GraphQL", "Docker", "AWS (EC2/S3)"
];

export default function SkillsPanel() {
  const WhatsappLink = "https://wa.me/919307961978";

  return (
    <section id="skills" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded font-mono uppercase text-white font-bold">Libraries</span>
            Asset Presets & Swatches
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Creative Cloud Style Panel - Hover over swatches to trigger active tech signatures.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Core Swatch Palettes (8 Cols) */}
        <div className="lg:col-span-8 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
            <span className="flex items-center gap-1.5 font-bold">
              <Code size={12} className="text-red-500" />
              Core Swatches Panel
            </span>
            <span className="text-[9px] bg-bg-panel border border-border-theme px-1.5 py-0.5 rounded text-text-muted">COLOR SWATCHES</span>
          </div>

          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-bg-panel-darker border border-border-theme hover:border-zinc-500 transition-all hover:scale-105 duration-200 cursor-pointer group shadow-sm text-text-secondary hover:text-text-primary"
              >
                <div className={`transition-colors duration-200 ${skill.className}`}>
                  {skill.element}
                </div>
                <span className="text-xs font-mono mt-3 font-semibold text-center truncate w-full">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Presets & Social Links (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Preset list */}
          <div className="bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden">
            <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
              <span className="flex items-center gap-1.5 font-bold">
                <Cpu size={12} className="text-red-500" />
                AI & Cloud Presets
              </span>
            </div>
            
            <div className="p-4 flex flex-wrap gap-1.5">
              {otherTechData.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-bg-panel-darker border border-border-theme text-text-secondary hover:text-text-primary hover:border-zinc-500 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links Swatches */}
          <div className="bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden">
            <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
              <span className="flex items-center gap-1.5 font-bold">
                <Cloud size={12} className="text-red-500" />
                Social Channels Assets
              </span>
            </div>

            <div className="p-4 flex gap-3">
              {/* WhatsApp */}
              <a
                href={WhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded bg-green-600/10 hover:bg-green-600/20 text-green-500 border border-green-500/20 hover:border-green-500 transition-all flex items-center justify-center p-2 cursor-pointer"
                title="Chat on WhatsApp"
              >
                <WhatsappIcon />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/IsAmitprajapati"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded bg-text-primary/5 hover:bg-text-primary/10 text-text-secondary hover:text-text-primary border border-border-theme hover:border-zinc-500 transition-all flex items-center justify-center p-2 cursor-pointer"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/itsamitprajapati"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 border border-blue-500/20 hover:border-blue-500 transition-all flex items-center justify-center p-2 cursor-pointer"
                title="Behance Portfolio"
              >
                <BehanceIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

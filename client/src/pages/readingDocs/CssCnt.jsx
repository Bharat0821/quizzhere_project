import React from "react";
import DocLayout, { CodeBlock, Note, Table } from "./DocLayout";

const sections = [
  {
    id: "intro",
    label: "What is CSS?",
    icon: "🎨",
    content: (
      <>
        <p className="text-foreground text-lg leading-relaxed">
          CSS (Cascading Style Sheets) controls how HTML elements <strong>look and feel</strong>. Without CSS, every webpage would be plain black text on a white background.
        </p>
        <p>CSS works by selecting HTML elements and applying style rules to them. A rule has two parts: a <strong>selector</strong> (what to target) and a <strong>declaration block</strong> (what styles to apply).</p>
        <CodeBlock language="css" code={`/* Selector { property: value; } */
h1 {
  color: #3b82f6;      /* text color */
  font-size: 2rem;     /* text size */
  text-align: center;  /* alignment */
}`} />
        <Note type="tip">CSS stands for <strong>Cascading</strong> — styles flow down and can be overridden. The browser applies styles from multiple sources in a specific priority order.</Note>
      </>
    ),
  },
  {
    id: "selectors",
    label: "Selectors",
    icon: "🎯",
    content: (
      <>
        <p>Selectors define <strong>which HTML elements</strong> your styles apply to. Mastering selectors is the key to writing clean, efficient CSS.</p>
        <CodeBlock language="css" code={`/* Element selector — targets all <p> tags */
p { color: gray; }

/* Class selector — targets class="btn" */
.btn { background: blue; color: white; }

/* ID selector — targets id="hero" (one element) */
#hero { font-size: 3rem; }

/* Descendant — <a> inside .navbar */
.navbar a { text-decoration: none; }

/* Child — direct children only */
.menu > li { display: inline-block; }

/* Pseudo-class — on hover */
button:hover { opacity: 0.8; }`} />
        <Table
          headers={["Selector", "Syntax", "Targets"]}
          rows={[
            ["Element", "div", "All <div> elements"],
            ["Class", ".card", "Elements with class='card'"],
            ["ID", "#header", "Element with id='header'"],
            ["Universal", "*", "Every element"],
            ["Descendant", ".nav a", "<a> anywhere inside .nav"],
            ["Child", ".nav > a", "Direct <a> children of .nav"],
          ]}
        />
      </>
    ),
  },
  {
    id: "box-model",
    label: "Box Model",
    icon: "📦",
    content: (
      <>
        <p>Every HTML element is a rectangular box. The <strong>CSS Box Model</strong> describes the space around content using four layers — from inside out: content → padding → border → margin.</p>
        <CodeBlock language="css" code={`.box {
  width: 300px;
  height: 150px;
  padding: 10px 20px;      /* top/bottom  left/right */
  border: 2px solid #3b82f6;
  border-radius: 8px;
  margin: 0 auto;          /* centers block element */
  box-sizing: border-box;  /* standard modern border inclusion */
}`} />
        <Note type="warning">By default, <code>width</code> only sets the content area. With <code>box-sizing: border-box</code>, <code>width</code> includes padding and border too — making fluid layout rendering drastically cleaner.</Note>
        <CodeBlock language="css" code={`/* Global reset layout block */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`} />
      </>
    ),
  },
  {
    id: "flexbox",
    label: "Flexbox",
    icon: "↔️",
    content: (
      <>
        <p>Flexbox is a one-dimensional layout engine structured to align elements dynamically in a single grid row layout or item content block column.</p>
        <CodeBlock language="css" code={`.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`} />
        <Note type="tip">To achieve absolute content center layouts across axes effortlessly, inject: <code>display: flex; justify-content: center; align-items: center;</code> explicitly onto the target block container reference.</Note>
      </>
    ),
  },
  {
    id: "grid",
    label: "CSS Grid",
    icon: "🔲",
    content: (
      <>
        <p>CSS Grid is a two-dimensional matrix layout tool processing column rendering patterns alongside row layouts simultaneously.</p>
        <CodeBlock language="css" code={`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.header { grid-column: 1 / -1; } /* Span entire width */`} />
        <Note type="info">Leverage <strong>Flexbox</strong> systems for structural adjustments moving cleanly along a single baseline, and utilize <strong>CSS Grid</strong> configurations for overall composite platform shell view designs.</Note>
      </>
    ),
  },
  {
    id: "responsive",
    label: "Responsive Design",
    icon: "📱",
    content: (
      <>
        <p>Responsive workflows adjust view canvases smoothly across target user breakpoints via structural breakpoint modules.</p>
        <CodeBlock language="css" code={`/* Mobile-first layout schema */
.container { padding: 16px; }

@media (min-width: 768px) {
  .container { padding: 32px; }
}`} />
      </>
    ),
  },
  {
    id: "positioning",
    label: "Positioning",
    icon: "📌",
    content: (
      <>
        <p>The CSS <code>position</code> property isolates properties out of or within regular canvas text render sequences.</p>
        <Table
          headers={["Value", "Removed from Flow?", "Relative To"]}
          rows={[
            ["static", "No", "Normal documentation stream flows"],
            ["relative", "No", "Its immediate basic layout coordinates"],
            ["absolute", "Yes", "Nearest positioned ancestor matrix wrapper"],
            ["fixed", "Yes", "The viewport window viewport edge limits"],
            ["sticky", "No", "Its defined context scroll threshold layout block"],
          ]}
        />
      </>
    ),
  },
  {
    id: "variables",
    label: "Variables & Themes",
    icon: "🎭",
    content: (
      <>
        <p>Custom design variables simplify structural runtime changes like dark-mode switching down to simple variable value shifts.</p>
        <CodeBlock language="css" code={`:root {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
}
[data-theme="dark"] {
  --color-background: #0f172a;
}`} />
      </>
    ),
  },
  {
    id: "animations",
    label: "Transitions & Animations",
    icon: "✨",
    content: (
      <>
        <p>Transitions optimize page interface state changes, scaling layout fidelity using lightweight hardware accelerations.</p>
        <Note type="info">For optimized interface animations, focus transformations exclusively on <code>transform</code> parameters or <code>opacity</code> metrics to prevent layout recalculation stuttering.</Note>
      </>
    ),
  },
];

const navLinks = [
  { path: "/html-docs", icon: "🌐", label: "HTML Notes" },
  { path: "/js-docs", icon: "⚡", label: "JS Notes" },
];

const CssDocs = () => (
  <DocLayout
    title="CSS Notes"
    color="blue"
    icon="🎨"
    sections={sections}
    navLinks={navLinks}
  />
);

export default CssDocs;
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
button:hover { opacity: 0.8; }

/* Pseudo-class — first child */
li:first-child { font-weight: bold; }

/* Pseudo-element — first line of text */
p::first-line { font-variant: small-caps; }

/* Attribute selector */
input[type="email"] { border-color: blue; }

/* Multiple selectors */
h1, h2, h3 { font-family: "Inter", sans-serif; }`} />
        <Table
          headers={["Selector", "Syntax", "Targets"]}
          rows={[
            ["Element", "div", "All <div> elements"],
            ["Class", ".card", "Elements with class='card'"],
            ["ID", "#header", "Element with id='header'"],
            ["Universal", "*", "Every element"],
            ["Descendant", ".nav a", "<a> anywhere inside .nav"],
            ["Child", ".nav > a", "Direct <a> children of .nav"],
            ["Adjacent", "h1 + p", "<p> immediately after <h1>"],
            ["Pseudo-class", "a:hover", "Link on mouse hover"],
            ["Pseudo-element", "p::after", "Virtual element after <p>"],
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
  /* Content area */
  width: 300px;
  height: 150px;

  /* Space INSIDE the border */
  padding: 20px;           /* all sides */
  padding: 10px 20px;      /* top/bottom  left/right */
  padding: 5px 10px 15px 20px;  /* top right bottom left */

  /* The visible border */
  border: 2px solid #3b82f6;
  border-radius: 8px;      /* rounded corners */

  /* Space OUTSIDE the border */
  margin: 16px;
  margin: 0 auto;          /* centers a block element */

  /* box-sizing: border-box makes width include padding+border */
  box-sizing: border-box;
}`} />
        <Note type="warning">By default, <code>width</code> only sets the content area. With <code>box-sizing: border-box</code>, <code>width</code> includes padding and border too — far more intuitive. Most modern CSS resets apply this globally.</Note>
        <CodeBlock language="css" code={`/* Global reset — add to top of your CSS */
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
        <p>Flexbox is a one-dimensional layout system — it arranges items in a <strong>row or column</strong>. It's the go-to for navbars, card rows, centering content, and any horizontal/vertical alignment.</p>
        <CodeBlock language="css" code={`.container {
  display: flex;

  /* Direction */
  flex-direction: row;           /* default: left to right */
  flex-direction: column;        /* top to bottom */
  flex-direction: row-reverse;   /* right to left */

  /* Alignment on MAIN axis (row = horizontal) */
  justify-content: flex-start;   /* default */
  justify-content: center;
  justify-content: flex-end;
  justify-content: space-between; /* equal gaps between */
  justify-content: space-around;

  /* Alignment on CROSS axis (row = vertical) */
  align-items: stretch;    /* default */
  align-items: center;     /* vertically centered */
  align-items: flex-start;
  align-items: flex-end;

  /* Wrapping */
  flex-wrap: nowrap;   /* default: single line */
  flex-wrap: wrap;     /* wrap to next line */

  /* Gap between items */
  gap: 16px;
  gap: 8px 16px;  /* row-gap column-gap */
}`} />
        <CodeBlock language="css" code={`/* Child item properties */
.item {
  flex: 1;            /* grow to fill available space equally */
  flex: 0 0 200px;    /* fixed 200px, don't grow or shrink */
  flex-grow: 2;       /* grow twice as much as siblings */
  order: -1;          /* appear before others */
  align-self: center; /* override align-items for this item */
}

/* Perfect centering */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}`} />
        <Note type="tip">The most common use of Flexbox: center something both horizontally and vertically — use <code>display:flex; justify-content:center; align-items:center;</code> on the parent.</Note>
      </>
    ),
  },
  {
    id: "grid",
    label: "CSS Grid",
    icon: "🔲",
    content: (
      <>
        <p>CSS Grid is a <strong>two-dimensional</strong> layout system — it handles both rows AND columns simultaneously. Perfect for page layouts, dashboards, and image galleries.</p>
        <CodeBlock language="css" code={`.grid-container {
  display: grid;

  /* Define columns */
  grid-template-columns: 200px 1fr 1fr;     /* fixed + flexible */
  grid-template-columns: repeat(3, 1fr);    /* 3 equal columns */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* responsive */

  /* Define rows */
  grid-template-rows: 80px 1fr 60px;

  /* Gap */
  gap: 24px;
  column-gap: 16px;
  row-gap: 32px;
}

/* Placing items */
.header  { grid-column: 1 / -1; }    /* span full width */
.sidebar { grid-column: 1 / 2; grid-row: 2 / 3; }
.main    { grid-column: 2 / -1; }
.footer  { grid-column: 1 / -1; }

/* Named areas (cleaner) */
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`} />
        <Note type="info">Use <strong>Flexbox</strong> for one direction (a row of buttons, a vertical nav). Use <strong>Grid</strong> for two directions (full page layout, card grids).</Note>
      </>
    ),
  },
  {
    id: "responsive",
    label: "Responsive Design",
    icon: "📱",
    content: (
      <>
        <p>Responsive design makes your site look great on <strong>any screen size</strong> — mobile, tablet, desktop. The main tools are media queries, flexible units, and fluid layouts.</p>
        <CodeBlock language="css" code={`/* Media queries — apply styles at breakpoints */
/* Mobile first (start small, add styles as screen grows) */
.container { padding: 16px; }

@media (min-width: 768px) {   /* Tablet */
  .container { padding: 32px; }
}

@media (min-width: 1024px) {  /* Desktop */
  .container {
    padding: 48px;
    max-width: 1200px;
    margin: 0 auto;
  }
}`} />
        <CodeBlock language="css" code={`/* Flexible units */
font-size: 1rem;       /* relative to root font size (usually 16px) */
font-size: 1.5em;      /* relative to parent font size */
width: 50%;            /* relative to parent width */
height: 100vh;         /* 100% of viewport height */
padding: 5vw;          /* 5% of viewport width */

/* clamp() — fluid values between a min and max */
font-size: clamp(1rem, 2.5vw, 2rem);
width: clamp(300px, 50%, 600px);`} />
        <CodeBlock language="css" code={`/* Responsive grid — automatically adjusts columns */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
/* No media queries needed! Cards fill the row,
   wrap to new lines when they'd be smaller than 280px */`} />
        <Note type="tip">Always add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code> in your HTML head — without it, media queries won't work on mobile.</Note>
      </>
    ),
  },
  {
    id: "positioning",
    label: "Positioning",
    icon: "📌",
    content: (
      <>
        <p>CSS <code>position</code> controls how elements are placed in the document flow and relative to other elements.</p>
        <CodeBlock language="css" code={`/* static — default, normal document flow */
.normal { position: static; }

/* relative — moves from its normal position, keeps its space */
.nudged {
  position: relative;
  top: 10px;    /* move down 10px */
  left: 20px;   /* move right 20px */
}

/* absolute — removed from flow, positioned relative to nearest
   non-static ancestor */
.tooltip {
  position: absolute;
  top: 100%;    /* just below parent */
  left: 0;
}

/* fixed — stays in place as user scrolls */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* sticky — normal until it hits a scroll threshold, then fixed */
.sidebar-header {
  position: sticky;
  top: 16px;    /* sticks 16px from top when scrolling */
}`} />
        <Table
          headers={["Value", "Removed from flow?", "Positioned relative to"]}
          rows={[
            ["static", "No", "Normal flow (default)"],
            ["relative", "No (space preserved)", "Its own normal position"],
            ["absolute", "Yes", "Nearest positioned ancestor"],
            ["fixed", "Yes", "Viewport (browser window)"],
            ["sticky", "No", "Scroll container"],
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
        <p>CSS custom properties (variables) let you store values once and reuse them everywhere — making theme changes as simple as updating one line.</p>
        <CodeBlock language="css" code={`/* Define variables on :root (global) */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-background: #ffffff;
  --color-text: #1a1a1a;
  --font-size-base: 16px;
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Dark theme override */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-text: #f1f5f9;
  --shadow: 0 2px 8px rgba(0,0,0,0.4);
}

/* Use variables */
.card {
  background: var(--color-background);
  color: var(--color-text);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.btn-primary {
  background: var(--color-primary);
  /* Fallback value if variable not set */
  color: var(--color-text, #000000);
}`} />
        <Note type="tip">CSS variables update dynamically — toggling a class on <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> instantly recolors your entire app without JavaScript repaints. This is how dark mode works in modern frameworks.</Note>
      </>
    ),
  },
  {
    id: "animations",
    label: "Transitions & Animations",
    icon: "✨",
    content: (
      <>
        <p>CSS animations make interfaces feel alive. <code>transition</code> is for smooth state changes; <code>animation</code> + <code>@keyframes</code> is for looping or complex sequences.</p>
        <CodeBlock language="css" code={`/* Transition — smooth change on hover/focus */
.btn {
  background: #3b82f6;
  transform: scale(1);
  transition: background 0.2s ease, transform 0.15s ease;
  /* property  duration  easing */
}
.btn:hover {
  background: #2563eb;
  transform: scale(1.05);
}

/* transition shorthand: all properties */
.card { transition: all 0.3s ease-in-out; }`} />
        <CodeBlock language="css" code={`/* Animation with @keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text {
  animation: fadeInUp 0.6s ease forwards;
}

/* Spin animation (loading spinner) */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 1s linear infinite;
}

/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.loading { animation: pulse 2s ease-in-out infinite; }`} />
        <Note type="info">For performance, only animate <code>transform</code> and <code>opacity</code>. Animating <code>width</code>, <code>height</code>, or <code>top/left</code> triggers layout recalculations and causes jank.</Note>
      </>
    ),
  },
];

const navLinks = [
  { path: "/html-docs", icon: "🌐", label: "HTML Notes" },
  { path: "/js-docs", icon: "⚡", label: "JS Notes" },
];

const CssCnt = () => (
  <DocLayout
    title="CSS Notes"
    color="blue"
    icon="🎨"
    sections={sections}
    navLinks={navLinks}
  />
);

export default CssCnt;
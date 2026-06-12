import React from "react";
import DocLayout, { CodeBlock, Note, Table } from "./DocLayout";

const sections = [
  {
    id: "intro",
    label: "What is JavaScript?",
    icon: "⚡",
    content: (
      <>
        <p className="text-foreground text-lg leading-relaxed">
          JavaScript is the <strong>programming language of the web</strong>. It makes pages interactive — handling clicks, fetching data, updating the DOM, and running logic.
        </p>
        <p>If HTML is the structure and CSS is the style, JavaScript is the <strong>behaviour</strong>. It's the only language that runs natively in every browser.</p>
        <CodeBlock language="javascript" code={`// Variables
let name = "Bharat";
const age = 22;

// Function declarations
function greet(person) {
  return \`Hello, \${person}!\`;
}`} />
      </>
    ),
  },
  {
    id: "variables",
    label: "Variables & Data Types",
    icon: "📦",
    content: (
      <>
        <p>Variables hold records inside memory storage channels. Modern JavaScript groups values into specific structural types.</p>
        <Table
          headers={["Type", "Example", "typeof execution result"]}
          rows={[
            ["String", '"Hello"', '"string"'],
            ["Number", "42", '"number"'],
            ["Boolean", "true", '"boolean"'],
            ["undefined", "let x;", '"undefined"'],
            ["null", "null", '"object" (historical runtime exception)'],
          ]}
        />
        <Note type="warning">Always check logic matrices using strict equality checks (<code>===</code>) rather than loose matching hooks (<code>==</code>) to prevent silent mutations.</Note>
      </>
    ),
  },
  {
    id: "functions",
    label: "Functions",
    icon: "🔧",
    content: (
      <>
        <p>Functions process repeatable execution logic. Arrow declarations provide concise lexical scopes.</p>
        <CodeBlock language="javascript" code={`// Arrow format definition
const divide = (a, b) => a / b;

// Default variable constraints
function power(base, exponent = 2) {
  return base ** exponent;
}`} />
      </>
    ),
  },
  {
    id: "arrays",
    label: "Arrays",
    icon: "📋",
    content: (
      <>
        <p>Arrays act as sequential item list vectors. Immutable iteration routines return transform updates without altering original datasets.</p>
        <CodeBlock language="javascript" code={`const fruits = ["apple", "banana"];
const upper = fruits.map(f => f.toUpperCase()); // Immutable transformation`} />
      </>
    ),
  },
  {
    id: "objects",
    label: "Objects",
    icon: "🗂️",
    content: (
      <>
        <p>Objects encapsulate structural data collections behind plain key-value indexing paths.</p>
        <CodeBlock language="javascript" code={`const user = { name: "Bharat", age: 22 };
const { name, age } = user; // Quick structural destructuring`} />
      </>
    ),
  },
  {
    id: "dom",
    label: "DOM Manipulation",
    icon: "🌳",
    content: (
      <>
        <p>The Document Object Model structure connects layout rendering targets directly into functional operational code blocks.</p>
        <CodeBlock language="javascript" code={`const hero = document.querySelector("#hero");
hero.classList.add("active-state-highlight");`} />
      </>
    ),
  },
  {
    id: "async",
    label: "Async JavaScript",
    icon: "⏳",
    content: (
      <>
        <p>Asynchronous operations keep execution paths non-blocking. Single-threaded systems use microtask queues to handle asynchronous calls seamlessly.</p>
        <CodeBlock language="javascript" code={`async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  return await res.json();
}`} />
      </>
    ),
  },
  {
    id: "es6",
    label: "Modern JS (ES6+)",
    icon: "🚀",
    content: (
      <>
        <p>Modern ECMAScript specifications introduce robust operational syntax layers, improving code scannability and structural parsing safely.</p>
        <CodeBlock language="javascript" code={`// Safe property lookup chaining
const city = user?.address?.city;
const currentName = user.name ?? "Anonymous";`} />
      </>
    ),
  },
  {
    id: "closures",
    label: "Closures & Scope",
    icon: "🔒",
    content: (
      <>
        <p>Closures retain physical data context links pointing towards parents, even after outer loop scope returns terminate entirely.</p>
        <Note type="info">Closures form the underlying design block that tracks internal rendering parameters across modern UI state modules like React Hooks.</Note>
      </>
    ),
  },
  {
    id: "error-handling",
    label: "Error Handling",
    icon: "🛡️",
    content: (
      <>
        <p>Graceful error validation structures catch unexpected edge exceptions without crashing main document threads.</p>
        <CodeBlock language="javascript" code={`try {
  const data = JSON.parse(inputData);
} catch (error) {
  console.error("Execution exception caught safely:", error.message);
}`} />
      </>
    ),
  },
];

const navLinks = [
  { path: "/html-docs", icon: "🌐", label: "HTML Notes" },
  { path: "/css-docs", icon: "🎨", label: "CSS Notes" },
];

const JsDocs = () => (
  <DocLayout
    title="JavaScript Notes"
    color="yellow"
    icon="⚡"
    sections={sections}
    navLinks={navLinks}
  />
);

export default JsDocs;
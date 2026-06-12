import React from "react";
import DocLayout, { CodeBlock, Note, Table } from "./DocLayout";

const sections = [
  {
    id: "intro",
    label: "What is HTML?",
    icon: "🌐",
    content: (
      <>
        <p className="text-foreground text-lg leading-relaxed">
          HTML (HyperText Markup Language) is the skeleton of every webpage. It defines the <strong>structure and meaning</strong> of web content using a system of elements and tags.
        </p>
        <p>Think of a webpage like a house: HTML is the walls, floors, and rooms. CSS is the paint and decoration. JavaScript is the electricity that makes things work.</p>
        <Note type="tip">HTML is not a programming language — it's a <strong>markup language</strong>. It describes structure, not logic.</Note>
        <CodeBlock language="html" code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`} />
        <Table
          headers={["Part", "Purpose"]}
          rows={[
            ["<!DOCTYPE html>", "Tells browser this is HTML5"],
            ["<html lang='en'>", "Root element, sets language"],
            ["<head>", "Metadata — not visible on page"],
            ["<body>", "Everything the user sees"],
          ]}
        />
      </>
    ),
  },
  {
    id: "tags",
    label: "Common Tags",
    icon: "🏷️",
    content: (
      <>
        <p>HTML has 100+ tags, but you'll use about 20 of them 90% of the time. Here are the essentials:</p>
        <Table
          headers={["Tag", "Usage", "Example"]}
          rows={[
            ["<h1>–<h6>", "Headings (h1 = biggest)", "<h1>Title</h1>"],
            ["<p>", "Paragraph", "<p>Some text</p>"],
            ["<a>", "Hyperlink", '<a href="/page">Click</a>'],
            ["<img>", "Image (self-closing)", '<img src="photo.jpg" alt="desc" />'],
            ["<ul> / <ol>", "Unordered / Ordered list", "<ul><li>Item</li></ul>"],
            ["<div>", "Generic block container", "<div class='box'>...</div>"],
            ["<span>", "Inline container", "<span>highlighted</span>"],
            ["<button>", "Clickable button", "<button>Click me</button>"],
            ["<input>", "Form input field", '<input type="text" />'],
            ["<table>", "Tabular data", "<table><tr><td>Cell</td></tr></table>"],
          ]}
        />
        <Note type="info">Tags come in pairs: an opening tag <code>&lt;p&gt;</code> and a closing tag <code>&lt;/p&gt;</code>. Some are self-closing like <code>&lt;img /&gt;</code> and <code>&lt;br /&gt;</code>.</Note>
      </>
    ),
  },
  {
    id: "attributes",
    label: "Attributes",
    icon: "⚙️",
    content: (
      <>
        <p>Attributes provide extra information about an element. They live inside the opening tag as <code>name="value"</code> pairs.</p>
        <CodeBlock language="html" code={`<a href="https://google.com" target="_blank" rel="noopener">Google</a>

<img src="logo.png" alt="Company Logo" width="200" />

<div id="hero" class="container highlight">Content</div>

<button disabled>Submit</button>`} />
        <Table
          headers={["Attribute", "Used On", "What it does"]}
          rows={[
            ["href", "<a>", "Sets the link destination"],
            ["src", "<img>, <script>", "Sets the file source"],
            ["alt", "<img>", "Fallback text for accessibility"],
            ["class", "Any element", "Applies CSS classes"],
            ["id", "Any element", "Unique identifier for JS/CSS"],
            ["type", "<input>, <button>", "Specifies the element type"],
            ["placeholder", "<input>", "Ghost text before typing"],
            ["required", "<input>", "Makes field mandatory"],
          ]}
        />
      </>
    ),
  },
  {
    id: "semantic",
    label: "Semantic HTML",
    icon: "🧠",
    content: (
      <>
        <p>Semantic elements clearly describe their <strong>meaning to both the browser and the developer</strong>. They replace meaningless <code>&lt;div&gt;</code> soup and improve accessibility + SEO.</p>
        <Note type="warning">Using <code>&lt;div&gt;</code> for everything works visually but hurts screen readers, SEO bots, and code readability.</Note>
        <CodeBlock language="html" code={`<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">
  <div class="article">...</div>
  <div class="sidebar">...</div>
</div>
<div class="footer">...</div>

<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>`} />
        <Table
          headers={["Tag", "Meaning"]}
          rows={[
            ["<header>", "Top section of page or section"],
            ["<nav>", "Navigation links"],
            ["<main>", "Primary content (only one per page)"],
            ["<article>", "Self-contained content (blog post, card)"],
            ["<section>", "Thematic grouping of content"],
            ["<aside>", "Sidebar or tangentially related content"],
            ["<footer>", "Bottom section, copyright, links"],
            ["<figure>", "Media with optional caption"],
            ["<time>", "Date/time value"],
          ]}
        />
      </>
    ),
  },
  {
    id: "forms",
    label: "Forms & Inputs",
    icon: "📝",
    content: (
      <>
        <p>Forms are how users send data to your server. The <code>&lt;form&gt;</code> element wraps inputs and defines where/how data is submitted.</p>
        <CodeBlock language="html" code={`<form action="/submit" method="POST">
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" placeholder="John Doe" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <select name="role">
    <option value="student">Student</option>
    <option value="admin">Admin</option>
  </select>

  <button type="submit">Register</button>
</form>`} />
        <Note type="tip">Always use <code>&lt;label for="id"&gt;</code> paired with <code>id</code> on your input. This links them for screen readers and expands click accessibility targets.</Note>
        <Table
          headers={["Input type", "Use case"]}
          rows={[
            ["text", "General short text"],
            ["email", "Email — validates format automatically"],
            ["password", "Hides characters while typing"],
            ["number", "Numeric input with arrows"],
            ["date", "Date picker"],
            ["file", "File upload"],
            ["checkbox", "Boolean toggle"],
            ["radio", "One choice from a group"],
          ]}
        />
      </>
    ),
  },
  {
    id: "links-media",
    label: "Links & Media",
    icon: "🔗",
    content: (
      <>
        <p>Links and media connect documents and optimize user interfaces. The <code>&lt;a&gt;</code> tag connects resources, while media tags render rich objects natively.</p>
        <CodeBlock language="html" code={`<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  Visit GitHub
</a>

<img src="hero.jpg" alt="Hero display context" width="800" height="400" loading="lazy" />

<video controls width="640">
  <source src="demo.mp4" type="video/mp4" />
</video>`} />
        <Note type="info">Always add <code>loading="lazy"</code> on images below the fold to defer loading until the viewport brings them close, optimizing initial load times.</Note>
      </>
    ),
  },
  {
    id: "tables",
    label: "Tables",
    icon: "📊",
    content: (
      <>
        <p>Use <code>&lt;table&gt;</code> only for true structural matrices of sequential column or row data, never for drawing general visual section grids.</p>
        <CodeBlock language="html" code={`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bharat</td>
      <td>92</td>
    </tr>
  </tbody>
</table>`} />
        <Table
          headers={["Element", "Role"]}
          rows={[
            ["<table>", "Wraps the table canvas"],
            ["<thead>", "Header blocks container"],
            ["<tbody>", "Body records container"],
            ["<tr>", "Individual table rows"],
            ["<th>", "Bolded header row columns"],
            ["<td>", "Standard data items text"],
          ]}
        />
      </>
    ),
  },
  {
    id: "meta-seo",
    label: "Meta & SEO",
    icon: "🔍",
    content: (
      <>
        <p>The <code>&lt;head&gt;</code> platform aggregates underlying structural instructions parsed purely by lookup scripts, spiders, and layout engines.</p>
        <CodeBlock language="html" code={`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuizzHere - Test Your Knowledge</title>
  <meta name="description" content="Take quizzes on HTML, CSS, JavaScript." />
</head>`} />
        <Note type="tip">The <code>&lt;title&gt;</code> element is the singular highest priority SEO element within structural metadata header targets. Keep it descriptive and under 60 characters.</Note>
      </>
    ),
  },
];

const navLinks = [
  { path: "/css-docs", icon: "🎨", label: "CSS Notes" },
  { path: "/js-docs", icon: "⚡", label: "JS Notes" },
];

const HtmlDocs = () => (
  <DocLayout
    title="HTML Notes"
    color="orange"
    icon="🌐"
    sections={sections}
    navLinks={navLinks}
  />
);

export default HtmlDocs;
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
        <CodeBlock language="html" code={`<!-- href: destination URL, target: open in new tab -->
<a href="https://google.com" target="_blank" rel="noopener">Google</a>

<!-- src: image path, alt: screen reader text, width: size -->
<img src="logo.png" alt="Company Logo" width="200" />

<!-- id: unique identifier, class: reusable style hook -->
<div id="hero" class="container highlight">Content</div>

<!-- disabled: makes the button non-clickable -->
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
        <CodeBlock language="html" code={`<!-- ❌ Non-semantic (hard to understand) -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">
  <div class="article">...</div>
  <div class="sidebar">...</div>
</div>
<div class="footer">...</div>

<!-- ✅ Semantic (self-documenting) -->
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
        <p>Forms are how users send data to your server — login, signup, search, checkout. The <code>&lt;form&gt;</code> element wraps inputs and defines where/how data is submitted.</p>
        <CodeBlock language="html" code={`<form action="/submit" method="POST">
  <!-- Text input -->
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" placeholder="John Doe" required />

  <!-- Email input -->
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <!-- Password -->
  <label for="pwd">Password</label>
  <input type="password" id="pwd" name="password" minlength="8" required />

  <!-- Dropdown -->
  <select name="role">
    <option value="student">Student</option>
    <option value="admin">Admin</option>
  </select>

  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female

  <!-- Checkbox -->
  <input type="checkbox" name="terms" required /> I agree to terms

  <!-- Submit -->
  <button type="submit">Register</button>
</form>`} />
        <Note type="tip">Always use <code>&lt;label for="id"&gt;</code> paired with <code>id</code> on your input. This links them for accessibility — clicking the label focuses the input.</Note>
        <Table
          headers={["Input type", "Use case"]}
          rows={[
            ["text", "General short text"],
            ["email", "Email — validates format automatically"],
            ["password", "Hides characters while typing"],
            ["number", "Numeric input with up/down arrows"],
            ["date", "Date picker"],
            ["file", "File upload"],
            ["checkbox", "Boolean toggle"],
            ["radio", "One choice from a group"],
            ["range", "Slider"],
            ["color", "Color picker"],
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
        <p>Links and media are what make the web feel alive. The <code>&lt;a&gt;</code> tag connects pages; <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, and <code>&lt;audio&gt;</code> embed media.</p>
        <CodeBlock language="html" code={`<!-- External link -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  Visit GitHub
</a>

<!-- Internal link (same site) -->
<a href="/about">About Us</a>

<!-- Anchor link (jump to section) -->
<a href="#contact">Jump to Contact</a>
<section id="contact">...</section>

<!-- Image -->
<img
  src="hero.jpg"
  alt="Hero image showing the product"
  width="800"
  height="400"
  loading="lazy"
/>

<!-- Video -->
<video controls width="640">
  <source src="demo.mp4" type="video/mp4" />
  Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
</audio>`} />
        <Note type="info">Always add <code>loading="lazy"</code> on images below the fold — it defers loading until the user scrolls near them, speeding up initial page load.</Note>
      </>
    ),
  },
  {
    id: "tables",
    label: "Tables",
    icon: "📊",
    content: (
      <>
        <p>Use <code>&lt;table&gt;</code> only for actual tabular data (rows and columns of related info), never for page layout.</p>
        <CodeBlock language="html" code={`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bharat</td>
      <td>92</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Abhishek</td>
      <td>85</td>
      <td>B+</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Average</td>
      <td>88.5</td>
    </tr>
  </tfoot>
</table>`} />
        <Table
          headers={["Element", "Role"]}
          rows={[
            ["<table>", "Wraps the entire table"],
            ["<thead>", "Header rows group"],
            ["<tbody>", "Body rows group"],
            ["<tfoot>", "Footer rows group"],
            ["<tr>", "Table row"],
            ["<th>", "Header cell (bold + centered by default)"],
            ["<td>", "Data cell"],
            ["colspan", "Span across multiple columns"],
            ["rowspan", "Span across multiple rows"],
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
        <p>The <code>&lt;head&gt;</code> section holds metadata — information about the page that browsers and search engines use but users don't see directly.</p>
        <CodeBlock language="html" code={`<head>
  <!-- Character encoding — always include -->
  <meta charset="UTF-8" />

  <!-- Responsive scaling on mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO: what appears in Google results -->
  <title>QuizzHere - Test Your Knowledge</title>
  <meta name="description" content="Take quizzes on HTML, CSS, JavaScript and more." />
  <meta name="keywords" content="quiz, html, css, javascript, learning" />

  <!-- Open Graph: how link looks when shared on social media -->
  <meta property="og:title" content="QuizzHere" />
  <meta property="og:description" content="Test your web dev skills" />
  <meta property="og:image" content="https://yoursite.com/preview.png" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />

  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css" />
</head>`} />
        <Note type="tip">The <code>&lt;title&gt;</code> tag is the single most important SEO element on your page. Keep it under 60 characters and make it descriptive.</Note>
      </>
    ),
  },
];

const navLinks = [
  { path: "/css-docs", icon: "🎨", label: "CSS Notes" },
  { path: "/js-docs", icon: "⚡", label: "JS Notes" },
];

const HtmlCnt = () => (
  <DocLayout
    title="HTML Notes"
    color="orange"
    icon="🌐"
    sections={sections}
    navLinks={navLinks}
  />
);

export default HtmlCnt;
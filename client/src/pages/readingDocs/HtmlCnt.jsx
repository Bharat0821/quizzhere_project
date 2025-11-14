import React from "react";

const HtmlCnt = () => {
  return (
    <div className="p-6 mt-12 max-w-4xl mx-auto text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        📖 Learn HTML Basics
      </h1>

      {/* Intro */}
      <p className="mb-6 text-lg leading-relaxed">
        HTML (HyperText Markup Language) is the standard markup language used to
        create web pages. It describes the structure of a webpage using{" "}
        <span className="font-semibold">elements</span> and{" "}
        <span className="font-semibold">tags</span>.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. HTML Structure</h2>
        <p className="mb-3">
          Every HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code>{" "}
          declaration, followed by the <code>&lt;html&gt;</code> element which
          contains the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}
        </pre>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Common HTML Tags</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>&lt;h1&gt; to &lt;h6&gt;</code> → Headings
          </li>
          <li>
            <code>&lt;p&gt;</code> → Paragraph
          </li>
          <li>
            <code>&lt;a href=""&gt;</code> → Link
          </li>
          <li>
            <code>&lt;img src="" alt=""&gt;</code> → Image
          </li>
          <li>
            <code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> → Lists
          </li>
          <li>
            <code>&lt;table&gt;</code> → Tables
          </li>
          <li>
            <code>&lt;form&gt;</code> → Forms (input, button, etc.)
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Attributes</h2>
        <p className="mb-3">
          HTML elements can have attributes that provide extra information. For
          example:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<a href="https://www.google.com" target="_blank">Visit Google</a>`}
        </pre>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Forms & Inputs</h2>
        <p className="mb-3">
          Forms allow users to input data. Common input types include text,
          email, password, checkbox, and radio buttons.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<form>
  <label>Name:</label>
  <input type="text" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>`}
        </pre>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Semantic Elements</h2>
        <p className="mb-3">
          Semantic tags describe the meaning of the content. They make your code
          more readable and SEO-friendly.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>&lt;header&gt;</code> → Page header
          </li>
          <li>
            <code>&lt;nav&gt;</code> → Navigation bar
          </li>
          <li>
            <code>&lt;article&gt;</code> → Article content
          </li>
          <li>
            <code>&lt;section&gt;</code> → Section of content
          </li>
          <li>
            <code>&lt;footer&gt;</code> → Page footer
          </li>
        </ul>
      </section>

      {/* Outro */}
      <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-lg shadow-lg text-center">
        <p className="font-semibold text-white">
          🎉 You’ve learned the basics of HTML! Start practicing by writing your
          own web pages.
        </p>
      </div>
    </div>
  );
};

export default HtmlCnt;

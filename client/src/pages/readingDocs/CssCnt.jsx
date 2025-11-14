import React from "react";

const CssCnt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-6 mt-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          CSS (Cascading Style Sheets)
        </h1>

        <p className="text-gray-700 leading-relaxed">
          CSS stands for <span className="font-semibold">Cascading Style Sheets</span>. 
          It is used to control the presentation, formatting, and layout of web pages. 
          While HTML structures the content, CSS makes it look attractive.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700">Why Use CSS?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Separates content (HTML) from design (CSS).</li>
          <li>Improves website speed and maintainability.</li>
          <li>Makes responsive design possible.</li>
          <li>Allows consistent styling across multiple pages.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700">Types of CSS</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Inline CSS:</span> Applied directly inside an HTML element using the <code>style</code> attribute.
          </li>
          <li>
            <span className="font-semibold">Internal CSS:</span> Written inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.
          </li>
          <li>
            <span className="font-semibold">External CSS:</span> Written in a separate <code>.css</code> file and linked using <code>&lt;link&gt;</code>.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-purple-700">CSS Syntax</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`selector {
  property: value;
}`}
        </pre>
        <p className="text-gray-700">
          Example:  
          <code className="bg-gray-100 px-2 py-1 rounded">p {"{"} color: blue; {"}"}</code>  
          → This makes all paragraphs blue.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700">Common Properties</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><code>color</code> – Sets text color</li>
          <li><code>background-color</code> – Sets background color</li>
          <li><code>font-size</code> – Defines text size</li>
          <li><code>margin</code> – Space outside element</li>
          <li><code>padding</code> – Space inside element</li>
          <li><code>border</code> – Defines borders</li>
          <li><code>display</code> – Defines how elements are displayed (block, inline, flex, grid)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700">Example</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`h1 {
  color: red;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.5;
}`}
        </pre>

        <p className="text-gray-700 mt-4">
          In this example, the <code>h1</code> headings will appear red and centered, while paragraphs 
          will have larger text and better readability.
        </p>
      </div>
    </div>
  );
};

export default CssCnt;

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
        <Note type="tip">JavaScript also runs on servers via <strong>Node.js</strong>, mobile apps via React Native, and desktop apps via Electron. One language, everywhere.</Note>
        <CodeBlock language="javascript" code={`// Your first JavaScript
console.log("Hello, World!");

// Variables
let name = "Bharat";
const age = 22;
console.log(\`My name is \${name} and I'm \${age} years old.\`);

// Function
function greet(person) {
  return \`Hello, \${person}!\`;
}
console.log(greet("QuizzHere"));`} />
      </>
    ),
  },
  {
    id: "variables",
    label: "Variables & Data Types",
    icon: "📦",
    content: (
      <>
        <p>Variables are named containers for data. JavaScript has <strong>3 ways</strong> to declare them and <strong>7 primitive types</strong>.</p>
        <CodeBlock language="javascript" code={`// var — old way, function-scoped, avoid it
var x = 10;

// let — block-scoped, can be reassigned
let score = 0;
score = 100;  // ✅ allowed

// const — block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3;   // ❌ TypeError`} />
        <Table
          headers={["Type", "Example", "typeof result"]}
          rows={[
            ["String", '"Hello"  \'World\'  `template`', '"string"'],
            ["Number", "42  3.14  -7  Infinity  NaN", '"number"'],
            ["Boolean", "true  false", '"boolean"'],
            ["undefined", "let x; (declared but no value)", '"undefined"'],
            ["null", "let x = null; (intentional empty)", '"object" (quirk!)'],
            ["BigInt", "9007199254740991n", '"bigint"'],
            ["Symbol", "Symbol('id')", '"symbol"'],
          ]}
        />
        <CodeBlock language="javascript" code={`// Type checking
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" ← famous JS bug
typeof {}          // "object"
typeof []          // "object"
typeof function(){}// "function"

// Check array specifically
Array.isArray([])  // true

// Type coercion (implicit conversion) — be careful!
"5" + 3     // "53"  (string concat)
"5" - 3     // 2     (numeric subtraction)
"5" == 5    // true  (loose equality, coerces)
"5" === 5   // false (strict equality, no coercion)`} />
        <Note type="warning">Always use <code>===</code> (strict equality) instead of <code>==</code>. Loose equality does type coercion which leads to bugs like <code>0 == false</code> being <code>true</code>.</Note>
      </>
    ),
  },
  {
    id: "functions",
    label: "Functions",
    icon: "🔧",
    content: (
      <>
        <p>Functions are reusable blocks of code. JavaScript has several ways to write them — each with different behaviour around <code>this</code> and hoisting.</p>
        <CodeBlock language="javascript" code={`// 1. Function Declaration — hoisted (can call before definition)
function add(a, b) {
  return a + b;
}

// 2. Function Expression — not hoisted
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function — concise, no own 'this'
const divide = (a, b) => a / b;

// Arrow with body
const greet = (name) => {
  const msg = \`Hello, \${name}!\`;
  return msg;
};

// 4. Default parameters
function power(base, exponent = 2) {
  return base ** exponent;
}
power(3);     // 9  (exponent defaults to 2)
power(2, 10); // 1024

// 5. Rest parameters — collect extra args into array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15

// 6. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Runs immediately!");
})();`} />
        <Note type="tip">Use <strong>arrow functions</strong> for callbacks and short expressions. Use <strong>regular functions</strong> when you need the <code>this</code> context (like object methods or event handlers in classes).</Note>
      </>
    ),
  },
  {
    id: "arrays",
    label: "Arrays",
    icon: "📋",
    content: (
      <>
        <p>Arrays are ordered lists. JavaScript arrays are dynamic — they can hold any types and grow/shrink freely. The array methods are among the most important things to learn.</p>
        <CodeBlock language="javascript" code={`const fruits = ["apple", "banana", "cherry"];

// Access
fruits[0];          // "apple"
fruits.at(-1);      // "cherry" (last item)
fruits.length;      // 3

// Add / Remove
fruits.push("date");      // add to end → ["apple","banana","cherry","date"]
fruits.pop();             // remove from end → returns "date"
fruits.unshift("avocado");// add to start
fruits.shift();           // remove from start

// Find
fruits.indexOf("banana"); // 1
fruits.includes("mango"); // false
fruits.find(f => f.startsWith("c")); // "cherry"
fruits.findIndex(f => f === "banana"); // 1

// Transform (returns NEW array, doesn't mutate)
fruits.map(f => f.toUpperCase());  // ["APPLE","BANANA","CHERRY"]
fruits.filter(f => f.length > 5);  // ["banana","cherry"]
fruits.slice(1, 3);                // ["banana","cherry"]

// Reduce (accumulate to single value)
[1,2,3,4,5].reduce((sum, n) => sum + n, 0); // 15

// Check
fruits.every(f => typeof f === "string"); // true
fruits.some(f => f === "apple");          // true

// Sort (mutates original — sort a copy)
[...fruits].sort();                     // alphabetical
[3,1,4,1,5].sort((a, b) => a - b);     // [1,1,3,4,5] ascending
[3,1,4,1,5].sort((a, b) => b - a);     // [5,4,3,1,1] descending

// Flatten
[[1,2],[3,4]].flat();           // [1,2,3,4]
[1,[2,[3,[4]]]].flat(Infinity); // [1,2,3,4]

// Spread
const combined = [...fruits, ...["elderberry", "fig"]];`} />
      </>
    ),
  },
  {
    id: "objects",
    label: "Objects",
    icon: "🗂️",
    content: (
      <>
        <p>Objects store data as <strong>key-value pairs</strong>. They're the foundation of JavaScript — almost everything is an object under the hood.</p>
        <CodeBlock language="javascript" code={`// Object literal
const user = {
  name: "Bharat",
  age: 22,
  role: "admin",
  address: {
    city: "Haryana",
    country: "India"
  },
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Access
user.name;            // "Bharat" (dot notation)
user["role"];         // "admin" (bracket notation)
user.address.city;    // "Haryana" (nested)

// Modify
user.email = "bharat@example.com";  // add property
user.age = 23;                       // update
delete user.role;                    // remove

// Check existence
"name" in user;           // true
user.hasOwnProperty("age"); // true`} />
        <CodeBlock language="javascript" code={`// Destructuring — extract into variables
const { name, age, address: { city } } = user;
console.log(name, age, city); // "Bharat" 22 "Haryana"

// With rename
const { name: userName } = user;

// Default values
const { score = 0 } = user;  // 0 since user.score is undefined

// Spread — shallow copy / merge
const copy = { ...user };
const updated = { ...user, age: 24, verified: true };

// Object methods
Object.keys(user);    // ["name", "age", "email"]
Object.values(user);  // ["Bharat", 22, "bharat@example.com"]
Object.entries(user); // [["name","Bharat"], ["age",22], ...]

// Convert entries back to object
Object.fromEntries([["a", 1], ["b", 2]]); // {a:1, b:2}`} />
      </>
    ),
  },
  {
    id: "dom",
    label: "DOM Manipulation",
    icon: "🌳",
    content: (
      <>
        <p>The DOM (Document Object Model) is a tree representation of your HTML that JavaScript can read and modify. Changing the DOM updates what the user sees in real time.</p>
        <CodeBlock language="javascript" code={`// SELECT elements
document.getElementById("hero");           // by ID
document.querySelector(".btn");            // first match (CSS selector)
document.querySelectorAll(".card");        // all matches (NodeList)
document.getElementsByClassName("item");  // by class (HTMLCollection)

// READ content
element.textContent;   // raw text (no HTML)
element.innerHTML;     // HTML string (be careful with XSS!)
element.value;         // for <input> elements

// WRITE content
element.textContent = "New Text";
element.innerHTML = "<strong>Bold</strong>";

// ATTRIBUTES
element.getAttribute("href");
element.setAttribute("href", "/new-url");
element.removeAttribute("disabled");
element.dataset.userId;   // reads data-user-id="123"

// CLASSES
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("dark");
element.classList.contains("btn");  // true/false

// STYLES
element.style.color = "red";
element.style.display = "none";  // hide
element.style.display = "block"; // show`} />
        <CodeBlock language="javascript" code={`// CREATE & INSERT elements
const card = document.createElement("div");
card.className = "card";
card.textContent = "New Card";

parent.appendChild(card);          // add as last child
parent.prepend(card);              // add as first child
parent.insertBefore(card, sibling);// insert before element
element.remove();                   // remove element

// EVENTS
button.addEventListener("click", (e) => {
  console.log("Clicked!", e.target);
});

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// Event delegation — one listener for many children
list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("Item clicked:", e.target.textContent);
  }
});`} />
        <Note type="tip">In React you rarely manipulate the DOM directly — React does it for you. But understanding DOM fundamentals makes you a much better React developer.</Note>
      </>
    ),
  },
  {
    id: "async",
    label: "Async JavaScript",
    icon: "⏳",
    content: (
      <>
        <p>JavaScript is single-threaded but handles async operations (network requests, timers, file reads) without blocking the page using an <strong>event loop</strong>.</p>
        <CodeBlock language="javascript" code={`// Callbacks (old way — "callback hell")
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

fetchData(url, function(error, data) {
  if (error) return handleError(error);
  processData(data, function(error, result) {
    // nested callbacks get messy fast...
  });
});`} />
        <CodeBlock language="javascript" code={`// Promises (cleaner)
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data loaded!");
  else reject(new Error("Failed"));
});

promise
  .then(data => console.log(data))    // "Data loaded!"
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));

// Promise combinators
Promise.all([p1, p2, p3])     // wait for ALL to resolve
Promise.race([p1, p2, p3])    // resolve/reject with FIRST
Promise.allSettled([p1, p2])  // wait for all, regardless of result`} />
        <CodeBlock language="javascript" code={`// async/await (modern — reads like sync code)
async function loadUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to load user:", error);
    throw error;
  }
}

// Usage
const user = await loadUserData(123);

// Parallel requests (don't await in sequence — it's slow!)
// ❌ Sequential (2 requests in series = slow)
const user = await fetchUser(id);
const posts = await fetchPosts(id);

// ✅ Parallel (2 requests at same time = fast)
const [user, posts] = await Promise.all([
  fetchUser(id),
  fetchPosts(id)
]);`} />
        <Note type="warning"><code>await</code> can only be used inside an <code>async</code> function (or at the top level of ES modules). Using it outside throws a SyntaxError.</Note>
      </>
    ),
  },
  {
    id: "es6",
    label: "Modern JS (ES6+)",
    icon: "🚀",
    content: (
      <>
        <p>ES6 (2015) and later versions added features that transformed how JavaScript is written. These are essential for React and modern web development.</p>
        <CodeBlock language="javascript" code={`// 1. Template Literals
const msg = \`Hello \${name}, you scored \${score}/10!\`;

// 2. Destructuring (arrays)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

// 3. Destructuring (objects)
const { name, age = 18, ...others } = user;

// 4. Spread operator
const arr2 = [...arr1, 4, 5];
const obj2 = { ...obj1, newProp: "value" };

// 5. Optional chaining — no more "cannot read property of undefined"
const city = user?.address?.city;       // undefined (not error)
const first = arr?.[0];                  // safe array access
const result = obj?.method?.();          // safe method call

// 6. Nullish coalescing — default for null/undefined only
const name = user.name ?? "Anonymous";  // "Anonymous" only if null/undefined
// vs OR: user.name || "Anonymous"       // "Anonymous" for any falsy value (0, "")

// 7. Short-circuit evaluation
const isAdmin = user && user.role === "admin";
const label = error || "No error";

// 8. Modules (ES Modules)
// export
export const PI = 3.14;
export function square(x) { return x * x; }
export default function App() { return <div/> }

// import
import App from "./App";                  // default
import { PI, square } from "./math";     // named
import * as math from "./math";           // all named as namespace
import { square as sq } from "./math";   // renamed`} />
        <CodeBlock language="javascript" code={`// 9. Classes
class Animal {
  #name;  // private field

  constructor(name, sound) {
    this.#name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.#name} says \${this.sound}\`;
  }

  get name() { return this.#name; }
  static create(name, sound) { return new Animal(name, sound); }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }
  fetch() { return \`\${this.name} fetches!\`; }
}

const dog = new Dog("Rex");
dog.speak();   // "Rex says Woof"
dog.fetch();   // "Rex fetches!"`} />
      </>
    ),
  },
  {
    id: "closures",
    label: "Closures & Scope",
    icon: "🔒",
    content: (
      <>
        <p>A closure is a function that <strong>remembers variables from its outer scope</strong> even after that outer function has finished executing. It's one of the most powerful and misunderstood features of JavaScript.</p>
        <CodeBlock language="javascript" code={`// Scope: where variables are accessible
let globalVar = "I'm global";

function outer() {
  let outerVar = "I'm in outer";

  function inner() {
    let innerVar = "I'm in inner";
    console.log(globalVar);  // ✅ accessible
    console.log(outerVar);   // ✅ accessible (closure)
    console.log(innerVar);   // ✅ accessible
  }

  inner();
  // console.log(innerVar); // ❌ ReferenceError
}

// Classic closure — counter example
function makeCounter(start = 0) {
  let count = start;  // private to this closure

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = start; },
    value: () => count,
  };
}

const counter = makeCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.value();     // 12
// count is not accessible from outside!`} />
        <CodeBlock language="javascript" code={`// Practical closure: event handler factory
function makeMultiplier(x) {
  return (y) => x * y;  // x is "closed over"
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
double(5);  // 10
triple(5);  // 15

// Closure in React hooks
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  // setCount "closes over" count
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}`} />
        <Note type="info">Closures are how React hooks work internally — <code>useState</code>, <code>useEffect</code>, and <code>useCallback</code> all rely on closures to maintain state between renders.</Note>
      </>
    ),
  },
  {
    id: "error-handling",
    label: "Error Handling",
    icon: "🛡️",
    content: (
      <>
        <p>Robust apps handle errors gracefully instead of crashing. JavaScript provides <code>try/catch/finally</code> for synchronous errors and <code>.catch()</code> / try-catch with async/await for async errors.</p>
        <CodeBlock language="javascript" code={`// try/catch/finally
try {
  const data = JSON.parse(invalidJson);   // throws SyntaxError
  riskyOperation(data);
} catch (error) {
  console.error(error.name);    // "SyntaxError"
  console.error(error.message); // "Unexpected token..."
  console.error(error.stack);   // full stack trace
} finally {
  // Always runs — cleanup here
  hideLoadingSpinner();
}

// Custom errors
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("email", "Invalid email format");
  }
}

try {
  validateEmail("not-an-email");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(\`Field \${err.field}: \${err.message}\`);
  } else {
    throw err;  // re-throw unexpected errors
  }
}`} />
        <CodeBlock language="javascript" code={`// Async error handling
async function fetchUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (error) {
    if (error.name === "AbortError") return null;
    throw error;
  }
}

// Global unhandled rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault();
});`} />
      </>
    ),
  },
];

const navLinks = [
  { path: "/html-docs", icon: "🌐", label: "HTML Notes" },
  { path: "/css-docs", icon: "🎨", label: "CSS Notes" },
];

const JsCnt = () => (
  <DocLayout
    title="JavaScript Notes"
    color="yellow"
    icon="⚡"
    sections={sections}
    navLinks={navLinks}
  />
);

export default JsCnt;
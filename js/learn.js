(function(){
const SECTIONS = [
  {
    title: 'HTML', items: [
      { id:'html-intro', label:'Introduction to HTML' },
      { id:'html-elements', label:'HTML Elements & Tags' },
      { id:'html-forms', label:'Forms & Inputs' },
      { id:'html-semantics', label:'Semantic HTML' },
    ]
  },
  {
    title: 'CSS', items: [
      { id:'css-intro', label:'Introduction to CSS' },
      { id:'css-selectors', label:'Selectors & Specificity' },
      { id:'css-flexbox', label:'Flexbox Layout' },
      { id:'css-grid', label:'CSS Grid' },
      { id:'css-responsive', label:'Responsive Design' },
    ]
  },
  {
    title: 'JavaScript', items: [
      { id:'js-intro', label:'Introduction to JavaScript' },
      { id:'js-variables', label:'Variables & Data Types' },
      { id:'js-functions', label:'Functions' },
      { id:'js-dom', label:'DOM Manipulation' },
      { id:'js-events', label:'Events' },
      { id:'js-async', label:'Async JavaScript' },
      { id:'js-fetch', label:'Fetch API' },
    ]
  },
  {
    title: 'React', items: [
      { id:'react-intro', label:'Introduction to React' },
      { id:'react-components', label:'Components & Props' },
      { id:'react-state', label:'State & Hooks' },
    ]
  },
  {
    title: 'Node.js', items: [
      { id:'node-intro', label:'Introduction to Node.js' },
      { id:'node-express', label:'Express.js Basics' },
    ]
  },
  {
    title: 'Tools', items: [
      { id:'git-intro', label:'Git Basics' },
      { id:'npm-intro', label:'npm & Package Manager' },
      { id:'terminal-intro', label:'Terminal Basics' },
    ]
  }
];

const ARTICLES = {
'html-intro': {
  title:'Introduction to HTML', cat:'HTML',
  content:`
<p>HTML (HyperText Markup Language) is the standard language for creating web pages. Every website you visit is built with HTML at its core.</p>
<h2>How the Web Works</h2>
<p>When you type a URL in your browser, it sends a request to a server. The server responds with HTML files, which the browser reads and renders into a visual page.</p>
<h2>Your First HTML Document</h2>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h3>Key Tags</h3>
<table><tr><th>Tag</th><th>Purpose</th></tr>
<tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Declares HTML5 document type</td></tr>
<tr><td><code>&lt;html&gt;</code></td><td>Root element of the page</td></tr>
<tr><td><code>&lt;head&gt;</code></td><td>Contains meta information</td></tr>
<tr><td><code>&lt;body&gt;</code></td><td>Contains visible content</td></tr>
</table>
<div class="tip"><strong>Tip:</strong> Open the Deoit editor and try writing this code yourself!</div>`
},

'html-elements': {
  title:'HTML Elements & Tags', cat:'HTML',
  content:`
<p>HTML elements are the building blocks of a web page. Each element is defined by a start tag, content, and an end tag.</p>
<h2>Headings</h2>
<pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;
&lt;h3&gt;Section Heading&lt;/h3&gt;
&lt;h4&gt;Minor Heading&lt;/h4&gt;</code></pre>
<h2>Paragraphs & Text</h2>
<pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;strong&gt;Bold text&lt;/strong&gt;
&lt;em&gt;Italic text&lt;/em&gt;
&lt;a href="https://example.com"&gt;Link&lt;/a&gt;</code></pre>
<h2>Lists</h2>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Unordered item&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Ordered item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<h2>Images</h2>
<pre><code>&lt;img src="photo.jpg" alt="Description" width="300"&gt;</code></pre>
<div class="note"><strong>Note:</strong> Always include the <code>alt</code> attribute on images for accessibility.</div>`
},

'html-forms': {
  title:'Forms & Inputs', cat:'HTML',
  content:`
<p>Forms allow users to submit data. They are essential for login pages, search bars, and contact forms.</p>
<h2>Basic Form</h2>
<pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;

  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>
<h2>Input Types</h2>
<table><tr><th>Type</th><th>Use</th></tr>
<tr><td><code>text</code></td><td>Single-line text</td></tr>
<tr><td><code>email</code></td><td>Email with validation</td></tr>
<tr><td><code>password</code></td><td>Hidden characters</td></tr>
<tr><td><code>number</code></td><td>Numeric input</td></tr>
<tr><td><code>checkbox</code></td><td>Multiple choice</td></tr>
<tr><td><code>radio</code></td><td>Single choice</td></tr>
<tr><td><code>file</code></td><td>File upload</td></tr>
</table>`
},

'html-semantics': {
  title:'Semantic HTML', cat:'HTML',
  content:`
<p>Semantic HTML uses meaningful tag names that describe the content, making your code more readable and accessible.</p>
<h2>Why Use Semantics?</h2>
<ul>
  <li>Screen readers can navigate your page better</li>
  <li>Search engines understand your content structure</li>
  <li>Code is easier to read and maintain</li>
</ul>
<h2>Semantic Tags</h2>
<table><tr><th>Tag</th><th>Purpose</th></tr>
<tr><td><code>&lt;header&gt;</code></td><td>Page or section header</td></tr>
<tr><td><code>&lt;nav&gt;</code></td><td>Navigation links</td></tr>
<tr><td><code>&lt;main&gt;</code></td><td>Main content of the page</td></tr>
<tr><td><code>&lt;section&gt;</code></td><td>Thematic grouping of content</td></tr>
<tr><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr>
<tr><td><code>&lt;aside&gt;</code></td><td>Side content or tangential content</td></tr>
<tr><td><code>&lt;footer&gt;</code></td><td>Page or section footer</td></tr>
</table>
<pre><code>&lt;article&gt;
  &lt;h2&gt;Blog Post Title&lt;/h2&gt;
  &lt;p&gt;Post content here...&lt;/p&gt;
&lt;/article&gt;</code></pre>`
},

'css-intro': {
  title:'Introduction to CSS', cat:'CSS',
  content:`
<p>CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. It handles colors, layouts, fonts, spacing, and animations.</p>
<h2>Three Ways to Add CSS</h2>
<h3>1. External (Recommended)</h3>
<pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
<h3>2. Internal</h3>
<pre><code>&lt;style&gt;
  body { background: #0d0d0d; }
&lt;/style&gt;</code></pre>
<h3>3. Inline</h3>
<pre><code>&lt;p style="color: red;"&gt;Red text&lt;/p&gt;</code></pre>
<h2>Basic Syntax</h2>
<pre><code>selector {
  property: value;
}

h1 {
  color: #d9d9d9;
  font-size: 24px;
  margin-bottom: 12px;
}</code></pre>`
},

'css-selectors': {
  title:'Selectors & Specificity', cat:'CSS',
  content:`
<p>Selectors determine which HTML elements a CSS rule applies to.</p>
<h2>Common Selectors</h2>
<pre><code>/* Element */
p { color: white; }

/* Class */
.card { padding: 20px; }

/* ID */
#header { background: #111; }

/* Descendant */
.sidebar a { color: blue; }

/* Child */
.nav > li { display: inline; }

/* Pseudo-class */
a:hover { color: red; }
button:disabled { opacity: 0.5; }

/* Attribute */
input[type="email"] { border: 1px solid red; }</code></pre>
<h2>Specificity</h2>
<p>When multiple rules target the same element, specificity determines which wins:</p>
<ol>
  <li><code>!important</code> (avoid using)</li>
  <li>Inline styles (<code>style="..."</code>)</li>
  <li>ID selectors (<code>#id</code>)</li>
  <li>Class / attribute / pseudo-class (`.class`)</li>
  <li>Element / pseudo-element (<code>div</code>, <code>::before</code>)</li>
</ol>
<div class="tip"><strong>Tip:</strong> Keep specificity low. Use classes instead of IDs for styling.</div>`
},

'css-flexbox': {
  title:'Flexbox Layout', cat:'CSS',
  content:`
<p>Flexbox is a one-dimensional layout system for arranging items in rows or columns.</p>
<h2>Container Properties</h2>
<pre><code>.container {
  display: flex;
  justify-content: space-between;  /* horizontal */
  align-items: center;             /* vertical */
  gap: 16px;                       /* space between items */
  flex-wrap: wrap;                 /* wrap to next line */
}</code></pre>
<h2>Item Properties</h2>
<pre><code>.item {
  flex: 1;            /* grow to fill space */
  flex-shrink: 0;     /* don't shrink */
  flex-basis: 200px;  /* initial width */
  align-self: flex-end; /* override container align */
}</code></pre>
<h2>Common Patterns</h2>
<pre><code>/* Center anything */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Space items evenly */
.spread {
  display: flex;
  justify-content: space-between;
}

/* Stack with gap */
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}</code></pre>`
},

'css-grid': {
  title:'CSS Grid', cat:'CSS',
  content:`
<p>CSS Grid is a two-dimensional layout system for creating complex page layouts.</p>
<h2>Basic Grid</h2>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>
<h2>Responsive Grid</h2>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
<h2>Named Areas</h2>
<pre><code>.layout {
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
.footer  { grid-area: footer; }</code></pre>
<div class="note"><strong>Note:</strong> Use Flexbox for one-dimensional layouts (row OR column). Use Grid for two-dimensional layouts (rows AND columns).</div>`
},

'css-responsive': {
  title:'Responsive Design', cat:'CSS',
  content:`
<p>Responsive design ensures your website looks good on all screen sizes.</p>
<h2>Viewport Meta Tag</h2>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
<h2>Media Queries</h2>
<pre><code>/* Mobile first */
.container { padding: 16px; }

@media (min-width: 768px) {
  .container { padding: 32px; }
}

@media (min-width: 1024px) {
  .container { padding: 48px; max-width: 1200px; }
}</code></pre>
<h2>Fluid Typography</h2>
<pre><code>h1 {
  font-size: clamp(24px, 5vw, 44px);
}</code></pre>
<h2>Responsive Images</h2>
<pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
<div class="tip"><strong>Tip:</strong> Design mobile-first. Start with small screens and add breakpoints for larger ones.</div>`
},

'js-intro': {
  title:'Introduction to JavaScript', cat:'JavaScript',
  content:`
<p>JavaScript is the programming language of the web. It makes web pages interactive and dynamic.</p>
<h2>Your First Script</h2>
<pre><code>&lt;script&gt;
  console.log("Hello, World!");
  alert("Welcome to JavaScript!");
&lt;/script&gt;</code></pre>
<h2>Adding JS to HTML</h2>
<pre><code>&lt;!-- External file --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- Internal --&gt;
&lt;script&gt;
  const x = 10;
&lt;/script&gt;</code></pre>
<h2>Console Methods</h2>
<pre><code>console.log("Info");
console.warn("Warning");
console.error("Error");
console.table([{a:1},{a:2}]);</code></pre>`
},

'js-variables': {
  title:'Variables & Data Types', cat:'JavaScript',
  content:`
<p>Variables store data values. In modern JavaScript, use <code>const</code> and <code>let</code>.</p>
<h2>Declaring Variables</h2>
<pre><code>const name = "Deoit";      // cannot reassign
let score = 0;              // can reassign
score = 10;                 // OK

// Don't use var (old way)</code></pre>
<h2>Data Types</h2>
<pre><code>// String
const text = "Hello";

// Number
const age = 25;
const pi = 3.14;

// Boolean
const isActive = true;

// Null
const empty = null;

// Undefined
let x;  // x is undefined

// Array
const colors = ["red", "blue", "green"];

// Object
const user = { name: "Majed", age: 25 };</code></pre>
<h2>Type Checking</h2>
<pre><code>typeof "hello"   // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof null      // "object" (bug in JS)
typeof undefined // "undefined"</code></pre>`
},

'js-functions': {
  title:'Functions', cat:'JavaScript',
  content:`
<p>Functions are reusable blocks of code that perform a specific task.</p>
<h2>Function Declaration</h2>
<pre><code>function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Majed"));</code></pre>
<h2>Arrow Functions</h2>
<pre><code>const greet = (name) => {
  return "Hello, " + name + "!";
};

// Short form (single expression)
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8</code></pre>
<h2>Parameters & Defaults</h2>
<pre><code>function createUser(name, role = "user") {
  return { name, role };
}

createUser("Majed");        // { name: "Majed", role: "user" }
createUser("Ali", "admin"); // { name: "Ali", role: "admin" }</code></pre>
<h2>Functions as Values</h2>
<pre><code>const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]</code></pre>`
},

'js-dom': {
  title:'DOM Manipulation', cat:'JavaScript',
  content:`
<p>The DOM (Document Object Model) is a tree of HTML elements that JavaScript can read and modify.</p>
<h2>Selecting Elements</h2>
<pre><code>const el = document.getElementById("myId");
const cards = document.querySelectorAll(".card");
const first = document.querySelector(".card");</code></pre>
<h2>Changing Content</h2>
<pre><code>el.textContent = "New text";
el.innerHTML = "&lt;strong&gt;Bold&lt;/strong&gt;";
el.setAttribute("href", "https://example.com");</code></pre>
<h2>Changing Styles</h2>
<pre><code>el.style.color = "red";
el.style.fontSize = "18px";
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("visible");</code></pre>
<h2>Creating Elements</h2>
<pre><code>const div = document.createElement("div");
div.textContent = "I am new!";
document.body.appendChild(div);</code></pre>
<h2>Removing Elements</h2>
<pre><code>el.remove();</code></pre>`
},

'js-events': {
  title:'Events', cat:'JavaScript',
  content:`
<p>Events let you respond to user actions like clicks, key presses, and form submissions.</p>
<h2>Click Events</h2>
<pre><code>const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  alert("Clicked!");
});</code></pre>
<h2>Form Events</h2>
<pre><code>const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload
  const data = new FormData(form);
  console.log(data.get("email"));
});</code></pre>
<h2>Keyboard Events</h2>
<pre><code>document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    modal.close();
  }
});</code></pre>
<h2>Common Events</h2>
<table><tr><th>Event</th><th>Fires When</th></tr>
<tr><td><code>click</code></td><td>Element is clicked</td></tr>
<tr><td><code>submit</code></td><td>Form is submitted</td></tr>
<tr><td><code>keydown</code></td><td>Key is pressed</td></tr>
<tr><td><code>input</code></td><td>Input value changes</td></tr>
<tr><td><code>load</code></td><td>Page finishes loading</td></tr>
</table>`
},

'js-async': {
  title:'Async JavaScript', cat:'JavaScript',
  content:`
<p>Asynchronous code lets you run long tasks (like fetching data) without blocking the rest of your code.</p>
<h2>Callbacks (Old Way)</h2>
<pre><code>setTimeout(function() {
  console.log("After 1 second");
}, 1000);</code></pre>
<h2>Promises</h2>
<pre><code>const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));</code></pre>
<h2>Async/Await</h2>
<pre><code>async function loadData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed:", error);
  }
}

loadData();</code></pre>
<div class="note"><strong>Note:</strong> <code>await</code> only works inside <code>async</code> functions.</div>`
},

'js-fetch': {
  title:'Fetch API', cat:'JavaScript',
  content:`
<p>The Fetch API lets you make HTTP requests to servers and APIs.</p>
<h2>GET Request</h2>
<pre><code>fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>
<h2>POST Request</h2>
<pre><code>fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Majed", email: "test@test.com" })
})
.then(res => res.json())
.then(data => console.log(data));</code></pre>
<h2>With Async/Await</h2>
<pre><code>async function getUsers() {
  const res = await fetch("https://api.example.com/users");
  if (!res.ok) throw new Error("Failed");
  const users = await res.json();
  return users;
}</code></pre>`
},

'react-intro': {
  title:'Introduction to React', cat:'React',
  content:`
<p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components.</p>
<h2>Why React?</h2>
<ul>
  <li>Component-based architecture</li>
  <li>Virtual DOM for fast updates</li>
  <li>Large ecosystem and community</li>
  <li>Used by Facebook, Instagram, Netflix</li>
</ul>
<h2>Setup</h2>
<pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
<h2>First Component</h2>
<pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, React!&lt;/h1&gt;
      &lt;p&gt;This is my first component.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
<div class="note"><strong>Note:</strong> React uses JSX, which looks like HTML but is actually JavaScript.</div>`
},

'react-components': {
  title:'Components & Props', cat:'React',
  content:`
<p>Components are reusable pieces of UI. Props are inputs to components.</p>
<h2>Creating a Component</h2>
<pre><code>function Card({ title, description }) {
  return (
    &lt;div className="card"&gt;
      &lt;h3&gt;{title}&lt;/h3&gt;
      &lt;p&gt;{description}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Using Components</h2>
<pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;Card title="First" description="Hello" /&gt;
      &lt;Card title="Second" description="World" /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Children Props</h2>
<pre><code>function Container({ children }) {
  return &lt;div className="container"&gt;{children}&lt;/div&gt;;
}

function App() {
  return (
    &lt;Container&gt;
      &lt;p&gt;This is inside the container&lt;/p&gt;
    &lt;/Container&gt;
  );
}</code></pre>`
},

'react-state': {
  title:'State & Hooks', cat:'React',
  content:`
<p>State lets components remember and update data. Hooks are special functions for state and side effects.</p>
<h2>useState</h2>
<pre><code>import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        +1
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>useEffect</h2>
<pre><code>import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty array = run once

  return (
    &lt;ul&gt;
      {users.map(u =&gt; &lt;li key={u.id}&gt;{u.name}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
}</code></pre>`
},

'node-intro': {
  title:'Introduction to Node.js', cat:'Node.js',
  content:`
<p>Node.js lets you run JavaScript on the server. It's used for building APIs, web servers, and CLI tools.</p>
<h2>Install Node.js</h2>
<p>Download from <a href="https://nodejs.org" target="_blank">nodejs.org</a>. The LTS version is recommended.</p>
<h2>First Script</h2>
<pre><code>// app.js
console.log("Hello from Node.js!");

// Run: node app.js</code></pre>
<h2>Working with Files</h2>
<pre><code>const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello World!");
const content = fs.readFileSync("hello.txt", "utf-8");
console.log(content);</code></pre>
<h2>Modules</h2>
<pre><code>// math.js
export function add(a, b) { return a + b; }
export function sub(a, b) { return a - b; }

// app.js
import { add, sub } from "./math.js";
console.log(add(5, 3));</code></pre>`
},

'node-express': {
  title:'Express.js Basics', cat:'Node.js',
  content:`
<p>Express.js is the most popular web framework for Node.js. It makes building APIs and web servers easy.</p>
<h2>Setup</h2>
<pre><code>mkdir my-api && cd my-api
npm init -y
npm install express</code></pre>
<h2>Basic Server</h2>
<pre><code>import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, API!" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Majed" },
    { id: 2, name: "Ali" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});</code></pre>
<h2>POST Routes</h2>
<pre><code>app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({ id: 3, name, email });
});</code></pre>`
},

'git-intro': {
  title:'Git Basics', cat:'Tools',
  content:`
<p>Git is a version control system for tracking changes in code.</p>
<h2>Setup</h2>
<pre><code>git init                  # start new repo
git add .                 # stage all changes
git commit -m "message"   # save changes
git status                # check status
git log --oneline         # view history</code></pre>
<h2>Branching</h2>
<pre><code>git branch feature       # create branch
git checkout feature      # switch to branch
git checkout -b feature   # create and switch
git merge feature         # merge branch</code></pre>
<h2>Remote</h2>
<pre><code>git remote add origin https://github.com/user/repo.git
git push -u origin main
git pull origin main</code></pre>`
},

'npm-intro': {
  title:'npm & Package Manager', cat:'Tools',
  content:`
<p>npm (Node Package Manager) manages JavaScript packages and dependencies.</p>
<h2>Basic Commands</h2>
<pre><code>npm init -y                 # create package.json
npm install express          # add package
npm install -D nodemon       # add dev dependency
npm uninstall express        # remove package
npm update                   # update packages</code></pre>
<h2>package.json</h2>
<pre><code>{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}</code></pre>
<h2>npx</h2>
<pre><code>npx create-react-app my-app  # run package without installing</code></pre>`
},

'terminal-intro': {
  title:'Terminal Basics', cat:'Tools',
  content:`
<p>The terminal (command line) is a text-based way to interact with your computer.</p>
<h2>Common Commands</h2>
<table><tr><th>Command</th><th>Action</th></tr>
<tr><td><code>cd folder</code></td><td>Change directory</td></tr>
<tr><td><code>ls</code> / <code>dir</code></td><td>List files</td></tr>
<tr><td><code>mkdir name</code></td><td>Create folder</td></tr>
<tr><td><code>touch file.txt</code></td><td>Create file</td></tr>
<tr><td><code>rm file.txt</code></td><td>Delete file</td></tr>
<tr><td><code>pwd</code></td><td>Print working directory</td></tr>
<tr><td><code>clear</code></td><td>Clear screen</td></tr>
</table>
<h2>Navigating</h2>
<pre><code>cd ..              # go up one folder
cd ~/Desktop       # go to Desktop
cd ../..           # go up two folders</code></pre>
<div class="tip"><strong>Tip:</strong> Press Tab to autocomplete file and folder names.</div>`
}
};

// -- Render --
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const side = document.getElementById('side');
const ov = document.getElementById('ov');
const mobBtn = document.getElementById('mobBtn');

function buildNav(){
  let html = '';
  SECTIONS.forEach(s => {
    html += '<div class="nav-g"><div class="nav-g-t">'+s.title+'</div>';
    s.items.forEach(it => {
      html += '<a class="nav-a" data-id="'+it.id+'" href="#'+it.id+'">'+it.label+'</a>';
    });
    html += '</div>';
  });
  nav.innerHTML = html;
  nav.querySelectorAll('.nav-a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      render(a.dataset.id);
      side.classList.remove('open');
      ov.classList.remove('show');
    });
  });
}

function render(id){
  const art = ARTICLES[id];
  if(!art){
    renderHome();
    return;
  }
  nav.querySelectorAll('.nav-a').forEach(a => a.classList.toggle('on', a.dataset.id===id));
  main.innerHTML = '<a class="nav-a" href="#" style="display:inline-flex;align-items:center;gap:4px;margin-bottom:20px;padding:0;border:0;font-size:13px;color:var(--text-secondary);" onclick="event.preventDefault();window._learnHome()">&larr; All Topics</a>'
    + '<h1>'+art.title+'</h1>'
    + '<div class="sub">'+art.cat+'</div>'
    + art.content;
  window.scrollTo(0,0);
}

function renderHome(){
  nav.querySelectorAll('.nav-a').forEach(a => a.classList.remove('on'));
  let cards = '';
  SECTIONS.forEach(s => {
    s.items.forEach(it => {
      const art = ARTICLES[it.id];
      if(!art) return;
      const tagClass = s.title==='HTML'?'t-html':s.title==='CSS'?'t-css':s.title==='JavaScript'?'t-js':s.title==='React'?'t-react':s.title==='Node.js'?'t-node':'t-tools';
      cards += '<a class="card" data-id="'+it.id+'"><h3>'+art.title+'</h3><p>'+s.title+'</p><span class="tag '+tagClass+'">'+s.title+'</span></a>';
    });
  });
  main.innerHTML = '<h1>Learn Web Development</h1><div class="sub">Comprehensive tutorials from basics to advanced. Pick a topic to start learning.</div><div class="card-grid">'+cards+'</div>';
  main.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => render(c.dataset.id));
  });
  window.scrollTo(0,0);
}

window._learnHome = renderHome;

mobBtn.addEventListener('click', () => {
  side.classList.toggle('open');
  ov.classList.toggle('show');
});
ov.addEventListener('click', () => {
  side.classList.remove('open');
  ov.classList.remove('show');
});

buildNav();
const hash = location.hash.slice(1);
if(hash && ARTICLES[hash]) render(hash); else renderHome();
})();

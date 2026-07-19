(function(){
var SECTIONS=[
{t:'Getting Started',items:[
  {id:'intro',l:'Introduction'},
  {id:'html-intro',l:'What is HTML'},
  {id:'css-intro',l:'What is CSS'},
  {id:'js-intro',l:'What is JavaScript'}
]},
{t:'HTML',items:[
  {id:'html-edit',l:'HTML Editors'},
  {id:'html-basics',l:'HTML Basics'},
  {id:'html-elements',l:'HTML Elements'},
  {id:'html-attributes',l:'HTML Attributes'},
  {id:'html-headings',l:'HTML Headings'},
  {id:'html-paragraphs',l:'HTML Paragraphs'},
  {id:'html-links',l:'HTML Links'},
  {id:'html-images',l:'HTML Images'},
  {id:'html-forms',l:'HTML Forms'},
  {id:'html-tables',l:'HTML Tables'},
  {id:'html-lists',l:'HTML Lists'},
  {id:'html-semantics',l:'Semantic HTML'}
]},
{t:'CSS',items:[
  {id:'css-intro2',l:'CSS Introduction'},
  {id:'css-syntax',l:'CSS Syntax'},
  {id:'css-selectors',l:'CSS Selectors'},
  {id:'css-colors',l:'CSS Colors'},
  {id:'css-background',l:'CSS Background'},
  {id:'css-boxmodel',l:'Box Model'},
  {id:'css-margin',l:'Margin & Padding'},
  {id:'css-flexbox',l:'Flexbox'},
  {id:'css-grid',l:'CSS Grid'},
  {id:'css-responsive',l:'Responsive Design'}
]},
{t:'JavaScript',items:[
  {id:'js-intro2',l:'JS Introduction'},
  {id:'js-variables',l:'Variables'},
  {id:'js-datatypes',l:'Data Types'},
  {id:'js-operators',l:'Operators'},
  {id:'js-functions',l:'Functions'},
  {id:'js-conditions',l:'Conditions'},
  {id:'js-loops',l:'Loops'},
  {id:'js-arrays',l:'Arrays'},
  {id:'js-objects',l:'Objects'},
  {id:'js-dom',l:'DOM Manipulation'},
  {id:'js-events',l:'Events'},
  {id:'js-async',l:'Async/Await'},
  {id:'js-fetch',l:'Fetch API'}
]},
{t:'React',items:[
  {id:'react-intro',l:'React Intro'},
  {id:'react-jsx',l:'JSX'},
  {id:'react-components',l:'Components'},
  {id:'react-props',l:'Props'},
  {id:'react-state',l:'State'},
  {id:'react-hooks',l:'Hooks'}
]},
{t:'Node.js',items:[
  {id:'node-intro',l:'Node.js Intro'},
  {id:'node-npm',l:'npm'},
  {id:'node-express',l:'Express.js'}
]},
{t:'Tools',items:[
  {id:'git-basics',l:'Git Basics'},
  {id:'terminal',l:'Terminal'}
]}
];

function A(id,t,cat,intro,content){
  return{id:id,title:t,cat:cat,intro:intro||'',content:content||''};
}
var H='<pre><code>',E='</code></pre>',C='class="';

var D={};

D.intro=A('intro','Introduction','Getting Started',
'Welcome to Deoit Learn. This platform teaches you web development from scratch with hands-on examples.',
'<h2>What You Will Learn</h2><ul><li><strong>HTML</strong> - The structure of web pages</li><li><strong>CSS</strong> - The styling and layout</li><li><strong>JavaScript</strong> - The interactivity and logic</li><li><strong>React</strong> - Modern UI frameworks</li><li><strong>Node.js</strong> - Server-side JavaScript</li></ul><h2>How It Works</h2><p>Each lesson includes explanations and code examples. Click <strong>"Try it Yourself"</strong> to run the code in the Deoit editor.</p><div class="tip"><strong>Tip:</strong> Follow the lessons in order for the best learning experience. Start with HTML, then CSS, then JavaScript.</div><h2>Prerequisites</h2><p>You need <strong>zero programming experience</strong>. All you need is a web browser and a willingness to learn.</p>');

D['html-intro']=A('html-intro','What is HTML','HTML',
'HTML stands for HyperText Markup Language. It is the standard language for creating web pages.',
'<p>HTML describes the structure of a web page using elements and tags.</p>'+H+'<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>'+E+'<h2>How the Web Works</h2><ol><li>You type a URL in the browser</li><li>Browser sends a request to a server</li><li>Server responds with HTML files</li><li>Browser renders the page</li></ol><div class="tip"><strong>Tip:</strong> Open the Deoit editor and try writing your first HTML page!</div>');

D['html-edit']=A('html-edit','HTML Editors','HTML',
'A text editor is where you write your HTML code. Popular editors include VS Code, Sublime Text, and the Deoit online editor.',
'<p>You can use any text editor to write HTML. The file must have a <code>.html</code> extension.</p>'+H+'<!-- Save this as index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Page</h1>\n  <p>Open this file in a browser.</p>\n</body>\n</html>'+E+'<h2>Using Deoit</h2><p>The easiest way to start is with the <a href="pages/editor">Deoit editor</a>. No installation needed - just open and start coding.</p>');

D['html-basics']=A('html-basics','HTML Basics','HTML',
'HTML documents are files that end with .html or .htm. They can be viewed in any web browser.',
'<h2>HTML Document Structure</h2>'+H+'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My Heading</h1>\n  <p>My paragraph.</p>\n</body>\n</html>'+E+'<h2>Key Elements</h2><ul><li><code>&lt;!DOCTYPE html&gt;</code> - Declares HTML5</li><li><code>&lt;html&gt;</code> - Root element</li><li><code>&lt;head&gt;</code> - Meta information</li><li><code>&lt;body&gt;</code> - Visible content</li></ul>');

D['html-elements']=A('html-elements','HTML Elements','HTML',
'An HTML element is defined by a start tag, content, and an end tag.',
H+'<!-- Element structure -->\n<tagname>Content</tagname>\n\n<!-- Examples -->\n<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<a href="https://example.com">This is a link</a>\n<img src="photo.jpg" alt="Photo">'+E+'<h2>Nested Elements</h2>'+H+'<div>\n  <h2>Title</h2>\n  <p>Paragraph inside a div.</p>\n</div>'+E+'<div class="note"><strong>Note:</strong> Some elements are self-closing like <code>&lt;img&gt;</code> and <code>&lt;br&gt;</code>.</div>');

D['html-attributes']=A('html-attributes','HTML Attributes','HTML',
'Attributes provide additional information about HTML elements.',
'<h2>Common Attributes</h2>'+H+'<!-- href attribute -->\n<a href="https://google.com">Google</a>\n\n<!-- src attribute -->\n<img src="logo.png" alt="Logo">\n\n<!-- class attribute -->\n<div class="container">Content</div>\n\n<!-- id attribute -->\n<div id="main">Main content</div>\n\n<!-- style attribute -->\n<p style="color: red;">Red text</p>'+E+'<table><tr><th>Attribute</th><th>Purpose</th></tr><tr><td><code>href</code></td><td>Link URL</td></tr><tr><td><code>src</code></td><td>Image/source URL</td></tr><tr><td><code>alt</code></td><td>Image description</td></tr><tr><td><code>class</code></td><td>CSS class name</td></tr><tr><td><code>id</code></td><td>Unique identifier</td></tr></table>');

D['html-headings']=A('html-headings','HTML Headings','HTML',
'HTML headings are defined with the <h1> to <h6> tags.',
H+'<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>'+E+'<h2>Best Practices</h2><ul><li>Use <code>&lt;h1&gt;</code> for the main title (one per page)</li><li>Use <code>&lt;h2&gt;</code> for sections</li><li>Use <code>&lt;h3&gt;</code> for sub-sections</li><li>Don\'t skip heading levels (h1 to h3)</li></ul><div class="tip"><strong>Tip:</strong> Headings are important for SEO and accessibility.</div>');

D['html-paragraphs']=A('html-paragraphs','HTML Paragraphs','HTML',
'The HTML <p> element defines a paragraph.',
H+'<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n\n<!-- Line break -->\n<p>Line one.<br>Line two.</p>\n\n<!-- Horizontal rule -->\n<hr>\n\n<!-- Preformatted text -->\n<pre>\n  This text preserves\n  spaces and line breaks.\n</pre>'+E+'<div class="note"><strong>Note:</strong> Browsers automatically add a single blank line before and after paragraphs.</div>');

D['html-links']=A('html-links','HTML Links','HTML',
'HTML links are defined with the <a> tag. The href attribute specifies the destination URL.',
H+'<!-- Basic link -->\n<a href="https://google.com">Visit Google</a>\n\n<!-- Open in new tab -->\n<a href="https://google.com" target="_blank">\n  Open in new tab\n</a>\n\n<!-- Link to email -->\n<a href="mailto:test@test.com">Send Email</a>\n\n<!-- Page link -->\n<a href="about.html">About Page</a>'+E+'<h2>Link Attributes</h2><table><tr><th>Attribute</th><th>Description</th></tr><tr><td><code>href</code></td><td>URL of the link</td></tr><tr><td><code>target</code></td><td>Where to open (_blank = new tab)</td></tr><tr><td><code>title</code></td><td>Tooltip text</td></tr></table>');

D['html-images']=A('html-images','HTML Images','HTML',
'HTML images are defined with the <img> tag. It is self-closing.',
H+'<!-- Basic image -->\n<img src="photo.jpg" alt="Description">\n\n<!-- With size -->\n<img src="logo.png" alt="Logo" width="200" height="100">\n\n<!-- Responsive image -->\n<img src="pic.jpg" alt="Photo"\n     style="max-width: 100%; height: auto;">'+E+'<h2>Image Attributes</h2><table><tr><th>Attribute</th><th>Description</th></tr><tr><td><code>src</code></td><td>Path to image</td></tr><tr><td><code>alt</code></td><td>Text if image fails to load</td></tr><tr><td><code>width</code></td><td>Width in pixels</td></tr><tr><td><code>height</code></td><td>Height in pixels</td></tr></table><div class="warn"><strong>Important:</strong> Always include the <code>alt</code> attribute for accessibility.</div>');

D['html-forms']=A('html-forms','HTML Forms','HTML',
'HTML forms are used to collect user input. The <form> element wraps input fields.',
H+'<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n\n  <label for="pass">Password:</label>\n  <input type="password" id="pass" name="pass">\n\n  <select name="role">\n    <option value="user">User</option>\n    <option value="admin">Admin</option>\n  </select>\n\n  <textarea name="msg" rows="4"></textarea>\n\n  <input type="checkbox" id="agree">\n  <label for="agree">I agree</label>\n\n  <button type="submit">Submit</button>\n</form>'+E+'<h2>Input Types</h2><table><tr><th>Type</th><th>Purpose</th></tr><tr><td><code>text</code></td><td>Single-line text</td></tr><tr><td><code>email</code></td><td>Email validation</td></tr><tr><td><code>password</code></td><td>Hidden text</td></tr><tr><td><code>number</code></td><td>Numbers only</td></tr><tr><td><code>checkbox</code></td><td>Toggle option</td></tr><tr><td><code>radio</code></td><td>Single choice</td></tr><tr><td><code>file</code></td><td>File upload</td></tr><tr><td><code>date</code></td><td>Date picker</td></tr></table>');

D['html-tables']=A('html-tables','HTML Tables','HTML',
'HTML tables are defined with <table>, <tr> (row), <th> (header), and <td> (data) tags.',
H+'<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Majed</td>\n      <td>25</td>\n    </tr>\n    <tr>\n      <td>Ali</td>\n      <td>30</td>\n    </tr>\n  </tbody>\n</table>'+E+'<h2>Table Attributes</h2><ul><li><code>&lt;thead&gt;</code> - Table header group</li><li><code>&lt;tbody&gt;</code> - Table body</li><li><code>&lt;tfoot&gt;</code> - Table footer</li><li><code>colspan</code> - Span columns</li><li><code>rowspan</code> - Span rows</li></ul>');

D['html-lists']=A('html-lists','HTML Lists','HTML',
'HTML lists allow you to group related items together.',
'<h2>Unordered List</h2>'+H+'<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>'+E+'<h2>Ordered List</h2>'+H+'<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>'+E+'<h2>Description List</h2>'+H+'<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>'+E+'<div class="tip"><strong>Tip:</strong> Use <code>type="a"</code> or <code>type="1"</code> to change ordered list numbering.</div>');

D['html-semantics']=A('html-semantics','Semantic HTML','HTML',
'Semantic elements clearly describe their meaning to both the browser and developer.',
'<h2>Why Use Semantics?</h2><ul><li>Better accessibility for screen readers</li><li>Improved SEO rankings</li><li>Clearer, more maintainable code</li></ul>'+H+'<!-- Semantic structure -->\n<header>\n  <nav>Menu</nav>\n</header>\n\n<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content here...</p>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n\n<footer>\n  <p>Copyright 2026</p>\n</footer>'+E+'<table><tr><th>Tag</th><th>Purpose</th></tr><tr><td><code>&lt;header&gt;</code></td><td>Page/section header</td></tr><tr><td><code>&lt;nav&gt;</code></td><td>Navigation</td></tr><tr><td><code>&lt;main&gt;</code></td><td>Main content</td></tr><tr><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr><tr><td><code>&lt;section&gt;</code></td><td>Thematic grouping</td></tr><tr><td><code>&lt;aside&gt;</code></td><td>Side content</td></tr><tr><td><code>&lt;footer&gt;</code></td><td>Page/section footer</td></tr></table>');

// CSS
D['css-intro']=A('css-intro','What is CSS','CSS',
'CSS (Cascading Style Sheets) controls how HTML elements look on screen.',
'<p>CSS handles colors, layouts, fonts, spacing, animations, and responsive design.</p>'+H+'<!-- 3 ways to add CSS -->\n\n<!-- 1. External (best) -->\n<link rel="stylesheet" href="style.css">\n\n<!-- 2. Internal -->\n<style>\n  body { background: #0d0d0d; }\n</style>\n\n<!-- 3. Inline -->\n<p style="color: red;">Red</p>'+E+'<h2>CSS Syntax</h2>'+H+'selector {\n  property: value;\n}\n\nh1 {\n  color: #d9d9d9;\n  font-size: 24px;\n  margin-bottom: 12px;\n}'+E);

D['css-intro2']=A('css-intro2','CSS Introduction','CSS',
'CSS is the language for styling web pages. It controls layout, colors, fonts, and responsive design.',
'<p>CSS works alongside HTML. HTML provides structure, CSS provides style.</p>'+H+'/* selector */\nh1 {\n  color: white;\n  font-size: 28px;\n  text-align: center;\n}\n\n/* class */\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n}\n\n/* id */\n#header {\n  position: sticky;\n  top: 0;\n}'+E+'<h2>CSS Selectors</h2><table><tr><th>Selector</th><th>Example</th></tr><tr><td>Element</td><td><code>p { }</code></td></tr><tr><td>Class</td><td><code>.card { }</code></td></tr><tr><td>ID</td><td><code>#main { }</code></td></tr><tr><td>Attribute</td><td><code>input[type="text"] { }</code></td></tr></table>');

D['css-syntax']=A('css-syntax','CSS Syntax','CSS',
'CSS rules consist of a selector and a declaration block.',
H+'/* Basic syntax */\nselector {\n  property: value;\n}\n\n/* Multiple properties */\nh1 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 12px;\n  font-weight: 800;\n}\n\n/* Class selector */\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #2a2a2a;\n}\n\n/* ID selector */\n#header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}'+E+'<div class="note"><strong>Note:</strong> CSS properties are separated by semicolons <code>;</code>.</div>');

D['css-selectors']=A('css-selectors','CSS Selectors','CSS',
'Selectors determine which elements a CSS rule applies to.',
H+'/* Element */\np { color: white; }\n\n/* Class */\n.card { padding: 20px; }\n\n/* ID */\n#header { background: #111; }\n\n/* Descendant */\n.sidebar a { color: blue; }\n\n/* Child */\n.nav > li { display: inline; }\n\n/* Pseudo-class */\na:hover { color: red; }\nbutton:disabled { opacity: 0.5; }\n\n/* Attribute */\ninput[type="email"] { border: red; }\n\n/* Multiple */\n.card, .box { padding: 10px; }'+E+'<h2>Specificity</h2><ol><li><code>!important</code> (avoid)</li><li>Inline styles <code>style="..."</code></li><li>ID <code>#id</code></li><li>Class <code>.class</code></li><li>Element <code>div</code></li></ol><div class="tip"><strong>Tip:</strong> Use classes for styling. IDs are better for JavaScript.</div>');

D['css-colors']=A('css-colors','CSS Colors','CSS',
'CSS supports colors in HEX, RGB, RGBA, HSL, and named formats.',
H+'/* Named */\np { color: red; }\n\n/* HEX */\np { color: #d9d9d9; }\n\n/* RGB */\np { color: rgb(217, 217, 217); }\n\n/* RGBA (with alpha/transparency) */\np { color: rgba(217, 217, 217, 0.5); }\n\n/* HSL */\np { color: hsl(0, 0%, 85%); }\n\n/* Common colors */\n.accent { color: #d9d9d9; }\n.html  { color: #e06c75; }\n.css   { color: #61afef; }\n.js    { color: #e5c07b; }'+E+'<div class="tip"><strong>Tip:</strong> Use CSS custom properties for colors: <code>--accent: #d9d9d9;</code></div>');

D['css-background']=A('css-background','CSS Background','CSS',
'CSS background properties control colors, images, and gradients behind elements.',
H+'body {\n  background-color: #0d0d0d;\n  background-image: url("bg.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* Gradient */\n.hero {\n  background: linear-gradient(135deg, #141414, #0d0d0d);\n}\n\n/* Radial gradient */\n.glow {\n  background: radial-gradient(circle, #61afef22, transparent);\n}'+E);

D['css-boxmodel']=A('css-boxmodel','CSS Box Model','CSS',
'Every HTML element is a box. The box model consists of content, padding, border, and margin.',
H+'/* Box model */\n.box {\n  width: 200px;           /* content width */\n  padding: 20px;          /* inside border */\n  border: 1px solid #2a2a2a;\n  margin: 16px;           /* outside border */\n}\n\n/* box-sizing: include padding/border in width */\n*, *::before, *::after {\n  box-sizing: border-box;\n}'+E+'<h2>Visual</h2><pre style="background:#1a1a1a;color:var(--text-secondary);padding:12px;text-align:center;font-family:var(--font-mono);font-size:12px;border:1px solid var(--border-subtle)">┌─────────── margin ──────────┐<br>│  ┌────── border ──────┐    │<br>│  │  ┌── padding ──┐  │    │<br>│  │  │  ┌─content─┐│  │    │<br>│  │  │  │  Hello  ││  │    │<br>│  │  │  └─────────┘│  │    │<br>│  │  └─────────────┘  │    │<br>│  └───────────────────┘    │<br>└───────────────────────────┘</pre>');

D['css-margin']=A('css-margin','Margin &amp; Padding','CSS',
'Margin is space outside the border. Padding is space inside the border.',
H+'/* Margin (outside) */\n.box {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n\n  /* Shorthand */\n  margin: 10px 20px;           /* top/bottom left/right */\n  margin: 10px 20px 10px;      /* top left/right bottom */\n  margin: 10px 20px 10px 20px; /* top right bottom left */\n}\n\n/* Padding (inside) */\n.card {\n  padding: 20px;\n  padding: 20px 16px;\n}\n\n/* Center block */\n.center {\n  margin: 0 auto;\n  max-width: 800px;\n}'+E);

D['css-flexbox']=A('css-flexbox','Flexbox','CSS',
'Flexbox is a one-dimensional layout system for arranging items in a row or column.',
H+'/* Container */\n.container {\n  display: flex;\n  justify-content: space-between; /* main axis */\n  align-items: center;            /* cross axis */\n  gap: 16px;                      /* space between */\n  flex-wrap: wrap;                /* wrap items */\n}\n\n/* Item */\n.item {\n  flex: 1;            /* grow equally */\n  flex: 0 0 200px;    /* fixed width */\n  align-self: end;    /* override align */\n}'+E+'<h2>Common Patterns</h2>'+H+'/* Center anything */\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Navbar */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Grid of cards */\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.grid > * {\n  flex: 1 1 250px;\n}'+E);

D['css-grid']=A('css-grid','CSS Grid','CSS',
'CSS Grid is a two-dimensional layout system for rows AND columns.',
H+'/* Basic grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n/* Responsive grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n}'+E+'<h2>Named Grid Areas</h2>'+H+'.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n  gap: 16px;\n}\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }'+E+'<div class="note"><strong>Note:</strong> Use Flexbox for 1D (row OR column). Use Grid for 2D (rows AND columns).</div>');

D['css-responsive']=A('css-responsive','Responsive Design','CSS',
'Responsive design makes your website work on all screen sizes.',
H+'<!-- Required in HTML -->\n<meta name="viewport"\n  content="width=device-width, initial-scale=1.0">'+E+'<h2>Media Queries</h2>'+H+'/* Mobile first */\n.container {\n  padding: 16px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    padding: 32px;\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    padding: 48px;\n    max-width: 960px;\n  }\n}'+E+'<h2>Fluid Typography</h2>'+H+'h1 {\n  font-size: clamp(24px, 5vw, 44px);\n}'+E+'<div class="tip"><strong>Tip:</strong> Start with mobile design, then add breakpoints for larger screens.</div>');

// JavaScript
D['js-intro']=A('js-intro','What is JavaScript','JavaScript',
'JavaScript is the programming language of the web. It makes pages interactive.',
'<p>JavaScript can update content, validate forms, animate elements, and communicate with servers.</p>'+H+'<!-- External file -->\n<script src="app.js"></script>\n\n<!-- Internal -->\n<script>\n  console.log("Hello, World!");\n  document.title = "New Title";\n</script>'+E+'<h2>Console</h2>'+H+'console.log("Info");\nconsole.warn("Warning");\nconsole.error("Error");\nconsole.table([{a:1},{a:2}]);'+E+'<div class="tip"><strong>Tip:</strong> Open browser DevTools (F12) to see console output.</div>');

D['js-intro2']=A('js-intro2','JavaScript Introduction','JavaScript',
'JavaScript adds interactivity to websites. It runs in the browser and on servers (Node.js).',
'<h2>What Can JavaScript Do?</h2><ul><li>Change HTML content and attributes</li><li>Change CSS styles</li><li>React to user events (clicks, typing)</li><li>Send data to servers</li><li>Store data in the browser</li></ul>'+H+'// Change HTML\ndocument.getElementById("demo").innerHTML = "New text";\n\n// Change CSS\ndocument.body.style.background = "black";\n\n// React to clicks\ndocument.getElementById("btn").onclick = function() {\n  alert("Clicked!");\n};'+E);

D['js-variables']=A('js-variables','Variables','JavaScript',
'Variables store data. Use const for constants and let for values that change.',
H+'// const - cannot reassign\nconst name = "Deoit";\nconst PI = 3.14159;\n\n// let - can reassign\nlet score = 0;\nscore = 10; // OK\n\n// Don\'t use var (old way)\n\n// Multiple declarations\nlet x = 1, y = 2, z = 3;'+E+'<h2>Naming Rules</h2><ul><li>Start with letter, underscore, or $</li><li>Case sensitive (<code>name</code> != <code>Name</code>)</li><li>No reserved words (if, for, while)</li><li>Use camelCase: <code>myVariable</code></li></ul><div class="warn"><strong>Important:</strong> Always use <code>const</code> by default. Only use <code>let</code> when you need to reassign.</div>');

D['js-datatypes']=A('js-datatypes','Data Types','JavaScript',
'JavaScript has 8 data types. The main ones are String, Number, Boolean, Array, and Object.',
H+'// Primitive types\nconst text = "Hello";      // String\nconst num = 42;            // Number\nconst pi = 3.14;           // Number\nconst flag = true;         // Boolean\nconst empty = null;        // Null\nlet x;                     // Undefined\nconst id = Symbol("id");   // Symbol\nconst big = 123n;          // BigInt\n\n// Reference types\nconst arr = [1, 2, 3];     // Array\nconst obj = {              // Object\n  name: "Majed",\n  age: 25\n};\n\n// Check type\ntypeof "hello"   // "string"\ntypeof 42        // "number"\ntypeof true      // "boolean"\nArray.isArray([]) // true'+E);

D['js-operators']=A('js-operators','Operators','JavaScript',
'Operators perform operations on values.',
H+'// Arithmetic\n5 + 3    // 8\n5 - 3    // 2\n5 * 3    // 15\n5 / 3    // 1.666\n5 % 3    // 2 (remainder)\n5 ** 3   // 125 (power)\n\n// Assignment\nlet x = 10;\nx += 5;   // x = 15\nx -= 3;   // x = 12\nx *= 2;   // x = 24\n\n// Comparison\n5 == "5"   // true (loose)\n5 === "5"  // false (strict)\n5 != "5"   // false\n5 !== "5"  // true\n\n// Logical\ntrue && false  // false (AND)\ntrue || false  // true  (OR)\n!true          // false (NOT)'+E+'<div class="warn"><strong>Important:</strong> Always use <code>===</code> (strict equality) instead of <code>==</code>.</div>');

D['js-functions']=A('js-functions','Functions','JavaScript',
'Functions are reusable blocks of code.',
H+'// Declaration\nfunction greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow function\nconst greet = (name) => "Hello, " + name;\n\n// Default parameters\nfunction createUser(name, role = "user") {\n  return { name, role };\n}\ncreateUser("Majed"); // {name:"Majed", role:"user"}\n\n// Higher-order functions\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconst sum = nums.reduce((a, b) => a + b, 0);'+E);

D['js-conditions']=A('js-conditions','Conditions','JavaScript',
'Conditions make decisions based on different outcomes.',
H+'// if / else\nconst age = 18;\n\nif (age >= 18) {\n  console.log("Adult");\n} else if (age >= 13) {\n  console.log("Teen");\n} else {\n  console.log("Child");\n}\n\n// Ternary operator\nconst status = age >= 18 ? "Adult" : "Minor";\n\n// Switch\nconst day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  case "Friday":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("Regular day");\n}'+E);

D['js-loops']=A('js-loops','Loops','JavaScript',
'Loops repeat code multiple times.',
H+'// for loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// while loop\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n\n// for...of (arrays)\nconst colors = ["red", "blue", "green"];\nfor (const color of colors) {\n  console.log(color);\n}\n\n// for...in (objects)\nconst user = { name: "Majed", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n}\n\n// forEach\ncolors.forEach((color, index) => {\n  console.log(index, color);\n});'+E);

D['js-arrays']=A('js-arrays','Arrays','JavaScript',
'Arrays store multiple values in a single variable.',
H+'const fruits = ["apple", "banana", "cherry"];\n\n// Access\nfruits[0];        // "apple"\nfruits.length;    // 3\n\n// Add/Remove\nfruits.push("date");       // add to end\nfruits.pop();              // remove last\nfruits.unshift("fig");     // add to start\nfruits.shift();            // remove first\n\n// Methods\nfruits.includes("apple");  // true\nfruits.indexOf("banana");  // 1\nfruits.join(", ");         // "apple, banana"\nfruits.slice(1, 3);        // ["banana", "cherry"]\nfruits.splice(1, 1);       // remove 1 at index 1\n\n// Spread\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2]; // [1,2,3,4]'+E);

D['js-objects']=A('js-objects','Objects','JavaScript',
'Objects store data as key-value pairs.',
H+'const user = {\n  name: "Majed",\n  age: 25,\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\n\n// Access\nuser.name;          // "Majed"\nuser["age"];        // 25\nuser.greet();       // "Hello, Majed"\n\n// Modify\nuser.email = "m@m.com";\ndelete user.age;\n\n// Destructuring\nconst { name, age } = user;\n\n// Spread\nconst updated = { ...user, age: 26 };\n\n// Methods\nObject.keys(user);    // ["name", "greet"]\nObject.values(user);  // ["Majed", fn]\nObject.entries(user); // [["name","Majed"]...]'+E);

D['js-dom']=A('js-dom','DOM Manipulation','JavaScript',
'The DOM is a tree of HTML elements that JavaScript can read and modify.',
H+'// Select elements\nconst el = document.getElementById("myId");\nconst items = document.querySelectorAll(".item");\nconst first = document.querySelector(".item");\n\n// Change content\nel.textContent = "New text";\nel.innerHTML = "<strong>Bold</strong>";\n\n// Change attributes\nel.setAttribute("href", "https://example.com");\nel.src = "new.png";\nel.id = "newId";\n\n// Change styles\nel.style.color = "red";\nel.style.fontSize = "18px";\n\n// Classes\nel.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("visible");\nel.classList.contains("active"); // true\n\n// Create/Remove\nconst div = document.createElement("div");\ndiv.textContent = "New!";\ndocument.body.appendChild(div);\nel.remove();'+E);

D['js-events']=A('js-events','Events','JavaScript',
'Events let you respond to user actions.',
H+'// Click\ndocument.getElementById("btn")\n  .addEventListener("click", () => {\n    alert("Clicked!");\n  });\n\n// Form submit\ndocument.getElementById("form")\n  .addEventListener("submit", (e) => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    console.log(data.get("email"));\n  });\n\n// Keyboard\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});\n\n// Input change\ndocument.getElementById("search")\n  .addEventListener("input", (e) => {\n    filter(e.target.value);\n  });'+E+'<h2>Common Events</h2><table><tr><th>Event</th><th>Fires When</th></tr><tr><td><code>click</code></td><td>Element clicked</td></tr><tr><td><code>submit</code></td><td>Form submitted</td></tr><tr><td><code>keydown</code></td><td>Key pressed</td></tr><tr><td><code>input</code></td><td>Input value changes</td></tr><tr><td><code>load</code></td><td>Page loaded</td></tr></table>');

D['js-async']=A('js-async','Async/Await','JavaScript',
'Async code runs long tasks without blocking the rest of your code.',
H+'// Promise\nconst promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\npromise.then(r => console.log(r));\n\n// Async/Await\nasync function getData() {\n  try {\n    const res = await fetch("/api/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Error:", err);\n  }\n}\n\ngetData();'+E+'<div class="note"><strong>Note:</strong> <code>await</code> pauses execution until the Promise resolves. It only works inside <code>async</code> functions.</div>');

D['js-fetch']=A('js-fetch','Fetch API','JavaScript',
'The Fetch API makes HTTP requests to servers and APIs.',
H+'// GET\nconst res = await fetch("https://api.example.com/users");\nconst users = await res.json();\nconsole.log(users);\n\n// POST\nconst res = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Majed" })\n});\n\n// Error handling\nconst res = await fetch("/api");\nif (!res.ok) throw new Error(res.statusText);'+E);

// React
D['react-intro']=A('react-intro','Introduction to React','React',
'React is a JavaScript library for building user interfaces, created by Meta.',
'<h2>Why React?</h2><ul><li>Component-based: build UI from reusable pieces</li><li>Virtual DOM for fast performance</li><li>Large ecosystem and community</li><li>Used by Facebook, Instagram, Netflix, Airbnb</li></ul>'+H+'// Install\n// npx create-react-app my-app\n\n// App.js\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n    </div>\n  );\n}\n\nexport default App;'+E);

D['react-jsx']=A('react-jsx','JSX','React',
'JSX is a syntax extension that looks like HTML but compiles to JavaScript.',
H+'// JSX expression\nconst name = "Majed";\nconst element = <h1>Hello, {name}!</h1>;\n\n// Conditional\nconst greeting = isLoggedIn\n  ? <h1>Welcome back!</h1>\n  : <h1>Please sign in.</h1>;\n\n// List rendering\nconst items = ["HTML", "CSS", "JS"];\nconst list = (\n  <ul>\n    {items.map((item, i) => (\n      <li key={i}>{item}</li>\n    ))}\n  </ul>\n);'+E+'<div class="note"><strong>Note:</strong> JSX must have one parent element. Use <code>&lt;Fragment&gt;</code> or <code>&lt;&gt;</code> to wrap multiple elements.</div>');

D['react-components']=A('react-components','Components','React',
'Components are reusable pieces of UI. They are functions that return JSX.',
H+'// Function component\nfunction Button({ text, onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\n// Using it\nfunction App() {\n  return (\n    <div>\n      <Button text="Click me" onClick={() => alert("Hi")} />\n    </div>\n  );\n}'+E+'<div class="tip"><strong>Tip:</strong> Components start with a capital letter (<code>Button</code>, not <code>button</code>).</div>');

D['react-props']=A('react-props','Props','React',
'Props are inputs to components. They pass data from parent to child.',
H+'// Parent passes props\nfunction App() {\n  return (\n    <Card\n      title="Hello"\n      description="World"\n      count={42}\n    />\n  );\n}\n\n// Child receives props\nfunction Card({ title, description, count }) {\n  return (\n    <div className="card">\n      <h3>{title}</h3>\n      <p>{description}</p>\n      <span>{count}</span>\n    </div>\n  );\n}\n\n// Children prop\nfunction Container({ children }) {\n  return <div className="container">{children}</div>;\n}'+E);

D['react-state']=A('react-state','State','React',
'State is data that changes over time. The useState hook manages state in components.',
H+'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <button onClick={() => setCount(count - 1)}>-1</button>\n    </div>\n  );\n}\n\n// Object state\nfunction User() {\n  const [user, setUser] = useState({ name: "", email: "" });\n\n  return (\n    <input\n      value={user.name}\n      onChange={e => setUser({ ...user, name: e.target.value })}\n    />\n  );\n}'+E);

D['react-hooks']=A('react-hooks','Hooks','React',
'Hooks let you use state and other React features in function components.',
H+'import { useState, useEffect, useRef } from "react";\n\n// useState - manage state\nconst [count, setCount] = useState(0);\n\n// useEffect - side effects\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]); // runs when count changes\n\n// useRef - reference DOM elements\nfunction Input() {\n  const ref = useRef(null);\n  return (\n    <input ref={ref} />\n    <button onClick={() => ref.current.focus()}>\n      Focus\n    </button>\n  );\n}'+E+'<h2>Rules of Hooks</h2><ol><li>Only call hooks at the top level</li><li>Only call hooks in React functions</li></ol>');

// Node.js
D['node-intro']=A('node-intro','Introduction to Node.js','Node.js',
'Node.js lets you run JavaScript on the server instead of just in the browser.',
'<h2>What is Node.js?</h2><p>Node.js is a JavaScript runtime built on Chrome\'s V8 engine. It\'s used for APIs, web servers, CLI tools, and more.</p>'+H+'// Install Node.js from nodejs.org\n\n// app.js\nimport { createServer } from "http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "application/json" });\n  res.end(JSON.stringify({ message: "Hello!" }));\n});\n\nserver.listen(3000, () => {\n  console.log("Server running on port 3000");\n});'+E+'<h2>Common Commands</h2>'+H+'node app.js           # run script\nnode -v               # check version\nnpm init -y           # create package.json\nnpm install express   # install package'+E);

D['node-npm']=A('node-npm','npm','Node.js',
'npm (Node Package Manager) manages JavaScript packages and dependencies.',
H+'// Initialize project\nnpm init -y\n\n// Install packages\nnpm install express\nnpm install -D nodemon    // dev dependency\nnpm uninstall express\n\n// package.json\n{\n  "name": "my-app",\n  "scripts": {\n    "start": "node app.js",\n    "dev": "nodemon app.js"\n  },\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}\n\n// Run scripts\nnpm start\nnpm run dev'+E);

D['node-express']=A('node-express','Express.js','Node.js',
'Express.js is the most popular web framework for Node.js.',
H+'import express from "express";\nconst app = express();\n\n// Parse JSON\napp.use(express.json());\n\n// GET\napp.get("/", (req, res) => {\n  res.json({ message: "Hello!" });\n});\n\n// GET with params\napp.get("/users/:id", (req, res) => {\n  res.json({ id: req.params.id });\n});\n\n// POST\napp.post("/users", (req, res) => {\n  const { name } = req.body;\n  res.json({ name, created: true });\n});\n\n// Start server\napp.listen(3000, () => {\n  console.log("Running on port 3000");\n});'+E);

// Tools
D['git-basics']=A('git-basics','Git Basics','Tools',
'Git is a version control system for tracking code changes.',
H+'# Setup\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# Check status\ngit status\ngit log --oneline\n\n# Branching\ngit branch feature\ngit checkout feature\ngit checkout -b feature   # create + switch\ngit merge feature\n\n# Remote\ngit remote add origin URL\ngit push -u origin main\ngit pull origin main'+E);

D['terminal']=A('terminal','Terminal Basics','Tools',
'The terminal is a text-based interface for your computer.',
H+'# Navigation\ncd folder        # change directory\ncd ..           # go up\ncd ~/Desktop    # go to Desktop\npwd             # print path\n\n# Files\nls / dir        # list files\nmkdir name      # create folder\ntouch file.txt  # create file\nrm file.txt     # delete file\ncp src dest     # copy\nmv src dest     # move/rename\n\n# Clear\nclear / cls'+E+'<div class="tip"><strong>Tip:</strong> Press Tab to autocomplete file names.</div>');
});

// All lesson IDs in order
var ALL_IDS=[];
SECTIONS.forEach(function(s){s.items.forEach(function(it){ALL_IDS.push(it.id)})});

var nav=document.getElementById('nav');
var article=document.getElementById('article');
var breadcrumb=document.getElementById('breadcrumb');
var side=document.getElementById('side');
var ov=document.getElementById('ov');
var mobBtn=document.getElementById('mobBtn');
var searchInput=document.getElementById('searchInput');

function buildNav(filter){
  var html='';
  var f=(filter||'').toLowerCase();
  SECTIONS.forEach(function(s){
    var items='';
    var hasMatch=false;
    s.items.forEach(function(it){
      if(f && it.l.toLowerCase().indexOf(f)===-1) return;
      hasMatch=true;
      var cls='nav-link'+(currentId===it.id?' on':'');
      items+='<a class="'+cls+'" data-id="'+it.id+'" href="#'+it.id+'">'+it.l+'</a>';
    });
    if(!hasMatch && f) return;
    html+='<div class="nav-sec'+(f?'':'')+'"><div class="nav-sec-t" onclick="this.parentElement.classList.toggle(\'closed\')">'+s.t+' <span class="arr">&#9662;</span></div><div class="nav-links">'+items+'</div></div>';
  });
  nav.innerHTML=html;
  nav.querySelectorAll('.nav-link').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      navigate(a.dataset.id);
      closeSidebar();
    });
  });
}

function navigate(id){
  if(!D[id]) return;
  currentId=id;
  location.hash=id;
  buildNav(searchInput.value);
  renderArticle(id);
  closeSidebar();
  window.scrollTo(0,0);
}

function renderArticle(id){
  var d=D[id];
  var idx=ALL_IDS.indexOf(id);
  var prev=idx>0?ALL_IDS[idx-1]:null;
  var next=idx<ALL_IDS.length-1?ALL_IDS[idx+1]:null;
  var cat=d.cat;

  breadcrumb.innerHTML='<a href="#home">Home</a><span>›</span>'+cat+'<span>›</span>'+d.title;

  var html='<h1>'+d.title+'</h1>';
  html+='<div class="intro">'+d.intro+'</div>';
  html+=d.content;

  // Nav buttons
  html+='<div class="nav-btns">';
  if(prev){
    html+='<a class="nav-btn prev" href="#'+prev+'" onclick="event.preventDefault();window._lnav(\''+prev+'\')"><span class="label">← Previous</span><span class="title">'+D[prev].title+'</span></a>';
  }else{
    html+='<div></div>';
  }
  if(next){
    html+='<a class="nav-btn next" href="#'+next+'" onclick="event.preventDefault();window._lnav(\''+next+'\')"><span class="label">Next →</span><span class="title">'+D[next].title+'</span></a>';
  }
  html+='</div>';

  article.innerHTML=html;
}

function renderHome(){
  currentId='home';
  breadcrumb.innerHTML='Home';
  buildNav(searchInput.value);

  var html='<div class="home-hero"><h1>Learn <span>Web Development</span></h1><p>Master HTML, CSS, JavaScript, React, and Node.js with hands-on examples and exercises.</p></div>';
  html+='<div class="cat-grid">';
  var icons={HTML:'&#128196;',CSS:'&#127912;',JavaScript:'&#9889;',React:'&#9883;',Node:'&#128230;',Tools:'&#128295;','Getting Started':'&#128640;'};
  SECTIONS.forEach(function(s){
    html+='<div class="cat-card" onclick="window._lnav(\''+s.items[0].id+'\')"><div class="icon">'+(icons[s.t]||'&#128187;')+'</div><h3>'+s.t+'</h3><p>'+s.items.length+' lessons</p></div>';
  });
  html+='</div>';
  article.innerHTML=html;
  window.scrollTo(0,0);
}

function closeSidebar(){
  side.classList.remove('open');
  ov.classList.remove('show');
}

// Events
mobBtn.addEventListener('click',function(){
  side.classList.toggle('open');
  ov.classList.toggle('show');
});
ov.addEventListener('click',closeSidebar);
searchInput.addEventListener('input',function(){buildNav(this.searchInput?this.value:searchInput.value)});

window._lnav=navigate;

// Init
var currentId='home';
var hash=location.hash.slice(1);
if(hash && D[hash]) navigate(hash); else renderHome();

window.addEventListener('hashchange',function(){
  var h=location.hash.slice(1);
  if(h && D[h]) navigate(h);
});
})();

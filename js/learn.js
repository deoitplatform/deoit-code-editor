(function(){
var SECTIONS=[
{t:'Getting Started',c:'var(--accent)',page:'getting-started',items:[
  {id:'intro',l:'Introduction',d:'Start your web development journey'},
  {id:'html-intro',l:'What is HTML',d:'The building blocks of the web'},
  {id:'css-intro',l:'What is CSS',d:'Styling and layout'},
  {id:'js-intro',l:'What is JavaScript',d:'The language of the web'}
]},
{t:'HTML',c:'var(--accent-html)',page:'html',items:[
  {id:'html-edit',l:'HTML Editors',d:'Tools for writing HTML'},
  {id:'html-basics',l:'HTML Basics',d:'Document structure and syntax'},
  {id:'html-elements',l:'HTML Elements',d:'Tags, content, and nesting'},
  {id:'html-attributes',l:'HTML Attributes',d:'Extra info on elements'},
  {id:'html-headings',l:'HTML Headings',d:'h1 through h6'},
  {id:'html-paragraphs',l:'HTML Paragraphs',d:'Text and line breaks'},
  {id:'html-links',l:'HTML Links',d:'Navigation and hyperlinks'},
  {id:'html-images',l:'HTML Images',d:'Adding pictures'},
  {id:'html-forms',l:'HTML Forms',d:'User input and controls'},
  {id:'html-tables',l:'HTML Tables',d:'Rows, columns, and cells'},
  {id:'html-lists',l:'HTML Lists',d:'Ordered and unordered lists'},
  {id:'html-semantics',l:'Semantic HTML',d:'Meaningful markup'}
]},
{t:'CSS',c:'var(--accent-css)',page:'css',items:[
  {id:'css-intro2',l:'CSS Introduction',d:'How CSS works'},
  {id:'css-syntax',l:'CSS Syntax',d:'Selectors and declarations'},
  {id:'css-selectors',l:'CSS Selectors',d:'Targeting elements'},
  {id:'css-colors',l:'CSS Colors',d:'HEX, RGB, and more'},
  {id:'css-background',l:'CSS Background',d:'Colors, images, gradients'},
  {id:'css-boxmodel',l:'Box Model',d:'Content, padding, border, margin'},
  {id:'css-margin',l:'Margin & Padding',d:'Spacing inside and out'},
  {id:'css-flexbox',l:'Flexbox',d:'One-dimensional layouts'},
  {id:'css-grid',l:'CSS Grid',d:'Two-dimensional layouts'},
  {id:'css-responsive',l:'Responsive Design',d:'Mobile-first approach'}
]},
{t:'JavaScript',c:'var(--accent-js)',page:'js',items:[
  {id:'js-intro2',l:'JS Introduction',d:'What JS can do'},
  {id:'js-variables',l:'Variables',d:'Storing data values'},
  {id:'js-datatypes',l:'Data Types',d:'Strings, numbers, objects'},
  {id:'js-operators',l:'Operators',d:'Arithmetic, comparison, logic'},
  {id:'js-functions',l:'Functions',d:'Reusable code blocks'},
  {id:'js-conditions',l:'Conditions',d:'Making decisions'},
  {id:'js-loops',l:'Loops',d:'Repeating actions'},
  {id:'js-arrays',l:'Arrays',d:'Lists of values'},
  {id:'js-objects',l:'Objects',d:'Key-value pairs'},
  {id:'js-dom',l:'DOM Manipulation',d:'Changing the page'},
  {id:'js-events',l:'Events',d:'Responding to user actions'},
  {id:'js-async',l:'Async/Await',d:'Asynchronous programming'},
  {id:'js-fetch',l:'Fetch API',d:'HTTP requests'}
]},
{t:'React',c:'var(--accent-react)',page:'react',items:[
  {id:'react-intro',l:'React Intro',d:'Component-based UIs'},
  {id:'react-jsx',l:'JSX',d:'HTML-like syntax'},
  {id:'react-components',l:'Components',d:'Building blocks'},
  {id:'react-props',l:'Props',d:'Passing data'},
  {id:'react-state',l:'State',d:'Managing data'},
  {id:'react-hooks',l:'Hooks',d:'React features'}
]},
{t:'Node.js',c:'var(--accent-node)',page:'node',items:[
  {id:'node-intro',l:'Node.js Intro',d:'Server-side JavaScript'},
  {id:'node-npm',l:'npm',d:'Package management'},
  {id:'node-express',l:'Express.js',d:'Web framework'}
]},
{t:'Tools',c:'var(--accent-tools)',page:'tools',items:[
  {id:'git-basics',l:'Git Basics',d:'Version control'},
  {id:'terminal',l:'Terminal',d:'Command line basics'}
]}
];

var ALL_IDS=[];
SECTIONS.forEach(function(s){s.items.forEach(function(it){ALL_IDS.push(it.id)})});

function makeEx(title,code){
  return '<div class="l-ex"><div class="l-ex-top"><div class="l-ex-dots"><span></span><span></span><span></span></div><span class="l-ex-title">'+title+'</span><button class="l-ex-btn" onclick="window._tryCode(this)">Try it Yourself</button></div><div class="l-ex-body"><pre><code>'+escH(code)+'</code></pre></div></div>';
}
function escH(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

var D={};

D.intro={id:'intro',title:'Introduction',cat:'Getting Started',intro:'Welcome to Deoit Learn — your free guide to web development.',
content:'<p>This platform teaches you web development from scratch with hands-on examples you can run in the <a href="pages/editor">Deoit editor</a>.</p>'+
'<h3>What You Will Learn</h3><ul>'+
'<li><strong>HTML</strong> — the structure of web pages</li>'+
'<li><strong>CSS</strong> — styling, colors, and layout</li>'+
'<li><strong>JavaScript</strong> — interactivity and logic</li>'+
'<li><strong>React</strong> — modern component-based UIs</li>'+
'<li><strong>Node.js</strong> — server-side JavaScript</li>'+
'</ul>'+
'<h3>How It Works</h3>'+
'<p>Each lesson explains a concept and shows code. Click <strong>"Try it Yourself"</strong> to run it in the editor.</p>'+
makeEx('Hello World','<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello, World!</h1>\n  <p>Welcome to Deoit Learn.</p>\n</body>\n</html>')+
'<div class="l-tip"><strong>Tip:</strong> Follow lessons in order — HTML first, then CSS, then JavaScript.</div>'+
'<h3>Prerequisites</h3>'+
'<p>You need <strong>zero experience</strong>. Just a browser and a willingness to learn.</p>'};

D['html-intro']={id:'html-intro',title:'What is HTML',cat:'HTML',intro:'HTML (HyperText Markup Language) is the standard language for creating web pages.',
content:'<p>Every website is built with HTML. It describes page structure using elements and tags.</p>'+
makeEx('Basic HTML Document','<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>')+
'<h3>How the Web Works</h3><ol>'+
'<li>You type a URL in your browser</li>'+
'<li>Browser sends a request to a server</li>'+
'<li>Server responds with HTML files</li>'+
'<li>Browser renders the page</li>'+
'</ol>'+
'<div class="l-tip"><strong>Tip:</strong> Open the <a href="pages/editor">Deoit editor</a> and write your first HTML page!</div>'};

D['html-edit']={id:'html-edit',title:'HTML Editors',cat:'HTML',intro:'An HTML editor is where you write your code. You can use any text editor, but dedicated editors give you helpful features.',
content:'<p>Save your file with a <code>.html</code> extension and open it in a browser.</p>'+
makeEx('Simple HTML File','<!-- Save as index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Page</h1>\n  <p>Open this file in a browser.</p>\n</body>\n</html>')+
'<h3>Using Deoit</h3><p>The fastest way to start: open the <a href="pages/editor">Deoit online editor</a>. No downloads needed.</p>'+
'<div class="l-note"><strong>Note:</strong> The Deoit editor shows output live as you type.</div>'};

D['html-basics']={id:'html-basics',title:'HTML Basics',cat:'HTML',intro:'Every HTML document follows the same basic structure.',
content:'<h3>Document Structure</h3>'+
makeEx('Complete HTML Document','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My Heading</h1>\n  <p>My paragraph.</p>\n</body>\n</html>')+
'<h3>Key Elements</h3><ul>'+
'<li><code>&lt;!DOCTYPE html&gt;</code> — declares HTML5</li>'+
'<li><code>&lt;html&gt;</code> — root element</li>'+
'<li><code>&lt;head&gt;</code> — meta information</li>'+
'<li><code>&lt;body&gt;</code> — visible content</li>'+
'</ul>'};

D['html-elements']={id:'html-elements',title:'HTML Elements',cat:'HTML',intro:'An HTML element has a start tag, content, and an end tag.',
content:makeEx('Elements','<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<a href="https://example.com">This is a link</a>')+
'<h3>Nested Elements</h3>'+
makeEx('Nesting','<div>\n  <h2>Title</h2>\n  <p>Paragraph inside a div.</p>\n</div>')+
'<div class="l-note"><strong>Note:</strong> Some elements are self-closing like <code>&lt;img&gt;</code> and <code>&lt;br&gt;</code>.</div>'};

D['html-attributes']={id:'html-attributes',title:'HTML Attributes',cat:'HTML',intro:'Attributes provide extra information about HTML elements.',
content:makeEx('Attributes','<!-- href: link destination -->\n<a href="https://google.com">Google</a>\n\n<!-- src: image source -->\n<img src="logo.png" alt="Logo">\n\n<!-- class: CSS class -->\n<div class="container">Content</div>\n\n<!-- id: unique identifier -->\n<div id="main">Main</div>\n\n<!-- style: inline CSS -->\n<p style="color: red;">Red</p>')+
'<table><tr><th>Attribute</th><th>Purpose</th></tr>'+
'<tr><td><code>href</code></td><td>Link URL</td></tr>'+
'<tr><td><code>src</code></td><td>Image/source URL</td></tr>'+
'<tr><td><code>alt</code></td><td>Image description</td></tr>'+
'<tr><td><code>class</code></td><td>CSS class name</td></tr>'+
'<tr><td><code>id</code></td><td>Unique ID</td></tr></table>'};

D['html-headings']={id:'html-headings',title:'HTML Headings',cat:'HTML',intro:'HTML defines six heading levels, from <h1> to <h6>.',
content:makeEx('Headings','<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>')+
'<h3>Best Practices</h3><ul>'+
'<li>Use <code>&lt;h1&gt;</code> for the main title (one per page)</li>'+
'<li>Use <code>&lt;h2&gt;</code> for sections</li>'+
'<li>Don\'t skip levels (h1 to h3)</li>'+
'</ul>'+
'<div class="l-tip"><strong>Tip:</strong> Headings improve SEO and accessibility.</div>'};

D['html-paragraphs']={id:'html-paragraphs',title:'HTML Paragraphs',cat:'HTML',intro:'The <p> element defines a paragraph.',
content:makeEx('Paragraphs','<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n\n<!-- Line break -->\n<p>Line one.<br>Line two.</p>\n\n<!-- Horizontal rule -->\n<hr>\n\n<!-- Preformatted -->\n<pre>\n  Preserves\n  spaces.\n</pre>')+
'<div class="l-note"><strong>Note:</strong> Browsers add space before and after paragraphs.</div>'};

D['html-links']={id:'html-links',title:'HTML Links',cat:'HTML',intro:'Links are defined with the <a> tag. The href attribute sets the destination.',
content:makeEx('Links','<!-- Basic -->\n<a href="https://google.com">Visit Google</a>\n\n<!-- New tab -->\n<a href="https://google.com" target="_blank">\n  Open in new tab\n</a>\n\n<!-- Email -->\n<a href="mailto:test@test.com">Send Email</a>')+
'<table><tr><th>Attribute</th><th>Description</th></tr>'+
'<tr><td><code>href</code></td><td>URL</td></tr>'+
'<tr><td><code>target</code></td><td>_blank = new tab</td></tr>'+
'<tr><td><code>title</code></td><td>Tooltip</td></tr></table>'};

D['html-images']={id:'html-images',title:'HTML Images',cat:'HTML',intro:'Images use the self-closing <img> tag with src and alt attributes.',
content:makeEx('Images','<!-- Basic -->\n<img src="photo.jpg" alt="Description">\n\n<!-- With size -->\n<img src="logo.png" alt="Logo" width="200">\n\n<!-- Responsive -->\n<img src="pic.jpg" alt="Photo"\n     style="max-width: 100%;">')+
'<table><tr><th>Attribute</th><th>Description</th></tr>'+
'<tr><td><code>src</code></td><td>Path to image</td></tr>'+
'<tr><td><code>alt</code></td><td>Text if image fails</td></tr>'+
'<tr><td><code>width</code></td><td>Width in px</td></tr></table>'+
'<div class="l-warn"><strong>Important:</strong> Always include <code>alt</code> for accessibility.</div>'};

D['html-forms']={id:'html-forms',title:'HTML Forms',cat:'HTML',intro:'Forms collect user input using <form>, <input>, <select>, and <textarea>.',
content:makeEx('Form','<form action="/submit" method="POST">\n  <label>Name:</label>\n  <input type="text" name="name" required>\n\n  <label>Email:</label>\n  <input type="email" name="email" required>\n\n  <label>Password:</label>\n  <input type="password" name="pass">\n\n  <select name="role">\n    <option>User</option>\n    <option>Admin</option>\n  </select>\n\n  <textarea rows="4"></textarea>\n\n  <button type="submit">Submit</button>\n</form>')+
'<h3>Input Types</h3>'+
'<table><tr><th>Type</th><th>Purpose</th></tr>'+
'<tr><td><code>text</code></td><td>Text input</td></tr>'+
'<tr><td><code>email</code></td><td>Email validation</td></tr>'+
'<tr><td><code>password</code></td><td>Hidden text</td></tr>'+
'<tr><td><code>number</code></td><td>Numbers</td></tr>'+
'<tr><td><code>checkbox</code></td><td>Toggle</td></tr>'+
'<tr><td><code>radio</code></td><td>Single choice</td></tr>'+
'<tr><td><code>file</code></td><td>Upload</td></tr>'+
'<tr><td><code>date</code></td><td>Date picker</td></tr></table>'};

D['html-tables']={id:'html-tables',title:'HTML Tables',cat:'HTML',intro:'Tables display data in rows and columns.',
content:makeEx('Table','<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Majed</td>\n      <td>25</td>\n    </tr>\n    <tr>\n      <td>Ali</td>\n      <td>30</td>\n    </tr>\n  </tbody>\n</table>')+
'<ul><li><code>&lt;thead&gt;</code> — header</li>'+
'<li><code>&lt;tbody&gt;</code> — body</li>'+
'<li><code>colspan</code> — span columns</li>'+
'<li><code>rowspan</code> — span rows</li></ul>'};

D['html-lists']={id:'html-lists',title:'HTML Lists',cat:'HTML',intro:'Lists group related items. HTML supports ordered, unordered, and description lists.',
content:'<h3>Unordered List</h3>'+
makeEx('Unordered','<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>')+
'<h3>Ordered List</h3>'+
makeEx('Ordered','<ol>\n  <li>Learn HTML</li>\n  <li>Learn CSS</li>\n  <li>Learn JavaScript</li>\n</ol>')+
'<h3>Description List</h3>'+
makeEx('Description','<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>')};

D['html-semantics']={id:'html-semantics',title:'Semantic HTML',cat:'HTML',intro:'Semantic elements describe their meaning to browsers and developers.',
content:makeEx('Semantic Structure','<header>\n  <nav>Menu</nav>\n</header>\n\n<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content here...</p>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n\n<footer>\n  <p>Copyright 2026</p>\n</footer>')+
'<table><tr><th>Tag</th><th>Purpose</th></tr>'+
'<tr><td><code>&lt;header&gt;</code></td><td>Page header</td></tr>'+
'<tr><td><code>&lt;nav&gt;</code></td><td>Navigation</td></tr>'+
'<tr><td><code>&lt;main&gt;</code></td><td>Main content</td></tr>'+
'<tr><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr>'+
'<tr><td><code>&lt;footer&gt;</code></td><td>Page footer</td></tr></table>'};

// ─── CSS ───
D['css-intro']={id:'css-intro',title:'What is CSS',cat:'CSS',intro:'CSS controls how HTML elements look — colors, fonts, layout, and more.',
content:makeEx('Three Ways to Add CSS','<!-- 1. External (best) -->\n<link rel="stylesheet" href="style.css">\n\n<!-- 2. Internal -->\n<style>\n  body { background: #0d0d0d; }\n</style>\n\n<!-- 3. Inline -->\n<p style="color: red;">Red</p>')+
'<h3>CSS Syntax</h3>'+
makeEx('Syntax','selector {\n  property: value;\n}\n\nh1 {\n  color: #d9d9d9;\n  font-size: 24px;\n  margin-bottom: 12px;\n}')};

D['css-intro2']={id:'css-intro2',title:'CSS Introduction',cat:'CSS',intro:'CSS is the language for styling web pages. HTML provides structure, CSS provides style.',
content:makeEx('Selectors','/* Element */\nh1 { color: white; }\n\n/* Class */\n.card { padding: 20px; }\n\n/* ID */\n#header { background: #111; }\n\n/* Descendant */\n.sidebar a { color: blue; }\n\n/* Pseudo-class */\na:hover { color: red; }')+
'<table><tr><th>Selector</th><th>Example</th></tr>'+
'<tr><td>Element</td><td><code>p { }</code></td></tr>'+
'<tr><td>Class</td><td><code>.card { }</code></td></tr>'+
'<tr><td>ID</td><td><code>#main { }</code></td></tr></table>'};

D['css-syntax']={id:'css-syntax',title:'CSS Syntax',cat:'CSS',intro:'A CSS rule has a selector and a declaration block.',
content:makeEx('Syntax','/* Basic */\nselector {\n  property: value;\n}\n\n/* Class */\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n}\n\n/* ID */\n#header {\n  position: sticky;\n  top: 0;\n}')+
'<div class="l-note"><strong>Note:</strong> Properties are separated by semicolons.</div>'};

D['css-selectors']={id:'css-selectors',title:'CSS Selectors',cat:'CSS',intro:'Selectors determine which elements a CSS rule applies to.',
content:makeEx('Selectors','/* Element */\np { color: white; }\n\n/* Class */\n.card { padding: 20px; }\n\n/* ID */\n#header { background: #111; }\n\n/* Descendant */\n.sidebar a { color: blue; }\n\n/* Pseudo-class */\na:hover { color: red; }\nbutton:disabled { opacity: 0.5; }\n\n/* Attribute */\ninput[type="email"] { border: red; }')+
'<h3>Specificity</h3><ol>'+
'<li><code>!important</code> (avoid)</li>'+
'<li>Inline <code>style="..."</code></li>'+
'<li>ID <code>#id</code></li>'+
'<li>Class <code>.class</code></li>'+
'<li>Element <code>div</code></li></ol>'+
'<div class="l-tip"><strong>Tip:</strong> Use classes for styling, IDs for JS.</div>'};

D['css-colors']={id:'css-colors',title:'CSS Colors',cat:'CSS',intro:'CSS supports colors in HEX, RGB, RGBA, HSL, and named formats.',
content:makeEx('Colors','/* Named */\np { color: red; }\n\n/* HEX */\np { color: #d9d9d9; }\n\n/* RGB */\np { color: rgb(217, 217, 217); }\n\n/* RGBA (transparency) */\np { color: rgba(217, 217, 217, 0.5); }\n\n/* HSL */\np { color: hsl(0, 0%, 85%); }')+
'<div class="l-tip"><strong>Tip:</strong> Use CSS variables: <code>--accent: #d9d9d9;</code></div>'};

D['css-background']={id:'css-background',title:'CSS Background',cat:'CSS',intro:'Background properties control colors, images, and gradients.',
content:makeEx('Backgrounds','body {\n  background-color: #0d0d0d;\n  background-image: url("bg.jpg");\n  background-size: cover;\n}\n\n/* Gradient */\n.hero {\n  background: linear-gradient(135deg, #141414, #0d0d0d);\n}\n\n/* Radial */\n.glow {\n  background: radial-gradient(circle, #61afef22, transparent);\n}')};

D['css-boxmodel']={id:'css-boxmodel',title:'Box Model',cat:'CSS',intro:'Every element is a box with content, padding, border, and margin.',
content:makeEx('Box Model','.box {\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #2a2a2a;\n  margin: 16px;\n}\n\n/* border-box: include padding/border in width */\n*, *::before, *::after {\n  box-sizing: border-box;\n}')};

D['css-margin']={id:'css-margin',title:'Margin & Padding',cat:'CSS',intro:'Margin is outside the border. Padding is inside the border.',
content:makeEx('Margin & Padding','/* Margin */\n.box {\n  margin: 10px 20px;       /* top/bottom left/right */\n  margin: 10px 20px 10px;   /* top left/right bottom */\n}\n\n/* Padding */\n.card {\n  padding: 20px;\n  padding: 20px 16px;\n}\n\n/* Center */\n.center {\n  margin: 0 auto;\n  max-width: 800px;\n}')};

D['css-flexbox']={id:'css-flexbox',title:'Flexbox',cat:'CSS',intro:'Flexbox is a one-dimensional layout system for rows or columns.',
content:makeEx('Flexbox','/* Container */\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n/* Item */\n.item { flex: 1; }\n\n/* Center */\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}')+
'<div class="l-tip"><strong>Tip:</strong> Flexbox for 1D (row OR column), Grid for 2D.</div>'};

D['css-grid']={id:'css-grid',title:'CSS Grid',cat:'CSS',intro:'CSS Grid handles rows AND columns at the same time.',
content:makeEx('Grid','.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n/* Responsive */\n.grid {\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}')+
'<h3>Grid Areas</h3>'+
makeEx('Grid Areas','.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n}\n\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }')};

D['css-responsive']={id:'css-responsive',title:'Responsive Design',cat:'CSS',intro:'Responsive design makes your site work on all screen sizes.',
content:'<h3>Viewport Meta</h3>'+
makeEx('Meta Tag','<meta name="viewport"\n  content="width=device-width, initial-scale=1.0">')+
'<h3>Media Queries</h3>'+
makeEx('Media Queries','/* Mobile first */\n.container { padding: 16px; }\n\n@media (min-width: 768px) {\n  .container {\n    padding: 32px;\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}')+
'<h3>Fluid Typography</h3>'+
makeEx('clamp()','h1 {\n  font-size: clamp(24px, 5vw, 44px);\n}')+
'<div class="l-tip"><strong>Tip:</strong> Design mobile first, then add breakpoints.</div>'};

// ─── JavaScript ───
D['js-intro']={id:'js-intro',title:'What is JavaScript',cat:'JavaScript',intro:'JavaScript is the programming language of the web.',
content:'<p>JS can update content, validate forms, animate, and communicate with servers.</p>'+
makeEx('Script Tags','<!-- External -->\n<script src="app.js"><\/script>\n\n<!-- Internal -->\n<script>\n  console.log("Hello!");\n<\/script>')+
'<h3>Console</h3>'+
makeEx('Console','console.log("Info");\nconsole.warn("Warning");\nconsole.error("Error");')+
'<div class="l-tip"><strong>Tip:</strong> Open DevTools (F12) to see console output.</div>'};

D['js-intro2']={id:'js-intro2',title:'JavaScript Introduction',cat:'JavaScript',intro:'JavaScript adds interactivity to websites.',
content:'<h3>What JS Can Do</h3><ul>'+
'<li>Change HTML content and attributes</li>'+
'<li>Change CSS styles</li>'+
'<li>React to user events</li>'+
'<li>Send data to servers</li>'+
'<li>Store data in the browser</li></ul>'+
makeEx('Interactive Example','// Change content\ndocument.getElementById("demo")\n  .innerHTML = "New text";\n\n// Change styles\ndocument.body.style.background = "black";\n\n// React to clicks\ndocument.getElementById("btn")\n  .onclick = function() {\n    alert("Clicked!");\n  };')};

D['js-variables']={id:'js-variables',title:'Variables',cat:'JavaScript',intro:'Variables store data. Use const for constants, let for changeable values.',
content:makeEx('Variables','// const (cannot reassign)\nconst name = "Deoit";\nconst PI = 3.14159;\n\n// let (can reassign)\nlet score = 0;\nscore = 10; // OK\n\n// Don\'t use var\nlet x = 1, y = 2, z = 3;')+
'<h3>Naming Rules</h3><ul>'+
'<li>Start with letter, _, or $</li>'+
'<li>Case sensitive</li>'+
'<li>No reserved words</li>'+
'<li>Use camelCase: <code>myVariable</code></li></ul>'+
'<div class="l-warn"><strong>Important:</strong> Use <code>const</code> by default. Only <code>let</code> when needed.</div>'};

D['js-datatypes']={id:'js-datatypes',title:'Data Types',cat:'JavaScript',intro:'JavaScript has several data types. The main ones are String, Number, Boolean, Array, and Object.',
content:makeEx('Data Types','// Primitives\nconst text = "Hello";       // String\nconst num = 42;             // Number\nconst flag = true;          // Boolean\nconst empty = null;         // Null\nlet x;                      // Undefined\n\n// Reference\nconst arr = [1, 2, 3];      // Array\nconst obj = {               // Object\n  name: "Majed",\n  age: 25\n};\n\n// Check type\ntypeof "hello"   // "string"\ntypeof 42        // "number"\nArray.isArray([]) // true')};

D['js-operators']={id:'js-operators',title:'Operators',cat:'JavaScript',intro:'Operators perform operations on values.',
content:makeEx('Operators','// Arithmetic\n5 + 3    // 8\n5 - 3    // 2\n5 * 3    // 15\n5 / 3    // 1.666\n5 % 3    // 2 (remainder)\n5 ** 3   // 125 (power)\n\n// Assignment\nlet x = 10;\nx += 5;   // x = 15\n\n// Comparison\n5 === "5"  // false (strict)\n5 == "5"   // true  (loose)\n\n// Logical\ntrue && false  // false\ntrue || false  // true\n!true          // false')+
'<div class="l-warn"><strong>Important:</strong> Always use <code>===</code> not <code>==</code>.</div>'};

D['js-functions']={id:'js-functions',title:'Functions',cat:'JavaScript',intro:'Functions are reusable blocks of code.',
content:makeEx('Functions','// Declaration\nfunction greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow\nconst greet = (name) => "Hello, " + name;\n\n// Default params\nfunction create(name, role = "user") {\n  return { name, role };\n}\n\n// Array methods\nconst nums = [1, 2, 3, 4, 5];\nnums.map(n => n * 2);     // [2,4,6,8,10]\nnums.filter(n => n > 2);  // [3,4,5]\nnums.reduce((a,b) => a+b, 0); // 15')};

D['js-conditions']={id:'js-conditions',title:'Conditions',cat:'JavaScript',intro:'Conditions make decisions based on values.',
content:makeEx('if / else','const age = 18;\n\nif (age >= 18) {\n  console.log("Adult");\n} else if (age >= 13) {\n  console.log("Teen");\n} else {\n  console.log("Child");\n}')+
makeEx('Ternary','const status = age >= 18 ? "Adult" : "Minor";')+
makeEx('Switch','const day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  default:\n    console.log("Regular day");\n}')};

D['js-loops']={id:'js-loops',title:'Loops',cat:'JavaScript',intro:'Loops repeat code multiple times.',
content:makeEx('Loops','// for\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// while\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n\n// for...of\nconst colors = ["red", "blue", "green"];\nfor (const c of colors) console.log(c);\n\n// forEach\ncolors.forEach((c, i) => console.log(i, c));')};

D['js-arrays']={id:'js-arrays',title:'Arrays',cat:'JavaScript',intro:'Arrays store multiple values in a single variable.',
content:makeEx('Arrays','const fruits = ["apple", "banana", "cherry"];\n\nfruits[0];           // "apple"\nfruits.length;       // 3\nfruits.push("date"); // add to end\nfruits.pop();        // remove last\nfruits.includes("apple"); // true\n\n// Spread\nconst a = [1, 2];\nconst b = [3, 4];\nconst c = [...a, ...b]; // [1,2,3,4]')};

D['js-objects']={id:'js-objects',title:'Objects',cat:'JavaScript',intro:'Objects store data as key-value pairs.',
content:makeEx('Objects','const user = {\n  name: "Majed",\n  age: 25,\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\n\nuser.name;      // "Majed"\nuser.greet();   // "Hello, Majed"\n\n// Destructuring\nconst { name, age } = user;\n\n// Spread\nconst updated = { ...user, age: 26 };\n\n// Methods\nObject.keys(user);   // ["name", "age", "greet"]\nObject.values(user);')};

D['js-dom']={id:'js-dom',title:'DOM Manipulation',cat:'JavaScript',intro:'The DOM is a tree of elements JavaScript can read and modify.',
content:makeEx('DOM','// Select\nconst el = document.getElementById("myId");\nconst items = document.querySelectorAll(".item");\n\n// Content\nel.textContent = "New text";\nel.innerHTML = "<strong>Bold</strong>";\n\n// Styles\nel.style.color = "red";\n\n// Classes\nel.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("visible");\n\n// Create/Remove\nconst div = document.createElement("div");\ndiv.textContent = "New!";\ndocument.body.appendChild(div);\nel.remove();')};

D['js-events']={id:'js-events',title:'Events',cat:'JavaScript',intro:'Events let you respond to user actions.',
content:makeEx('Events','// Click\ndocument.getElementById("btn")\n  .addEventListener("click", () => {\n    alert("Clicked!");\n  });\n\n// Form\ndocument.getElementById("form")\n  .addEventListener("submit", (e) => {\n    e.preventDefault();\n  });\n\n// Keyboard\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});')+
'<table><tr><th>Event</th><th>Fires When</th></tr>'+
'<tr><td><code>click</code></td><td>Element clicked</td></tr>'+
'<tr><td><code>submit</code></td><td>Form submitted</td></tr>'+
'<tr><td><code>keydown</code></td><td>Key pressed</td></tr>'+
'<tr><td><code>input</code></td><td>Input changes</td></tr></table>'};

D['js-async']={id:'js-async',title:'Async/Await',cat:'JavaScript',intro:'Async code runs long tasks without blocking.',
content:makeEx('Async/Await','// Promise\nconst p = new Promise((resolve) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\np.then(r => console.log(r));\n\n// Async/Await\nasync function getData() {\n  try {\n    const res = await fetch("/api/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}')+
'<div class="l-note"><strong>Note:</strong> <code>await</code> only works inside <code>async</code> functions.</div>'};

D['js-fetch']={id:'js-fetch',title:'Fetch API',cat:'JavaScript',intro:'The Fetch API makes HTTP requests from the browser.',
content:makeEx('Fetch','// GET\nconst res = await fetch("https://api.example.com/users");\nconst users = await res.json();\n\n// POST\nconst res = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Majed" })\n});\n\n// Error handling\nif (!res.ok) throw new Error(res.statusText);')};

// ─── React ───
D['react-intro']={id:'react-intro',title:'Introduction to React',cat:'React',intro:'React is a JavaScript library for building user interfaces, created by Meta.',
content:'<h3>Why React?</h3><ul>'+
'<li><strong>Component-based</strong> — reusable UI pieces</li>'+
'<li><strong>Virtual DOM</strong> — fast performance</li>'+
'<li><strong>Ecosystem</strong> — thousands of libraries</li>'+
'<li><strong>In demand</strong> — Meta, Netflix, Airbnb</li></ul>'+
makeEx('Basic App','// App.js\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n    </div>\n  );\n}\n\nexport default App;')};

D['react-jsx']={id:'react-jsx',title:'JSX',cat:'React',intro:'JSX looks like HTML but compiles to JavaScript.',
content:makeEx('JSX','// Expression\nconst name = "Majed";\nconst el = <h1>Hello, {name}!</h1>;\n\n// Conditional\nconst greeting = isLoggedIn\n  ? <h1>Welcome!</h1>\n  : <h1>Sign in.</h1>;\n\n// List\nconst items = ["HTML", "CSS", "JS"];\nconst list = (\n  <ul>\n    {items.map((item, i) => (\n      <li key={i}>{item}</li>\n    ))}\n  </ul>\n);')+
'<div class="l-note"><strong>Note:</strong> JSX needs one parent element. Use <code>&lt;&gt;...&lt;/&gt;</code>.</div>'};

D['react-components']={id:'react-components',title:'Components',cat:'React',intro:'Components are functions that return JSX.',
content:makeEx('Components','function Button({ text, onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\nfunction App() {\n  return (\n    <Button text="Click" onClick={() => alert("Hi")} />\n  );\n}')+
'<div class="l-tip"><strong>Tip:</strong> Component names start with capitals.</div>'};

D['react-props']={id:'react-props',title:'Props',cat:'React',intro:'Props pass data from parent to child components.',
content:makeEx('Props','function App() {\n  return <Card title="Hello" count={42} />;\n}\n\nfunction Card({ title, count }) {\n  return (\n    <div>\n      <h3>{title}</h3>\n      <span>{count}</span>\n    </div>\n  );\n}')};

D['react-state']={id:'react-state',title:'State',cat:'React',intro:'State is data that changes over time.',
content:makeEx('useState','import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </div>\n  );\n}')};

D['react-hooks']={id:'react-hooks',title:'Hooks',cat:'React',intro:'Hooks add state and features to function components.',
content:makeEx('Hooks','import { useState, useEffect } from "react";\n\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);')+
'<h3>Rules</h3><ol>'+
'<li>Only at the top level</li>'+
'<li>Only in React functions</li></ol>'};

// ─── Node.js ───
D['node-intro']={id:'node-intro',title:'Introduction to Node.js',cat:'Node.js',intro:'Node.js lets you run JavaScript on the server.',
content:makeEx('HTTP Server','import { createServer } from "http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, {\n    "Content-Type": "application/json"\n  });\n  res.end(JSON.stringify({ message: "Hello!" }));\n});\n\nserver.listen(3000);')+
'<h3>Commands</h3>'+
makeEx('Terminal','node app.js\nnode -v\nnpm init -y\nnpm install express')};

D['node-npm']={id:'node-npm',title:'npm',cat:'Node.js',intro:'npm manages JavaScript packages and dependencies.',
content:makeEx('npm','npm init -y\nnpm install express\nnpm install -D nodemon\nnpm uninstall express')+
'<h3>package.json</h3>'+
makeEx('package.json','{\n  "name": "my-app",\n  "scripts": {\n    "start": "node app.js",\n    "dev": "nodemon app.js"\n  },\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}')};

D['node-express']={id:'node-express',title:'Express.js',cat:'Node.js',intro:'Express is the most popular Node.js web framework.',
content:makeEx('Express','import express from "express";\nconst app = express();\n\napp.use(express.json());\n\napp.get("/", (req, res) => {\n  res.json({ message: "Hello!" });\n});\n\napp.get("/users/:id", (req, res) => {\n  res.json({ id: req.params.id });\n});\n\napp.post("/users", (req, res) => {\n  const { name } = req.body;\n  res.json({ name, created: true });\n});\n\napp.listen(3000);')};

// ─── Tools ───
D['git-basics']={id:'git-basics',title:'Git Basics',cat:'Tools',intro:'Git tracks changes to your code over time.',
content:makeEx('Git','# Setup\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# Status\ngit status\ngit log --oneline\n\n# Branches\ngit checkout -b feature\ngit merge feature\n\n# Remote\ngit remote add origin URL\ngit push -u origin main')};

D['terminal']={id:'terminal',title:'Terminal Basics',cat:'Tools',intro:'The terminal is a text-based interface for your computer.',
content:makeEx('Terminal','# Navigate\ncd folder\ncd ..\npwd\n\n# Files\nls / dir\nmkdir name\ntouch file.txt\nrm file.txt\ncp src dest\nmv src dest\n\n# Clear\nclear / cls')+
'<div class="l-tip"><strong>Tip:</strong> Press Tab to autocomplete.</div>'};

// ═══ LOGIC ═══
var PAGE=window.LEARN_PAGE||null;
var FILTER=PAGE?SECTIONS.filter(function(s){return s.page===PAGE}):SECTIONS;

var activeSection=0;
var activeLesson=null;

var tabsEl=document.getElementById('lTabs');
var lessonsWrap=document.getElementById('lLessonsWrap');
var lessonsTitle=document.getElementById('lLessonsTitle');
var lessonList=document.getElementById('lLessonList');
var contentEl=document.getElementById('lContent');
var contentHeader=document.getElementById('lContentHeader');
var contentBody=document.getElementById('lContentBody');
var navsEl=document.getElementById('lNavs');

function renderTabs(){
  if(FILTER.length<=1){if(tabsEl)tabsEl.innerHTML='';return;}
  var h='';
  FILTER.forEach(function(s,i){
    var on=i===activeSection?' on':'';
    h+='<div class="l-tab'+on+'" onclick="window._tab('+i+')"><span class="dot" style="background:'+s.c+'"></span>'+s.t+'</div>';
  });
  tabsEl.innerHTML=h;
}

function renderLessons(idx){
  activeSection=idx;
  activeLesson=null;
  contentEl.style.display='none';
  lessonsWrap.style.display='block';
  var s=FILTER[idx];
  lessonsTitle.textContent=s.t;
  var h='';
  s.items.forEach(function(it,i){
    h+='<div class="l-lesson-item" onclick="window._lesson(\''+it.id+'\')">';
    h+='<div class="num" style="background:'+s.c+';color:#0d0d0d">'+(i+1)+'</div>';
    h+='<div class="info"><div class="t">'+it.l+'</div><div class="d">'+it.d+'</div></div>';
    h+='<span class="arr">&rarr;</span></div>';
  });
  lessonList.innerHTML=h;
  renderTabs();
}

function renderLesson(id){
  var d=D[id];
  if(!d)return;
  activeLesson=id;
  contentEl.style.display='block';
  lessonsWrap.style.display='none';

  contentHeader.innerHTML='<h2>'+d.title+'</h2><p>'+d.intro+'</p>';
  contentBody.innerHTML=d.content;

  var idx=ALL_IDS.indexOf(id);
  var prev=idx>0?ALL_IDS[idx-1]:null;
  var next=idx<ALL_IDS.length-1?ALL_IDS[idx+1]:null;
  var h='';
  if(prev&&D[prev]){
    h+='<div class="l-nav-btn" onclick="window._lesson(\''+prev+'\')"><div class="lbl">&larr; Previous</div><div class="ttl">'+D[prev].title+'</div></div>';
  }else{h+='<div></div>';}
  if(next&&D[next]){
    h+='<div class="l-nav-btn nxt" onclick="window._lesson(\''+next+'\')"><div class="lbl">Next &rarr;</div><div class="ttl">'+D[next].title+'</div></div>';
  }
  navsEl.innerHTML=h;
  renderTabs();
  window.scrollTo({top:0,behavior:'smooth'});
}

window._tab=function(i){renderLessons(i)};
window._lesson=function(id){renderLesson(id)};
window._tryCode=function(btn){
  var codeEl=btn.closest('.l-ex').querySelector('code');
  if(!codeEl)return;
  try{localStorage.setItem('deoit_try_code',JSON.stringify({html:codeEl.textContent,css:'',js:''}));}catch(e){}
  window.open('pages/editor','_blank');
};

// Hash routing
var hash=location.hash.slice(1);
if(hash&&D[hash]){
  var s=FILTER.find(function(s){return s.items.some(function(it){return it.id===hash})});
  if(s){activeSection=FILTER.indexOf(s);renderTabs();renderLesson(hash);}
}else if(FILTER.length===1){
  renderLessons(0);
}else{
  renderLessons(0);
}
window.addEventListener('hashchange',function(){
  var h=location.hash.slice(1);
  if(h&&D[h]){
    var s=FILTER.find(function(s){return s.items.some(function(it){return it.id===h})});
    if(s){activeSection=FILTER.indexOf(s);renderTabs();renderLesson(h);}
  }
});
})();

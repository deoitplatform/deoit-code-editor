(function(){
var SECTIONS=[
{t:'HTML',c:'var(--accent-html)',page:'html',items:[
  {id:'html-intro',l:'What is HTML',d:'The building blocks of the web'},
  {id:'html-edit',l:'HTML Editors',d:'Tools for writing HTML'},
  {id:'html-basics',l:'HTML Basics',d:'Document structure and syntax'},
  {id:'html-elements',l:'HTML Elements',d:'Tags, content, and nesting'},
  {id:'html-attributes',l:'HTML Attributes',d:'Extra info on elements'},
  {id:'html-headings',l:'HTML Headings',d:'h1 through h6'},
  {id:'html-paragraphs',l:'HTML Paragraphs',d:'Text and line breaks'},
  {id:'html-formatting',l:'HTML Formatting',d:'Bold, italic, underline, and more'},
  {id:'html-links',l:'HTML Links',d:'Navigation and hyperlinks'},
  {id:'html-images',l:'HTML Images',d:'Adding pictures'},
  {id:'html-forms',l:'HTML Forms',d:'User input and controls'},
  {id:'html-tables',l:'HTML Tables',d:'Rows, columns, and cells'},
  {id:'html-lists',l:'HTML Lists',d:'Ordered and unordered lists'},
  {id:'html-semantics',l:'Semantic HTML',d:'Meaningful markup'},
  {id:'html-media',l:'HTML Media',d:'Audio, video, and iframes'},
  {id:'html-meta',l:'Meta Tags & SEO',d:'Page metadata and search'},
  {id:'html-entities',l:'HTML Entities',d:'Special characters'},
  {id:'html-divspan',l:'Div & Span',d:'Container elements'},
  {id:'html-accessibility',l:'Accessibility',d:'Making pages for everyone'},
  {id:'html-validation',l:'HTML Validation',d:'Checking your markup'}
]},
{t:'CSS',c:'var(--accent-css)',page:'css',items:[
  {id:'css-intro',l:'What is CSS',d:'Styling and layout'},
  {id:'css-intro2',l:'CSS Introduction',d:'How CSS works'},
  {id:'css-syntax',l:'CSS Syntax',d:'Selectors and declarations'},
  {id:'css-selectors',l:'CSS Selectors',d:'Targeting elements'},
  {id:'css-colors',l:'CSS Colors',d:'HEX, RGB, and more'},
  {id:'css-background',l:'CSS Background',d:'Colors, images, gradients'},
  {id:'css-boxmodel',l:'Box Model',d:'Content, padding, border, margin'},
  {id:'css-margin',l:'Margin & Padding',d:'Spacing inside and out'},
  {id:'css-typography',l:'Typography',d:'Fonts, sizes, and text styling'},
  {id:'css-flexbox',l:'Flexbox',d:'One-dimensional layouts'},
  {id:'css-grid',l:'CSS Grid',d:'Two-dimensional layouts'},
  {id:'css-position',l:'Positioning',d:'Static, relative, fixed, absolute, sticky'},
  {id:'css-responsive',l:'Responsive Design',d:'Mobile-first approach'},
  {id:'css-transitions',l:'Transitions & Animations',d:'Moving things smoothly'},
  {id:'css-pseudo',l:'Pseudo-classes & Elements',d:'Special selectors'},
  {id:'css-variables',l:'CSS Variables',d:'Custom properties'},
  {id:'css-units',l:'CSS Units',d:'px, rem, em, vh, vw'}
]},
{t:'JavaScript',c:'var(--accent-js)',page:'js',items:[
  {id:'js-intro',l:'What is JavaScript',d:'The language of the web'},
  {id:'js-intro2',l:'JS Introduction',d:'What JS can do'},
  {id:'js-variables',l:'Variables',d:'Storing data values'},
  {id:'js-datatypes',l:'Data Types',d:'Strings, numbers, objects'},
  {id:'js-operators',l:'Operators',d:'Arithmetic, comparison, logic'},
  {id:'js-functions',l:'Functions',d:'Reusable code blocks'},
  {id:'js-conditions',l:'Conditions',d:'Making decisions'},
  {id:'js-loops',l:'Loops',d:'Repeating actions'},
  {id:'js-arrays',l:'Arrays',d:'Lists of values'},
  {id:'js-objects',l:'Objects',d:'Key-value pairs'},
  {id:'js-template',l:'Template Literals',d:'String interpolation'},
  {id:'js-destructuring',l:'Destructuring & Spread',d:'Extracting values'},
  {id:'js-errors',l:'Error Handling',d:'Try/catch and debugging'},
  {id:'js-dom',l:'DOM Manipulation',d:'Changing the page'},
  {id:'js-events',l:'Events',d:'Responding to user actions'},
  {id:'js-classes',l:'Classes & OOP',d:'Object-oriented JavaScript'},
  {id:'js-modules',l:'Modules',d:'Import and export'},
  {id:'js-async',l:'Async/Await',d:'Asynchronous programming'},
  {id:'js-fetch',l:'Fetch API',d:'HTTP requests'},
  {id:'js-closures',l:'Closures & Scope',d:'Variable visibility'}
]},
{t:'React',c:'var(--accent-react)',page:'react',items:[
  {id:'react-intro',l:'React Intro',d:'Component-based UIs'},
  {id:'react-jsx',l:'JSX',d:'HTML-like syntax'},
  {id:'react-components',l:'Components',d:'Building blocks'},
  {id:'react-props',l:'Props',d:'Passing data down'},
  {id:'react-state',l:'State',d:'Managing data'},
  {id:'react-hooks',l:'Hooks',d:'useState and useEffect'},
  {id:'react-useeffect',l:'useEffect',d:'Side effects'},
  {id:'react-forms',l:'Forms in React',d:'Controlled components'},
  {id:'react-lists',l:'Lists & Keys',d:'Rendering arrays'},
  {id:'react-router',l:'React Router',d:'Client-side routing'},
  {id:'react-conditional',l:'Conditional Rendering',d:'If/else in JSX'},
  {id:'react-customhooks',l:'Custom Hooks',d:'Extracting logic'}
]},
{t:'Node.js',c:'var(--accent-node)',page:'node',items:[
  {id:'node-intro',l:'Node.js Intro',d:'Server-side JavaScript'},
  {id:'node-npm',l:'npm',d:'Package management'},
  {id:'node-express',l:'Express.js',d:'Web framework'},
  {id:'node-rest',l:'REST APIs',d:'Building APIs'},
  {id:'node-fs',l:'File System',d:'Reading and writing files'},
  {id:'node-middleware',l:'Middleware',d:'Request processing'}
]},
{t:'Tools',c:'var(--accent-tools)',page:'tools',items:[
  {id:'git-basics',l:'Git Basics',d:'Version control'},
  {id:'git-branch',l:'Git Branching',d:'Branches and merges'},
  {id:'github',l:'GitHub',d:'Remote repositories'},
  {id:'terminal',l:'Terminal',d:'Command line basics'},
  {id:'npm-yarn',l:'npm & Yarn',d:'Package managers'},
  {id:'vscode',l:'VS Code Tips',d:'Editor shortcuts'}
]}
];

var ALL_IDS=[];
SECTIONS.forEach(function(s){s.items.forEach(function(it){ALL_IDS.push(it.id)})});

function makeEx(title,code){
  return '<div class="l-ex"><div class="l-ex-top"><div class="l-ex-dots"><span></span><span></span><span></span></div><span class="l-ex-title">'+title+'</span><button class="l-ex-btn" onclick="window._tryCode(this)">Try it Yourself</button></div><div class="l-ex-body"><pre><code>'+escH(code)+'</code></pre></div></div>';
}
function escH(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

var D={};


D['html-intro']={id:'html-intro',title:'What is HTML',cat:'HTML',
intro:'HTML (HyperText Markup Language) is the standard language for creating web pages. Every website you visit is built with HTML at its core.',
content:'<p>HTML is not a programming language - it is a <strong>markup language</strong> that defines the structure of your content. It uses <strong>tags</strong> to wrap different parts of content.</p>'+
'<h3>How the Web Works</h3>'+
'<ol>'+
'<li>You type a URL in your browser address bar</li>'+
'<li>Browser sends an HTTP request to the server</li>'+
'<li>Server responds with HTML, CSS, JS files</li>'+
'<li>Browser parses HTML to build the DOM</li>'+
'<li>Browser applies CSS styles</li>'+
'<li>JavaScript adds interactivity</li>'+
'</ol>'+
makeEx('Basic HTML Document','<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is my first web page!</p>\n</body>\n</html>')+
'<h3>A Brief History</h3><ul>'+
'<li><strong>1991</strong> - Tim Berners-Lee creates HTML</li>'+
'<li><strong>2014</strong> - HTML5 released with semantic elements and media</li></ul>'+
'<div class="l-tip"><strong>Tip:</strong> Open the <a href="pages/editor">Deoit editor</a> and write your first HTML page!</div>'};

D['html-edit']={id:'html-edit',title:'HTML Editors',cat:'HTML',
intro:'An HTML editor is where you write your code. Dedicated editors give you syntax highlighting and auto-completion.',
content:'<table><tr><th>Type</th><th>Examples</th><th>Pros</th></tr>'+
'<tr><td>Plain Text</td><td>Notepad</td><td>Simple, always available</td></tr>'+
'<tr><td>Code Editors</td><td>VS Code</td><td>Syntax highlighting, extensions</td></tr>'+
'<tr><td>Online Editors</td><td>Deoit</td><td>No install, instant preview</td></tr></table>'+
makeEx('Simple HTML File','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n  <p>Open this file in a browser.</p>\n</body>\n</html>')+
'<h3>File Naming Rules</h3><ul>'+
'<li>Always end with <code>.html</code></li>'+
'<li>Use lowercase: <code>index.html</code> not <code>Index.html</code></li>'+
'<li>Use hyphens for spaces: <code>about-us.html</code></li>'+
'<li>Main page is usually <code>index.html</code></li></ul>'};

D['html-basics']={id:'html-basics',title:'HTML Basics',cat:'HTML',
intro:'Every HTML document follows the same basic structure.',
content:makeEx('Complete Document','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My Heading</h1>\n  <p>My paragraph goes here.</p>\n</body>\n</html>')+
'<table><tr><th>Tag</th><th>Purpose</th></tr>'+
'<tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>HTML5 declaration</td></tr>'+
'<tr><td><code>&lt;html&gt;</code></td><td>Root element</td></tr>'+
'<tr><td><code>&lt;head&gt;</code></td><td>Meta information</td></tr>'+
'<tr><td><code>&lt;body&gt;</code></td><td>Visible content</td></tr>'+
'<tr><td><code>&lt;meta viewport&gt;</code></td><td>Responsive design</td></tr></table>'+
'<h3>Best Practices</h3><ul>'+
'<li>Use 2 spaces for indentation</li>'+
'<li>Always close your tags</li>'+
'<li>Use lowercase for tag names</li>'+
'<li>Quote attribute values</li></ul>'+
'<div class="l-warn"><strong>Important:</strong> Always include the viewport meta tag for mobile support.</div>'};

D['html-elements']={id:'html-elements',title:'HTML Elements',cat:'HTML',
intro:'An HTML element consists of a start tag, content, and an end tag.',
content:makeEx('Elements','<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<a href="https://example.com">This is a link</a>')+
'<h3>Self-Closing Elements</h3>'+
makeEx('Self-Closing Tags','<img src="photo.jpg" alt="Photo">\n<p>Line one.<br>Line two.</p>\n<hr>\n<input type="text">')+
'<h3>Nested Elements</h3>'+
makeEx('Nesting','<div>\n  <h2>Title</h2>\n  <p>Paragraph inside a <strong>div</strong>.</p>\n</div>')+
'<h3>Block vs Inline</h3>'+
'<table><tr><th>Type</th><th>Behavior</th><th>Examples</th></tr>'+
'<tr><td>Block</td><td>Full width, new line</td><td><code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code></td></tr>'+
'<tr><td>Inline</td><td>Only needed width</td><td><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code></td></tr></table>'};

D['html-attributes']={id:'html-attributes',title:'HTML Attributes',cat:'HTML',
intro:'Attributes provide extra information about elements. They go in the opening tag.',
content:makeEx('Attributes','<a href="https://google.com">Google</a>\n<img src="logo.png" alt="Logo">\n<div class="container">Content</div>\n<div id="main">Main</div>\n<p style="color: red;">Red text</p>')+
'<table><tr><th>Attribute</th><th>Used On</th><th>Purpose</th></tr>'+
'<tr><td><code>href</code></td><td><code>&lt;a&gt;</code></td><td>Link URL</td></tr>'+
'<tr><td><code>src</code></td><td><code>&lt;img&gt;</code></td><td>Source path</td></tr>'+
'<tr><td><code>alt</code></td><td><code>&lt;img&gt;</code></td><td>Description</td></tr>'+
'<tr><td><code>class</code></td><td>Any</td><td>CSS class</td></tr>'+
'<tr><td><code>id</code></td><td>Any</td><td>Unique ID</td></tr>'+
'<tr><td><code>style</code></td><td>Any</td><td>Inline CSS</td></tr>'+
'<tr><td><code>type</code></td><td><code>&lt;input&gt;</code></td><td>Input type</td></tr>'+
'<tr><td><code>name</code></td><td><code>&lt;input&gt;</code></td><td>Field name</td></tr></table>'};

D['html-headings']={id:'html-headings',title:'HTML Headings',cat:'HTML',
intro:'HTML defines six heading levels, h1 through h6.',
content:makeEx('Headings','<h1>Heading 1 - Main title</h1>\n<h2>Heading 2 - Section</h2>\n<h3>Heading 3 - Subsection</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>')+
'<h3>Best Practices</h3><ul>'+
'<li>One <code>&lt;h1&gt;</code> per page (main title)</li>'+
'<li>Use <code>&lt;h2&gt;</code> for sections</li>'+
'<li>Never skip levels (h1 to h3 is wrong)</li>'+
'<li>Headings improve SEO and accessibility</li></ul>'+
'<div class="l-tip"><strong>Tip:</strong> Think of headings like a book: h1 = book title, h2 = chapters, h3 = sections.</div>'};

D['html-paragraphs']={id:'html-paragraphs',title:'HTML Paragraphs',cat:'HTML',
intro:'The p element defines a paragraph of text.',
content:makeEx('Paragraphs','<p>This is a paragraph.</p>\n<p>Another paragraph with space between.</p>\n\n<p>Line one.<br>Line two.</p>\n\n<hr>\n\n<pre>\n  Preserves\n  spaces.\n</pre>')+
'<table><tr><th>Element</th><th>Use</th></tr>'+
'<tr><td><code>&lt;p&gt;</code></td><td>Separate ideas</td></tr>'+
'<tr><td><code>&lt;br&gt;</code></td><td>Line break</td></tr>'+
'<tr><td><code>&lt;hr&gt;</code></td><td>Thematic break</td></tr>'+
'<tr><td><code>&lt;pre&gt;</code></td><td>Preformatted text</td></tr></table>'};

D['html-formatting']={id:'html-formatting',title:'HTML Formatting',cat:'HTML',
intro:'HTML provides elements for bold, italic, underline, deleted text, and more.',
content:makeEx('Formatting','<p><strong>Bold text</strong></p>\n<p><em>Italic text</em></p>\n<p><u>Underlined text</u></p>\n<p><s>Deleted text</s></p>\n<p><small>Small text</small></p>\n<p>H<sub>2</sub>O - subscript</p>\n<p>E=mc<sup>2</sup> - superscript</p>\n<p>Use <code>console.log()</code></p>\n<p><mark>Highlighted text</mark></p>\n<p><del>$99</del> <ins>$49</ins></p>')+
'<div class="l-tip"><strong>Tip:</strong> Use <code>&lt;strong&gt;</code> instead of <code>&lt;b&gt;</code> and <code>&lt;em&gt;</code> instead of <code>&lt;i&gt;</code> for accessibility.</div>'};

D['html-links']={id:'html-links',title:'HTML Links',cat:'HTML',
intro:'Links are defined with the a tag. The href attribute sets the destination.',
content:makeEx('Links','<a href="https://google.com">Visit Google</a>\n<a href="https://google.com" target="_blank">\n  Open in new tab\n</a>\n<a href="mailto:test@test.com">Send Email</a>\n<a href="tel:+1234567890">Call Us</a>\n<a href="#contact">Jump to Contact</a>\n<a href="file.pdf" download>Download PDF</a>')+
'<h3>Page Sections with IDs</h3>'+
makeEx('Anchor Links','<h2 id="about">About Us</h2>\n<a href="#about">Go to About</a>')+
'<div class="l-warn"><strong>Security:</strong> When using target="_blank", add rel="noopener noreferrer".</div>'};

D['html-images']={id:'html-images',title:'HTML Images',cat:'HTML',
intro:'Images use the self-closing img tag with src and alt attributes.',
content:makeEx('Images','<img src="photo.jpg" alt="A sunset">\n<img src="logo.png" alt="Logo" width="200">\n<img src="pic.jpg" alt="Photo"\n     style="max-width: 100%;">\n<figure>\n  <img src="chart.png" alt="Sales chart">\n  <figcaption>Figure 1: Sales growth</figcaption>\n</figure>')+
'<table><tr><th>Format</th><th>Best For</th><th>Transparent?</th></tr>'+
'<tr><td>JPG</td><td>Photos</td><td>No</td></tr>'+
'<tr><td>PNG</td><td>Screenshots, logos</td><td>Yes</td></tr>'+
'<tr><td>SVG</td><td>Icons, illustrations</td><td>Yes</td></tr>'+
'<tr><td>WebP</td><td>Modern web (small)</td><td>Yes</td></tr>'+
'<tr><td>GIF</td><td>Animations</td><td>Yes</td></tr></table>'};

D['html-forms']={id:'html-forms',title:'HTML Forms',cat:'HTML',
intro:'Forms collect user input using form, input, select, textarea, and button.',
content:makeEx('Form','<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name"\n    placeholder="Enter name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email"\n    required>\n\n  <label for="pass">Password:</label>\n  <input type="password" id="pass"\n    minlength="8" required>\n\n  <label for="role">Role:</label>\n  <select id="role" name="role">\n    <option value="user">User</option>\n    <option value="admin">Admin</option>\n  </select>\n\n  <label for="bio">Bio:</label>\n  <textarea id="bio" rows="4"></textarea>\n\n  <label>\n    <input type="checkbox" required>\n    I agree to terms\n  </label>\n\n  <button type="submit">Submit</button>\n</form>')+
'<h3>Input Types</h3>'+
'<table><tr><th>Type</th><th>Purpose</th></tr>'+
'<tr><td><code>text</code></td><td>Text input</td></tr>'+
'<tr><td><code>email</code></td><td>Email with validation</td></tr>'+
'<tr><td><code>password</code></td><td>Hidden text</td></tr>'+
'<tr><td><code>number</code></td><td>Numbers only</td></tr>'+
'<tr><td><code>date</code></td><td>Date picker</td></tr>'+
'<tr><td><code>color</code></td><td>Color picker</td></tr>'+
'<tr><td><code>file</code></td><td>File upload</td></tr>'+
'<tr><td><code>checkbox</code></td><td>Toggle</td></tr>'+
'<tr><td><code>radio</code></td><td>Single choice</td></tr></table>'};

D['html-tables']={id:'html-tables',title:'HTML Tables',cat:'HTML',
intro:'Tables display data in rows and columns.',
content:makeEx('Table','<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Majed</td>\n      <td>Developer</td>\n      <td>95</td>\n    </tr>\n    <tr>\n      <td>Ali</td>\n      <td>Designer</td>\n      <td>88</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="2">Average</td>\n      <td>91.5</td>\n    </tr>\n  </tfoot>\n</table>')+
'<h3>Spanning Cells</h3>'+
makeEx('Colspan & Rowspan','<td colspan="2">Spans 2 columns</td>\n<td rowspan="2">Spans 2 rows</td>')+
'<div class="l-note"><strong>Note:</strong> Use tables for data only - not for page layout.</div>'};

D['html-lists']={id:'html-lists',title:'HTML Lists',cat:'HTML',
intro:'HTML supports unordered, ordered, and description lists.',
content:'<h3>Unordered List</h3>'+
makeEx('Unordered','<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>')+
'<h3>Ordered List</h3>'+
makeEx('Ordered','<ol>\n  <li>Learn HTML</li>\n  <li>Learn CSS</li>\n  <li>Build projects</li>\n</ol>')+
'<h3>Description List</h3>'+
makeEx('Description','<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>')+
'<h3>Nested Lists</h3>'+
makeEx('Nested','<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Node.js</li>\n    </ul>\n  </li>\n</ul>')};

D['html-semantics']={id:'html-semantics',title:'Semantic HTML',cat:'HTML',
intro:'Semantic elements describe their meaning to browsers and developers.',
content:makeEx('Semantic Structure','<header>\n  <nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h1>Blog Post</h1>\n    <time datetime="2026-07-15">July 15, 2026</time>\n    <p>Content here...</p>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 Deoit</p>\n</footer>')+
'<table><tr><th>Non-Semantic</th><th>Semantic</th><th>Purpose</th></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;header&gt;</code></td><td>Page header</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;nav&gt;</code></td><td>Navigation</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;main&gt;</code></td><td>Main content</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;section&gt;</code></td><td>Thematic grouping</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;aside&gt;</code></td><td>Side content</td></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;footer&gt;</code></td><td>Page footer</td></tr></table>'};

D['html-media']={id:'html-media',title:'HTML Media',cat:'HTML',
intro:'HTML5 provides native elements for audio, video, and iframes.',
content:makeEx('Video','<video src="video.mp4" controls\n  width="640" height="360">\n  Your browser does not support video.\n</video>\n\n<!-- Multiple sources -->\n<video controls width="640">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  <track src="subs.vtt" kind="subtitles"\n    srclang="en" label="English">\n</video>')+
makeEx('Audio','<audio src="song.mp3" controls></audio>\n\n<audio controls>\n  <source src="song.mp3" type="audio/mpeg">\n  <source src="song.ogg" type="audio/ogg">\n</audio>')+
makeEx('Iframe','<iframe src="https://example.com"\n  width="100%" height="400"\n  title="Example">\n</iframe>\n\n<!-- YouTube -->\n<iframe width="560" height="315"\n  src="https://youtube.com/embed/ID"\n  title="Video" frameborder="0"\n  allowfullscreen>\n</iframe>')};

D['html-meta']={id:'html-meta',title:'Meta Tags & SEO',cat:'HTML',
intro:'Meta tags provide information to browsers and search engines.',
content:makeEx('Meta Tags','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1.0">\n  <title>Deoit - Online Code Editor</title>\n  <meta name="description"\n    content="Free online code editor">\n  <meta property="og:title"\n    content="Deoit - Online Code Editor">\n  <meta property="og:image"\n    content="https://deoit.vercel.app/og.png">\n  <link rel="canonical"\n    href="https://deoit.vercel.app">\n  <link rel="icon" href="/favicon.ico">\n</head>')+
'<table><tr><th>Tag</th><th>Purpose</th></tr>'+
'<tr><td><code>charset</code></td><td>Character encoding (UTF-8)</td></tr>'+
'<tr><td><code>viewport</code></td><td>Mobile responsive</td></tr>'+
'<tr><td><code>description</code></td><td>Search result text</td></tr>'+
'<tr><td><code>og:title</code></td><td>Social media title</td></tr>'+
'<tr><td><code>og:image</code></td><td>Social media image</td></tr></table>'};

D['html-entities']={id:'html-entities',title:'HTML Entities',cat:'HTML',
intro:'HTML entities display special characters that have meaning in HTML.',
content:makeEx('Entities','p &lt; 10 displays: p < 10\nA &amp; B displays: A & B\n&lt;div class=&quot;box&quot;&gt;\n100&euro; displays: 100\u20ac\n&copy; 2026 displays: \u00a9 2026')+
'<table><tr><th>Entity</th><th>Character</th></tr>'+
'<tr><td><code>&amp;lt;</code></td><td><code>&lt;</code></td></tr>'+
'<tr><td><code>&amp;gt;</code></td><td><code>&gt;</code></td></tr>'+
'<tr><td><code>&amp;amp;</code></td><td><code>&amp;</code></td></tr>'+
'<tr><td><code>&amp;quot;</code></td><td><code>"</code></td></tr>'+
'<tr><td><code>&amp;nbsp;</code></td><td>Non-breaking space</td></tr>'+
'<tr><td><code>&amp;copy;</code></td><td>\u00a9</td></tr>'+
'<tr><td><code>&amp;euro;</code></td><td>\u20ac</td></tr></table>'};

D['html-divspan']={id:'html-divspan',title:'Div & Span',cat:'HTML',
intro:'Div and span are generic containers. Style them with CSS.',
content:makeEx('Div & Span','<!-- div: block container -->\n<div class="card">\n  <h2>Card Title</h2>\n  <p>Content here.</p>\n</div>\n\n<!-- span: inline container -->\n<p>This is a <span class="highlight">\n  highlighted</span> word.</p>')+
'<table><tr><th>Element</th><th>Type</th><th>Use</th></tr>'+
'<tr><td><code>&lt;div&gt;</code></td><td>Block</td><td>Group block elements for layout</td></tr>'+
'<tr><td><code>&lt;span&gt;</code></td><td>Inline</td><td>Style small text pieces</td></tr></table>'+
'<div class="l-tip"><strong>Tip:</strong> Before using div, check if a semantic element exists (nav, article, footer, etc.).</div>'};

D['html-accessibility']={id:'html-accessibility',title:'Accessibility',cat:'HTML',
intro:'Web accessibility means making your site usable by everyone.',
content:makeEx('Accessibility','<img src="chart.png" alt="Sales chart showing\n  50% growth in Q3">\n\n<h1>Page Title</h1>\n<h2>Section Title</h2>\n\n<label for="email">Email:</label>\n<input type="email" id="email">\n\n<button aria-label="Close menu">&times;</button>\n\n<a href="/about">About Us</a>')+
'<h3>Key Practices</h3><ul>'+
'<li>Always include alt text on images</li>'+
'<li>Use semantic headings in order</li>'+
'<li>Label all form inputs</li>'+
'<li>Use ARIA labels when needed</li>'+
'<li>Make links descriptive</li></ul>'+
'<div class="l-tip"><strong>Tip:</strong> Test with a screen reader (NVDA or VoiceOver).</div>'};

D['html-validation']={id:'html-validation',title:'HTML Validation',cat:'HTML',
intro:'HTML validation checks your markup for errors.',
content:'<h3>How to Validate</h3><ul>'+
'<li>Go to validator.w3.org</li>'+
'<li>Paste your HTML or enter URL</li>'+
'<li>Click Check</li></ul>'+
makeEx('Common Mistakes','<!-- BAD: Missing close tag -->\n<p>Text\n<div>More</div>\n\n<!-- GOOD -->\n<p>Text</p>\n<div>More</div>\n\n<!-- BAD: No alt -->\n<img src="pic.jpg">\n\n<!-- GOOD -->\n<img src="pic.jpg" alt="Description">')+
'<table><tr><th>Error</th><th>Fix</th></tr>'+
'<tr><td>Missing close tag</td><td>Add it</td></tr>'+
'<tr><td>Improper nesting</td><td>Close in reverse order</td></tr>'+
'<tr><td>No alt on images</td><td>Add alt text</td></tr>'+
'<tr><td>Duplicate IDs</td><td>Make unique</td></tr></table>'};



// ─── CSS ───
D['css-intro']={id:'css-intro',title:'What is CSS',cat:'CSS',
intro:'CSS (Cascading Style Sheets) controls how HTML elements look.',
content:'<h3>Three Ways to Add CSS</h3>'+
makeEx('External (Best)','<link rel="stylesheet" href="style.css">')+
makeEx('Internal','<style>\n  body { background: #0d0d0d; }\n</style>')+
makeEx('Inline','<p style="color: red;">Red</p>')+
'<div class="l-tip"><strong>Tip:</strong> Always use external CSS for real projects.</div>'};

D['css-intro2']={id:'css-intro2',title:'CSS Introduction',cat:'CSS',
intro:'CSS is the language for styling web pages.',
content:makeEx('Selectors','/* Element */\nh1 { color: white; }\n\n/* Class */\n.card { padding: 20px; }\n\n/* ID */\n#header { background: #111; }\n\n/* Descendant */\n.sidebar a { color: blue; }\n\n/* Pseudo-class */\na:hover { color: red; }')+
'<table><tr><th>Selector</th><th>Example</th></tr>'+
'<tr><td>Element</td><td><code>p { }</code></td></tr>'+
'<tr><td>Class</td><td><code>.card { }</code></td></tr>'+
'<tr><td>ID</td><td><code>#main { }</code></td></tr>'+
'<tr><td>Pseudo-class</td><td><code>a:hover { }</code></td></tr></table>'};

D['css-syntax']={id:'css-syntax',title:'CSS Syntax',cat:'CSS',
intro:'A CSS rule has a selector and a declaration block.',
content:makeEx('Syntax','selector {\n  property: value;\n}\n\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n}')+
'<ul><li>Each declaration ends with ; </li>'+
'<li>Property and value separated by :</li>'+
'<li>Multiple selectors separated by commas</li>'+
'<li>Comments: /* comment */</li></ul>'};

D['css-selectors']={id:'css-selectors',title:'CSS Selectors',cat:'CSS',
intro:'Selectors determine which elements CSS rules apply to.',
content:makeEx('All Selectors','p { color: white; }\n.card { padding: 20px; }\n#header { background: #111; }\n* { box-sizing: border-box; }\n.sidebar a { color: blue; }\n.nav > li { display: inline-block; }\na:hover { color: red; }\nli:first-child { font-weight: bold; }\nli:nth-child(2n) { background: #1a1a1a; }\ninput:focus { border-color: #61afef; }\ninput[type="email"] { border: red; }\nli:not(:last-child) { border-bottom: 1px solid #222; }')+
'<h3>Specificity</h3><ol>'+
'<li><code>!important</code> (avoid)</li>'+
'<li>Inline styles</li>'+
'<li>ID selectors</li>'+
'<li>Class selectors</li>'+
'<li>Element selectors</li></ol>'+
'<div class="l-tip"><strong>Tip:</strong> Use classes for styling, IDs for JavaScript.</div>'};

D['css-colors']={id:'css-colors',title:'CSS Colors',cat:'CSS',
intro:'CSS supports colors in HEX, RGB, HSL, and named formats.',
content:makeEx('Colors','p { color: red; }\np { color: #d9d9d9; }\np { color: rgb(217, 217, 217); }\np { color: rgba(217, 217, 217, 0.5); }\np { color: hsl(0, 0%, 85%); }\n\n/* CSS Variables */\n:root {\n  --accent: #d9d9d9;\n  --html: #e06c75;\n}\np { color: var(--accent); }')+
'<div class="l-tip"><strong>Tip:</strong> Use CSS variables for consistent theming.</div>'};

D['css-background']={id:'css-background',title:'CSS Background',cat:'CSS',
intro:'Background properties control colors, images, and gradients.',
content:makeEx('Backgrounds','body {\n  background-color: #0d0d0d;\n  background-image: url("bg.jpg");\n  background-size: cover;\n  background-position: center;\n}\n\n.gradient {\n  background: linear-gradient(135deg, #141414, #0d0d0d);\n}\n\n.glow {\n  background: radial-gradient(circle, #61afef22, transparent);\n}')};

D['css-boxmodel']={id:'css-boxmodel',title:'Box Model',cat:'CSS',
intro:'Every element is a box with content, padding, border, and margin.',
content:makeEx('Box Model','.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #2a2a2a;\n  margin: 16px;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}')+
'<h3>Layers (inside out)</h3><ol>'+
'<li>Content - the actual text/image</li>'+
'<li>Padding - space inside border</li>'+
'<li>Border - visible edge</li>'+
'<li>Margin - space outside border</li></ol>'+
'<div class="l-warn"><strong>Important:</strong> Always use box-sizing: border-box.</div>'};

D['css-margin']={id:'css-margin',title:'Margin & Padding',cat:'CSS',
intro:'Margin is outside the border. Padding is inside.',
content:makeEx('Margin','.box {\n  margin: 10px 20px;\n  margin: 0 auto;\n  max-width: 800px;\n}')+
makeEx('Padding','.card {\n  padding: 20px;\n  padding: 20px 16px;\n}')+
'<div class="l-note"><strong>Note:</strong> Vertical margins collapse between elements.</div>'};

D['css-typography']={id:'css-typography',title:'Typography',cat:'CSS',
intro:'Typography controls fonts, sizes, weights, and text styling.',
content:makeEx('Typography','body {\n  font-family: -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #d9d9d9;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\na {\n  color: #61afef;\n  text-decoration: none;\n}')+
'<div class="l-tip"><strong>Tip:</strong> Use rem for font sizes - it respects user browser settings.</div>'};

D['css-flexbox']={id:'css-flexbox',title:'Flexbox',cat:'CSS',
intro:'Flexbox is a one-dimensional layout for rows or columns.',
content:makeEx('Flexbox','.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n.item { flex: 1; }\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}')+
'<table><tr><th>Property</th><th>Values</th></tr>'+
'<tr><td><code>justify-content</code></td><td>flex-start, center, space-between</td></tr>'+
'<tr><td><code>align-items</code></td><td>flex-start, center, stretch</td></tr>'+
'<tr><td><code>flex-direction</code></td><td>row, column</td></tr>'+
'<tr><td><code>gap</code></td><td>16px</td></tr></table>'};

D['css-grid']={id:'css-grid',title:'CSS Grid',cat:'CSS',
intro:'CSS Grid handles rows and columns simultaneously.',
content:makeEx('Grid','.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n/* Responsive */\n.grid {\n  grid-template-columns:\n    repeat(auto-fill, minmax(250px, 1fr));\n}')+
'<h3>Grid Areas</h3>'+
makeEx('Grid Areas','.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n}\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }')};

D['css-position']={id:'css-position',title:'Positioning',cat:'CSS',
intro:'The position property controls how elements are placed.',
content:makeEx('Positions','/* Static (default) */\n.static { position: static; }\n\n/* Relative */\n.relative {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}\n\n/* Absolute (nearest positioned parent) */\n.absolute {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* Fixed (viewport) */\n.fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n\n/* Sticky */\n.sticky {\n  position: sticky;\n  top: 0;\n}')};

D['css-responsive']={id:'css-responsive',title:'Responsive Design',cat:'CSS',
intro:'Responsive design makes your site work on all screen sizes.',
content:'<h3>Viewport Meta</h3>'+
makeEx('Meta Tag','<meta name="viewport"\n  content="width=device-width, initial-scale=1.0">')+
'<h3>Media Queries</h3>'+
makeEx('Media Queries','/* Mobile first */\n.container { padding: 16px; }\n\n@media (min-width: 768px) {\n  .container {\n    padding: 32px;\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}')+
'<h3>Fluid Typography</h3>'+
makeEx('clamp()','h1 {\n  font-size: clamp(24px, 5vw, 44px);\n}')};

D['css-transitions']={id:'css-transitions',title:'Transitions & Animations',cat:'CSS',
intro:'Transitions animate property changes smoothly.',
content:makeEx('Transitions','.button {\n  background: #333;\n  color: white;\n  transition: background 0.3s ease,\n              transform 0.2s ease;\n}\n\n.button:hover {\n  background: #61afef;\n  transform: translateY(-2px);\n}')+
'<h3>Keyframe Animations</h3>'+
makeEx('Animations','@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  animation: fadeIn 0.5s ease forwards;\n}')};

D['css-pseudo']={id:'css-pseudo',title:'Pseudo-classes & Elements',cat:'CSS',
intro:'Pseudo-classes target states. Pseudo-elements create virtual elements.',
content:makeEx('Pseudo-classes','a:hover { color: #61afef; }\ninput:focus { border-color: #61afef; }\nli:first-child { font-weight: bold; }\nli:nth-child(odd) { background: #1a1a1a; }\ninput:checked + label { color: #61afef; }\nbutton:disabled { opacity: 0.5; }')+
'<h3>Pseudo-elements</h3>'+
makeEx('Pseudo-elements','p::first-letter { font-size: 2em; }\n\nblockquote::before {\n  content: "\\201C";\n  font-size: 2em;\n  color: #61afef;\n}\n\n[data-tip]::after {\n  content: attr(data-tip);\n  position: absolute;\n  bottom: 100%;\n  background: #333;\n  color: white;\n  padding: 4px 8px;\n}')};

D['css-variables']={id:'css-variables',title:'CSS Variables',cat:'CSS',
intro:'Custom properties let you store reusable values.',
content:makeEx('CSS Variables',':root {\n  --bg: #0d0d0d;\n  --card: #141414;\n  --text: #d9d9d9;\n  --accent: #61afef;\n  --radius: 12px;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}\n\n.card {\n  background: var(--card);\n  border-radius: var(--radius);\n}')+
'<h3>Dynamic with JavaScript</h3>'+
makeEx('JS Variables','document.documentElement.style\n  .setProperty("--bg", "#1a1a1a");')};

D['css-units']={id:'css-units',title:'CSS Units',cat:'CSS',
intro:'CSS has many units for sizing. Choose the right one.',
content:'<table><tr><th>Unit</th><th>Relative To</th><th>Best For</th></tr>'+
'<tr><td><code>px</code></td><td>Nothing (absolute)</td><td>Borders, small details</td></tr>'+
'<tr><td><code>rem</code></td><td>Root font size</td><td>Font sizes, padding</td></tr>'+
'<tr><td><code>em</code></td><td>Parent font size</td><td>Spacing</td></tr>'+
'<tr><td><code>%</code></td><td>Parent element</td><td>Widths, layouts</td></tr>'+
'<tr><td><code>vw</code></td><td>Viewport width</td><td>Full-width</td></tr>'+
'<tr><td><code>vh</code></td><td>Viewport height</td><td>Full-height sections</td></tr></table>'+
makeEx('Units','html { font-size: 16px; }\nh1 { font-size: 2.5rem; }\n.card { padding: 1.5rem; }\n.hero { min-height: 100vh; }\nh1 { font-size: clamp(24px, 5vw, 48px); }')};



// ─── JavaScript ───
D['js-intro']={id:'js-intro',title:'What is JavaScript',cat:'JavaScript',
intro:'JavaScript is the programming language of the web.',
content:'<p>JS can update content, validate forms, animate, and communicate with servers.</p>'+
makeEx('Script Tags','<!-- External -->\n<script src="app.js"><\/script>\n\n<!-- Internal -->\n<script>\n  console.log("Hello!");\n<\/script>')+
'<h3>Console</h3>'+
makeEx('Console','console.log("Info");\nconsole.warn("Warning");\nconsole.error("Error");\nconsole.table([{name:"Majed"},{name:"Ali"}]);')+
'<div class="l-tip"><strong>Tip:</strong> Open DevTools (F12) to see console output.</div>'};

D['js-intro2']={id:'js-intro2',title:'JavaScript Introduction',cat:'JavaScript',
intro:'JavaScript adds interactivity to websites.',
content:'<h3>What JS Can Do</h3><ul>'+
'<li>Change HTML content and attributes</li>'+
'<li>Change CSS styles dynamically</li>'+
'<li>React to user events</li>'+
'<li>Send data to servers (APIs)</li>'+
'<li>Store data in the browser</li></ul>'+
makeEx('Example','// Change content\ndocument.getElementById("demo")\n  .innerHTML = "New text";\n\n// Change styles\ndocument.body.style.background = "black";\n\n// React to clicks\ndocument.getElementById("btn")\n  .onclick = () => alert("Clicked!");')};

D['js-variables']={id:'js-variables',title:'Variables',cat:'JavaScript',
intro:'Variables store data. Use const for constants, let for changeable values.',
content:makeEx('Variables','// const (cannot reassign)\nconst name = "Deoit";\nconst PI = 3.14159;\n\n// let (can reassign)\nlet score = 0;\nscore = 10; // OK\n\n// Don\'t use var\nlet x = 1, y = 2;')+
'<h3>Naming Rules</h3><ul>'+
'<li>Start with letter, _, or $</li>'+
'<li>Case sensitive</li>'+
'<li>Use camelCase: myVariable</li></ul>'+
'<div class="l-warn"><strong>Important:</strong> Use const by default. Only let when needed.</div>'};

D['js-datatypes']={id:'js-datatypes',title:'Data Types',cat:'JavaScript',
intro:'JavaScript has String, Number, Boolean, Array, Object, and more.',
content:makeEx('Data Types','// Primitives\nconst text = "Hello";       // String\nconst num = 42;             // Number\nconst flag = true;          // Boolean\nconst empty = null;         // Null\nlet x;                      // Undefined\n\n// Reference\nconst arr = [1, 2, 3];      // Array\nconst obj = {               // Object\n  name: "Majed",\n  age: 25\n};\n\n// Check type\ntypeof "hello"   // "string"\ntypeof 42        // "number"\nArray.isArray([]) // true')};

D['js-operators']={id:'js-operators',title:'Operators',cat:'JavaScript',
intro:'Operators perform operations on values.',
content:makeEx('Arithmetic','5 + 3    // 8\n5 - 3    // 2\n5 * 3    // 15\n5 / 3    // 1.666\n5 % 3    // 2 (remainder)\n5 ** 3   // 125 (power)\n\nlet x = 10;\nx += 5;   // x = 15')+
makeEx('Comparison','5 === "5"  // false (strict)\n5 == "5"   // true (loose)\n5 !== "5"  // true')+
makeEx('Logical','true && false  // false\ntrue || false  // true\n!true          // false\n\n// Nullish coalescing\nconst val = null ?? "default"; // "default"\n\n// Optional chaining\nuser?.address?.city')+
'<div class="l-warn"><strong>Important:</strong> Always use === not ==.</div>'};

D['js-functions']={id:'js-functions',title:'Functions',cat:'JavaScript',
intro:'Functions are reusable blocks of code.',
content:makeEx('Functions','// Declaration\nfunction greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow\nconst greet = (name) => "Hello, " + name;\n\n// Default params\nfunction create(name, role = "user") {\n  return { name, role };\n}')+
'<h3>Array Methods</h3>'+
makeEx('Array Methods','const nums = [1, 2, 3, 4, 5];\nnums.map(n => n * 2);     // [2,4,6,8,10]\nnums.filter(n => n > 2);  // [3,4,5]\nnums.reduce((a,b) => a+b, 0); // 15\nnums.find(n => n > 3);    // 4\nnums.forEach(n => console.log(n));')};

D['js-conditions']={id:'js-conditions',title:'Conditions',cat:'JavaScript',
intro:'Conditions make decisions based on values.',
content:makeEx('if / else','const age = 18;\n\nif (age >= 18) {\n  console.log("Adult");\n} else if (age >= 13) {\n  console.log("Teen");\n} else {\n  console.log("Child");\n}')+
makeEx('Ternary','const status = age >= 18 ? "Adult" : "Minor";')+
makeEx('Switch','const day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  default:\n    console.log("Regular day");\n}')};

D['js-loops']={id:'js-loops',title:'Loops',cat:'JavaScript',
intro:'Loops repeat code multiple times.',
content:makeEx('Loops','// for\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// while\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n\n// for...of\nconst colors = ["red", "blue", "green"];\nfor (const c of colors) console.log(c);\n\n// forEach\ncolors.forEach((c, i) => console.log(i, c));')};

D['js-arrays']={id:'js-arrays',title:'Arrays',cat:'JavaScript',
intro:'Arrays store multiple values in one variable.',
content:makeEx('Arrays','const fruits = ["apple", "banana", "cherry"];\n\nfruits[0];           // "apple"\nfruits.length;       // 3\nfruits.push("date"); // add to end\nfruits.pop();        // remove last\nfruits.includes("apple"); // true')+
'<h3>Spread & Destructuring</h3>'+
makeEx('Spread','const a = [1, 2];\nconst b = [3, 4];\nconst c = [...a, ...b]; // [1,2,3,4]\n\nconst [first, ...rest] = c;\n// first=1, rest=[2,3,4]')};

D['js-objects']={id:'js-objects',title:'Objects',cat:'JavaScript',
intro:'Objects store data as key-value pairs.',
content:makeEx('Objects','const user = {\n  name: "Majed",\n  age: 25,\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\n\nuser.name;      // "Majed"\nuser.greet();   // "Hello, Majed"')+
'<h3>Destructuring</h3>'+
makeEx('Destructuring','const { name, age } = user;\nconst updated = { ...user, age: 26 };\n\nObject.keys(user);   // ["name","age","greet"]\nObject.values(user);\nObject.entries(user);')};

D['js-template']={id:'js-template',title:'Template Literals',cat:'JavaScript',
intro:'Template literals use backticks for interpolation and multi-line strings.',
content:makeEx('Template Literals','const name = "Majed";\nconst age = 25;\n\n// Interpolation\nconst msg = `Hello, ${name}!`;\n\n// Expressions\nconst price = 49.99;\nconst total = `Total: $${(price * 1.1).toFixed(2)}`;\n\n// Multi-line\nconst html = `\n  <div class="card">\n    <h2>${name}</h2>\n    <p>Age: ${age}</p>\n  </div>\n`;')};

D['js-destructuring']={id:'js-destructuring',title:'Destructuring & Spread',cat:'JavaScript',
intro:'Extract values from arrays/objects. Spread expands them.',
content:makeEx('Object Destructuring','const user = { name: "Majed", age: 25, city: "Amman" };\nconst { name, age } = user;\nconst { name: userName, role = "user" } = user;')+
makeEx('Array Destructuring','const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconst [,, third] = colors; // "blue"\n\n// Swap\nlet a = 1, b = 2;\n[a, b] = [b, a]; // a=2, b=1')+
makeEx('Spread','const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5];\n\nconst base = { theme: "dark" };\nconst ext = { ...base, name: "Majed" };')};

D['js-errors']={id:'js-errors',title:'Error Handling',cat:'JavaScript',
intro:'Catch and handle errors gracefully.',
content:makeEx('Try/Catch','try {\n  const data = JSON.parse("invalid");\n} catch (error) {\n  console.error(error.message);\n} finally {\n  console.log("Always runs");\n}')+
makeEx('Throwing Errors','function divide(a, b) {\n  if (b === 0) throw new Error("Cannot divide by zero");\n  return a / b;\n}')+
'<h3>Error Types</h3>'+
'<table><tr><th>Error</th><th>Cause</th></tr>'+
'<tr><td><code>ReferenceError</code></td><td>Undefined variable</td></tr>'+
'<tr><td><code>TypeError</code></td><td>Wrong type</td></tr>'+
'<tr><td><code>SyntaxError</code></td><td>Invalid syntax</td></tr></table>'};

D['js-dom']={id:'js-dom',title:'DOM Manipulation',cat:'JavaScript',
intro:'The DOM is a tree of elements JS can read and modify.',
content:makeEx('DOM','// Select\nconst el = document.getElementById("myId");\nconst items = document.querySelectorAll(".item");\n\n// Content\nel.textContent = "New text";\nel.innerHTML = "<strong>Bold</strong>";\n\n// Styles\nel.style.color = "red";\n\n// Classes\nel.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("visible");\n\n// Create/Remove\nconst div = document.createElement("div");\ndiv.textContent = "New!";\ndocument.body.appendChild(div);\nel.remove();')};

D['js-events']={id:'js-events',title:'Events',cat:'JavaScript',
intro:'Events let you respond to user actions.',
content:makeEx('Events','document.getElementById("btn")\n  .addEventListener("click", () => {\n    alert("Clicked!");\n  });\n\ndocument.getElementById("form")\n  .addEventListener("submit", (e) => {\n    e.preventDefault();\n  });\n\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});')+
'<table><tr><th>Event</th><th>Fires When</th></tr>'+
'<tr><td><code>click</code></td><td>Clicked</td></tr>'+
'<tr><td><code>submit</code></td><td>Form submitted</td></tr>'+
'<tr><td><code>keydown</code></td><td>Key pressed</td></tr>'+
'<tr><td><code>input</code></td><td>Input changes</td></tr></table>'};

D['js-classes']={id:'js-classes',title:'Classes & OOP',cat:'JavaScript',
intro:'Classes create objects with shared behavior.',
content:makeEx('Class','class Animal {\n  constructor(name, sound) {\n    this.name = name;\n    this.sound = sound;\n  }\n  speak() {\n    return `${this.name} says ${this.sound}!`;\n  }\n}\n\nconst dog = new Animal("Dog", "Woof");\ndog.speak(); // "Dog says Woof!"')+
'<h3>Inheritance</h3>'+
makeEx('Inheritance','class Dog extends Animal {\n  constructor(name) {\n    super(name, "Woof");\n  }\n  fetch(item) {\n    return `${this.name} fetches ${item}`;\n  }\n}')};

D['js-modules']={id:'js-modules',title:'Modules',cat:'JavaScript',
intro:'Modules split code into separate files with import/export.',
content:makeEx('Export','// math.js\nexport const add = (a, b) => a + b;\nexport const PI = 3.14159;\nexport default class Calculator {\n  // ...\n}')+
makeEx('Import','import { add, PI } from "./math.js";\nimport Calculator from "./math.js";\nimport * as Math from "./math.js";')+
'<h3>HTML Setup</h3>'+
makeEx('Module Tag','<script type="module" src="app.js"></script>')};

D['js-async']={id:'js-async',title:'Async/Await',cat:'JavaScript',
intro:'Async code runs long tasks without blocking.',
content:makeEx('Promise','const p = new Promise((resolve) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\np.then(r => console.log(r));')+
makeEx('Async/Await','async function getData() {\n  try {\n    const res = await fetch("/api/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}')+
'<div class="l-note"><strong>Note:</strong> await only works inside async functions.</div>'};

D['js-fetch']={id:'js-fetch',title:'Fetch API',cat:'JavaScript',
intro:'Fetch makes HTTP requests from the browser.',
content:makeEx('Fetch','// GET\nconst res = await fetch("https://api.example.com/users");\nconst users = await res.json();\n\n// POST\nconst res = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Majed" })\n});\n\nif (!res.ok) throw new Error(res.statusText);')};

D['js-closures']={id:'js-closures',title:'Closures & Scope',cat:'JavaScript',
intro:'Closures let inner functions access outer variables.',
content:makeEx('Closure','function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\ncounter.increment();\ncounter.getCount(); // 2')+
'<h3>Scope Types</h3>'+
'<table><tr><th>Scope</th><th>Access</th></tr>'+
'<tr><td>Global</td><td>Anywhere</td></tr>'+
'<tr><td>Function</td><td>Inside function only</td></tr>'+
'<tr><td>Block</td><td>Inside {} with let/const</td></tr></table>'+
'<div class="l-tip"><strong>Tip:</strong> Closures are used in callbacks, event handlers, and data privacy patterns.</div>'};



// ─── React ───
D['react-intro']={id:'react-intro',title:'Introduction to React',cat:'React',
intro:'React is a JavaScript library for building UIs, created by Meta.',
content:'<h3>Why React?</h3><ul>'+
'<li><strong>Component-based</strong> - reusable UI pieces</li>'+
'<li><strong>Virtual DOM</strong> - fast performance</li>'+
'<li><strong>Ecosystem</strong> - thousands of libraries</li>'+
'<li><strong>In demand</strong> - Meta, Netflix, Airbnb</li></ul>'+
makeEx('Basic App','// App.js\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n    </div>\n  );\n}\n\nexport default App;')};

D['react-jsx']={id:'react-jsx',title:'JSX',cat:'React',
intro:'JSX looks like HTML but compiles to JavaScript.',
content:makeEx('JSX','const name = "Majed";\nconst el = <h1>Hello, {name}!</h1>;\n\nconst greeting = isLoggedIn\n  ? <h1>Welcome!</h1>\n  : <h1>Sign in.</h1>;\n\nconst items = ["HTML", "CSS", "JS"];\nconst list = (\n  <ul>\n    {items.map((item, i) => (\n      <li key={i}>{item}</li>\n    ))}\n  </ul>\n);')+
'<div class="l-note"><strong>Note:</strong> JSX needs one parent element. Use &lt;&gt;...&lt;/&gt;.</div>'};

D['react-components']={id:'react-components',title:'Components',cat:'React',
intro:'Components are functions that return JSX.',
content:makeEx('Components','function Button({ text, onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\nfunction App() {\n  return (\n    <Button text="Click" onClick={() => alert("Hi")} />\n  );\n}')+
'<div class="l-tip"><strong>Tip:</strong> Component names start with capitals.</div>'};

D['react-props']={id:'react-props',title:'Props',cat:'React',
intro:'Props pass data from parent to child components.',
content:makeEx('Props','function App() {\n  return <Card title="Hello" count={42} />;\n}\n\nfunction Card({ title, count }) {\n  return (\n    <div>\n      <h3>{title}</h3>\n      <span>{count}</span>\n    </div>\n  );\n}')};

D['react-state']={id:'react-state',title:'State',cat:'React',
intro:'State is data that changes over time.',
content:makeEx('useState','import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </div>\n  );\n}')};

D['react-hooks']={id:'react-hooks',title:'Hooks',cat:'React',
intro:'Hooks add state and features to function components.',
content:makeEx('useState & useEffect','import { useState, useEffect } from "react";\n\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);')+
'<h3>Rules</h3><ol>'+
'<li>Only at the top level</li>'+
'<li>Only in React functions</li></ol>'};

D['react-useeffect']={id:'react-useeffect',title:'useEffect',cat:'React',
intro:'useEffect handles side effects like data fetching and subscriptions.',
content:makeEx('useEffect','import { useState, useEffect } from "react";\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(setUser);\n  }, [userId]); // re-runs when userId changes\n\n  if (!user) return <p>Loading...</p>;\n  return <h2>{user.name}</h2>;\n}')+
'<h3>Dependency Array</h3>'+
'<table><tr><th>Usage</th><th>Runs When</th></tr>'+
'<tr><td><code>useEffect(fn)</code></td><td>Every render</td></tr>'+
'<tr><td><code>useEffect(fn, [])</code></td><td>Only on mount</td></tr>'+
'<tr><td><code>useEffect(fn, [dep])</code></td><td>When dep changes</td></tr></table>'};

D['react-forms']={id:'react-forms',title:'Forms in React',cat:'React',
intro:'Controlled components tie form inputs to state.',
content:makeEx('Controlled Form','import { useState } from "react";\n\nfunction ContactForm() {\n  const [form, setForm] = useState({ name: "", email: "" });\n\n  const handleChange = (e) => {\n    setForm({ ...form, [e.target.name]: e.target.value });\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(form);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" value={form.name}\n        onChange={handleChange} placeholder="Name" />\n      <input name="email" value={form.email}\n        onChange={handleChange} placeholder="Email" />\n      <button type="submit">Send</button>\n    </form>\n  );\n}')};

D['react-lists']={id:'react-lists',title:'Lists & Keys',cat:'React',
intro:'Render arrays of data with map().',
content:makeEx('Lists','const [items, setItems] = useState(["HTML", "CSS", "JS"]);\n\nreturn (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item}</li>\n    ))}\n  </ul>\n);')+
'<div class="l-warn"><strong>Important:</strong> Always provide a unique key prop when rendering lists.</div>'};

D['react-router']={id:'react-router',title:'React Router',cat:'React',
intro:'React Router handles client-side navigation.',
content:makeEx('React Router','import { BrowserRouter, Routes, Route, Link }\n  from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </nav>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}')};

D['react-conditional']={id:'react-conditional',title:'Conditional Rendering',cat:'React',
intro:'Render different content based on conditions.',
content:makeEx('Conditional Rendering','function Greeting({ isLoggedIn }) {\n  // Short circuit\n  return (\n    <div>\n      {isLoggedIn && <h1>Welcome!</h1>}\n      {!isLoggedIn && <h1>Please sign in</h1>}\n    </div>\n  );\n}\n\n// Ternary\nfunction Status({ online }) {\n  return (\n    <span>\n      {online ? "Online" : "Offline"}\n    </span>\n  );\n}')};

D['react-customhooks']={id:'react-customhooks',title:'Custom Hooks',cat:'React',
intro:'Extract reusable logic into custom hooks.',
content:makeEx('Custom Hook','function useLocalStorage(key, initial) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initial;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\n// Usage\nfunction App() {\n  const [name, setName] = useLocalStorage("name", "");\n  return (\n    <input value={name} onChange={e => setName(e.target.value)} />\n  );\n}')+
'<div class="l-tip"><strong>Tip:</strong> Custom hooks must start with "use".</div>'};



// ─── Node.js ───
D['node-intro']={id:'node-intro',title:'Introduction to Node.js',cat:'Node.js',
intro:'Node.js lets you run JavaScript on the server.',
content:makeEx('HTTP Server','import { createServer } from "http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, {\n    "Content-Type": "application/json"\n  });\n  res.end(JSON.stringify({ message: "Hello!" }));\n});\n\nserver.listen(3000);')+
'<h3>Commands</h3>'+
makeEx('Terminal','node app.js\nnode -v\nnpm init -y\nnpm install express')};

D['node-npm']={id:'node-npm',title:'npm',cat:'Node.js',
intro:'npm manages JavaScript packages and dependencies.',
content:makeEx('npm','npm init -y\nnpm install express\nnpm install -D nodemon\nnpm uninstall express')+
'<h3>package.json</h3>'+
makeEx('package.json','{\n  "name": "my-app",\n  "scripts": {\n    "start": "node app.js",\n    "dev": "nodemon app.js"\n  },\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}')};

D['node-express']={id:'node-express',title:'Express.js',cat:'Node.js',
intro:'Express is the most popular Node.js web framework.',
content:makeEx('Express','import express from "express";\nconst app = express();\n\napp.use(express.json());\n\napp.get("/", (req, res) => {\n  res.json({ message: "Hello!" });\n});\n\napp.get("/users/:id", (req, res) => {\n  res.json({ id: req.params.id });\n});\n\napp.post("/users", (req, res) => {\n  const { name } = req.body;\n  res.json({ name, created: true });\n});\n\napp.listen(3000);')};

D['node-rest']={id:'node-rest',title:'REST APIs',cat:'Node.js',
intro:'REST APIs use HTTP methods to create, read, update, and delete resources.',
content:makeEx('RESTful Routes','// CRUD operations\napp.get("/api/users",     listUsers);    // Read all\napp.get("/api/users/:id", getUser);      // Read one\napp.post("/api/users",    createUser);   // Create\napp.put("/api/users/:id", updateUser);   // Update\napp.delete("/api/users/:id", deleteUser);// Delete')+
'<h3>HTTP Methods</h3>'+
'<table><tr><th>Method</th><th>Purpose</th><th>Idempotent</th></tr>'+
'<tr><td>GET</td><td>Read</td><td>Yes</td></tr>'+
'<tr><td>POST</td><td>Create</td><td>No</td></tr>'+
'<tr><td>PUT</td><td>Replace</td><td>Yes</td></tr>'+
'<tr><td>PATCH</td><td>Partial update</td><td>No</td></tr>'+
'<tr><td>DELETE</td><td>Remove</td><td>Yes</td></tr></table>'};

D['node-fs']={id:'node-fs',title:'File System',cat:'Node.js',
intro:'The fs module reads and writes files.',
content:makeEx('File System','import { readFile, writeFile } from "fs/promises";\n\n// Read\nconst data = await readFile("data.json", "utf8");\nconst json = JSON.parse(data);\n\n// Write\nawait writeFile("output.json",\n  JSON.stringify(json, null, 2));')};

D['node-middleware']={id:'node-middleware',title:'Middleware',cat:'Node.js',
intro:'Middleware functions process requests before they reach route handlers.',
content:makeEx('Middleware','// Logger middleware\nfunction logger(req, res, next) {\n  console.log(`${req.method} ${req.url}`);\n  next();\n}\n\n// Auth middleware\nfunction auth(req, res, next) {\n  const token = req.headers.authorization;\n  if (!token) return res.status(401).json({ error: "No token" });\n  next();\n}\n\napp.use(logger);\napp.get("/admin", auth, (req, res) => {\n  res.json({ secret: "data" });\n});')};



// ─── Tools ───
D['git-basics']={id:'git-basics',title:'Git Basics',cat:'Tools',
intro:'Git tracks changes to your code over time.',
content:makeEx('Git','# Setup\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# Status\ngit status\ngit log --oneline\n\n# Remote\ngit remote add origin URL\ngit push -u origin main')};

D['git-branch']={id:'git-branch',title:'Git Branching',cat:'Tools',
intro:'Branches let you work on features independently.',
content:makeEx('Branching','git checkout -b feature\n# ... work on feature ...\ngit add .\ngit commit -m "Add feature"\ngit checkout main\ngit merge feature')};

D['github']={id:'github',title:'GitHub',cat:'Tools',
intro:'GitHub hosts Git repositories online.',
content:makeEx('GitHub','# Clone\ngit clone https://github.com/user/repo.git\n\n# Push changes\ngit push origin main\n\n# Pull updates\ngit pull origin main')};

D['terminal']={id:'terminal',title:'Terminal Basics',cat:'Tools',
intro:'The terminal is a text-based interface for your computer.',
content:makeEx('Terminal','# Navigate\ncd folder\ncd ..\npwd\n\n# Files\nls / dir\nmkdir name\ntouch file.txt\nrm file.txt\ncp src dest\nmv src dest\n\n# Clear\nclear / cls')+
'<div class="l-tip"><strong>Tip:</strong> Press Tab to autocomplete file names.</div>'};

D['npm-yarn']={id:'npm-yarn',title:'npm & Yarn',cat:'Tools',
intro:'Package managers install and manage JavaScript dependencies.',
content:makeEx('npm','npm init -y\nnpm install express\nnpm install -D nodemon\nnpm install react react-dom\nnpm uninstall express\nnpm ls')+
makeEx('Yarn','yarn init -y\nyarn add express\nyarn add -D nodemon\nyarn remove express\nyarn list')};

D['vscode']={id:'vscode',title:'VS Code Tips',cat:'Tools',
intro:'Visual Studio Code shortcuts and features.',
content:makeEx('Shortcuts','Ctrl+P          Quick file open\nCtrl+Shift+P    Command palette\nCtrl+D          Select next occurrence\nCtrl+/          Toggle comment\nCtrl+Space      Auto complete\nAlt+Up/Down     Move line up/down\nCtrl+Shift+K    Delete line')+
'<h3>Essential Extensions</h3><ul>'+
'<li><strong>ESLint</strong> - JavaScript linting</li>'+
'<li><strong>Prettier</strong> - Code formatting</li>'+
'<li><strong>Live Server</strong> - Local dev server</li>'+
'<li><strong>Auto Rename Tag</strong> - Rename paired HTML tags</li></ul>'};



// ═══ LOGIC ═══
var PAGE=window.LEARN_PAGE||null;
var FILTER=PAGE?SECTIONS.filter(function(s){return s.page===PAGE}):SECTIONS;

var activeSection=0;
var activeLesson=null;

// ═══ SIDEBAR MODE (language pages) ═══
if(PAGE&&FILTER.length===1){
  var sec=FILTER[0];
  var sideList=document.getElementById('lSideList');
  var mainInner=document.getElementById('lMainInner');
  if(sideList&&mainInner){
    var sh='';
    sec.items.forEach(function(it,i){
      sh+='<div class="l-side-item" data-id="'+it.id+'" onclick="window._lesson(\''+it.id+'\')">';
      sh+='<div class="num" style="background:'+sec.c+'">'+(i+1)+'</div>';
      sh+='<span class="t">'+it.l+'</span></div>';
    });
    sideList.innerHTML=sh;

    window._lesson=function(id){
      var d=D[id];if(!d)return;
      activeLesson=id;
      var items=sideList.querySelectorAll('.l-side-item');
      for(var i=0;i<items.length;i++){
        items[i].className=items[i].getAttribute('data-id')===id?'l-side-item on':'l-side-item';
      }
      var idx=ALL_IDS.indexOf(id);
      var prev=idx>0?ALL_IDS[idx-1]:null;
      var next=idx<ALL_IDS.length-1?ALL_IDS[idx+1]:null;
      var h='<div class="l-content-header"><h2>'+d.title+'</h2><p>'+d.intro+'</p></div>';
      h+='<div class="l-body">'+d.content+'</div>';
      h+='<div class="l-navs">';
      if(prev&&D[prev]){
        h+='<div class="l-nav-btn" onclick="window._lesson(\''+prev+'\')"><div class="lbl">&larr; Previous</div><div class="ttl">'+D[prev].title+'</div></div>';
      }else{h+='<div></div>';}
      if(next&&D[next]){
        h+='<div class="l-nav-btn nxt" onclick="window._lesson(\''+next+'\')"><div class="lbl">Next &rarr;</div><div class="ttl">'+D[next].title+'</div></div>';
      }
      h+='</div>';
      mainInner.innerHTML=h;
      mainInner.scrollTop=0;
      window.scrollTo({top:0,behavior:'smooth'});
      location.hash=id;
    };

    window._tryCode=function(btn){
      var codeEl=btn.closest('.l-ex').querySelector('code');
      if(!codeEl)return;
      try{localStorage.setItem('deoit_try_code',JSON.stringify({html:codeEl.textContent,css:'',js:''}));}catch(e){}
      window.open('pages/editor','_blank');
    };

    var hash=location.hash.slice(1);
    if(hash&&D[hash]){window._lesson(hash);}
    else{window._lesson(sec.items[0].id);}
    window.addEventListener('hashchange',function(){
      var h=location.hash.slice(1);
      if(h&&D[h])window._lesson(h);
    });
    return;
  }
}

// ═══ TAB MODE (index / multi-section pages) ═══
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

var hash=location.hash.slice(1);
if(hash&&D[hash]){
  var s=FILTER.find(function(s){return s.items.some(function(it){return it.id===hash})});
  if(s){activeSection=FILTER.indexOf(s);renderTabs();renderLesson(hash);}
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


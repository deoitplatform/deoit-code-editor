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

var ALL_IDS=[];
SECTIONS.forEach(function(s){s.items.forEach(function(it){ALL_IDS.push(it.id)})});

function makeEx(title,code){
  return '<div class="l-ex"><div class="l-ex-top"><div class="l-ex-dots"><span></span><span></span><span></span></div><span class="l-ex-title">'+title+'</span><button class="l-ex-btn" onclick="window._learnTry(this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>Try it</button></div><div class="l-ex-body"><pre><code>'+escH(code)+'</code></pre></div></div>';
}
function escH(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

var D={};

D.intro={
  id:'intro',title:'Introduction',cat:'Getting Started',intro:'Welcome to Deoit Learn — your free guide to web development.',
  tryCode:null,
  content:'<p>This platform teaches you web development from scratch with hands-on examples you can run directly in the <a href="pages/editor">Deoit editor</a>.</p>'+
  '<h2>What You Will Learn</h2><ul>'+
  '<li><strong>HTML</strong> — the structure and content of web pages</li>'+
  '<li><strong>CSS</strong> — the styling, colors, and layout</li>'+
  '<li><strong>JavaScript</strong> — the interactivity and logic</li>'+
  '<li><strong>React</strong> — modern component-based UIs</li>'+
  '<li><strong>Node.js</strong> — server-side JavaScript</li>'+
  '</ul>'+
  '<h2>How It Works</h2>'+
  '<p>Each lesson explains a concept and shows you code. Click <strong>"Try it Yourself"</strong> to run that code in the Deoit editor instantly.</p>'+
  makeEx('Hello World', '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello, World!</h1>\n  <p>Welcome to Deoit Learn.</p>\n</body>\n</html>')+
  '<div class="l-tip"><b>Tip:</b> Follow the lessons in order — start with HTML, then CSS, then JavaScript.</div>'+
  '<h2>Prerequisites</h2>'+
  '<p>You need <strong>zero programming experience</strong>. All you need is a web browser and a willingness to learn.</p>'
};

D['html-intro']={
  id:'html-intro',title:'What is HTML',cat:'HTML',intro:'HTML (HyperText Markup Language) is the standard language for creating web pages.',
  tryCode:'<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is my first web page.</p>\n</body>\n</html>',
  content:'<p>Every website you visit is built with HTML. It describes the structure of a page using elements and tags.</p>'+
  makeEx('Basic HTML Document','<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>')+
  '<h2>How the Web Works</h2><ol>'+
  '<li>You type a URL in your browser</li>'+
  '<li>The browser sends a request to a server</li>'+
  '<li>The server responds with HTML files</li>'+
  '<li>The browser renders the page on your screen</li>'+
  '</ol>'+
  '<div class="l-tip"><b>Tip:</b> Open the <a href="pages/editor">Deoit editor</a> and try writing your first HTML page!</div>'
};

D['html-edit']={
  id:'html-edit',title:'HTML Editors',cat:'HTML',intro:'An HTML editor is where you write your code. You can use any text editor, but dedicated editors give you helpful features.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Page</h1>\n  <p>Save this file as index.html and open it in a browser.</p>\n</body>\n</html>',
  content:'<p>You can write HTML in any text editor. Save the file with a <code>.html</code> extension and open it in your browser.</p>'+
  makeEx('Simple HTML File','<!-- Save as index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Page</h1>\n  <p>Open this file in a browser.</p>\n</body>\n</html>')+
  '<h2>Using Deoit</h2><p>The fastest way to start coding is the <a href="pages/editor">Deoit online editor</a>. No downloads or installation — just open your browser and start building.</p>'+
  '<div class="l-note"><b>Note:</b> The Deoit editor shows your output live as you type, which makes learning much faster.</div>'
};

D['html-basics']={
  id:'html-basics',title:'HTML Basics',cat:'HTML',intro:'HTML documents are text files with a .html extension. Every page follows the same basic structure.',
  tryCode:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My Heading</h1>\n  <p>My paragraph.</p>\n</body>\n</html>',
  content:'<h2>HTML Document Structure</h2>'+
  makeEx('Complete HTML Document','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My Heading</h1>\n  <p>My paragraph.</p>\n</body>\n</html>')+
  '<h2>Key Elements</h2><ul>'+
  '<li><code>&lt;!DOCTYPE html&gt;</code> — declares this is an HTML5 document</li>'+
  '<li><code>&lt;html&gt;</code> — the root element wrapping everything</li>'+
  '<li><code>&lt;head&gt;</code> — contains meta information (not visible)</li>'+
  '<li><code>&lt;body&gt;</code> — contains the visible content</li>'+
  '</ul>'
};

D['html-elements']={
  id:'html-elements',title:'HTML Elements',cat:'HTML',intro:'An HTML element is defined by a start tag, its content, and an end tag.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <h1>This is a heading</h1>\n  <p>This is a paragraph.</p>\n  <a href="https://example.com">This is a link</a>\n</body>\n</html>',
  content:makeEx('Element Examples','<!-- Each element has a start tag, content, and end tag -->\n<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<a href="https://example.com">This is a link</a>')+
  '<h2>Nested Elements</h2>'+
  makeEx('Nesting Elements','<div>\n  <h2>Title</h2>\n  <p>Paragraph inside a div.</p>\n</div>')+
  '<div class="l-note"><b>Note:</b> Some elements are self-closing — they have no content or end tag, like <code>&lt;img&gt;</code> and <code>&lt;br&gt;</code>.</div>'
};

D['html-attributes']={
  id:'html-attributes',title:'HTML Attributes',cat:'HTML',intro:'Attributes give extra information about HTML elements. They appear inside the opening tag.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <a href="https://google.com">Visit Google</a>\n  <br>\n  <img src="https://via.placeholder.com/150" alt="Placeholder" width="150">\n  <div style="color: red; font-size: 20px;">Styled text</div>\n</body>\n</html>',
  content:'<h2>Common Attributes</h2>'+
  makeEx('Attribute Examples','<!-- href: link destination -->\n<a href="https://google.com">Google</a>\n\n<!-- src: image source -->\n<img src="logo.png" alt="Logo">\n\n<!-- class: CSS class name -->\n<div class="container">Content</div>\n\n<!-- id: unique identifier -->\n<div id="main">Main content</div>\n\n<!-- style: inline CSS -->\n<p style="color: red;">Red text</p>')+
  '<table><tr><th>Attribute</th><th>Purpose</th></tr>'+
  '<tr><td><code>href</code></td><td>Link URL</td></tr>'+
  '<tr><td><code>src</code></td><td>Image/source URL</td></tr>'+
  '<tr><td><code>alt</code></td><td>Image description</td></tr>'+
  '<tr><td><code>class</code></td><td>CSS class name</td></tr>'+
  '<tr><td><code>id</code></td><td>Unique identifier</td></tr></table>'
};

D['html-headings']={
  id:'html-headings',title:'HTML Headings',cat:'HTML',intro:'HTML defines six levels of headings, from <h1> to <h6>. Headings help organize your content.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <h1>Heading Level 1</h1>\n  <h2>Heading Level 2</h2>\n  <h3>Heading Level 3</h3>\n  <h4>Heading Level 4</h4>\n  <h5>Heading Level 5</h5>\n  <h6>Heading Level 6</h6>\n</body>\n</html>',
  content:makeEx('All Heading Levels','<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>')+
  '<h2>Best Practices</h2><ul>'+
  '<li>Use <code>&lt;h1&gt;</code> for the main title — only one per page</li>'+
  '<li>Use <code>&lt;h2&gt;</code> for major sections</li>'+
  '<li>Use <code>&lt;h3&gt;</code> for sub-sections</li>'+
  '<li>Don\'t skip heading levels (e.g., don\'t jump from h1 to h3)</li>'+
  '</ul>'+
  '<div class="l-tip"><b>Tip:</b> Headings improve SEO and make your content accessible to screen readers.</div>'
};

D['html-paragraphs']={
  id:'html-paragraphs',title:'HTML Paragraphs',cat:'HTML',intro:'The <p> element defines a paragraph of text. Browsers add space around paragraphs automatically.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <p>This is a paragraph.</p>\n  <p>This is another paragraph.</p>\n  <p>Line one.<br>Line two (with a break).</p>\n  <hr>\n  <pre>\n    This text preserves\n    spaces and line breaks.\n  </pre>\n</body>\n</html>',
  content:makeEx('Paragraphs and Text','<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n\n<!-- Line break -->\n<p>Line one.<br>Line two.</p>\n\n<!-- Horizontal rule -->\n<hr>\n\n<!-- Preformatted text -->\n<pre>\n  This text preserves\n  spaces and line breaks.\n</pre>')+
  '<div class="l-note"><b>Note:</b> Browsers add a single blank line before and after each paragraph.</div>'
};

D['html-links']={
  id:'html-links',title:'HTML Links',cat:'HTML',intro:'Links connect web pages together. The <a> tag creates a hyperlink using the href attribute.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <a href="https://google.com">Visit Google</a>\n  <br><br>\n  <a href="https://google.com" target="_blank">Open in New Tab</a>\n  <br><br>\n  <a href="mailto:hello@example.com">Send Email</a>\n</body>\n</html>',
  content:makeEx('Link Examples','<!-- Basic link -->\n<a href="https://google.com">Visit Google</a>\n\n<!-- Open in new tab -->\n<a href="https://google.com" target="_blank">\n  Open in new tab\n</a>\n\n<!-- Email link -->\n<a href="mailto:test@test.com">Send Email</a>\n\n<!-- Page link -->\n<a href="about.html">About Page</a>')+
  '<h2>Link Attributes</h2>'+
  '<table><tr><th>Attribute</th><th>Description</th></tr>'+
  '<tr><td><code>href</code></td><td>The URL of the link</td></tr>'+
  '<tr><td><code>target</code></td><td>Where to open (_blank = new tab)</td></tr>'+
  '<tr><td><code>title</code></td><td>Tooltip on hover</td></tr></table>'
};

D['html-images']={
  id:'html-images',title:'HTML Images',cat:'HTML',intro:'Images are added with the <img> tag, which is self-closing. The src attribute points to the image file.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <h2>Image Examples</h2>\n  <img src="https://via.placeholder.com/300x150" alt="Placeholder" width="300">\n  <br><br>\n  <img src="https://via.placeholder.com/150" alt="Small image" width="150" height="150">\n</body>\n</html>',
  content:makeEx('Image Examples','<!-- Basic image -->\n<img src="photo.jpg" alt="Description">\n\n<!-- With size -->\n<img src="logo.png" alt="Logo" width="200" height="100">\n\n<!-- Responsive image -->\n<img src="pic.jpg" alt="Photo"\n     style="max-width: 100%; height: auto;">')+
  '<h2>Image Attributes</h2>'+
  '<table><tr><th>Attribute</th><th>Description</th></tr>'+
  '<tr><td><code>src</code></td><td>Path to the image file</td></tr>'+
  '<tr><td><code>alt</code></td><td>Text shown if image fails to load</td></tr>'+
  '<tr><td><code>width</code></td><td>Width in pixels</td></tr>'+
  '<tr><td><code>height</code></td><td>Height in pixels</td></tr></table>'+
  '<div class="l-warn"><b>Important:</b> Always include the <code>alt</code> attribute — it\'s essential for accessibility.</div>'
};

D['html-forms']={
  id:'html-forms',title:'HTML Forms',cat:'HTML',intro:'Forms collect user input. The <form> element wraps input fields, buttons, and other controls.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <form>\n    <label for="name">Name:</label><br>\n    <input type="text" id="name" placeholder="Enter name"><br><br>\n    <label for="email">Email:</label><br>\n    <input type="email" id="email" placeholder="Enter email"><br><br>\n    <label for="pass">Password:</label><br>\n    <input type="password" id="pass" placeholder="Enter password"><br><br>\n    <select>\n      <option>User</option>\n      <option>Admin</option>\n    </select><br><br>\n    <textarea rows="3" placeholder="Your message"></textarea><br><br>\n    <button type="button" onclick="alert(\'Submitted!\')">Submit</button>\n  </form>\n</body>\n</html>',
  content:makeEx('Form Example','<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n\n  <label for="pass">Password:</label>\n  <input type="password" id="pass" name="pass">\n\n  <select name="role">\n    <option value="user">User</option>\n    <option value="admin">Admin</option>\n  </select>\n\n  <textarea name="msg" rows="4"></textarea>\n\n  <input type="checkbox" id="agree">\n  <label for="agree">I agree</label>\n\n  <button type="submit">Submit</button>\n</form>')+
  '<h2>Input Types</h2>'+
  '<table><tr><th>Type</th><th>Purpose</th></tr>'+
  '<tr><td><code>text</code></td><td>Single-line text</td></tr>'+
  '<tr><td><code>email</code></td><td>Email with validation</td></tr>'+
  '<tr><td><code>password</code></td><td>Hidden text</td></tr>'+
  '<tr><td><code>number</code></td><td>Numbers only</td></tr>'+
  '<tr><td><code>checkbox</code></td><td>Toggle option</td></tr>'+
  '<tr><td><code>radio</code></td><td>Single choice from a group</td></tr>'+
  '<tr><td><code>file</code></td><td>File upload</td></tr>'+
  '<tr><td><code>date</code></td><td>Date picker</td></tr></table>'
};

D['html-tables']={
  id:'html-tables',title:'HTML Tables',cat:'HTML',intro:'Tables display data in rows and columns. Use <table>, <tr>, <th>, and <td> tags.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <table border="1" style="border-collapse:collapse; width:100%">\n    <thead>\n      <tr>\n        <th style="padding:8px">Name</th>\n        <th style="padding:8px">Age</th>\n        <th style="padding:8px">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style="padding:8px">Majed</td>\n        <td style="padding:8px">25</td>\n        <td style="padding:8px">Amman</td>\n      </tr>\n      <tr>\n        <td style="padding:8px">Ali</td>\n        <td style="padding:8px">30</td>\n        <td style="padding:8px">Cairo</td>\n      </tr>\n    </tbody>\n  </table>\n</body>\n</html>',
  content:makeEx('Table Example','<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Majed</td>\n      <td>25</td>\n    </tr>\n    <tr>\n      <td>Ali</td>\n      <td>30</td>\n    </tr>\n  </tbody>\n</table>')+
  '<h2>Table Tags</h2><ul>'+
  '<li><code>&lt;thead&gt;</code> — table header group</li>'+
  '<li><code>&lt;tbody&gt;</code> — table body</li>'+
  '<li><code>&lt;tfoot&gt;</code> — table footer</li>'+
  '<li><code>colspan</code> — span across columns</li>'+
  '<li><code>rowspan</code> — span across rows</li></ul>'
};

D['html-lists']={
  id:'html-lists',title:'HTML Lists',cat:'HTML',intro:'Lists group related items. HTML supports ordered, unordered, and description lists.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <h3>Unordered List</h3>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n  <h3>Ordered List</h3>\n  <ol>\n    <li>Learn HTML</li>\n    <li>Learn CSS</li>\n    <li>Learn JavaScript</li>\n  </ol>\n</body>\n</html>',
  content:'<h2>Unordered List</h2>'+
  makeEx('Unordered List','<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>')+
  '<h2>Ordered List</h2>'+
  makeEx('Ordered List','<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>')+
  '<h2>Description List</h2>'+
  makeEx('Description List','<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>')+
  '<div class="l-tip"><b>Tip:</b> Use <code>type="a"</code> on <code>&lt;ol&gt;</code> to get lettered lists.</div>'
};

D['html-semantics']={
  id:'html-semantics',title:'Semantic HTML',cat:'HTML',intro:'Semantic elements clearly describe their meaning to browsers, search engines, and developers.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body>\n  <header>\n    <nav>\n      <a href="#">Home</a> |\n      <a href="#">About</a> |\n      <a href="#">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>Blog Post</h2>\n      <p>This is a semantic article element.</p>\n    </article>\n    <aside>Sidebar content</aside>\n  </main>\n  <footer>\n    <p>&copy; 2026 Deoit</p>\n  </footer>\n</body>\n</html>',
  content:'<h2>Why Use Semantics?</h2><ul>'+
  '<li>Better accessibility for screen readers</li>'+
  '<li>Improved SEO rankings</li>'+
  '<li>Clearer, more maintainable code</li></ul>'+
  makeEx('Semantic Structure','<!-- Semantic structure -->\n<header>\n  <nav>Menu</nav>\n</header>\n\n<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content here...</p>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n\n<footer>\n  <p>Copyright 2026</p>\n</footer>')+
  '<table><tr><th>Tag</th><th>Purpose</th></tr>'+
  '<tr><td><code>&lt;header&gt;</code></td><td>Page or section header</td></tr>'+
  '<tr><td><code>&lt;nav&gt;</code></td><td>Navigation links</td></tr>'+
  '<tr><td><code>&lt;main&gt;</code></td><td>Main content area</td></tr>'+
  '<tr><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr>'+
  '<tr><td><code>&lt;section&gt;</code></td><td>Thematic grouping</td></tr>'+
  '<tr><td><code>&lt;aside&gt;</code></td><td>Side content</td></tr>'+
  '<tr><td><code>&lt;footer&gt;</code></td><td>Page or section footer</td></tr></table>'
};

// ─── CSS ───

D['css-intro']={
  id:'css-intro',title:'What is CSS',cat:'CSS',intro:'CSS (Cascading Style Sheets) controls how HTML elements look — colors, fonts, layout, and more.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;text-align:center;padding:4rem">\n  <h1 style="color:#61afef;font-size:36px">Styled Heading</h1>\n  <p style="color:#8a8a8a;font-size:18px">This text is styled with CSS.</p>\n  <a href="#" style="color:#e5c07b">A colored link</a>\n</body>\n</html>',
  content:'<p>CSS handles colors, layouts, fonts, spacing, animations, and responsive design.</p>'+
  makeEx('Three Ways to Add CSS','<!-- 1. External (best practice) -->\n<link rel="stylesheet" href="style.css">\n\n<!-- 2. Internal (in head) -->\n<style>\n  body { background: #0d0d0d; }\n</style>\n\n<!-- 3. Inline (on element) -->\n<p style="color: red;">Red text</p>')+
  '<h2>CSS Syntax</h2>'+
  makeEx('CSS Syntax','selector {\n  property: value;\n}\n\nh1 {\n  color: #d9d9d9;\n  font-size: 24px;\n  margin-bottom: 12px;\n}')
};

D['css-intro2']={
  id:'css-intro2',title:'CSS Introduction',cat:'CSS',intro:'CSS is the language for styling web pages. It works alongside HTML — HTML provides structure, CSS provides style.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h1 style="color:white;font-size:28px;text-align:center">Hello World</h1>\n  <div style="background:#141414;padding:20px;border-radius:12px;border:1px solid #2a2a2a;margin-top:20px">\n    <p>This card is styled with CSS.</p>\n  </div>\n</body>\n</html>',
  content:makeEx('CSS Selectors','/* Element selector */\nh1 {\n  color: white;\n  font-size: 28px;\n  text-align: center;\n}\n\n/* Class selector */\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n}\n\n/* ID selector */\n#header {\n  position: sticky;\n  top: 0;\n}')+
  '<table><tr><th>Selector</th><th>Example</th></tr>'+
  '<tr><td>Element</td><td><code>p { }</code></td></tr>'+
  '<tr><td>Class</td><td><code>.card { }</code></td></tr>'+
  '<tr><td>ID</td><td><code>#main { }</code></td></tr>'+
  '<tr><td>Attribute</td><td><code>input[type="text"] { }</code></td></tr></table>'
};

D['css-syntax']={
  id:'css-syntax',title:'CSS Syntax',cat:'CSS',intro:'A CSS rule consists of a selector and a declaration block. Properties are separated by semicolons.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;text-align:center;padding:4rem">\n  <h1 style="color:#e06c75;font-size:36px;margin-bottom:8px">Styled Heading</h1>\n  <p style="color:#8a8a8a;font-size:16px">A paragraph with custom styles.</p>\n  <div style="background:#141414;padding:20px;border-radius:12px;border:1px solid #2a2a2a;margin-top:20px;display:inline-block">A styled card</div>\n</body>\n</html>',
  content:makeEx('CSS Syntax Basics','/* Basic syntax */\nselector {\n  property: value;\n}\n\n/* Multiple properties */\nh1 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 12px;\n  font-weight: 800;\n}\n\n/* Class selector */\n.card {\n  background: #141414;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #2a2a2a;\n}')+
  '<div class="l-note"><b>Note:</b> Each property-value pair is separated by a semicolon <code>;</code>.</div>'
};

D['css-selectors']={
  id:'css-selectors',title:'CSS Selectors',cat:'CSS',intro:'Selectors determine which HTML elements a CSS rule applies to. Different selectors have different levels of specificity.',
  tryCode:'<!DOCTYPE html>\n<html>\n<head><style>\n  p { color: #d9d9d9; }\n  .highlight { color: #e5c07b; font-weight: bold; }\n  #special { color: #e06c75; font-size: 24px; }\n  a:hover { color: #61afef; }\n  .box { background: #141414; padding: 12px; margin: 8px 0; border-radius: 6px; border: 1px solid #2a2a2a; }\n</style></head>\n<body style="background:#0d0d0d;font-family:sans-serif;padding:2rem">\n  <p>Normal paragraph</p>\n  <p class="highlight">Highlighted paragraph</p>\n  <p id="special">Special paragraph</p>\n  <div class="box"><a href="#">Hover over me</a></div>\n</body>\n</html>',
  content:makeEx('Selector Types','/* Element */\np { color: white; }\n\n/* Class */\n.card { padding: 20px; }\n\n/* ID */\n#header { background: #111; }\n\n/* Descendant */\n.sidebar a { color: blue; }\n\n/* Child */\n.nav > li { display: inline; }\n\n/* Pseudo-class */\na:hover { color: red; }\nbutton:disabled { opacity: 0.5; }\n\n/* Attribute */\ninput[type="email"] { border: red; }\n\n/* Multiple */\n.card, .box { padding: 10px; }')+
  '<h2>Specificity Order</h2><ol>'+
  '<li><code>!important</code> (avoid using)</li>'+
  '<li>Inline styles <code>style="..."</code></li>'+
  '<li>ID selectors <code>#id</code></li>'+
  '<li>Class selectors <code>.class</code></li>'+
  '<li>Element selectors <code>div</code></li></ol>'+
  '<div class="l-tip"><b>Tip:</b> Use classes for styling. IDs are better for JavaScript.</div>'
};

D['css-colors']={
  id:'css-colors',title:'CSS Colors',cat:'CSS',intro:'CSS supports multiple color formats: HEX, RGB, RGBA, HSL, and named colors.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;font-family:sans-serif;padding:2rem">\n  <div style="display:flex;gap:12px;flex-wrap:wrap">\n    <div style="width:120px;height:80px;background:#e06c75;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">#e06c75</div>\n    <div style="width:120px;height:80px;background:#61afef;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">#61afef</div>\n    <div style="width:120px;height:80px;background:#e5c07b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#111;font-size:12px">#e5c07b</div>\n    <div style="width:120px;height:80px;background:#98c379;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#111;font-size:12px">#98c379</div>\n    <div style="width:120px;height:80px;background:#c678dd;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px">#c678dd</div>\n  </div>\n</body>\n</html>',
  content:makeEx('Color Formats','/* Named */\np { color: red; }\n\n/* HEX */\np { color: #d9d9d9; }\n\n/* RGB */\np { color: rgb(217, 217, 217); }\n\n/* RGBA (with transparency) */\np { color: rgba(217, 217, 217, 0.5); }\n\n/* HSL */\np { color: hsl(0, 0%, 85%); }\n\n/* Deoit palette */\n.html  { color: #e06c75; }\n.css   { color: #61afef; }\n.js    { color: #e5c07b; }')+
  '<div class="l-tip"><b>Tip:</b> Use CSS custom properties for consistent colors: <code>--accent: #d9d9d9;</code></div>'
};

D['css-background']={
  id:'css-background',title:'CSS Background',cat:'CSS',intro:'Background properties control colors, images, gradients, and sizing behind elements.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="margin:0;font-family:sans-serif">\n  <div style="background:linear-gradient(135deg,#141414,#0d0d0d);color:white;padding:60px 40px;text-align:center">\n    <h1 style="font-size:36px;margin-bottom:12px">Gradient Background</h1>\n    <p style="color:#8a8a8a">This hero section uses a CSS gradient.</p>\n  </div>\n  <div style="padding:40px;background:radial-gradient(circle,rgba(97,175,239,.1),transparent);text-align:center">\n    <p style="color:#d9d9d9;font-size:18px">Radial gradient glow effect</p>\n  </div>\n</body>\n</html>',
  content:makeEx('Background Properties','body {\n  background-color: #0d0d0d;\n  background-image: url("bg.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* Linear gradient */\n.hero {\n  background: linear-gradient(135deg, #141414, #0d0d0d);\n}\n\n/* Radial gradient */\n.glow {\n  background: radial-gradient(circle, #61afef22, transparent);\n}')
};

D['css-boxmodel']={
  id:'css-boxmodel',title:'CSS Box Model',cat:'CSS',intro:'Every HTML element is a rectangular box. The box model has four parts: content, padding, border, and margin.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <div style="width:250px;padding:20px;border:2px solid #61afef;margin:20px 0">\n    <p>This box has padding, border, and margin.</p>\n  </div>\n  <div style="width:250px;padding:20px;border:2px solid #e06c75;margin:20px 0;box-sizing:border-box">\n    <p>This box uses box-sizing: border-box.</p>\n  </div>\n</body>\n</html>',
  content:makeEx('Box Model CSS','/* Standard box model */\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #2a2a2a;\n  margin: 16px;\n  /* Total width = 200 + 20*2 + 1*2 + 16*2 = 274px */\n}\n\n/* border-box: padding and border included in width */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/* Now width: 200px total */')+
  '<h2>Visual Guide</h2>'+
  '<pre style="background:var(--bg3);color:var(--tx2);padding:12px;text-align:center;font-family:var(--mono);font-size:12px;border:1px solid var(--border2)">'+
  '&#9484;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; margin &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9488;<br>'+
  '&#9474;  &#9484;&#9472;&#9472;&#9472;&#9472;&#9472;border&#9472;&#9472;&#9472;&#9472;&#9488;    &#9474;<br>'+
  '&#9474;  &#9474;  &#9484;padding&#9488;  &#9474;    &#9474;<br>'+
  '&#9474;  &#9474;  &#9474; content &#9474;  &#9474;    &#9474;<br>'+
  '&#9474;  &#9474;  &#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;  &#9474;    &#9474;<br>'+
  '&#9474;  &#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;    &#9474;<br>'+
  '&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;</pre>'
};

D['css-margin']={
  id:'css-margin',title:'Margin & Padding',cat:'CSS',intro:'Margin is the space outside an element\'s border. Padding is the space inside, between content and border.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <div style="background:#141414;padding:20px;border:1px solid #2a2a2a;border-radius:8px;margin-bottom:20px">\n    <p style="margin:0">padding: 20px — space inside the box</p>\n  </div>\n  <div style="margin:20px;background:#141414;padding:16px 24px;border:1px solid #2a2a2a;border-radius:8px">\n    <p style="margin:0">margin: 20px outside + padding: 16px 24px inside</p>\n  </div>\n</body>\n</html>',
  content:makeEx('Margin and Padding','/* Margin (outside) */\n.box {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n\n  /* Shorthand */\n  margin: 10px 20px;           /* top/bottom  left/right */\n  margin: 10px 20px 10px;      /* top  left/right  bottom */\n  margin: 10px 20px 10px 20px; /* top  right  bottom  left */\n}\n\n/* Padding (inside) */\n.card {\n  padding: 20px;\n  padding: 20px 16px;          /* top/bottom  left/right */\n}\n\n/* Center a block */\n.center {\n  margin: 0 auto;\n  max-width: 800px;\n}')
};

D['css-flexbox']={
  id:'css-flexbox',title:'Flexbox',cat:'CSS',intro:'Flexbox is a one-dimensional layout system for arranging items in a row or column.',
  tryCode:'<!DOCTYPE html>\n<html>\n<head><style>\n  body { background: #0d0d0d; color: #d9d9d9; font-family: sans-serif; padding: 2rem; }\n  .container { display: flex; gap: 16px; justify-content: space-between; align-items: center; padding: 20px; background: #141414; border-radius: 12px; border: 1px solid #2a2a2a; margin-bottom: 16px; }\n  .item { background: #1a1a1a; padding: 16px 24px; border-radius: 8px; border: 1px solid #2a2a2a; }\n  .center { display: flex; justify-content: center; align-items: center; padding: 40px; background: #141414; border-radius: 12px; border: 1px solid #2a2a2a; }\n</style></head>\n<body>\n  <div class="container">\n    <div class="item">Left</div>\n    <div class="item">Center</div>\n    <div class="item">Right</div>\n  </div>\n  <div class="center">Centered Content</div>\n</body>\n</html>',
  content:makeEx('Flexbox Layout','/* Container */\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n/* Item */\n.item {\n  flex: 1;\n}\n\n/* Center anything */\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Navbar */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}')+
  '<div class="l-tip"><b>Tip:</b> Flexbox is great for one-dimensional layouts (a single row or column).</div>'
};

D['css-grid']={
  id:'css-grid',title:'CSS Grid',cat:'CSS',intro:'CSS Grid is a two-dimensional layout system — it handles rows AND columns at the same time.',
  tryCode:'<!DOCTYPE html>\n<html>\n<head><style>\n  body { background: #0d0d0d; color: #d9d9d9; font-family: sans-serif; padding: 2rem; }\n  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n  .card { background: #141414; padding: 24px; border-radius: 12px; border: 1px solid #2a2a2a; text-align: center; }\n  .card h3 { margin: 0 0 8px; font-size: 16px; }\n  .card p { margin: 0; color: #8a8a8a; font-size: 13px; }\n</style></head>\n<body>\n  <div class="grid">\n    <div class="card"><h3>HTML</h3><p>Structure</p></div>\n    <div class="card"><h3>CSS</h3><p>Style</p></div>\n    <div class="card"><h3>JavaScript</h3><p>Logic</p></div>\n  </div>\n</body>\n</html>',
  content:makeEx('CSS Grid Layout','/* Basic grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n/* Responsive grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n}')+
  '<h2>Named Grid Areas</h2>'+
  makeEx('Grid Template Areas','.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n  gap: 16px;\n}\n\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }')+
  '<div class="l-note"><b>Note:</b> Use Flexbox for 1D (row OR column). Use Grid for 2D (rows AND columns).</div>'
};

D['css-responsive']={
  id:'css-responsive',title:'Responsive Design',cat:'CSS',intro:'Responsive design makes your website look great on all screen sizes, from phones to desktops.',
  tryCode:'<!DOCTYPE html>\n<html>\n<head><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>\n  body { background: #0d0d0d; color: #d9d9d9; font-family: sans-serif; margin: 0; }\n  .container { padding: 16px; }\n  h1 { font-size: clamp(24px, 5vw, 44px); }\n  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 20px; }\n  .card { background: #141414; padding: 20px; border-radius: 8px; border: 1px solid #2a2a2a; }\n</style></head>\n<body>\n  <div class="container">\n    <h1>Responsive Title</h1>\n    <div class="grid">\n      <div class="card">Card 1</div>\n      <div class="card">Card 2</div>\n      <div class="card">Card 3</div>\n      <div class="card">Card 4</div>\n    </div>\n  </div>\n</body>\n</html>',
  content:'<h2>Viewport Meta Tag</h2>'+
  makeEx('Required Meta Tag','<meta name="viewport"\n  content="width=device-width, initial-scale=1.0">')+
  '<h2>Media Queries</h2>'+
  makeEx('Media Queries','/* Mobile first */\n.container {\n  padding: 16px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    padding: 32px;\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    padding: 48px;\n    max-width: 960px;\n  }\n}')+
  '<h2>Fluid Typography</h2>'+
  makeEx('clamp() for Font Sizes','h1 {\n  font-size: clamp(24px, 5vw, 44px);\n}')+
  '<div class="l-tip"><b>Tip:</b> Design for mobile first, then add breakpoints for larger screens.</div>'
};

// ─── JavaScript ───

D['js-intro']={
  id:'js-intro',title:'What is JavaScript',cat:'JavaScript',intro:'JavaScript is the programming language of the web. It makes pages interactive, dynamic, and alive.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;text-align:center;padding:4rem">\n  <h1 id="demo">Hello!</h1>\n  <button onclick="document.getElementById(\'demo\').textContent=\'Clicked!\'; document.getElementById(\'demo\').style.color=\'#e5c07b\'">Click Me</button>\n  <script>\n    console.log("Hello from JavaScript!");\n    console.warn("This is a warning");\n    console.error("This is an error");\n  <\/script>\n</body>\n</html>',
  content:'<p>JavaScript can update content, validate forms, animate elements, and communicate with servers — all in the browser.</p>'+
  makeEx('Adding JavaScript to HTML','<!-- External file -->\n<script src="app.js"><\/script>\n\n<!-- Internal script -->\n<script>\n  console.log("Hello, World!");\n  document.title = "New Title";\n<\/script>')+
  '<h2>Browser Console</h2>'+
  makeEx('Console Methods','console.log("Info message");\nconsole.warn("Warning message");\nconsole.error("Error message");\nconsole.table([{a:1},{a:2}]);')+
  '<div class="l-tip"><b>Tip:</b> Open DevTools (F12) in your browser to see console output.</div>'
};

D['js-intro2']={
  id:'js-intro2',title:'JavaScript Introduction',cat:'JavaScript',intro:'JavaScript adds interactivity to websites. It runs in browsers and on servers (via Node.js).',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h1 id="title">Original Title</h1>\n  <p id="para">Original text</p>\n  <button id="btn1">Change Title</button>\n  <button id="btn2">Change Color</button>\n  <script>\n    document.getElementById("btn1").onclick = function() {\n      document.getElementById("title").textContent = "New Title!";\n    };\n    document.getElementById("btn2").onclick = function() {\n      document.body.style.background = "#141414";\n      document.body.style.color = "#e5c07b";\n    };\n  <\/script>\n</body>\n</html>',
  content:'<h2>What Can JavaScript Do?</h2><ul>'+
  '<li>Change HTML content and attributes</li>'+
  '<li>Change CSS styles dynamically</li>'+
  '<li>React to user events (clicks, typing, scrolling)</li>'+
  '<li>Send data to servers (APIs)</li>'+
  '<li>Store data in the browser</li></ul>'+
  makeEx('Interactive Example','// Change HTML content\ndocument.getElementById("demo")\n  .innerHTML = "New text";\n\n// Change CSS styles\ndocument.body.style.background = "black";\n\n// React to clicks\ndocument.getElementById("btn")\n  .onclick = function() {\n    alert("Clicked!");\n  };')
};

D['js-variables']={
  id:'js-variables',title:'Variables',cat:'JavaScript',intro:'Variables store data values. JavaScript has three ways to declare variables: const, let, and (the old) var.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Variable Demo</h2>\n  <p id="out">Click the button to see variables</p>\n  <button onclick="showVars()">Show Variables</button>\n  <script>\n    function showVars() {\n      const name = "Deoit";\n      const PI = 3.14159;\n      let score = 0;\n      score = 10;\n      document.getElementById("out").innerHTML =\n        "name: " + name + "<br>" +\n        "PI: " + PI + "<br>" +\n        "score: " + score;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Declaring Variables','// const — cannot reassign (use by default)\nconst name = "Deoit";\nconst PI = 3.14159;\n\n// let — can reassign\nlet score = 0;\nscore = 10; // OK\n\n// Don\'t use var (it has scoping issues)\n\n// Multiple declarations\nlet x = 1, y = 2, z = 3;')+
  '<h2>Naming Rules</h2><ul>'+
  '<li>Start with a letter, underscore (_), or dollar sign ($)</li>'+
  '<li>Case sensitive — <code>name</code> and <code>Name</code> are different</li>'+
  '<li>No reserved words (if, for, while, etc.)</li>'+
  '<li>Use camelCase: <code>myVariable</code></li></ul>'+
  '<div class="l-warn"><b>Important:</b> Always use <code>const</code> by default. Only use <code>let</code> when you need to reassign.</div>'
};

D['js-datatypes']={
  id:'js-datatypes',title:'Data Types',cat:'JavaScript',intro:'JavaScript has several data types. The most used are String, Number, Boolean, Array, and Object.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Data Types</h2>\n  <ul>\n    <li>String: <strong>"Hello"</strong></li>\n    <li>Number: <strong>42</strong></li>\n    <li>Boolean: <strong>true</strong></li>\n    <li>Array: <strong>[1, 2, 3]</strong></li>\n    <li>Object: <strong>{name: "Deoit"}</strong></li>\n  </ul>\n  <p id="out"></p>\n  <button onclick="checkTypes()">Check Types</button>\n  <script>\n    function checkTypes() {\n      const items = [\n        typeof "Hello",\n        typeof 42,\n        typeof true,\n        typeof [1,2,3],\n        typeof {name:"Deoit"}\n      ];\n      document.getElementById("out").innerHTML = items.join(", ");\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Data Types','// Primitive types\nconst text = "Hello";       // String\nconst num = 42;             // Number\nconst pi = 3.14;            // Number\nconst flag = true;          // Boolean\nconst empty = null;         // Null\nlet x;                      // Undefined\nconst id = Symbol("id");    // Symbol\nconst big = 123n;           // BigInt\n\n// Reference types\nconst arr = [1, 2, 3];      // Array\nconst obj = {               // Object\n  name: "Majed",\n  age: 25\n};\n\n// Check type with typeof\ntypeof "hello"    // "string"\ntypeof 42         // "number"\ntypeof true       // "boolean"\nArray.isArray([]) // true')
};

D['js-operators']={
  id:'js-operators',title:'Operators',cat:'JavaScript',intro:'Operators perform operations on values — arithmetic, assignment, comparison, and logic.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Operator Examples</h2>\n  <p id="out">Click to calculate</p>\n  <button onclick="showOps()">Show Operations</button>\n  <script>\n    function showOps() {\n      const a = 10, b = 3;\n      document.getElementById("out").innerHTML =\n        a + " + " + b + " = " + (a+b) + "<br>" +\n        a + " - " + b + " = " + (a-b) + "<br>" +\n        a + " * " + b + " = " + (a*b) + "<br>" +\n        a + " / " + b + " = " + (a/b).toFixed(2) + "<br>" +\n        a + " % " + b + " = " + (a%b) + "<br>" +\n        a + " ** " + b + " = " + (a**b);\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Operators','// Arithmetic\n5 + 3    // 8\n5 - 3    // 2\n5 * 3    // 15\n5 / 3    // 1.666\n5 % 3    // 2 (remainder)\n5 ** 3   // 125 (power)\n\n// Assignment\nlet x = 10;\nx += 5;   // x = 15\nx -= 3;   // x = 12\nx *= 2;   // x = 24\n\n// Comparison\n5 == "5"   // true  (loose)\n5 === "5"  // false (strict)\n5 != "5"   // false\n5 !== "5"  // true\n\n// Logical\ntrue && false  // false (AND)\ntrue || false  // true  (OR)\n!true          // false (NOT)')+
  '<div class="l-warn"><b>Important:</b> Always use <code>===</code> (strict equality) instead of <code>==</code>.</div>'
};

D['js-functions']={
  id:'js-functions',title:'Functions',cat:'JavaScript',intro:'Functions are reusable blocks of code. Define once, call many times.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Function Demo</h2>\n  <p id="out"></p>\n  <button onclick="runFunctions()">Run</button>\n  <script>\n    function greet(name) {\n      return "Hello, " + name + "!";\n    }\n    const add = (a, b) => a + b;\n    function runFunctions() {\n      document.getElementById("out").innerHTML =\n        greet("Majed") + "<br>" +\n        "3 + 5 = " + add(3, 5);\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Function Examples','// Function declaration\nfunction greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow function\nconst greet = (name) => "Hello, " + name;\n\n// Default parameters\nfunction createUser(name, role = "user") {\n  return { name, role };\n}\ncreateUser("Majed"); // {name:"Majed", role:"user"}\n\n// Array higher-order functions\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconst sum = nums.reduce((a, b) => a + b, 0);')
};

D['js-conditions']={
  id:'js-conditions',title:'Conditions',cat:'JavaScript',intro:'Conditions let your code make decisions based on different values or states.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Age Checker</h2>\n  <input id="age" type="number" placeholder="Enter age" style="padding:8px;border-radius:6px;border:1px solid #2a2a2a;background:#141414;color:#d9d9d9;font-size:14px">\n  <button onclick="checkAge()" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer;margin-left:8px">Check</button>\n  <p id="out" style="margin-top:16px"></p>\n  <script>\n    function checkAge() {\n      const age = parseInt(document.getElementById("age").value);\n      let result;\n      if (age >= 18) result = "Adult";\n      else if (age >= 13) result = "Teen";\n      else result = "Child";\n      document.getElementById("out").textContent = "You are: " + result;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('if / else','const age = 18;\n\nif (age >= 18) {\n  console.log("Adult");\n} else if (age >= 13) {\n  console.log("Teen");\n} else {\n  console.log("Child");\n}')+
  makeEx('Ternary Operator','const status = age >= 18 ? "Adult" : "Minor";')+
  makeEx('Switch Statement','const day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  case "Friday":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("Regular day");\n}')
};

D['js-loops']={
  id:'js-loops',title:'Loops',cat:'JavaScript',intro:'Loops let you repeat code multiple times without writing it over and over.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Loop Output</h2>\n  <pre id="out" style="background:#141414;padding:16px;border-radius:8px;border:1px solid #2a2a2a"></pre>\n  <button onclick="showLoops()" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer;margin-top:12px">Run Loops</button>\n  <script>\n    function showLoops() {\n      let output = "";\n      output += "for loop: ";\n      for (let i = 1; i <= 5; i++) output += i + " ";\n      output += "\\n\\nfor...of: ";\n      const colors = ["red", "blue", "green"];\n      for (const c of colors) output += c + " ";\n      output += "\\n\\nforEach: ";\n      colors.forEach((c, i) => output += i + ":" + c + " ");\n      document.getElementById("out").textContent = output;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Loop Types','// for loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// while loop\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n\n// for...of (arrays)\nconst colors = ["red", "blue", "green"];\nfor (const color of colors) {\n  console.log(color);\n}\n\n// for...in (objects)\nconst user = { name: "Majed", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n}\n\n// forEach\ncolors.forEach((color, index) => {\n  console.log(index, color);\n});')
};

D['js-arrays']={
  id:'js-arrays',title:'Arrays',cat:'JavaScript',intro:'Arrays store multiple values in a single variable. They are one of the most used data structures.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Array Demo</h2>\n  <pre id="out" style="background:#141414;padding:16px;border-radius:8px;border:1px solid #2a2a2a"></pre>\n  <button onclick="showArray()" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer;margin-top:12px">Run</button>\n  <script>\n    function showArray() {\n      const fruits = ["apple", "banana", "cherry"];\n      let o = "Original: " + fruits.join(", ") + "\\n";\n      fruits.push("date");\n      o += "After push: " + fruits.join(", ") + "\\n";\n      o += "Pop: " + fruits.pop() + "\\n";\n      o += "Length: " + fruits.length + "\\n";\n      o += "Includes banana: " + fruits.includes("banana") + "\\n";\n      o += "Map to uppercase:\\n";\n      fruits.forEach(f => o += "  " + f.toUpperCase() + "\\n");\n      document.getElementById("out").textContent = o;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Array Methods','const fruits = ["apple", "banana", "cherry"];\n\n// Access\nfruits[0];        // "apple"\nfruits.length;    // 3\n\n// Add / Remove\nfruits.push("date");       // add to end\nfruits.pop();              // remove last\nfruits.unshift("fig");     // add to start\nfruits.shift();            // remove first\n\n// Search\nfruits.includes("apple");  // true\nfruits.indexOf("banana");  // 1\n\n// Transform\nconst upper = fruits.map(f => f.toUpperCase());\nconst long = fruits.filter(f => f.length > 4);\n\n// Spread\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2]; // [1,2,3,4]')
};

D['js-objects']={
  id:'js-objects',title:'Objects',cat:'JavaScript',intro:'Objects store data as key-value pairs. They are the foundation of JavaScript data structures.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Object Demo</h2>\n  <pre id="out" style="background:#141414;padding:16px;border-radius:8px;border:1px solid #2a2a2a"></pre>\n  <button onclick="showObj()" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer;margin-top:12px">Run</button>\n  <script>\n    function showObj() {\n      const user = { name: "Majed", age: 25, greet() { return "Hello, " + this.name; } };\n      let o = "";\n      o += "Name: " + user.name + "\\n";\n      o += "Age: " + user.age + "\\n";\n      o += "Greet: " + user.greet() + "\\n";\n      user.email = "m@m.com";\n      o += "Keys: " + Object.keys(user).join(", ") + "\\n";\n      o += "Values: " + Object.values(user).join(", ");\n      document.getElementById("out").textContent = o;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Object Basics','const user = {\n  name: "Majed",\n  age: 25,\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n};\n\n// Access\nuser.name;          // "Majed"\nuser["age"];        // 25\nuser.greet();       // "Hello, Majed"\n\n// Modify\nuser.email = "m@m.com";\ndelete user.age;\n\n// Destructuring\nconst { name, age } = user;\n\n// Spread\nconst updated = { ...user, age: 26 };\n\n// Utility methods\nObject.keys(user);    // ["name", "greet"]\nObject.values(user);  // ["Majed", fn]\nObject.entries(user); // [["name","Majed"]...]')
};

D['js-dom']={
  id:'js-dom',title:'DOM Manipulation',cat:'JavaScript',intro:'The DOM (Document Object Model) is a tree of HTML elements that JavaScript can read and modify.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h1 id="title">Original Title</h1>\n  <div id="box" style="background:#141414;padding:20px;border-radius:8px;border:1px solid #2a2a2a;margin:16px 0">Original content</div>\n  <button onclick="changeDOM()">Modify DOM</button>\n  <script>\n    function changeDOM() {\n      document.getElementById("title").textContent = "New Title!";\n      document.getElementById("title").style.color = "#e5c07b";\n      const box = document.getElementById("box");\n      box.innerHTML = "<strong>Bold new content!</strong>";\n      box.classList.add("active");\n      const newP = document.createElement("p");\n      newP.textContent = "This paragraph was added by JavaScript!";\n      box.appendChild(newP);\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('DOM Methods','// Select elements\nconst el = document.getElementById("myId");\nconst items = document.querySelectorAll(".item");\nconst first = document.querySelector(".item");\n\n// Change content\nel.textContent = "New text";\nel.innerHTML = "<strong>Bold</strong>";\n\n// Change styles\nel.style.color = "red";\nel.style.fontSize = "18px";\n\n// Classes\nel.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("visible");\n\n// Create / Remove\nconst div = document.createElement("div");\ndiv.textContent = "New!";\ndocument.body.appendChild(div);\nel.remove();')
};

D['js-events']={
  id:'js-events',title:'Events',cat:'JavaScript',intro:'Events let your code respond to user actions like clicks, key presses, and form submissions.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Event Demo</h2>\n  <button id="clickBtn" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer">Click Me</button>\n  <input id="textInput" placeholder="Type something..." style="padding:8px;border-radius:6px;border:1px solid #2a2a2a;background:#141414;color:#d9d9d9;font-size:14px;margin-left:8px">\n  <p id="output" style="margin-top:16px"></p>\n  <script>\n    document.getElementById("clickBtn").addEventListener("click", function() {\n      document.getElementById("output").textContent = "Button was clicked!";\n    });\n    document.getElementById("textInput").addEventListener("input", function(e) {\n      document.getElementById("output").textContent = "You typed: " + e.target.value;\n    });\n    document.addEventListener("keydown", function(e) {\n      if (e.key === "Escape") document.getElementById("output").textContent = "Escape pressed!";\n    });\n  <\/script>\n</body>\n</html>',
  content:makeEx('Event Listeners','// Click\ndocument.getElementById("btn")\n  .addEventListener("click", () => {\n    alert("Clicked!");\n  });\n\n// Form submit\ndocument.getElementById("form")\n  .addEventListener("submit", (e) => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    console.log(data.get("email"));\n  });\n\n// Keyboard\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});\n\n// Input change\ndocument.getElementById("search")\n  .addEventListener("input", (e) => {\n    filter(e.target.value);\n  });')+
  '<table><tr><th>Event</th><th>Fires When</th></tr>'+
  '<tr><td><code>click</code></td><td>Element is clicked</td></tr>'+
  '<tr><td><code>submit</code></td><td>Form is submitted</td></tr>'+
  '<tr><td><code>keydown</code></td><td>Key is pressed</td></tr>'+
  '<tr><td><code>input</code></td><td>Input value changes</td></tr>'+
  '<tr><td><code>load</code></td><td>Page finishes loading</td></tr></table>'
};

D['js-async']={
  id:'js-async',title:'Async/Await',cat:'JavaScript',intro:'Asynchronous code lets you run long operations (like fetching data) without freezing the page.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Async Demo</h2>\n  <p id="status">Waiting...</p>\n  <button onclick="runAsync()">Start</button>\n  <pre id="out" style="background:#141414;padding:16px;border-radius:8px;border:1px solid #2a2a2a;margin-top:12px"></pre>\n  <script>\n    async function runAsync() {\n      document.getElementById("status").textContent = "Loading...";\n      const data = await new Promise(resolve => {\n        setTimeout(() => resolve("Data loaded!"), 1500);\n      });\n      document.getElementById("status").textContent = "Done!";\n      document.getElementById("out").textContent = data;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Async/Await','// Promise\nconst promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\npromise.then(r => console.log(r));\n\n// Async/Await\nasync function getData() {\n  try {\n    const res = await fetch("/api/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Error:", err);\n  }\n}\n\ngetData();')+
  '<div class="l-note"><b>Note:</b> <code>await</code> pauses execution until the Promise resolves. It only works inside <code>async</code> functions.</div>'
};

D['js-fetch']={
  id:'js-fetch',title:'Fetch API',cat:'JavaScript',intro:'The Fetch API lets you make HTTP requests to servers and APIs from the browser.',
  tryCode:'<!DOCTYPE html>\n<html>\n<body style="background:#0d0d0d;color:#d9d9d9;font-family:sans-serif;padding:2rem">\n  <h2>Fetch API Demo</h2>\n  <button onclick="fetchData()" style="padding:8px 16px;border-radius:6px;border:none;background:#d9d9d9;color:#111;font-weight:bold;cursor:pointer">Fetch Random User</button>\n  <div id="result" style="margin-top:16px;background:#141414;padding:20px;border-radius:8px;border:1px solid #2a2a2a"></div>\n  <script>\n    async function fetchData() {\n      const res = await fetch("https://randomuser.me/api/");\n      const data = await res.json();\n      const user = data.results[0];\n      document.getElementById("result").innerHTML =\n        "<strong>" + user.name.first + " " + user.name.last + "</strong><br>" +\n        user.email + "<br>" +\n        user.location.city + ", " + user.location.country;\n    }\n  <\/script>\n</body>\n</html>',
  content:makeEx('Fetch Examples','// GET request\nconst res = await fetch("https://api.example.com/users");\nconst users = await res.json();\nconsole.log(users);\n\n// POST request\nconst res = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Majed" })\n});\n\n// Error handling\nconst res = await fetch("/api");\nif (!res.ok) throw new Error(res.statusText);')
};

// ─── React ───

D['react-intro']={
  id:'react-intro',title:'Introduction to React',cat:'React',intro:'React is a JavaScript library for building user interfaces, created by Meta (Facebook).',
  tryCode:null,
  content:'<h2>Why React?</h2><ul>'+
  '<li><strong>Component-based</strong> — build UIs from reusable pieces</li>'+
  '<li><strong>Virtual DOM</strong> — fast rendering performance</li>'+
  '<li><strong>Large ecosystem</strong> — thousands of libraries and tools</li>'+
  '<li><strong>In demand</strong> — used by Meta, Netflix, Airbnb, and more</li></ul>'+
  makeEx('Basic React App','// App.js\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n    </div>\n  );\n}\n\nexport default App;')
};

D['react-jsx']={
  id:'react-jsx',title:'JSX',cat:'React',intro:'JSX is a syntax extension that looks like HTML but compiles to JavaScript function calls.',
  tryCode:null,
  content:makeEx('JSX Examples','// JSX expression\nconst name = "Majed";\nconst element = <h1>Hello, {name}!</h1>;\n\n// Conditional rendering\nconst greeting = isLoggedIn\n  ? <h1>Welcome back!</h1>\n  : <h1>Please sign in.</h1>;\n\n// List rendering\nconst items = ["HTML", "CSS", "JS"];\nconst list = (\n  <ul>\n    {items.map((item, i) => (\n      <li key={i}>{item}</li>\n    ))}\n  </ul>\n);')+
  '<div class="l-note"><b>Note:</b> JSX must return a single parent element. Use <code>&lt;&gt;...&lt;/&gt;</code> (Fragment) to wrap multiple elements.</div>'
};

D['react-components']={
  id:'react-components',title:'Components',cat:'React',intro:'Components are reusable pieces of UI. In React, they are functions that return JSX.',
  tryCode:null,
  content:makeEx('Component Example','// Function component\nfunction Button({ text, onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}\n\n// Using the component\nfunction App() {\n  return (\n    <div>\n      <Button text="Click me" onClick={() => alert("Hi")} />\n    </div>\n  );\n}')+
  '<div class="l-tip"><b>Tip:</b> Component names must start with a capital letter (<code>Button</code>, not <code>button</code>).</div>'
};

D['react-props']={
  id:'react-props',title:'Props',cat:'React',intro:'Props are inputs to components. They let parent components pass data to child components.',
  tryCode:null,
  content:makeEx('Props Example','// Parent passes props\nfunction App() {\n  return (\n    <Card\n      title="Hello"\n      description="World"\n      count={42}\n    />\n  );\n}\n\n// Child receives props\nfunction Card({ title, description, count }) {\n  return (\n    <div className="card">\n      <h3>{title}</h3>\n      <p>{description}</p>\n      <span>{count}</span>\n    </div>\n  );\n}\n\n// Children prop\nfunction Container({ children }) {\n  return <div className="container">{children}</div>;\n}')
};

D['react-state']={
  id:'react-state',title:'State',cat:'React',intro:'State is data that changes over time. The useState hook manages state in function components.',
  tryCode:null,
  content:makeEx('State with useState','import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <button onClick={() => setCount(count - 1)}>-1</button>\n    </div>\n  );\n}\n\n// Object state\nfunction User() {\n  const [user, setUser] = useState({\n    name: "",\n    email: ""\n  });\n\n  return (\n    <input\n      value={user.name}\n      onChange={e => setUser({\n        ...user,\n        name: e.target.value\n      })}\n    />\n  );\n}')
};

D['react-hooks']={
  id:'react-hooks',title:'Hooks',cat:'React',intro:'Hooks let you use state and other React features in function components.',
  tryCode:null,
  content:makeEx('Common Hooks','import { useState, useEffect, useRef } from "react";\n\n// useState — manage state\nconst [count, setCount] = useState(0);\n\n// useEffect — side effects\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]); // runs when count changes\n\n// useRef — reference DOM elements\nfunction Input() {\n  const ref = useRef(null);\n  return (\n    <>\n      <input ref={ref} />\n      <button onClick={() => ref.current.focus()}>\n        Focus\n      </button>\n    </>\n  );\n}')+
  '<h2>Rules of Hooks</h2><ol>'+
  '<li>Only call hooks at the top level of your function</li>'+
  '<li>Only call hooks inside React function components or custom hooks</li></ol>'
};

// ─── Node.js ───

D['node-intro']={
  id:'node-intro',title:'Introduction to Node.js',cat:'Node.js',intro:'Node.js lets you run JavaScript on the server, not just in the browser.',
  tryCode:null,
  content:'<h2>What is Node.js?</h2><p>Node.js is a JavaScript runtime built on Chrome\'s V8 engine. It\'s used for APIs, web servers, CLI tools, and more.</p>'+
  makeEx('Simple HTTP Server','// app.js\nimport { createServer } from "http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, {\n    "Content-Type": "application/json"\n  });\n  res.end(JSON.stringify({ message: "Hello!" }));\n});\n\nserver.listen(3000, () => {\n  console.log("Server running on port 3000");\n});')+
  '<h2>Common Commands</h2>'+
  makeEx('Terminal Commands','node app.js           # run a script\nnode -v               # check Node version\nnpm init -y           # create package.json\nnpm install express   # install a package')
};

D['node-npm']={
  id:'node-npm',title:'npm',cat:'Node.js',intro:'npm (Node Package Manager) manages JavaScript packages, dependencies, and project scripts.',
  tryCode:null,
  content:makeEx('npm Commands','// Initialize project\nnpm init -y\n\n// Install packages\nnpm install express\nnpm install -D nodemon    // dev dependency\nnpm uninstall express')+
  makeEx('package.json','{\n  "name": "my-app",\n  "scripts": {\n    "start": "node app.js",\n    "dev": "nodemon app.js"\n  },\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}')+
  '<h2>Run Scripts</h2>'+
  makeEx('Running Scripts','npm start      # runs "start" script\nnpm run dev    # runs "dev" script')
};

D['node-express']={
  id:'node-express',title:'Express.js',cat:'Node.js',intro:'Express.js is the most popular web framework for Node.js. It makes building APIs and web servers simple.',
  tryCode:null,
  content:makeEx('Express Basics','import express from "express";\nconst app = express();\n\n// Parse JSON\napp.use(express.json());\n\n// GET\napp.get("/", (req, res) => {\n  res.json({ message: "Hello!" });\n});\n\n// GET with params\napp.get("/users/:id", (req, res) => {\n  res.json({ id: req.params.id });\n});\n\n// POST\napp.post("/users", (req, res) => {\n  const { name } = req.body;\n  res.json({ name, created: true });\n});\n\n// Start server\napp.listen(3000, () => {\n  console.log("Running on port 3000");\n});')
};

// ─── Tools ───

D['git-basics']={
  id:'git-basics',title:'Git Basics',cat:'Tools',intro:'Git is a version control system that tracks changes to your code over time.',
  tryCode:null,
  content:makeEx('Git Commands','# Setup\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# Check status\ngit status\ngit log --oneline\n\n# Branching\ngit branch feature\ngit checkout feature\ngit checkout -b feature   # create + switch\ngit merge feature\n\n# Remote\ngit remote add origin URL\ngit push -u origin main\ngit pull origin main')
};

D['terminal']={
  id:'terminal',title:'Terminal Basics',cat:'Tools',intro:'The terminal is a text-based interface for running commands on your computer.',
  tryCode:null,
  content:makeEx('Navigation Commands','# Change directory\ncd folder\ncd ..\ncd ~/Desktop\npwd\n\n# List files\nls          # Mac/Linux\ndir         # Windows\n\n# Create / Delete\nmkdir name\ntouch file.txt\nrm file.txt\ncp src dest\nmv src dest     # move or rename\n\n# Clear terminal\nclear         # Mac/Linux\ncls           # Windows')+
  '<div class="l-tip"><b>Tip:</b> Press Tab to autocomplete file and folder names.</div>'
};

// ─── APP LOGIC ───

var nav=document.getElementById('learnNav');
var article=document.getElementById('learnArticle');
var breadcrumb=document.getElementById('learnBreadcrumb');
var side=document.getElementById('learnSide');
var ov=document.getElementById('learnOv');
var mobBtn=document.getElementById('learnMobBtn');
var searchInput=document.getElementById('learnSearchInput');
var currentId='home';

function buildNav(filter){
  var html='';
  var f=(filter||'').toLowerCase();
  var secColors={'Getting Started':'var(--c-green)',HTML:'var(--c-html)',CSS:'var(--c-css)',JavaScript:'var(--c-js)',React:'var(--c-react)','Node.js':'var(--c-node)',Tools:'var(--c-purple)'};
  SECTIONS.forEach(function(s){
    var items='';
    var hasMatch=false;
    s.items.forEach(function(it){
      if(f && it.l.toLowerCase().indexOf(f)===-1) return;
      hasMatch=true;
      var cls='l-sb-item'+(currentId===it.id?' on':'');
      items+='<a class="'+cls+'" data-id="'+it.id+'" href="#'+it.id+'">'+it.l+'</a>';
    });
    if(!hasMatch && f) return;
    html+='<div class="l-sb-group"><div class="l-sb-group-t" onclick="this.parentElement.classList.toggle(\'closed\')"><span class="dot" style="background:'+(secColors[s.t]||'var(--c-text4)')+'"></span>'+s.t+' <span class="chev">&#9662;</span></div><div class="l-sb-group-items">'+items+'</div></div>';
  });
  nav.innerHTML=html;
  nav.querySelectorAll('.l-sb-item').forEach(function(a){
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

  breadcrumb.innerHTML='<a href="#home">Home</a><span class="s">&rsaquo;</span>'+d.cat+'<span class="s">&rsaquo;</span>'+d.title;

  var h='<h1>'+d.title+'</h1>';
  h+='<div class="l-intro">'+d.intro+'</div>';
  h+=d.content;

  h+='<div class="l-navs">';
  if(prev){
    h+='<a class="l-nav prev" href="#'+prev+'" onclick="event.preventDefault();window._lnav(\''+prev+'\')"><div class="nbl">&larr; Previous</div><div class="nbt">'+D[prev].title+'</div></a>';
  }else{
    h+='<div></div>';
  }
  if(next){
    h+='<a class="l-nav nxt" href="#'+next+'" onclick="event.preventDefault();window._lnav(\''+next+'\')"><div class="nbl">Next &rarr;</div><div class="nbt">'+D[next].title+'</div></a>';
  }
  h+='</div>';

  article.innerHTML=h;
}

function renderHome(){
  currentId='home';
  breadcrumb.innerHTML='Home';
  buildNav(searchInput.value);

  var h='<div class="l-home"><div class="badge"><span class="dot"></span> Free Interactive Tutorials</div><h1>Learn <span class="hl">Web Development</span></h1><p class="sub">Master HTML, CSS, JavaScript, React, and Node.js with hands-on examples you can run in the editor.</p></div>';
  h+='<div class="l-home-grid">';
  var icons={HTML:'&#128196;',CSS:'&#127912;',JavaScript:'&#9889;',React:'&#9883;','Node.js':'&#128230;',Tools:'&#128295;','Getting Started':'&#128640;'};
  var colorMap={'Getting Started':'start',HTML:'html',CSS:'css',JavaScript:'js',React:'react','Node.js':'node',Tools:'tools'};
  var descMap={'Getting Started':'Begin your coding journey here',HTML:'Build the structure of web pages',CSS:'Style and layout your pages',JavaScript:'Add interactivity and logic',React:'Build modern user interfaces','Node.js':'Server-side JavaScript','Tools':'Version control and terminal'};
  SECTIONS.forEach(function(s){
    h+='<div class="l-home-card" data-c="'+(colorMap[s.t]||'start')+'" onclick="window._lnav(\''+s.items[0].id+'\')"><span class="emoji">'+(icons[s.t]||'&#128187;')+'</span><h3>'+s.t+'</h3><p class="desc">'+(descMap[s.t]||s.items.length+' lessons')+'</p><span class="count">'+s.items.length+' lessons</span></div>';
  });
  h+='</div>';
  article.innerHTML=h;
  window.scrollTo(0,0);
}

function closeSidebar(){
  side.classList.remove('open');
  ov.classList.remove('show');
}

// Try it Yourself
window._learnTry=function(btn){
  var codeEl=btn.closest('.l-ex').querySelector('code');
  if(!codeEl) return;
  var code=codeEl.textContent;
  try{
    localStorage.setItem('deoit_try_code',JSON.stringify({html:code,css:'',js:''}));
  }catch(e){}
  window.open('pages/editor','_blank');
};

// Events
mobBtn.addEventListener('click',function(){
  side.classList.toggle('open');
  ov.classList.toggle('show');
});
ov.addEventListener('click',closeSidebar);
searchInput.addEventListener('input',function(){buildNav(searchInput.value)});

window._lnav=navigate;

// Init
var hash=location.hash.slice(1);
if(hash && D[hash]) navigate(hash); else renderHome();

window.addEventListener('hashchange',function(){
  var h=location.hash.slice(1);
  if(h && D[h]) navigate(h);
});
})();

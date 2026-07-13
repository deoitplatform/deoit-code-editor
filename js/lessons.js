const LESSONS = {
  html: {
    title: 'HTML',
    icon: '#e44d26',
    lessons: [
      {
        id: 1,
        title: 'Introduction to HTML',
        desc: 'What is HTML and how the web works.',
        content: `
<h2>What is HTML?</h2>
<p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using a system of tags and attributes.</p>

<h3>How the Web Works</h3>
<p>When you visit a website, your browser sends a request to a server. The server responds with HTML code, which the browser interprets and displays as a visual page.</p>

<div class="lesson-diagram">
  <div class="diagram-step">
    <div class="step-num">1</div>
    <div><strong>You type a URL</strong><br><span class="step-desc">Browser sends request to server</span></div>
  </div>
  <div class="diagram-arrow">&rarr;</div>
  <div class="diagram-step">
    <div class="step-num">2</div>
    <div><strong>Server responds</strong><br><span class="step-desc">Returns HTML, CSS, JS files</span></div>
  </div>
  <div class="diagram-arrow">&rarr;</div>
  <div class="diagram-step">
    <div class="step-num">3</div>
    <div><strong>Browser renders</strong><br><span class="step-desc">Parses HTML and displays the page</span></div>
  </div>
</div>

<h3>Your First HTML Document</h3>
<p>Every HTML document follows a basic structure:</p>

<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<ul>
  <li><strong>&lt;!DOCTYPE html&gt;</strong> — Declares the document type and HTML version</li>
  <li><strong>&lt;html&gt;</strong> — The root element of the page</li>
  <li><strong>&lt;head&gt;</strong> — Contains meta information about the page</li>
  <li><strong>&lt;title&gt;</strong> — Sets the page title shown in the browser tab</li>
  <li><strong>&lt;body&gt;</strong> — Contains the visible content of the page</li>
</ul>

<h3>Common HTML Tags</h3>
<table>
  <tr><th>Tag</th><th>Description</th><th>Example</th></tr>
  <tr><td>&lt;h1&gt;-&lt;h6&gt;</td><td>Headings (h1 is largest)</td><td>&lt;h1&gt;Title&lt;/h1&gt;</td></tr>
  <tr><td>&lt;p&gt;</td><td>Paragraph of text</td><td>&lt;p&gt;Text here&lt;/p&gt;</td></tr>
  <tr><td>&lt;a&gt;</td><td>Hyperlink to another page</td><td>&lt;a href="url"&gt;Link&lt;/a&gt;</td></tr>
  <tr><td>&lt;img&gt;</td><td>Displays an image</td><td>&lt;img src="pic.jpg"&gt;</td></tr>
  <tr><td>&lt;ul&gt;/&lt;ol&gt;</td><td>Unordered/Ordered list</td><td>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</td></tr>
  <tr><td>&lt;div&gt;</td><td>Block-level container</td><td>&lt;div&gt;Content&lt;/div&gt;</td></tr>
</table>

<h3>HTML Tags</h3>
<p>HTML tags are keywords surrounded by angle brackets: <code>&lt;tagname&gt;</code>. Most tags come in pairs — an opening tag and a closing tag with a forward slash.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;tagname&gt;</span>content goes here<span class="hl-tag">&lt;/tagname&gt;</span>
</div>

<div class="note note-info"><strong>Tip:</strong> Click the <strong>Run</strong> button above to see the HTML code in action right here!</div>

<div class="note note-warning"><strong>Note:</strong> HTML is not a programming language — it is a <strong>markup language</strong> that structures content. You'll add styling with CSS and interactivity with JavaScript later.</div>

<h3>Try It Yourself</h3>
<p>Open the <a href="pages/editor" class="lesson-link">Deoit Editor</a> and paste the HTML above. Click <strong>Run</strong> to see your first web page in action!</p>
        `
      },
      {
        id: 2,
        title: 'Headings & Paragraphs',
        desc: 'Structuring text content on a page.',
        content: `
<h2>Headings & Paragraphs</h2>
<p>HTML provides six levels of headings and the paragraph tag for organizing text content.</p>

<h3>Heading Levels</h3>
<p>Use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> to define headings. <code>&lt;h1&gt;</code> is the most important, <code>&lt;h6&gt;</code> the least.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;h1&gt;</span>Main Title<span class="hl-tag">&lt;/h1&gt;</span>
<span class="hl-tag">&lt;h2&gt;</span>Section Title<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;h3&gt;</span>Subsection Title<span class="hl-tag">&lt;/h3&gt;</span>
<span class="hl-tag">&lt;h4&gt;</span>Minor Title<span class="hl-tag">&lt;/h4&gt;</span>
<span class="hl-tag">&lt;h5&gt;</span>Small Title<span class="hl-tag">&lt;/h5&gt;</span>
<span class="hl-tag">&lt;h6&gt;</span>Tiny Title<span class="hl-tag">&lt;/h6&gt;</span>
</div>

<h3>Paragraphs</h3>
<p>The <code>&lt;p&gt;</code> tag defines a paragraph. Browsers automatically add space before and after each paragraph.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;p&gt;</span>This is a paragraph of text. It can contain multiple sentences and words. Browsers will wrap the text automatically.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>This is another paragraph. Notice the space between paragraphs.<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Line Breaks</h3>
<p>Use <code>&lt;br&gt;</code> to insert a line break within a paragraph. It is a self-closing tag (no closing tag needed).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;p&gt;</span>First line<span class="hl-tag">&lt;br&gt;</span>Second line<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Horizontal Rules</h3>
<p>The <code>&lt;hr&gt;</code> tag creates a thematic break or horizontal line, often used to separate content sections.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;h2&gt;</span>Section One<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>Content here.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;hr&gt;</span>
<span class="hl-tag">&lt;h2&gt;</span>Section Two<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>More content.<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Best Practices</h3>
<ul>
  <li>Use only one <code>&lt;h1&gt;</code> per page (the main title)</li>
  <li>Follow heading hierarchy: h1 → h2 → h3, don't skip levels</li>
  <li>Keep paragraphs focused on a single topic</li>
  <li>Use <code>&lt;br&gt;</code> sparingly — use CSS for spacing when possible</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Search engines use headings to understand the structure of your content. A well-structured heading hierarchy improves SEO!
</div>
        `
      },
      {
        id: 3,
        title: 'Links & Images',
        desc: 'Adding hyperlinks and images to your pages.',
        content: `
<h2>Links & Images</h2>
<p>Links and images are what make the web interconnected and visual. Let's explore how to use them.</p>

<h3>Anchor Links (&lt;a&gt;)</h3>
<p>The <code>&lt;a&gt;</code> tag creates hyperlinks. The <code>href</code> attribute specifies the destination URL.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- External link --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com"</span><span class="hl-tag">&gt;</span>Visit Example<span class="hl-tag">&lt;/a&gt;</span>

<span class="hl-comment">&lt;!-- Internal link --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/about.html"</span><span class="hl-tag">&gt;</span>About Us<span class="hl-tag">&lt;/a&gt;</span>
</div>

<h3>Link Attributes</h3>
<ul>
  <li><strong>target="_blank"</strong> — Opens the link in a new tab</li>
  <li><strong>rel="noopener"</strong> — Security measure when using target="_blank"</li>
  <li><strong>title</strong> — Tooltip text shown on hover</li>
</ul>

<div class="lesson-code">
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com"</span>
   <span class="hl-attr">target</span>=<span class="hl-string">"_blank"</span>
   <span class="hl-attr">rel</span>=<span class="hl-string">"noopener"</span>
   <span class="hl-attr">title</span>=<span class="hl-string">"Go to Example"</span><span class="hl-tag">&gt;</span>
  Open in New Tab
<span class="hl-tag">&lt;/a&gt;</span>
</div>

<h3>Images (&lt;img&gt;)</h3>
<p>The <code>&lt;img&gt;</code> tag embeds images. It is a self-closing tag. The <code>src</code> attribute specifies the image path, and <code>alt</code> provides alternative text.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"photo.jpg"</span>
     <span class="hl-attr">alt</span>=<span class="hl-string">"A description of the image"</span>
     <span class="hl-attr">width</span>=<span class="hl-string">"400"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Image Best Practices</h3>
<ul>
  <li><strong>Always</strong> include the <code>alt</code> attribute for accessibility</li>
  <li>Use descriptive alt text (e.g., "A red apple on a wooden table")</li>
  <li>Optimize images for web (JPEG for photos, PNG for graphics, WebP for modern)</li>
  <li>Specify width and height to prevent layout shifts</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use relative paths for your own images (e.g., <code>images/photo.jpg</code>) and absolute URLs for external images hosted elsewhere.
</div>
        `
      },
      {
        id: 4,
        title: 'Lists & Tables',
        desc: 'Organizing data with lists and tables.',
        content: `
<h2>Lists & Tables</h2>
<p>Lists and tables help organize information in readable, structured formats.</p>

<h3>Unordered Lists</h3>
<p>Use <code>&lt;ul&gt;</code> for bullet-point lists. Each item uses <code>&lt;li&gt;</code>.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ul&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Apples<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Bananas<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Oranges<span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ul&gt;</span>
</div>

<h3>Ordered Lists</h3>
<p>Use <code>&lt;ol&gt;</code> for numbered lists.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ol&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>First step<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Second step<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Third step<span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ol&gt;</span>
</div>

<h3>Nested Lists</h3>
<p>Lists can be nested inside other list items to create sub-lists.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ul&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Fruits
    <span class="hl-tag">&lt;ul&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Apples<span class="hl-tag">&lt;/li&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Bananas<span class="hl-tag">&lt;/li&gt;</span>
    <span class="hl-tag">&lt;/ul&gt;</span>
  <span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Vegetables
    <span class="hl-tag">&lt;ul&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Carrots<span class="hl-tag">&lt;/li&gt;</span>
    <span class="hl-tag">&lt;/ul&gt;</span>
  <span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ul&gt;</span>
</div>

<h3>Tables</h3>
<p>Tables use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (row), <code>&lt;th&gt;</code> (header cell), and <code>&lt;td&gt;</code> (data cell).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Name<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Age<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>City<span class="hl-tag">&lt;/th&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Alice<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>25<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>New York<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Bob<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>30<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>London<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Table Structure</h3>
<p>For more complex tables, use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to group rows logically.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;thead&gt;</span>
    <span class="hl-tag">&lt;tr&gt;</span>
      <span class="hl-tag">&lt;th&gt;</span>Product<span class="hl-tag">&lt;/th&gt;</span>
      <span class="hl-tag">&lt;th&gt;</span>Price<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;/thead&gt;</span>
  <span class="hl-tag">&lt;tbody&gt;</span>
    <span class="hl-tag">&lt;tr&gt;</span>
      <span class="hl-tag">&lt;td&gt;</span>Widget<span class="hl-tag">&lt;/td&gt;</span>
      <span class="hl-tag">&lt;td&gt;</span>$10<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;/tbody&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use CSS to style your tables — borders, spacing, alternating row colors — for better readability.
</div>
        `
      },
      {
        id: 5,
        title: 'Forms & Inputs',
        desc: 'Building interactive forms for user input.',
        content: `
<h2>Forms & Inputs</h2>
<p>Forms are how users interact with web pages — signing up, searching, submitting data, and more.</p>

<h3>The &lt;form&gt; Element</h3>
<p>The <code>&lt;form&gt;</code> tag wraps all input elements. It has two key attributes: <code>action</code> (where to send data) and <code>method</code> (how to send it).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;form</span> <span class="hl-attr">action</span>=<span class="hl-string">"/submit"</span> <span class="hl-attr">method</span>=<span class="hl-string">"post"</span><span class="hl-tag">&gt;</span>
  <span class="hl-comment">&lt;!-- form elements go here --&gt;</span>
<span class="hl-tag">&lt;/form&gt;</span>
</div>

<h3>Common Input Types</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Text input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">name</span>=<span class="hl-string">"username"</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"Enter your name"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Email input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"email"</span> <span class="hl-attr">name</span>=<span class="hl-string">"email"</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"email@example.com"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Password input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"password"</span> <span class="hl-attr">name</span>=<span class="hl-string">"password"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Number input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"number"</span> <span class="hl-attr">name</span>=<span class="hl-string">"age"</span> <span class="hl-attr">min</span>=<span class="hl-string">"1"</span> <span class="hl-attr">max</span>=<span class="hl-string">"120"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Checkbox --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"checkbox"</span> <span class="hl-attr">name</span>=<span class="hl-string">"agree"</span> <span class="hl-attr">id</span>=<span class="hl-string">"agree"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;label</span> <span class="hl-attr">for</span>=<span class="hl-string">"agree"</span><span class="hl-tag">&gt;</span>I agree to the terms<span class="hl-tag">&lt;/label&gt;</span>
</div>

<h3>Textarea & Select</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Textarea (multi-line text) --&gt;</span>
<span class="hl-tag">&lt;textarea</span> <span class="hl-attr">name</span>=<span class="hl-string">"message"</span> <span class="hl-attr">rows</span>=<span class="hl-string">"4"</span> <span class="hl-attr">cols</span>=<span class="hl-string">"30"</span><span class="hl-tag">&gt;&lt;/textarea&gt;</span>

<span class="hl-comment">&lt;!-- Select dropdown --&gt;</span>
<span class="hl-tag">&lt;select</span> <span class="hl-attr">name</span>=<span class="hl-string">"country"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">""</span><span class="hl-tag">&gt;</span>Select a country<span class="hl-tag">&lt;/option&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">"us"</span><span class="hl-tag">&gt;</span>United States<span class="hl-tag">&lt;/option&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">"uk"</span><span class="hl-tag">&gt;</span>United Kingdom<span class="hl-tag">&lt;/option&gt;</span>
<span class="hl-tag">&lt;/select&gt;</span>
</div>

<h3>Buttons</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Submit button --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">type</span>=<span class="hl-string">"submit"</span><span class="hl-tag">&gt;</span>Send<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-comment">&lt;!-- Reset button --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">type</span>=<span class="hl-string">"reset"</span><span class="hl-tag">&gt;</span>Clear<span class="hl-tag">&lt;/button&gt;</span>
</div>

<h3>Labels & Accessibility</h3>
<p>Always use <code>&lt;label&gt;</code> elements with your inputs. Labels improve accessibility and usability — clicking a label focuses the associated input.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> The <code>for</code> attribute on a label should match the <code>id</code> of the input it belongs to. This connects them properly.
</div>
        `
      },
      {
        id: 6,
        title: 'Semantic HTML',
        desc: 'Using meaningful tags for better structure and SEO.',
        content: `
<h2>Semantic HTML</h2>
<p>Semantic HTML means using tags that describe their meaning and purpose, not just their appearance.</p>

<h3>Why Semantic HTML?</h3>
<ul>
  <li><strong>Accessibility:</strong> Screen readers use semantic tags to navigate</li>
  <li><strong>SEO:</strong> Search engines understand your content better</li>
  <li><strong>Maintainability:</strong> Code is easier to read and understand</li>
</ul>

<h3>Semantic Layout Elements</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;header&gt;</span>  <span class="hl-comment">&lt;!-- Page or section header --&gt;</span>
<span class="hl-tag">&lt;nav&gt;</span>      <span class="hl-comment">&lt;!-- Navigation menu --&gt;</span>
<span class="hl-tag">&lt;main&gt;</span>      <span class="hl-comment">&lt;!-- Main content (use once per page) --&gt;</span>
<span class="hl-tag">&lt;section&gt;</span>   <span class="hl-comment">&lt;!-- Thematic group of content --&gt;</span>
<span class="hl-tag">&lt;article&gt;</span>   <span class="hl-comment">&lt;!-- Self-contained content (blog post, news) --&gt;</span>
<span class="hl-tag">&lt;aside&gt;</span>     <span class="hl-comment">&lt;!-- Sidebar or tangential content --&gt;</span>
<span class="hl-tag">&lt;footer&gt;</span>    <span class="hl-comment">&lt;!-- Page or section footer --&gt;</span>
</div>

<h3>Semantic HTML Page Structure</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;body&gt;</span>
  <span class="hl-tag">&lt;header&gt;</span>
    <span class="hl-tag">&lt;h1&gt;</span>My Website<span class="hl-tag">&lt;/h1&gt;</span>
    <span class="hl-tag">&lt;nav&gt;</span>
      <span class="hl-tag">&lt;ul&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span><span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/"</span><span class="hl-tag">&gt;</span>Home<span class="hl-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span><span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/blog"</span><span class="hl-tag">&gt;</span>Blog<span class="hl-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="hl-tag">&lt;/ul&gt;</span>
    <span class="hl-tag">&lt;/nav&gt;</span>
  <span class="hl-tag">&lt;/header&gt;</span>

  <span class="hl-tag">&lt;main&gt;</span>
    <span class="hl-tag">&lt;article&gt;</span>
      <span class="hl-tag">&lt;h2&gt;</span>Blog Post Title<span class="hl-tag">&lt;/h2&gt;</span>
      <span class="hl-tag">&lt;p&gt;</span>Article content here...<span class="hl-tag">&lt;/p&gt;</span>
    <span class="hl-tag">&lt;/article&gt;</span>

    <span class="hl-tag">&lt;aside&gt;</span>
      <span class="hl-tag">&lt;h3&gt;</span>Related Posts<span class="hl-tag">&lt;/h3&gt;</span>
      <span class="hl-tag">&lt;ul&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span>Post 1<span class="hl-tag">&lt;/li&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span>Post 2<span class="hl-tag">&lt;/li&gt;</span>
      <span class="hl-tag">&lt;/ul&gt;</span>
    <span class="hl-tag">&lt;/aside&gt;</span>
  <span class="hl-tag">&lt;/main&gt;</span>

  <span class="hl-tag">&lt;footer&gt;</span>
    <span class="hl-tag">&lt;p&gt;</span>&amp;copy; 2026 My Website<span class="hl-tag">&lt;/p&gt;</span>
  <span class="hl-tag">&lt;/footer&gt;</span>
<span class="hl-tag">&lt;/body&gt;</span>
</div>

<h3>Non-Semantic vs Semantic</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Bad: non-semantic divs --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"header"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/div&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"nav"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Good: semantic tags --&gt;</span>
<span class="hl-tag">&lt;header&gt;</span>...<span class="hl-tag">&lt;/header&gt;</span>
<span class="hl-tag">&lt;nav&gt;</span>...<span class="hl-tag">&lt;/nav&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use semantic HTML by default. Only use <code>&lt;div&gt;</code> when no semantic element fits, typically for styling wrappers.
</div>
        `
      },
      {
        id: 7,
        title: 'HTML Best Practices',
        desc: 'Writing clean, maintainable, and accessible HTML.',
        content: `
<h2>HTML Best Practices</h2>
<p>Writing clean HTML is about more than just making it work. These practices will help you write code that's maintainable, accessible, and performant.</p>

<h3>1. Use Proper Doctype</h3>
<p>Always start with <code>&lt;!DOCTYPE html&gt;</code> to trigger standards mode in browsers.</p>

<h3>2. Specify Character Encoding</h3>
<p>Add <code>&lt;meta charset="UTF-8"&gt;</code> in the <code>&lt;head&gt;</code> to support all characters properly.</p>

<h3>3. Use Lowercase Tags and Attributes</h3>
<p>HTML is case-insensitive, but lowercase is the convention and improves readability.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Avoid --&gt;</span>
<span class="hl-tag">&lt;DIV</span> <span class="hl-attr">CLASS</span>=<span class="hl-string">"box"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Better --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"box"</span><span class="hl-tag">&gt;</span>
</div>

<h3>4. Always Close Tags</h3>
<p>Close all tags properly, even optional ones like <code>&lt;li&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;td&gt;</code>.</p>

<h3>5. Use Meaningful Attribute Values</h3>
<p>Class and ID names should describe purpose, not appearance.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Avoid --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"red-bold-text"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Better --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"error-message"</span><span class="hl-tag">&gt;</span>
</div>

<h3>6. Optimize Images</h3>
<ul>
  <li>Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons)</li>
  <li>Always include <code>alt</code> text</li>
  <li>Specify dimensions to avoid layout shifts</li>
</ul>

<h3>7. Accessibility First</h3>
<ul>
  <li>Use semantic elements</li>
  <li>Label all form inputs</li>
  <li>Ensure sufficient color contrast</li>
  <li>Use ARIA attributes when needed</li>
</ul>

<h3>8. Validate Your HTML</h3>
<p>Use the <a href="https://validator.w3.org/" target="_blank" rel="noopener" class="lesson-link">W3C Validator</a> to check your HTML for errors and compliance with web standards.</p>

<div class="lesson-tip">
  <strong>Remember:</strong> HTML is the foundation of the web. Solid HTML leads to better accessibility, SEO, and maintainability.
</div>
        `
      }
    ]
  },
  css: {
    title: 'CSS',
    icon: '#2965f1',
    lessons: [
      {
        id: 1,
        title: 'Introduction to CSS',
        desc: 'What CSS is and how to style your first elements.',
        content: `
<h2>What is CSS?</h2>
<p>CSS (Cascading Style Sheets) is the language used to style HTML elements. It controls colors, fonts, spacing, layout, and more.</p>

<h3>How CSS Works</h3>
<p>CSS works by selecting HTML elements and applying styles to them. A CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>.</p>

<div class="lesson-code">
<span class="hl-selector">selector</span> {
  <span class="hl-prop">property</span>: <span class="hl-value">value</span>;
  <span class="hl-prop">property</span>: <span class="hl-value">value</span>;
}
</div>

<h3>Three Ways to Add CSS</h3>
<h4>1. Inline CSS</h4>
<p>Applied directly to an element using the <code>style</code> attribute.</p>
<div class="lesson-code">
<span class="hl-tag">&lt;p</span> <span class="hl-attr">style</span>=<span class="hl-string">"color: blue; font-size: 18px;"</span><span class="hl-tag">&gt;</span>Blue text<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h4>2. Internal CSS</h4>
<p>Placed inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</p>
<div class="lesson-code">
<span class="hl-tag">&lt;head&gt;</span>
  <span class="hl-tag">&lt;style&gt;</span>
    <span class="hl-selector">p</span> {
      <span class="hl-prop">color</span>: <span class="hl-value">blue</span>;
      <span class="hl-prop">font-size</span>: <span class="hl-number">18px</span>;
    }
  <span class="hl-tag">&lt;/style&gt;</span>
<span class="hl-tag">&lt;/head&gt;</span>
</div>

<h4>3. External CSS (Recommended)</h4>
<p>CSS is written in a separate <code>.css</code> file and linked via <code>&lt;link&gt;</code>.</p>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In your HTML head --&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"stylesheet"</span> <span class="hl-attr">href</span>=<span class="hl-string">"styles.css"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Your First CSS</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    h1 { color: red; text-align: center; }
    p { font-size: 18px; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, CSS!&lt;/h1&gt;
  &lt;p&gt;This text is styled with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<span class="hl-comment">/* Style paragraphs */</span>
<span class="hl-selector">p</span> {
  <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>;
  <span class="hl-prop">line-height</span>: <span class="hl-number">1.6</span>;
}
</div>

<h3>CSS Comments</h3>
<p>Use <code>/* comment */</code> to add notes in your CSS. Comments are ignored by browsers.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> External CSS is the best practice because it separates content (HTML) from presentation (CSS) and can be reused across multiple pages.
</div>
        `
      },
      {
        id: 2,
        title: 'Selectors & Colors',
        desc: 'Targeting elements with selectors and using colors.',
        content: `
<h2>Selectors & Colors</h2>
<p>Selectors are patterns used to target specific HTML elements. Colors bring your designs to life.</p>

<h3>Basic Selectors</h3>
<div class="lesson-code">
<span class="hl-comment">/* Element selector */</span>
<span class="hl-selector">h1</span> { <span class="hl-prop">color</span>: <span class="hl-value">navy</span>; }

<span class="hl-comment">/* Class selector */</span>
<span class="hl-selector">.highlight</span> { <span class="hl-prop">background</span>: <span class="hl-value">yellow</span>; }

<span class="hl-comment">/* ID selector */</span>
<span class="hl-selector">#header</span> { <span class="hl-prop">height</span>: <span class="hl-number">80px</span>; }

<span class="hl-comment">/* Universal selector */</span>
<span class="hl-selector">*</span> { <span class="hl-prop">margin</span>: <span class="hl-number">0</span>; }
</div>

<h3>Combined Selectors</h3>
<div class="lesson-code">
<span class="hl-comment">/* Descendant: all p inside .card */</span>
<span class="hl-selector">.card p</span> { ... }

<span class="hl-comment">/* Child: direct children only */</span>
<span class="hl-selector">.card &gt; p</span> { ... }

<span class="hl-comment">/* Adjacent sibling: p immediately after h2 */</span>
<span class="hl-selector">h2 + p</span> { ... }

<span class="hl-comment">/* Multiple selectors */</span>
<span class="hl-selector">h1, h2, h3</span> { ... }
</div>

<h3>Colors in CSS</h3>
<h4>Named Colors</h4>
<p>CSS supports 140+ named colors: <code>red</code>, <code>blue</code>, <code>tomato</code>, <code>rebeccapurple</code>, etc.</p>

<h4>Hex Colors</h4>
<p>A six-digit code starting with <code>#</code>: <code>#ff0000</code> (red), <code>#00ff00</code> (green), <code>#0000ff</code> (blue).</p>

<h4>RGB / RGBA</h4>
<div class="lesson-code">
<span class="hl-selector">.box</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">rgb(255, 0, 0)</span>;       <span class="hl-comment">/* red */</span>
  <span class="hl-prop">background</span>: <span class="hl-value">rgba(0, 0, 0, 0.5)</span>;  <span class="hl-comment">/* 50% black */</span>
}
</div>

<h4>HSL / HSLA</h4>
<p>HSL stands for Hue, Saturation, Lightness. Often more intuitive than RGB.</p>
<div class="lesson-code">
<span class="hl-selector">.box</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">hsl(0, 100%, 50%)</span>;      <span class="hl-comment">/* red */</span>
  <span class="hl-prop">background</span>: <span class="hl-value">hsla(200, 80%, 50%, 0.3)</span>;
}
</div>

<h3>Background vs Text Color</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">#333</span>;               <span class="hl-comment">/* text color */</span>
  <span class="hl-prop">background-color</span>: <span class="hl-value">#f0f0f0</span>;  <span class="hl-comment">/* background */</span>
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use online tools like Adobe Color or Coolors to find beautiful color palettes. Stick to 2-3 primary colors for a cohesive design.
</div>
        `
      },
      {
        id: 3,
        title: 'Box Model & Spacing',
        desc: 'Understanding margins, padding, and borders.',
        content: `
<h2>Box Model & Spacing</h2>
<p>Every HTML element is a rectangular box. The CSS Box Model defines how spacing and sizing work.</p>

<h3>The Box Model</h3>
<div class="lesson-diagram" style="flex-direction:column;align-items:center;">
  <div style="background:rgba(217,217,217,0.1);border:1px dashed var(--text-muted);padding:32px;border-radius:8px;font-size:12px;text-align:center;">
    <div style="color:var(--text-sec);margin-bottom:4px;">Margin</div>
    <div style="background:rgba(217,217,217,0.15);border:1px dashed var(--text-muted);padding:24px;border-radius:6px;">
      <div style="color:var(--text-sec);margin-bottom:4px;">Border</div>
      <div style="background:rgba(217,217,217,0.2);border:1px dashed var(--text-muted);padding:20px;border-radius:4px;">
        <div style="color:var(--text-sec);margin-bottom:4px;">Padding</div>
        <div style="background:rgba(217,217,217,0.08);padding:16px;border-radius:3px;">
          <strong>Content</strong>
        </div>
      </div>
    </div>
  </div>
</div>

<h3>Margin</h3>
<p>Space <strong>outside</strong> the element, pushing other elements away.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">margin</span>: <span class="hl-number">20px</span>;          <span class="hl-comment">/* all sides */</span>
  <span class="hl-prop">margin</span>: <span class="hl-number">10px 20px</span>;    <span class="hl-comment">/* top/bottom left/right */</span>
  <span class="hl-prop">margin</span>: <span class="hl-number">10px 20px 30px 40px</span>;  <span class="hl-comment">/* top right bottom left */</span>
}
</div>

<h3>Padding</h3>
<p>Space <strong>inside</strong> the element, between content and border.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">padding</span>: <span class="hl-number">16px</span>;
  <span class="hl-prop">padding</span>: <span class="hl-number">12px 24px</span>;
}
</div>

<h3>Border</h3>
<p>A line around the element, between margin and padding.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">border</span>: <span class="hl-number">2px</span> <span class="hl-value">solid</span> <span class="hl-value">#333</span>;
  <span class="hl-prop">border-radius</span>: <span class="hl-number">8px</span>;  <span class="hl-comment">/* Rounded corners */</span>
}
</div>

<h3>box-sizing</h3>
<p>The <code>box-sizing</code> property changes how width/height are calculated.</p>
<ul>
  <li><strong>content-box</strong> (default): width applies only to content area</li>
  <li><strong>border-box</strong>: width includes padding and border (recommended)</li>
</ul>

<div class="lesson-code">
<span class="hl-comment">/* Reset for all elements */</span>
<span class="hl-selector">*</span> {
  <span class="hl-prop">box-sizing</span>: <span class="hl-value">border-box</span>;
}
</div>

<h3>Margin Collapse</h3>
<p>Vertical margins between adjacent elements collapse into the larger of the two. Horizontal margins do not collapse.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Always set <code>box-sizing: border-box</code> on all elements — it makes sizing much more predictable.
</div>
        `
      },
      {
        id: 4,
        title: 'Flexbox',
        desc: 'Modern one-dimensional layout system.',
        content: `
<h2>Flexbox</h2>
<p>Flexbox is a one-dimensional layout system that makes it easy to align and distribute items within a container.</p>

<h3>Setting Up Flexbox</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
}
</div>

<h3>Main Axis vs Cross Axis</h3>
<ul>
  <li><strong>Main axis:</strong> horizontal by default (flex-direction: row)</li>
  <li><strong>Cross axis:</strong> vertical (perpendicular to main axis)</li>
</ul>

<h3>Flex Direction</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">row</span>;         <span class="hl-comment">/* default: left to right */</span>
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">column</span>;      <span class="hl-comment">/* top to bottom */</span>
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">row-reverse</span>;  <span class="hl-comment">/* right to left */</span>
}
</div>

<h3>Justify Content (Main Axis)</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">justify-content</span>: <span class="hl-value">center</span>;       <span class="hl-comment">/* center items */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">space-between</span>; <span class="hl-comment">/* equal space between */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">space-around</span>;  <span class="hl-comment">/* space around each item */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">flex-end</span>;     <span class="hl-comment">/* align to end */</span>
}
</div>

<h3>Align Items (Cross Axis)</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">align-items</span>: <span class="hl-value">center</span>;     <span class="hl-comment">/* vertically center */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">stretch</span>;    <span class="hl-comment">/* stretch to fill height */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">flex-start</span>; <span class="hl-comment">/* align to top */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">flex-end</span>;   <span class="hl-comment">/* align to bottom */</span>
}
</div>

<h3>Centering with Flexbox</h3>
<p>The most common flexbox use case: perfectly center an element both horizontally and vertically.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
  <span class="hl-prop">justify-content</span>: <span class="hl-value">center</span>;
  <span class="hl-prop">align-items</span>: <span class="hl-value">center</span>;
  <span class="hl-prop">height</span>: <span class="hl-number">100vh</span>;  <span class="hl-comment">/* full viewport height */</span>
}
</div>

<h3>Flex Wrap</h3>
<p>Control whether items wrap to a new line when they overflow.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">flex-wrap</span>: <span class="hl-value">wrap</span>;      <span class="hl-comment">/* allow wrapping */</span>
  <span class="hl-prop">flex-wrap</span>: <span class="hl-value">nowrap</span>;    <span class="hl-comment">/* default: no wrap */</span>
}
</div>

<h3>Gap</h3>
<p>Add spacing between flex items without using margins.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">16px</span>;  <span class="hl-comment">/* space between items */</span>
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Flexbox is perfect for navigation bars, card layouts, centering content, and arranging items in a row or column.
</div>
        `
      },
      {
        id: 5,
        title: 'CSS Grid',
        desc: 'Two-dimensional layout for complex designs.',
        content: `
<h2>CSS Grid</h2>
<p>CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously — perfect for complex page layouts.</p>

<h3>Setting Up Grid</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(3, 1fr)</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">16px</span>;
}
</div>

<h3>Grid Template Columns</h3>
<div class="lesson-code">
<span class="hl-comment">/* Three equal columns */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">1fr 1fr 1fr</span>;

<span class="hl-comment">/* Fixed + flexible */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">250px 1fr</span>;

<span class="hl-comment">/* Repeat function */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(4, 1fr)</span>;

<span class="hl-comment">/* Mix of sizes */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">200px</span> <span class="hl-number">1fr</span> <span class="hl-number">200px</span>;
</div>

<h3>Grid Template Rows</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">grid-template-rows</span>: <span class="hl-number">100px 1fr 80px</span>;
}
</div>

<h3>Grid Areas</h3>
<p>Name specific areas in your grid for cleaner layouts.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-areas</span>:
    <span class="hl-string">"header header"</span>
    <span class="hl-string">"sidebar main"</span>
    <span class="hl-string">"footer footer"</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-number">250px 1fr</span>;
  <span class="hl-prop">grid-template-rows</span>: <span class="hl-number">80px 1fr 60px</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">12px</span>;
}

<span class="hl-selector">.header</span> { <span class="hl-prop">grid-area</span>: <span class="hl-value">header</span>; }
<span class="hl-selector">.sidebar</span> { <span class="hl-prop">grid-area</span>: <span class="hl-value">sidebar</span>; }
</div>

<h3>Grid vs Flexbox</h3>
<ul>
  <li><strong>Flexbox:</strong> One-dimensional (row OR column). Great for components and small layouts.</li>
  <li><strong>Grid:</strong> Two-dimensional (rows AND columns). Great for full page layouts and complex designs.</li>
</ul>

<h3>Responsive Grid without Media Queries</h3>
<p>Use <code>auto-fill</code> or <code>auto-fit</code> with <code>minmax</code> for responsive layouts.</p>
<div class="lesson-code">
<span class="hl-selector">.card-grid</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(auto-fill, minmax(300px, 1fr))</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">20px</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use Grid for page-level layouts and Flexbox for component-level layouts. They work great together!
</div>
        `
      },
      {
        id: 6,
        title: 'Typography & Fonts',
        desc: 'Styling text with fonts, sizes, and spacing.',
        content: `
<h2>Typography & Fonts</h2>
<p>Typography is a crucial part of web design. Good typography improves readability and establishes visual hierarchy.</p>

<h3>Font Family</h3>
<p>Specify the font for an element. Always include fallback fonts.</p>
<div class="lesson-code">
<span class="hl-selector">body</span> {
  <span class="hl-prop">font-family</span>: <span class="hl-value">"Inter", "Segoe UI", system-ui, sans-serif</span>;
}
</div>

<h3>Font Size</h3>
<div class="lesson-code">
<span class="hl-selector">h1</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">32px</span>; }
<span class="hl-selector">h2</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">24px</span>; }
<span class="hl-selector">p</span>  { <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>; }
</div>

<h3>Font Weight</h3>
<div class="lesson-code">
<span class="hl-selector">h1</span> { <span class="hl-prop">font-weight</span>: <span class="hl-number">700</span>; }  <span class="hl-comment">/* bold */</span>
<span class="hl-selector">p</span>  { <span class="hl-prop">font-weight</span>: <span class="hl-number">400</span>; }  <span class="hl-comment">/* normal */</span>
</div>

<h3>Line Height</h3>
<p>Controls the vertical space between lines of text. A value of 1.5-1.7 is standard for body text.</p>
<div class="lesson-code">
<span class="hl-selector">p</span> {
  <span class="hl-prop">line-height</span>: <span class="hl-number">1.6</span>;
}
</div>

<h3>Text Alignment</h3>
<div class="lesson-code">
<span class="hl-selector">.center</span> { <span class="hl-prop">text-align</span>: <span class="hl-value">center</span>; }
<span class="hl-selector">.left</span>   { <span class="hl-prop">text-align</span>: <span class="hl-value">left</span>; }
<span class="hl-selector">.right</span>  { <span class="hl-prop">text-align</span>: <span class="hl-value">right</span>; }
</div>

<h3>Text Decoration</h3>
<div class="lesson-code">
<span class="hl-selector">a</span>       { <span class="hl-prop">text-decoration</span>: <span class="hl-value">none</span>; }    <span class="hl-comment">/* Remove underline from links */</span>
<span class="hl-selector">.strike</span>  { <span class="hl-prop">text-decoration</span>: <span class="hl-value">line-through</span>; }
</div>

<h3>Letter Spacing</h3>
<p>Useful for uppercase headings and brand text.</p>
<div class="lesson-code">
<span class="hl-selector">h1</span> {
  <span class="hl-prop">letter-spacing</span>: <span class="hl-number">1px</span>;
  <span class="hl-prop">text-transform</span>: <span class="hl-value">uppercase</span>;
}
</div>

<h3>Google Fonts</h3>
<p>To use Google Fonts, add a link in your HTML head, then reference it in CSS.</p>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In HTML head --&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"</span> <span class="hl-attr">rel</span>=<span class="hl-string">"stylesheet"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">/* In CSS */</span>
<span class="hl-selector">body</span> {
  <span class="hl-prop">font-family</span>: <span class="hl-value">"Roboto", sans-serif</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use a type scale for consistent sizing. A common scale: 16px (body), 20px (h4), 24px (h3), 28px (h2), 36px (h1).
</div>
        `
      },
      {
        id: 7,
        title: 'Animations & Transitions',
        desc: 'Adding motion and interactivity with CSS.',
        content: `
<h2>Animations & Transitions</h2>
<p>CSS animations and transitions bring your pages to life with smooth motion and interactive feedback.</p>

<h3>Transitions</h3>
<p>Transitions smoothly change property values over a specified duration.</p>
<div class="lesson-code">
<span class="hl-selector">.button</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">#333</span>;
  <span class="hl-prop">color</span>: <span class="hl-value">white</span>;
  <span class="hl-prop">transition</span>: <span class="hl-value">background 0.3s ease</span>;
}

<span class="hl-selector">.button:hover</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">#555</span>;
}
</div>

<h3>Transition Properties</h3>
<div class="lesson-code">
<span class="hl-comment">/* Specific property */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">opacity 0.3s</span>;

<span class="hl-comment">/* Multiple properties */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">transform 0.2s, background 0.3s</span>;

<span class="hl-comment">/* All properties */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">all 0.3s ease</span>;

<span class="hl-comment">/* With delay */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">transform 0.3s ease 0.1s</span>;
</div>

<h3>Transition Timing Functions</h3>
<ul>
  <li><strong>ease</strong> — slow start, fast middle, slow end (default)</li>
  <li><strong>linear</strong> — constant speed</li>
  <li><strong>ease-in</strong> — slow start, fast end</li>
  <li><strong>ease-out</strong> — fast start, slow end</li>
  <li><strong>ease-in-out</strong> — slow start and end</li>
</ul>

<h3>Keyframe Animations</h3>
<p>For more complex animations, use <code>@keyframes</code>.</p>
<div class="lesson-code">
<span class="hl-keyframe">@keyframes</span> <span class="hl-function">fadeIn</span> {
  <span class="hl-keyword">from</span> {
    <span class="hl-prop">opacity</span>: <span class="hl-number">0</span>;
    <span class="hl-prop">transform</span>: <span class="hl-value">translateY(20px)</span>;
  }
  <span class="hl-keyword">to</span> {
    <span class="hl-prop">opacity</span>: <span class="hl-number">1</span>;
    <span class="hl-prop">transform</span>: <span class="hl-value">translateY(0)</span>;
  }
}

<span class="hl-selector">.box</span> {
  <span class="hl-prop">animation</span>: <span class="hl-value">fadeIn 0.6s ease-out</span>;
}
</div>

<h3>Animation Properties</h3>
<div class="lesson-code">
<span class="hl-selector">.element</span> {
  <span class="hl-prop">animation-name</span>: <span class="hl-value">slideIn</span>;
  <span class="hl-prop">animation-duration</span>: <span class="hl-number">0.5s</span>;
  <span class="hl-prop">animation-timing-function</span>: <span class="hl-value">ease</span>;
  <span class="hl-prop">animation-delay</span>: <span class="hl-number">0.2s</span>;
  <span class="hl-prop">animation-iteration-count</span>: <span class="hl-value">infinite</span>;  <span class="hl-comment">/* repeat forever */</span>
  <span class="hl-prop">animation-direction</span>: <span class="hl-value">alternate</span>;  <span class="hl-comment">/* back and forth */</span>
}
</div>

<h3>Transform</h3>
<p>The <code>transform</code> property modifies the appearance of an element without affecting layout.</p>
<div class="lesson-code">
<span class="hl-selector">.box:hover</span> {
  <span class="hl-prop">transform</span>: <span class="hl-value">scale(1.1)</span>;              <span class="hl-comment">/* grow */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">rotate(45deg)</span>;          <span class="hl-comment">/* rotate */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">translateX(20px)</span>;       <span class="hl-comment">/* move right */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">translateY(-10px)</span>;      <span class="hl-comment">/* move up */</span>
}
</div>

<h3>Hover Card Example</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">transition</span>: <span class="hl-value">transform 0.2s ease, box-shadow 0.2s ease</span>;
}

<span class="hl-selector">.card:hover</span> {
  <span class="hl-prop">transform</span>: <span class="hl-value">translateY(-4px)</span>;
  <span class="hl-prop">box-shadow</span>: <span class="hl-value">0 8px 24px rgba(0,0,0,0.3)</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>transform</code> and <code>opacity</code> for animations — they are GPU-accelerated and perform better than animating properties like <code>width</code> or <code>height</code>.
</div>
        `
      }
    ]
  },
  js: {
    title: 'JavaScript',
    icon: '#f7df1e',
    lessons: [
      {
        id: 1,
        title: 'Introduction to JavaScript',
        desc: 'What JavaScript is and how to use it.',
        content: `
<h2>What is JavaScript?</h2>
<p>JavaScript (JS) is a programming language that makes web pages interactive. It runs in the browser and can respond to user actions, manipulate HTML/CSS, and communicate with servers.</p>

<h3>Where JavaScript Runs</h3>
<ul>
  <li><strong>Client-side:</strong> In the browser (Chrome, Firefox, Safari, Edge)</li>
  <li><strong>Server-side:</strong> On the server with Node.js (advanced)</li>
</ul>

<h3>Adding JavaScript to a Page</h3>
<h4>1. Inline Script</h4>
<div class="lesson-code">
<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, World!"</span>);
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h4>2. External File (Recommended)</h4>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In HTML, usually before &lt;/body&gt; --&gt;</span>
<span class="hl-tag">&lt;script</span> <span class="hl-attr">src</span>=<span class="hl-string">"script.js"</span><span class="hl-tag">&gt;&lt;/script&gt;</span>
</div>

<h3>Your First JavaScript</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1 id="demo"&gt;Hello, World!&lt;/h1&gt;
  &lt;button onclick="sayHello()"&gt;Click Me&lt;/button&gt;
  &lt;script&gt;
    function sayHello() {
      document.getElementById('demo').innerHTML = 'Hello from JavaScript!';
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3>Statements</h3>
<p>JavaScript instructions are called statements. Each statement ends with a semicolon <code>;</code> (optional but recommended).</p>

<div class="lesson-code">
<span class="hl-comment">// Three statements</span>
<span class="hl-keyword">let</span> x = <span class="hl-number">5</span>;
<span class="hl-keyword">let</span> y = <span class="hl-number">10</span>;
<span class="hl-keyword">let</span> sum = x + y;
</div>

<h3>Comments</h3>
<div class="lesson-code">
<span class="hl-comment">// Single-line comment</span>

<span class="hl-comment">/*
  Multi-line
  comment
*/</span>
</div>

<h3>Try It</h3>
<p>Open the <a href="pages/editor" class="lesson-link">Deoit Editor</a>, create a JS file, and type: <code>console.log("Hello!");</code> then click Run. Check the Console panel to see the output!</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>console.log()</code> often — it's the most important debugging tool in JavaScript!
</div>
        `
      },
      {
        id: 2,
        title: 'Variables & Data Types',
        desc: 'Storing data with variables and understanding types.',
        content: `
<h2>Variables & Data Types</h2>
<p>Variables store data values. JavaScript has several data types and three ways to declare variables.</p>

<h3>Declaring Variables</h3>
<div class="lesson-code">
<span class="hl-keyword">let</span> name = <span class="hl-string">"Alice"</span>;     <span class="hl-comment">// Can be reassigned</span>
<span class="hl-keyword">const</span> age = <span class="hl-number">25</span>;         <span class="hl-comment">// Cannot be reassigned (preferred)</span>
<span class="hl-keyword">var</span> oldWay = <span class="hl-string">"avoid"</span>;  <span class="hl-comment">// Old way, avoid using</span>
</div>

<h3>When to Use let vs const</h3>
<ul>
  <li>Use <strong>const</strong> by default — for values that won't change</li>
  <li>Use <strong>let</strong> when you need to reassign the variable</li>
  <li>Avoid <strong>var</strong> — it has confusing scoping rules</li>
</ul>

<h3>Data Types</h3>
<div class="lesson-code">
<span class="hl-comment">// String: text</span>
<span class="hl-keyword">const</span> greeting = <span class="hl-string">"Hello"</span>;

<span class="hl-comment">// Number: integer or decimal</span>
<span class="hl-keyword">const</span> count = <span class="hl-number">42</span>;
<span class="hl-keyword">const</span> pi = <span class="hl-number">3.14</span>;

<span class="hl-comment">// Boolean: true or false</span>
<span class="hl-keyword">const</span> isActive = <span class="hl-keyword">true</span>;

<span class="hl-comment">// Array: list of values</span>
<span class="hl-keyword">const</span> fruits = [<span class="hl-string">"apple"</span>, <span class="hl-string">"banana"</span>, <span class="hl-string">"orange"</span>];

<span class="hl-comment">// Object: key-value pairs</span>
<span class="hl-keyword">const</span> person = {
  name: <span class="hl-string">"Alice"</span>,
  age: <span class="hl-number">25</span>,
  city: <span class="hl-string">"New York"</span>
};

<span class="hl-comment">// null: intentional empty value</span>
<span class="hl-keyword">const</span> empty = <span class="hl-keyword">null</span>;

<span class="hl-comment">// undefined: variable declared but not assigned</span>
<span class="hl-keyword">let</span> notDefined;
</div>

<h3>Checking Types</h3>
<div class="lesson-code">
<span class="hl-keyword">typeof</span> <span class="hl-string">"Hello"</span>;     <span class="hl-comment">// "string"</span>
<span class="hl-keyword">typeof</span> <span class="hl-number">42</span>;          <span class="hl-comment">// "number"</span>
<span class="hl-keyword">typeof</span> <span class="hl-keyword">true</span>;        <span class="hl-comment">// "boolean"</span>
<span class="hl-keyword">typeof</span> [];           <span class="hl-comment">// "object" (arrays are objects)</span>
</div>

<h3>Naming Conventions</h3>
<ul>
  <li>Use camelCase: <code>firstName</code>, <code>totalPrice</code></li>
  <li>Start with a letter, underscore, or $</li>
  <li>Use descriptive names: <code>userAge</code> not <code>ua</code></li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use descriptive variable names. Your future self will thank you when you come back to the code months later!
</div>
        `
      },
      {
        id: 3,
        title: 'Functions',
        desc: 'Reusable blocks of code.',
        content: `
<h2>Functions</h2>
<p>Functions are reusable blocks of code that perform specific tasks. They help you organize and reuse your code.</p>

<h3>Function Declaration</h3>
<div class="lesson-code">
<span class="hl-comment">// Define a function</span>
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>() {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello!"</span>);
}

<span class="hl-comment">// Call (invoke) the function</span>
<span class="hl-function">greet</span>();  <span class="hl-comment">// Output: Hello!</span>
</div>

<h3>Parameters & Arguments</h3>
<div class="lesson-code">
<span class="hl-comment">// name is a parameter</span>
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>(name) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, "</span> + name + <span class="hl-string">"!"</span>);
}

<span class="hl-comment">// "Alice" is an argument</span>
<span class="hl-function">greet</span>(<span class="hl-string">"Alice"</span>);  <span class="hl-comment">// Output: Hello, Alice!</span>
</div>

<h3>Return Values</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">add</span>(a, b) {
  <span class="hl-keyword">return</span> a + b;
}

<span class="hl-keyword">const</span> sum = <span class="hl-function">add</span>(<span class="hl-number">5</span>, <span class="hl-number">3</span>);  <span class="hl-comment">// sum = 8</span>
</div>

<h3>Arrow Functions (ES6)</h3>
<p>A shorter syntax for writing functions.</p>
<div class="lesson-code">
<span class="hl-comment">// Traditional function</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = <span class="hl-keyword">function</span>(n) {
  <span class="hl-keyword">return</span> n * <span class="hl-number">2</span>;
};

<span class="hl-comment">// Arrow function (shorter)</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = (n) => {
  <span class="hl-keyword">return</span> n * <span class="hl-number">2</span>;
};

<span class="hl-comment">// Even shorter (implicit return)</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = n => n * <span class="hl-number">2</span>;
</div>

<h3>Default Parameters</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>(name = <span class="hl-string">"Guest"</span>) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, "</span> + name + <span class="hl-string">"!"</span>);
}

<span class="hl-function">greet</span>();           <span class="hl-comment">// Hello, Guest!</span>
<span class="hl-function">greet</span>(<span class="hl-string">"Bob"</span>);      <span class="hl-comment">// Hello, Bob!</span>
</div>

<h3>Why Use Functions?</h3>
<ul>
  <li><strong>Reusability:</strong> Write once, use many times</li>
  <li><strong>Organization:</strong> Break complex code into smaller pieces</li>
  <li><strong>Readability:</strong> Named functions describe what they do</li>
  <li><strong>Testing:</strong> Small functions are easy to test</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> A function should do one thing and do it well. If a function does too many things, split it into smaller functions.
</div>
        `
      },
      {
        id: 4,
        title: 'DOM Manipulation',
        desc: 'Interacting with HTML elements using JavaScript.',
        content: `
<h2>DOM Manipulation</h2>
<p>The DOM (Document Object Model) is JavaScript's way of interacting with HTML elements. You can read, change, add, or remove elements on the page.</p>

<h3>Selecting Elements</h3>
<div class="lesson-code">
<span class="hl-comment">// By ID</span>
<span class="hl-keyword">const</span> header = <span class="hl-builtin">document</span>.<span class="hl-function">getElementById</span>(<span class="hl-string">"header"</span>);

<span class="hl-comment">// By class name (returns HTMLCollection)</span>
<span class="hl-keyword">const</span> cards = <span class="hl-builtin">document</span>.<span class="hl-function">getElementsByClassName</span>(<span class="hl-string">"card"</span>);

<span class="hl-comment">// By tag name</span>
<span class="hl-keyword">const</span> paragraphs = <span class="hl-builtin">document</span>.<span class="hl-function">getElementsByTagName</span>(<span class="hl-string">"p"</span>);

<span class="hl-comment">// Using CSS selectors (modern, recommended)</span>
<span class="hl-keyword">const</span> firstBtn = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".btn"</span>);
<span class="hl-keyword">const</span> allBtns = <span class="hl-builtin">document</span>.<span class="hl-function">querySelectorAll</span>(<span class="hl-string">".btn"</span>);
</div>

<h3>Changing Content</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> title = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"h1"</span>);

<span class="hl-comment">// Change text content</span>
title.<span class="hl-prop">textContent</span> = <span class="hl-string">"New Title"</span>;

<span class="hl-comment">// Change HTML content</span>
title.<span class="hl-prop">innerHTML</span> = <span class="hl-string">"New &lt;em&gt;Title&lt;/em&gt;"</span>;
</div>

<h3>Changing Styles</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> box = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".box"</span>);

box.<span class="hl-prop">style</span>.<span class="hl-prop">backgroundColor</span> = <span class="hl-string">"red"</span>;
box.<span class="hl-prop">style</span>.<span class="hl-prop">fontSize</span> = <span class="hl-string">"24px"</span>;

<span class="hl-comment">// Better: use classList</span>
box.<span class="hl-prop">classList</span>.<span class="hl-function">add</span>(<span class="hl-string">"active"</span>);
box.<span class="hl-prop">classList</span>.<span class="hl-function">remove</span>(<span class="hl-string">"hidden"</span>);
box.<span class="hl-prop">classList</span>.<span class="hl-function">toggle</span>(<span class="hl-string">"visible"</span>);
</div>

<h3>Creating and Removing Elements</h3>
<div class="lesson-code">
<span class="hl-comment">// Create a new element</span>
<span class="hl-keyword">const</span> newPara = <span class="hl-builtin">document</span>.<span class="hl-function">createElement</span>(<span class="hl-string">"p"</span>);
newPara.<span class="hl-prop">textContent</span> = <span class="hl-string">"I am new!"</span>;

<span class="hl-comment">// Add it to the page</span>
<span class="hl-builtin">document</span>.<span class="hl-prop">body</span>.<span class="hl-function">appendChild</span>(newPara);

<span class="hl-comment">// Remove an element</span>
<span class="hl-keyword">const</span> oldEl = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".old"</span>);
oldEl.<span class="hl-function">remove</span>();
</div>

<h3>Event Listeners</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> button = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"button"</span>);

button.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Button was clicked!"</span>);
  button.<span class="hl-prop">textContent</span> = <span class="hl-string">"Clicked!"</span>;
});
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>querySelector</code> and <code>querySelectorAll</code> — they are versatile and use familiar CSS selector syntax.
</div>
        `
      },
      {
        id: 5,
        title: 'Events & Interactivity',
        desc: 'Responding to user actions with events.',
        content: `
<h2>Events & Interactivity</h2>
<p>Events are actions that happen in the browser — clicks, keypresses, mouse movements, form submissions, and more. JavaScript can listen for and respond to events.</p>

<h3>Common Events</h3>
<div class="lesson-code">
<span class="hl-comment">// Click</span>
<span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"button"</span>)
  .<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => { ... });

<span class="hl-comment">// Mouse hover</span>
element.<span class="hl-function">addEventListener</span>(<span class="hl-string">"mouseenter"</span>, () => { ... });
element.<span class="hl-function">addEventListener</span>(<span class="hl-string">"mouseleave"</span>, () => { ... });

<span class="hl-comment">// Keyboard</span>
<span class="hl-builtin">document</span>.<span class="hl-function">addEventListener</span>(<span class="hl-string">"keydown"</span>, (e) => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Key pressed:"</span>, e.key);
});

<span class="hl-comment">// Form submit</span>
form.<span class="hl-function">addEventListener</span>(<span class="hl-string">"submit"</span>, (e) => {
  e.<span class="hl-function">preventDefault</span>();  <span class="hl-comment">// Stop page reload</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Form submitted!"</span>);
});

<span class="hl-comment">// Input change</span>
input.<span class="hl-function">addEventListener</span>(<span class="hl-string">"input"</span>, () => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Value:"</span>, input.value);
});
</div>

<h3>The Event Object</h3>
<p>Event listeners receive an event object <code>e</code> with useful properties and methods.</p>
<div class="lesson-code">
button.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, (e) => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">target</span>);     <span class="hl-comment">// The element clicked</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">clientX</span>);   <span class="hl-comment">// Mouse X position</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">clientY</span>);   <span class="hl-comment">// Mouse Y position</span>
  e.<span class="hl-function">preventDefault</span>();   <span class="hl-comment">// Prevent default behavior</span>
  e.<span class="hl-prop">stopPropagation</span>();  <span class="hl-comment">// Stop event bubbling</span>
});
</div>

<h3>Interactive Example: Counter</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;button</span> <span class="hl-attr">id</span>=<span class="hl-string">"counterBtn"</span><span class="hl-tag">&gt;</span>0 clicks<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-keyword">let</span> count = <span class="hl-number">0</span>;
  <span class="hl-keyword">const</span> btn = <span class="hl-builtin">document</span>.<span class="hl-function">getElementById</span>(<span class="hl-string">"counterBtn"</span>);

  btn.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => {
    count++;
    btn.<span class="hl-prop">textContent</span> = count + <span class="hl-string">" clicks"</span>;
  });
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h3>Event Delegation</h3>
<p>Instead of adding listeners to many elements, add one to a parent and use <code>e.target</code> to identify the child.</p>
<div class="lesson-code">
<span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"ul"</span>)
  .<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, (e) => {
    <span class="hl-keyword">if</span> (e.<span class="hl-prop">target</span>.<span class="hl-prop">tagName</span> === <span class="hl-string">"LI"</span>) {
      <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Clicked:"</span>, e.<span class="hl-prop">target</span>.<span class="hl-prop">textContent</span>);
    }
  });
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use event delegation when you have many similar elements (like list items or table rows) — it's more efficient and works for dynamically added elements.
</div>
        `
      },
      {
        id: 6,
        title: 'Arrays & Loops',
        desc: 'Working with collections of data.',
        content: `
<h2>Arrays & Loops</h2>
<p>Arrays store collections of data, and loops let you work with each item in the collection.</p>

<h3>Creating Arrays</h3>
<div class="lesson-code">
<span class="hl-comment">// Literal syntax (recommended)</span>
<span class="hl-keyword">const</span> fruits = [<span class="hl-string">"apple"</span>, <span class="hl-string">"banana"</span>, <span class="hl-string">"orange"</span>];

<span class="hl-comment">// Mixed types</span>
<span class="hl-keyword">const</span> mixed = [<span class="hl-number">1</span>, <span class="hl-string">"hello"</span>, <span class="hl-keyword">true</span>, { name: <span class="hl-string">"Alice"</span> }];
</div>

<h3>Accessing Array Items</h3>
<div class="lesson-code">
fruits[<span class="hl-number">0</span>];  <span class="hl-comment">// "apple"  (first item, index 0)</span>
fruits[<span class="hl-number">1</span>];  <span class="hl-comment">// "banana"</span>
fruits[<span class="hl-number">2</span>];  <span class="hl-comment">// "orange"</span>
fruits.<span class="hl-prop">length</span>;  <span class="hl-comment">// 3</span>
fruits[fruits.<span class="hl-prop">length</span> - <span class="hl-number">1</span>];  <span class="hl-comment">// "orange" (last item)</span>
</div>

<h3>Array Methods</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> arr = [<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>];

arr.<span class="hl-function">push</span>(<span class="hl-number">4</span>);      <span class="hl-comment">// [1, 2, 3, 4]  (add to end)</span>
arr.<span class="hl-function">pop</span>();        <span class="hl-comment">// [1, 2, 3]      (remove from end)</span>
arr.<span class="hl-function">unshift</span>(<span class="hl-number">0</span>);   <span class="hl-comment">// [0, 1, 2, 3]  (add to start)</span>
arr.<span class="hl-function">shift</span>();      <span class="hl-comment">// [1, 2, 3]      (remove from start)</span>
arr.<span class="hl-function">indexOf</span>(<span class="hl-number">2</span>);   <span class="hl-comment">// 1              (find index)</span>
arr.<span class="hl-function">includes</span>(<span class="hl-number">3</span>);  <span class="hl-comment">// true           (check if exists)</span>
arr.<span class="hl-function">join</span>(<span class="hl-string">", "</span>);   <span class="hl-comment">// "1, 2, 3"      (convert to string)</span>
</div>

<h3>For Loop</h3>
<div class="lesson-code">
<span class="hl-keyword">for</span> (<span class="hl-keyword">let</span> i = <span class="hl-number">0</span>; i &lt; fruits.<span class="hl-prop">length</span>; i++) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(fruits[i]);
}
<span class="hl-comment">// "apple"</span>
<span class="hl-comment">// "banana"</span>
<span class="hl-comment">// "orange"</span>
</div>

<h3>For...of Loop (ES6)</h3>
<p>Simpler syntax for iterating over arrays.</p>
<div class="lesson-code">
<span class="hl-keyword">for</span> (<span class="hl-keyword">const</span> fruit <span class="hl-keyword">of</span> fruits) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(fruit);
}
</div>

<h3>Array Methods: forEach, map, filter</h3>
<div class="lesson-code">
<span class="hl-comment">// forEach: do something with each item</span>
fruits.<span class="hl-function">forEach</span>(fruit => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"I like "</span> + fruit);
});

<span class="hl-comment">// map: create a new array by transforming each item</span>
<span class="hl-keyword">const</span> uppercased = fruits.<span class="hl-function">map</span>(f => f.<span class="hl-function">toUpperCase</span>());
<span class="hl-comment">// ["APPLE", "BANANA", "ORANGE"]</span>

<span class="hl-comment">// filter: create a new array with items that pass a test</span>
<span class="hl-keyword">const</span> longNames = fruits.<span class="hl-function">filter</span>(f => f.<span class="hl-prop">length</span> &gt; <span class="hl-number">5</span>);
<span class="hl-comment">// ["banana", "orange"]</span>
</div>

<h3>While Loop</h3>
<div class="lesson-code">
<span class="hl-keyword">let</span> i = <span class="hl-number">0</span>;
<span class="hl-keyword">while</span> (i &lt; <span class="hl-number">5</span>) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(i);
  i++;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>for...of</code> for simple iteration and <code>map</code>/<code>filter</code>/<code>forEach</code> for more specific transformations.
</div>
        `
      },
      {
        id: 7,
        title: 'ES6+ Features',
        desc: 'Modern JavaScript features you should know.',
        content: `
<h2>ES6+ Features</h2>
<p>ES6 (ECMAScript 2015) introduced many powerful features that modern JavaScript developers use every day.</p>

<h3>Arrow Functions</h3>
<p>Shorter function syntax with lexical <code>this</code> binding.</p>
<div class="lesson-code">
<span class="hl-comment">// Traditional</span>
<span class="hl-keyword">const</span> <span class="hl-function">add</span> = <span class="hl-keyword">function</span>(a, b) { <span class="hl-keyword">return</span> a + b; };

<span class="hl-comment">// Arrow</span>
<span class="hl-keyword">const</span> <span class="hl-function">add</span> = (a, b) => a + b;

<span class="hl-comment">// Single parameter doesn't need parens</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = n => n * <span class="hl-number">2</span>;
</div>

<h3>Template Literals</h3>
<p>Strings with embedded expressions using backticks <code>\`\`</code>.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> name = <span class="hl-string">"Alice"</span>;
<span class="hl-keyword">const</span> age = <span class="hl-number">25</span>;

<span class="hl-comment">// Old way</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"My name is "</span> + name + <span class="hl-string">" and I am "</span> + age);

<span class="hl-comment">// With template literals</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">\`My name is \${name} and I am \${age}\`</span>);
</div>

<h3>Destructuring</h3>
<p>Extract values from arrays or objects into variables.</p>
<div class="lesson-code">
<span class="hl-comment">// Array destructuring</span>
<span class="hl-keyword">const</span> [first, second] = [<span class="hl-number">10</span>, <span class="hl-number">20</span>];
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(first);  <span class="hl-comment">// 10</span>

<span class="hl-comment">// Object destructuring</span>
<span class="hl-keyword">const</span> person = { name: <span class="hl-string">"Alice"</span>, age: <span class="hl-number">25</span> };
<span class="hl-keyword">const</span> { name, age } = person;
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(name);  <span class="hl-comment">// "Alice"</span>
</div>

<h3>Spread Operator (...)</h3>
<p>Spread arrays or objects into individual elements.</p>
<div class="lesson-code">
<span class="hl-comment">// Array spread</span>
<span class="hl-keyword">const</span> arr1 = [<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>];
<span class="hl-keyword">const</span> arr2 = [...arr1, <span class="hl-number">4</span>, <span class="hl-number">5</span>];  <span class="hl-comment">// [1, 2, 3, 4, 5]</span>

<span class="hl-comment">// Object spread</span>
<span class="hl-keyword">const</span> defaults = { theme: <span class="hl-string">"dark"</span>, lang: <span class="hl-string">"en"</span> };
<span class="hl-keyword">const</span> config = { ...defaults, lang: <span class="hl-string">"ar"</span> };
<span class="hl-comment">// { theme: "dark", lang: "ar" }</span>
</div>

<h3>Rest Parameters</h3>
<p>Collect remaining arguments into an array.</p>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">sum</span>(...numbers) {
  <span class="hl-keyword">return</span> numbers.<span class="hl-function">reduce</span>((total, n) => total + n, <span class="hl-number">0</span>);
}

<span class="hl-function">sum</span>(<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>, <span class="hl-number">4</span>);  <span class="hl-comment">// 10</span>
</div>

<h3>Optional Chaining (?.)</h3>
<p>Safely access nested properties without checking each level.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> user = { profile: { name: <span class="hl-string">"Alice"</span> } };

<span class="hl-comment">// Without optional chaining</span>
<span class="hl-keyword">const</span> name = user &amp;&amp; user.profile &amp;&amp; user.profile.name;

<span class="hl-comment">// With optional chaining</span>
<span class="hl-keyword">const</span> name = user?.profile?.name;
</div>

<h3>Nullish Coalescing (??)</h3>
<p>Use default value only when value is <code>null</code> or <code>undefined</code>.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> value = <span class="hl-number">0</span>;
<span class="hl-keyword">const</span> result = value ?? <span class="hl-number">10</span>;  <span class="hl-comment">// 0 (not 10, because 0 is not null/undefined)</span>

<span class="hl-comment">// vs || (which treats falsy values as defaults)</span>
<span class="hl-keyword">const</span> result2 = value || <span class="hl-number">10</span>;  <span class="hl-comment">// 10 (0 is falsy)</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Modern JavaScript (ES6+) makes code cleaner and less error-prone. Use these features daily — they will become second nature quickly.
</div>
        `
      }
    ]
  }
};

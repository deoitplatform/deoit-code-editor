# DEV.to & Hashnode Cross-Post Templates

Copy-paste these into DEV.to and Hashnode. Add "Originally published at deoit.vercel.app/blog" at the bottom.

---

## POST 1: DEV.to / Hashnode

**Title:** Build a Weather App with JavaScript — No API Key Needed

**Tags (DEV.to):** `javascript`, `webdev`, `beginners`, `tutorial`, `weather`

**Cover Image:** Use your Deoit logo or a weather-related image

**Body (Markdown):**

Building a weather app is one of the best beginner JavaScript projects. It teaches you about **DOM manipulation**, **fetch API**, **async/await**, and **CSS styling** — all in one project.

In this tutorial, we'll build a complete weather app using only vanilla JavaScript. No React, no Vue, no API keys required.

## What We're Building

A weather application that:
- Shows current weather for any city
- Displays temperature, humidity, wind speed, and conditions
- Has a clean, responsive design
- Uses the free Open-Meteo API (no key needed!)

## Step 1: The HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="weather-app">
    <h1>Weather App</h1>
    <div class="search">
      <input type="text" id="cityInput" placeholder="Enter city name...">
      <button id="searchBtn">Search</button>
    </div>
    <div class="weather-card" id="weatherCard" style="display:none;">
      <h2 id="cityName"></h2>
      <div class="temp" id="temperature"></div>
      <div class="condition" id="condition"></div>
      <div class="details">
        <span>Humidity: <strong id="humidity"></strong></span>
        <span>Wind: <strong id="wind"></strong></span>
      </div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

## Step 2: The CSS

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: system-ui, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #0d0d0d, #1a1a2e);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather-app { text-align: center; padding: 40px; }

.search {
  display: flex; gap: 8px;
  margin: 24px 0; justify-content: center;
}

.search input {
  padding: 12px 20px; border-radius: 10px;
  border: 1px solid #333; background: #141414;
  color: #fff; font-size: 16px; width: 280px;
}

.search button {
  padding: 12px 24px; border-radius: 10px;
  border: none; background: #e8e8e8; color: #111;
  font-weight: 700; font-size: 16px; cursor: pointer;
}

.weather-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid #252525; border-radius: 16px;
  padding: 32px; margin-top: 24px;
}

.temp { font-size: 64px; font-weight: 800; margin: 12px 0; }
.condition { font-size: 18px; color: #8a8a8a; margin-bottom: 16px; }
.details { display: flex; gap: 24px; justify-content: center; color: #8a8a8a; }
```

## Step 3: The JavaScript

Here's the core logic using the Open-Meteo API (free, no key needed):

```javascript
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherCard = document.getElementById('weatherCard');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

async function getWeather(city) {
  try {
    // Step 1: Get coordinates from city name
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert('City not found!');
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: Get weather data
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    // Step 3: Display results
    const current = weatherData.current;
    document.getElementById('cityName').textContent = `${name}, ${country}`;
    document.getElementById('temperature').textContent = `${Math.round(current.temperature_2m)}°C`;
    document.getElementById('condition').textContent = getConditionText(current.weather_code);
    document.getElementById('humidity').textContent = `${current.relative_humidity_2m}%`;
    document.getElementById('wind').textContent = `${current.wind_speed_10m} km/h`;
    weatherCard.style.display = 'block';
  } catch (error) {
    console.error('Weather fetch error:', error);
  }
}

function getConditionText(code) {
  const conditions = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    71: 'Slight snow', 80: 'Slight rain showers', 95: 'Thunderstorm'
  };
  return conditions[code] || 'Unknown';
}
```

## Try It Yourself

Open [Deoit Editor](https://deoit.vercel.app/pages/editor), create these three files, and click Run. You now have a working weather app!

## Next Steps

Want to extend this project? Try adding:
- **5-day forecast** — the API supports daily forecasts
- **Unit toggle** — switch between Celsius and Fahrenheit
- **Geolocation** — auto-detect user's location
- **Search history** — save recent searches to localStorage

---

*Originally published at [deoit.vercel.app/blog](https://deoit.vercel.app/blog-build-weather-app)*

*Built [Deoit](https://deoit.vercel.app) — a free browser-based code editor for HTML, CSS & JavaScript.*

---

## POST 2: DEV.to / Hashnode

**Title:** Learn HTML & CSS in 10 Minutes — The Crash Course

**Tags (DEV.to):** `html`, `css`, `beginners`, `webdev`, `tutorial`

**Body (Markdown):**

HTML and CSS are the foundation of every website. If you've ever wanted to build a webpage but didn't know where to start — this guide is for you.

By the end of this article, you'll understand the basics well enough to build your own webpage.

## What is HTML?

**HTML (HyperText Markup Language)** is the structure of a webpage. Think of it as the skeleton of a building — it defines what's on the page.

HTML uses **tags** — special code wrapped in angle brackets:

```html
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<img src="photo.jpg" alt="A photo">
```

## What is CSS?

**CSS (Cascading Style Sheets)** is the styling. If HTML is the skeleton, CSS is the paint, furniture, and decoration.

```css
h1 { color: white; font-size: 32px; }
p { color: #888; line-height: 1.6; }
body { background: #0d0d0d; font-family: system-ui; }
```

## Your First Webpage (5 minutes)

Open [Deoit Editor](https://deoit.vercel.app/pages/editor) and paste this into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first webpage.</p>
  <h2>About Me</h2>
  <p>I'm learning to code.</p>
  <ul>
    <li>JavaScript</li>
    <li>Web Development</li>
    <li>Building Things</li>
  </ul>
  <a href="https://deoit.vercel.app">Visit Deoit</a>
</body>
</html>
```

Then in `style.css`:

```css
body {
  max-width: 600px; margin: 40px auto; padding: 0 20px;
  font-family: system-ui; background: #0d0d0d; color: #e8e8e8;
}
h1 { font-size: 36px; margin-bottom: 8px; }
h2 { font-size: 24px; margin-top: 32px; color: #61afef; }
p { color: #8a8a8a; line-height: 1.7; }
a { color: #e5c07b; text-decoration: none; font-weight: 600; }
```

Click **Run** and you'll see your first styled webpage!

## The 10 HTML Tags You Need to Know

1. `<h1>` to `<h6>` — Headings
2. `<p>` — Paragraph
3. `<a href="...">` — Link
4. `<img src="..." alt="...">` — Image
5. `<ul>` and `<li>` — Unordered list
6. `<div>` — Generic container
7. `<span>` — Inline container
8. `<button>` — Button
9. `<input>` — Form input
10. `<pre><code>` — Code block

## What's Next?

Deoit has [81+ free lessons](https://deoit.vercel.app/learn) covering HTML, CSS, JavaScript, React, and Node.js. Start with the [HTML course](https://deoit.vercel.app/learn-html) and work your way up.

---

*Originally published at [deoit.vercel.app/blog](https://deoit.vercel.app/blog-html-css-in-10-minutes)*

---

## POST 3: DEV.to / Hashnode

**Title:** Why We Built Deoit with Vanilla JavaScript (No React, No Vue)

**Tags (DEV.to):** `javascript`, `webdev`, `vanillajs`, `programming`, `opinion`

**Body (Markdown):**

Every web project starts with: React or Vue? Next.js or Nuxt?

When we built [Deoit](https://deoit.vercel.app) — a browser-based code editor — we chose **none of them**.

Just vanilla JavaScript. Here's why.

## The Problem with Frameworks

We considered React, Vue, and Svelte. But Deoit is a **tool**, not a content site. It needs to:
- Load fast — every millisecond matters
- Work offline — code without internet
- Stay lightweight — no 2MB bundles
- Be hackable — users should understand every line

## What We Built

Deoit is approximately **2000 lines of vanilla JavaScript** handling:
- Syntax highlighting (25+ token types)
- File system with drag-and-drop
- Context-aware autocomplete
- Live preview in sandboxed iframe
- Console bridge via postMessage
- Cloud sync with Supabase
- 7 themes via CSS custom properties

## The Benefits

### Zero Build Step
Edit → Save → Deploy. No `npm run build`, no webpack config.

### Tiny Bundle Size
The entire editor loads in under **100KB**. Compare to CodeSandbox's 2MB+.

### No Dependency Hell
Zero `node_modules`. Zero security vulnerabilities. Just our code.

### Total Control
When there's a bug, we fix it in 5 lines. No hunting for library updates.

## The Numbers

- **~2000 lines** of JavaScript
- **~1500 lines** of CSS
- **0** npm dependencies at runtime
- **<100KB** total page weight
- **<1 second** load time on 3G

## Should You Use Vanilla JS?

If you're building a dashboard — use React. A content site — use Next.js.

But if you're building a **tool** where **performance and simplicity** matter — consider vanilla JavaScript.

> "The best code is no code at all." — Jeff Atwood
> The second best? Simple, readable, vanilla code.

Try the result: [deoit.vercel.app](https://deoit.vercel.app)

---

*Originally published at [deoit.vercel.app/blog](https://deoit.vercel.app/blog-why-vanilla-js)*

---

## 📋 Publishing Checklist

### DEV.to
1. Go to [dev.to/new](https://dev.to/new)
2. Paste the markdown
3. Add cover image (use Deoit logo)
4. Add tags (max 4)
5. Set canonical URL to deoit.vercel.app/blog-*
6. Publish

### Hashnode
1. Go to your Hashnode dashboard → New Article
2. Paste the markdown
3. Add cover image
4. Set canonical URL to deoit.vercel.app/blog-*
5. Publish

### Timing
- **Monday:** Post 1 (Weather App) on DEV.to
- **Wednesday:** Post 2 (HTML & CSS) on DEV.to
- **Friday:** Post 3 (Vanilla JS) on DEV.to
- **Repeat** on Hashnode the following week

### Engagement
- Reply to every comment within 2 hours
- Share on Twitter with #webdev #javascript
- Post in relevant Discord/Slack communities

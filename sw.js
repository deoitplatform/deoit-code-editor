const CACHE = 'deoit-v20';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/login',
  '/terms',
  '/privacy',
  '/pages/editor',
  '/blog',
  '/learn',
  '/css/style.css',
  '/css/editor.css',
  '/css/login.css',
  '/css/blog.css',
  '/css/learn.css',
  '/js/auth.js',
  '/js/editor.js',
  '/js/script.js',
  '/js/learn.js',
  '/logo.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(PRECACHE_URLS.map(url => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.indexOf(self.location.origin) !== 0) return;

  const isHTML = event.request.headers.get('accept') &&
    event.request.headers.get('accept').includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

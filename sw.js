const CACHE = 'deoit-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/learn.html',
  '/lesson.html',
  '/login.html',
  '/terms.html',
  '/privacy.html',
  '/pages/editor.html',
  '/css/style.css',
  '/css/editor.css',
  '/css/login.css',
  '/js/auth.js',
  '/js/lessons.js',
  '/js/editor.js',
  '/js/script.js',
  '/logo.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

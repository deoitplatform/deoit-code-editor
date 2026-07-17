const CACHE = 'deoit-v16';
const PRECACHE_URLS = [
  '/',
  '/index',
  '/login',
  '/terms',
  '/privacy',
  '/pages/editor',
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
    caches.open(CACHE).then(cache =>
      Promise.all(PRECACHE_URLS.map(url => cache.add(url).catch(() => {})))
    )
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
  if (event.request.url.indexOf(self.location.origin) !== 0) return;
  if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)).then(response => {
      const clone = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, clone));
      return response;
    }));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise || new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});

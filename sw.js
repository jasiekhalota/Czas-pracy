const CACHE = 'licznik-v1';
const FILES = [
  './',
  './index.html',
  './licznik.html',
  './licznik_view.html',
  './site.webmanifest',
  './favicon.ico',
  './favicon.svg',
  './favicon-96x96.png',
  './web-app-manifest-192x192.png',
  './web-app-manifest-512x512.png',
  './logo_tlo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

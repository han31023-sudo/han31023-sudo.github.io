const CACHE_NAME = 'my-pwa-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',   // kalau kamu punya
  './app.js'       // kalau kamu punya
];

// event install — simpan file
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// event fetch — pakai cache dulu, kalau tidak ada, pakai network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});

// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('poem-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './circle.gif',
        './bg.gif' // ←背景GIFもキャッシュに含める
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

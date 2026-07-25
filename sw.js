// AURA BOARD — minimal service worker
// This exists so browsers (mainly Android/Chrome) recognize the site as an
// installable app. It doesn't cache anything or work offline on purpose,
// so the shop always shows the latest prices/products/photos.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // pass-through: always fetch from network
  e.respondWith(fetch(e.request));
});

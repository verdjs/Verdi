// Simplified service worker - proxy functionality removed
// This service worker is now minimal and doesn't handle any proxy logic

self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  return self.clients.claim();
});

// Basic fetch handler - no proxy logic
self.addEventListener('fetch', (event) => {
  // Let all requests go through normally
  return;
});

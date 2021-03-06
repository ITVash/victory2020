/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.1bf8068b6032cc13da545cbbd9dbe8af.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});
self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: './icon-192x192.png'
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})

self.addEventListener('notificationclick', e => {
  const url = 'https://pobeda75.online'
  const notifi = e.notification
  //const primaryKey = await notifi.data.primaryKey
  const action = e.action
  if (action === 'close') {
    notifi.close()
  } else {
    clients.openWindow(url);
    notifi.close()
  }
	return clients.openWindow(url);
});

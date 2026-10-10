// Kill-switch for the service worker gatsby-plugin-offline installed on past
// visitors. Browsers fetch this in place of the old worker, which then clears
// its caches, unregisters itself and reloads open tabs onto the live site.
// Safe to delete once old visitors have cycled through (a few months).
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key)
      await self.registration.unregister()
      for (const client of await self.clients.matchAll({ type: "window" })) client.navigate(client.url)
    })()
  )
})

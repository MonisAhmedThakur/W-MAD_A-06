const namazTime = "Prayer-Time"
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/apps.js",
  "prayerApp.html",
  "/assets/icons/i-48.png",
  "/assets/icons/i-72.png",
  "/assets/icons/i-96.png",
  "/assets/icons/i-128.png",
  "/assets/icons/i-144.png",
  "/assets/icons/i-152.png",
  "/assets/icons/i-192.png",
  "/assets/icons/i-384.png",
  "/assets/icons/i-512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(namazTime).then(cache => {
      cache.addAll(assets)
    })
  )
})
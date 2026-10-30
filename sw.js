/* Capsule Builder offline support.
   The page itself is fetched fresh whenever there's a connection, so updates show up right away;
   the saved copy is only used offline. Icons and fonts come from the saved copy first. */
const CACHE = "capsule-builder-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./favicon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("capsule-builder-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  const local = url.origin === location.origin && url.pathname.startsWith(new URL("./", location).pathname);
  if (!fonts && !local) return;
  /* the page: network first, saved copy when offline */
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); } return res; })
      .catch(() => caches.match("./index.html").then(r => r || caches.match("./"))));
    return;
  }
  /* everything else: saved copy first, then network (and save it for next time) */
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req);
    /* a no-cors copy can't answer a cors request, so fetch fresh in that case */
    if (hit && !(hit.type === "opaque" && req.mode === "cors")) return hit;
    const res = await fetch(req);
    if (res.ok || (res.type === "opaque" && req.mode === "no-cors")) c.put(req, res.clone());
    return res;
  }));
});

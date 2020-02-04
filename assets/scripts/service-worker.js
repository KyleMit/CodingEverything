// update in register-service-worker.js
var CACHE_NAME = 'coding-everything-cache-v5';

var urlsToCache = [
    '/index.html',
    '/404.html',
    '/offline.html'
];

self.addEventListener('install', function(event) {
    console.log('install event fired', event)
        // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});


// when we install a new SW, clear out any previous caches
self.addEventListener('activate', function(event) {

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


// intercept all network traffic
// network then cache fallback
// live requests will cache subsequent content
self.addEventListener('fetch', function(evt) {

    // respond with cache + network fallback
    evt.respondWith(networkThenCache(evt));

});


async function networkThenCache(evt) {

    // start with live page hit every time
    try {
        const response = await fetch(evt.request);

        // begin async cache if we got a response
        evt.waitUntil(updateCache(evt.request, response));

        // return the response right away
        return response;
    } catch (e) {
        // open cache and look for match
        const cache = await caches.open(CACHE_NAME);
        const cacheHit = await cache.match(evt.request);

        // if we get a cache hit - return response
        if (cacheHit) { return cacheHit; }

        // if both fail (we're probably offline), show a generic fallback:
        return caches.match('/offline.html');
    }
}


async function updateCache(request, response) {
    // clone response so we don't modify original
    var responseToCache = response.clone();

    var shouldCache = request.method === "GET" &&
        !/http:\/\/localhost:\d+\/browser-sync/i.test(request.url) &&
        response &&
        response.status === 200 &&
        response.type === 'basic';

    if (shouldCache) {
        // return promise to open cache
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, responseToCache);
        return response;
    }

}
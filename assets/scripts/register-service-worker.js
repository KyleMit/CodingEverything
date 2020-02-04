// update in service-worker.js
var CACHE = 'coding-everything-cache-v5';


if ('serviceWorker' in navigator) {
    // wait until dom loads to register
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(
            function(registration) {
                // registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            },
            function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            }
        );
    });
}
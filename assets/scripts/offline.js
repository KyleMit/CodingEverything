function updateIndicator() {
	document.body.classList.toggle('offline', !navigator.onLine)
}

// Update the online status icon based on connectivity
window.addEventListener('online',  updateIndicator);
window.addEventListener('offline', updateIndicator);

updateIndicator();
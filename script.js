// Countdown Timer
function updateCountdown() {
    // Update this date to your actual event date
    const eventDate = new Date('August 15, 2025 18:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    } else {
        // Event has passed
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = '0';
        if (hoursEl) hoursEl.textContent = '0';
        if (minutesEl) minutesEl.textContent = '0';
        if (secondsEl) secondsEl.textContent = '0';
    }
}

// Photo Album Click Handlers
function setupAlbumLinks() {
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', () => {
            const albumId = card.getAttribute('data-album');
            
            // Replace these URLs with your actual photo album links
            const albumUrls = {
                'winter-24': 'https://photos.google.com/your-winter-2024-album',
                'fall-24': 'https://photos.google.com/your-fall-2024-album',
                'summer-24': 'https://photos.google.com/your-summer-2024-album',
                'spring-24': 'https://photos.google.com/your-spring-2024-album'
            };
            
            if (albumUrls[albumId]) {
                window.open(albumUrls[albumId], '_blank');
            } else {
                alert(`Opening ${albumId} album... (Update script.js with your actual album URLs)`);
            }
        });
    });
}

// Initialize function
function initializeCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        setTimeout(initializeCountdown, 100);
        return;
    }
    
    // Start countdown timer immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
    
    // Setup album links
    setupAlbumLinks();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCountdown);
} else {
    initializeCountdown();
}

// Fallback for window load
window.addEventListener('load', function() {
    if (!document.getElementById('days') || document.getElementById('days').textContent === '25') {
        initializeCountdown();
    }
});

// Optional: Add some fun console messages for fellow nerds
console.log('🎲 Welcome to Nerd Weekend!');
console.log('🚀 Built with love, caffeine, and way too many Stack Overflow tabs');
console.log('🔧 Want to customize? Edit the files and make it your own!');
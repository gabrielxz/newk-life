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

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    } else {
        // Event has passed
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
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
                // Open in new tab
                window.open(albumUrls[albumId], '_blank');
            } else {
                // Fallback - you can customize this
                alert(`Opening ${albumId} album... (Update script.js with your actual album URLs)`);
            }
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    // Update every minute
    setInterval(updateCountdown, 60000);
    
    // Setup album links
    setupAlbumLinks();
});

// Optional: Add some fun console messages for fellow nerds
console.log('🎲 Welcome to Nerd Weekend!');
console.log('🚀 Built with love, caffeine, and way too many Stack Overflow tabs');
console.log('🔧 Want to customize? Edit the files and make it your own!');
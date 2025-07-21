// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('September 25, 2025 18:00:00').getTime();
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
            
            
            const albumUrls = {
                'Denver, NC 2024': 'https://photos.app.goo.gl/xJfSEkbnZypUK4Sp9',
                'Banner Elk, NC 2023': 'https://photos.app.goo.gl/8F1CdF1jjjrYnUXDA',
                'Charlotte, NC 2021': 'https://photos.app.goo.gl/8vA8EDCyLURyY6oa8',
                'Raleigh, NC 2020': 'https://photos.app.goo.gl/ukMf8RM4PoFj7un57'
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

console.log('🎲 Welcome to Nerd Weekend!');
console.log('🚀 Who is this? Clayton? Parker? I bet it is Michael');
// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('August 27, 2026 18:00:00').getTime();
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

// Prophecy Generator
const prophecies = [
    "The quietest player in Blood on the Clocktower will be the axis around which the entire game turns.",
    "A liberal government will pass only because someone blinked at exactly the wrong time.",
    "The host will say this is the last round and it will not be the last round.",
    "An alliance formed over snacks will collapse before dessert.",
    "A prototype brought \"just for fun\" will malfunction in a way that reveals something true.",
    "Someone will swear they are playing rationally and no one will believe them.",
    "A 4AM debate about free will will permanently alter one person's confidence in their own agency.",
    "At least one accusation will be correct for entirely incorrect reasons.",
    "The dice will remember a grudge from a previous year.",
    "A fascist policy will pass because someone trusted tone over content.",
    "The kitchen will become a neutral diplomatic zone for precisely nine minutes.",
    "Someone will discover a rule in Battlestar Galactica that has been wrong for years and refuse to accept it.",
    "The HR monitor will spike before the betrayal is consciously recognized.",
    "A philosophical position taken at midnight will be abandoned at 2:17 AM.",
    "One player will attempt to optimize fun and accidentally minimize it.",
    "The phrase \"statistically improbable\" will precede something inevitable.",
    "A chair will creak at the exact moment a lie is told.",
    "Someone will narrate their own downfall mid sentence.",
    "The phrase \"I am just playing for the experience\" will precede ruthless efficiency.",
    "An inside joke will achieve mythic status before Sunday morning.",
    "A mispronounced word will retroactively change the interpretation of a previous game.",
    "One person will briefly suspect that the weekend is testing them.",
    "A choice presented as harmless will echo across three separate games.",
    "Someone will feel watched by a future version of themselves.",
    "A player who prides themselves on reading tells will become unreadable to themselves.",
    "A moment of perfect clarity will arrive and pass without being noticed.",
    "The lights will flicker during a vote and no one will comment on it.",
    "An argument about game balance will become an argument about morality.",
    "A rule clarification will expose more about the table than the rule itself.",
    "Something will happen that has happened every year, and no one will admit they were expecting it."
];

function revealProphecy() {
    const prophecyText = document.getElementById('prophecy-text');
    const randomIndex = Math.floor(Math.random() * prophecies.length);
    const prophecy = prophecies[randomIndex];

    // Remove any existing animation class
    prophecyText.classList.remove('prophecy-revealed');

    // Force reflow to restart animation
    void prophecyText.offsetWidth;

    // Set new prophecy and add animation
    prophecyText.innerHTML = prophecy;
    prophecyText.classList.add('prophecy-revealed');
}
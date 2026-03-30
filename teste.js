const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;

function moveCarousel() {
    const firstCard = document.querySelector('.card'); // Fixed curly quotes
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 20; 
    const cardsVisible = window.innerWidth > 768 ? 3 : 1;
    const maxIndex = track.children.length - cardsVisible;

    // Bounds checking
    if (index > maxIndex) index = 0;
    if (index < 0) index = maxIndex;

    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Event Listeners for Buttons
nextBtn.addEventListener('click', () => {
    index++;
    moveCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    moveCarousel();
});

// Window Resize - Recalculate position when screen size changes
window.addEventListener('resize', moveCarousel);

// Form Submission
document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Sucesso! Um link de confirmação foi enviado para: ${email}`);
    this.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    // Toggle class based on scroll depth
    nav.classList.toggle('scrolled', window.scrollY > 50);
});


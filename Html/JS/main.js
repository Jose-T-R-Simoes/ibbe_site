document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showEvent(index) {
        const offset = -index * 100;
        eventCards.forEach((card) => {
            card.style.transform = `translateX(${offset}%)`;
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : eventCards.length - 1;
        showEvent(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < eventCards.length - 1) ? currentIndex + 1 : 0;
        showEvent(currentIndex);
    });

    // Mostrar o primeiro evento inicialmente
    showEvent(currentIndex);
});
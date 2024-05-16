document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
});




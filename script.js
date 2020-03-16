const modalOverlay = document.querySelector('.modal-overlay');
const cards = Array.from(document.querySelectorAll('.card'));

cards.map(card => card.addEventListener('click', () => modalOverlay.classList.add('active')))

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'));

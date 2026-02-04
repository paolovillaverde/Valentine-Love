const heart = document.getElementById('heart');
const message = document.getElementById('message');

heart.addEventListener('click', () => {
    message.classList.toggle('hidden');
});

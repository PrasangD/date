const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

function moveNoButton() {
    const offsetX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const offsetY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
    noButton.style.position = 'absolute';
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

yesButton.addEventListener('click', () => {
    const phoneNumber = "9137250884"; // Replace with the actual phone number
    const message = encodeURIComponent("Hey......I was thinking the same, lets gooooooooo. I wanna date you.");
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
});

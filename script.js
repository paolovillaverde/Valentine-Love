function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    for (let i = 0; i < 35; i++) {
        createHeart();
    }

    setTimeout(() => {
        envelope.style.display = 'none';
        document.querySelector('.open-text').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
        typeText("HAPPY VALENTINE'S DAY, MAMI! I LOVE YOU!");
    }, 1300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0px';
    heart.style.fontSize = (20 + Math.random() * 40) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

function typeText(text) {
    let i = 0;
    const speed = 70;
    const typingDiv = document.getElementById("typing");

    function typing() {
        if (i < text.length) {
            typingDiv.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

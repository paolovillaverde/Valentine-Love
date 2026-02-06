function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const envelopeRect = envelope.getBoundingClientRect();
    envelope.classList.add('open');

    // Hearts originate from envelope position
    for (let i = 0; i < 35; i++) {
        createHeart(envelopeRect);
    }

    setTimeout(() => {
        envelope.style.display = 'none';
        document.querySelector('.open-text').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
        typeText("HAPPY 4th ANNIVERSARY, MAMI! I LOVE YOUU <3!");
    }, 1300);
}

function createHeart(rect) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    // Position relative to envelope
    heart.style.left = rect.left + rect.width/2 + (Math.random()*80-40) + 'px';
    heart.style.top = rect.top + 'px';
    heart.style.fontSize = (5 + Math.random() * 8) + 'vw';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

function typeText(text) {
    let i = 0;
    const speed = 50;
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


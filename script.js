let noButton = document.getElementById("no");

window.onload = function() {
    noButton.style.position = "absolute";
    noButton.style.left = "50%";
    noButton.style.top = "50%";
    noButton.style.transform = "translate(-50%, 0)";
};

noButton.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    alert("Yay! 💖💖💖💖");
    alert("Te veo el 14 😉");
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.zIndex = -1; 
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 200);




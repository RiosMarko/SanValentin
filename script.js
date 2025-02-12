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
});
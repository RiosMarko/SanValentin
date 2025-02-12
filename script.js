
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 1 + 2) + 's'; 
    heart.style.zIndex = -1; 
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000); 
}
setInterval(createHeart, 150); 


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
    Swal.fire({
        title: "¡Sabía que dirías que sí! 💖",
        text: "Nos vemos el 14💕",
        imageUrl: "https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif", 
        imageWidth: 200,
        imageHeight: 200,
        background: "#ffe4e1",
        color: "#d63384",
        confirmButtonColor: "#ff69b4",
        confirmButtonText: "¡Gracias! 💕"
    }).then(() => {
        location.reload(); // Recarga la página al hacer clic en el botón de confirmación
    });
});




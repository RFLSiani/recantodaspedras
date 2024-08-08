document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");

    // Define um tempo de exibição de 5 segundos antes de começar o fade-out
    setTimeout(() => {
        loadingScreen.classList.add("fade-out");

        // Após a animação de fade-out, remover o elemento do DOM
        loadingScreen.addEventListener("transitionend", () => {
            loadingScreen.style.display = "none";
            window.location.href = "inicio.html";
        });
    }, 5000); // 5 segundos
});
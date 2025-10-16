// Fitxer d'animacions amb JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Fa que l'estructura HTML estigui carregada abans d'executar el codi interior
    const marqueeImage = document.getElementById('marquee-image'); //Variable constant que busca la imatge del banner i l'emmagatzema
    if (!marqueeImage) return; // Condició if que fa que si l'element no existeix, aquest surt

    // Calcula l'amplada de la imatge (en píxels)
    const imageWidth = marqueeImage.offsetWidth; // Calcula amplada real de la imatge
    const screenWidth = window.innerWidth; // Obté amplada de la finestra del navegador

    // Posició inicial: completament fora per l'esquerra 
    let currentPos = - (imageWidth + 650); 

    // Velocitat de l'animació 
    const speed = 2;

    // Definim una funció que executa l'animació frame a frame
    function animateMarquee() {
        // Mou la imatge cap a la dreta
        currentPos += speed;

        // Si ha sortit completament per la dreta, reinicia des de l'esquerra 
        if (currentPos > screenWidth) {
            currentPos = - (imageWidth + 650); // Reinicia la posició a l'esquerra i crea un bucle
        }

        // Aplica l'estil CSS a la imatge per moure-la
        marqueeImage.style.left = currentPos + 'px';

        // Continua l'animació en el següent frame
        requestAnimationFrame(animateMarquee);
    }

    // Cridem a la funció per iniciar l'animació
    animateMarquee();

    // Reinicia l'animació si es redimensiona la finestra (per mantenir l'amplada correcta)
    window.addEventListener('resize', function() {
        const newImageWidth = marqueeImage.offsetWidth;
        const newScreenWidth = window.innerWidth;
        if (currentPos > newScreenWidth) {
            currentPos = - (newImageWidth + 650); 
        }
    });
});
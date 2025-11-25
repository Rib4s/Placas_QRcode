function selectBestImage() {
    const container = document.getElementById('backgroundContainer');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = screenWidth / screenHeight;
    
    // Remove classes anteriores
    container.className = 'background-container';
    
    // Decide qual imagem usar baseado na proporção
    if (aspectRatio >= 1.7) {
        // Telas muito largas (16:9, 21:9)
        container.classList.add('default-bg');
        console.log('Usando imagem 16:9');
    } else if (aspectRatio >= 1.3) {
        // Telas landscape (4:3, 5:4)
        container.classList.add('tablet-bg');
        console.log('Usando imagem 4:3');
    } else if (aspectRatio >= 0.9) {
        // Telas quadradas (1:1)
        container.classList.add('square-bg');
        console.log('Usando imagem 1:1');
    } else {
        // Telas verticais (9:16 mobile)
        container.classList.add('mobile-bg');
        console.log('Usando imagem 9:16');
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', selectBestImage);

// Executa quando redimensiona a tela
window.addEventListener('resize', selectBestImage);

// Executa quando muda orientação (mobile)
window.addEventListener('orientationchange', selectBestImage);
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hearts-container');
    const colors = ['#ff6b8b', '#ff8fab', '#ffb3c6', '#ffccd5'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'heart-float';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 3) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    setInterval(createHeart, 300);
});
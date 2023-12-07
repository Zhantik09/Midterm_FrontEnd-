document.addEventListener('DOMContentLoaded', function () {
    const parallax = document.getElementById('parallax');
    const mouseReactiveObject = document.getElementById('mouseReactiveObject');
    const sections = document.querySelectorAll('.narrative-section');

    window.addEventListener('scroll', function () {
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + 'px';

        sections.forEach(section => {
            const distance = section.getBoundingClientRect().top;
            const parallaxFactor = section.dataset.speed;
            section.style.transform = `translateY(${distance * parallaxFactor}px)`;

            // Check if the section is in the viewport
            if (distance < window.innerHeight * 0.5 && distance > -window.innerHeight * 0.5) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        mouseReactiveObject.style.transform = `translate(-50%, -50%) translate(${x * 200}px, ${y * 200}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle floating pill navigation active state on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

window.addEventListener('load', () => {
    // Hide loader after page is fully loaded
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        // Add a slight delay just so the animation is visible for a moment
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2000); // 1.2s delay for visual effect
    }
});

// Magic Dust Cursor Effect
const colors = ['#540b0e', '#9e2a2b', '#e09f3e', '#fff3b0', '#335c67'];

document.addEventListener('mousemove', (e) => {
    // Determine number of particles per movement (reduce for performance if needed)
    if (Math.random() > 0.4) return; // Only spawn on ~60% of mouse moves to avoid clutter

    createDust(e.clientX, e.clientY);
});

function createDust(x, y) {
    const dust = document.createElement('div');
    dust.classList.add('magic-dust');

    // Randomize properties
    const size = Math.random() * 8 + 4; // 4px to 12px
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Randomize end position for the animation (scatter effect)
    const tx = (Math.random() - 0.5) * 100; // -50px to 50px
    const ty = (Math.random() - 0.5) * 100;

    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;
    dust.style.background = color;
    dust.style.left = `${x}px`;
    dust.style.top = `${y}px`;

    // Pass end coordinates to CSS variables for keyframes
    dust.style.setProperty('--tx', `${tx}px`);
    dust.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(dust);

    // Clean up DOM after animation completes (1.5s match CSS)
    setTimeout(() => {
        dust.remove();
    }, 1500);
}

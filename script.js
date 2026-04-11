document.addEventListener('DOMContentLoaded', () => {
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
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2000);
    }
});
const colors = ['#540b0e', '#9e2a2b', '#e09f3e', '#fff3b0', '#335c67'];
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.4) return;
    createDust(e.clientX, e.clientY);
});
function createDust(x, y) {
    const dust = document.createElement('div');
    dust.classList.add('magic-dust');
    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const tx = (Math.random() - 0.5) * 100;
    const ty = (Math.random() - 0.5) * 100;
    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;
    dust.style.background = color;
    dust.style.left = `${x}px`;
    dust.style.top = `${y}px`;
    dust.style.setProperty('--tx', `${tx}px`);
    dust.style.setProperty('--ty', `${ty}px`);
    document.body.appendChild(dust);
    setTimeout(() => {
        dust.remove();
    }, 1500);
}

// Modal Functions
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
});

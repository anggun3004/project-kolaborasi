document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const leftBtn = document.getElementById('leftArrow');
    const rightBtn = document.getElementById('rightArrow');

    if (track && leftBtn && rightBtn) {
        let index = 0;
        const cardWidth = 330; 
        const getMaxIndex = () => {
            const cards = document.querySelectorAll('.project-card').length;
            if (window.innerWidth <= 768) return cards - 1; 
            if (window.innerWidth <= 992) return cards - 2;
            return cards - 3; 
        };
        rightBtn.onclick = () => {
            if (index < getMaxIndex()) { 
                index++; 
            } else { 
                index = 0; 
            }
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        };

        leftBtn.onclick = () => {
            if (index > 0) { 
                index--; 
            } else { 
                index = getMaxIndex(); 
            }
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        };
    }
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    const modal = document.getElementById('pdfModal');
    const openBtn = document.getElementById('openPdfBtn');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && openBtn && closeBtn) {
        openBtn.onclick = () => {
            modal.classList.add('show');
        };

        closeBtn.onclick = () => {
            modal.classList.remove('show');
        };
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        };
    }
});

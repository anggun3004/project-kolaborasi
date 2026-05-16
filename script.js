document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const leftBtn = document.getElementById('leftArrow');
    const rightBtn = document.getElementById('rightArrow');

    if (track && leftBtn && rightBtn) {
        let index = 0;
        const moveAmount = 330; 

        rightBtn.onclick = () => {
            if (index < 2) { index++; } 
            else { index = 0; }
            track.style.transform = `translateX(-${index * moveAmount}px)`;
        };

        leftBtn.onclick = () => {
            if (index > 0) { index--; } 
            else { index = 2; }
            track.style.transform = `translateX(-${index * moveAmount}px)`;
        };
    }

    const toggleSwitch = document.querySelector('#checkbox'); 
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark' && toggleSwitch) {
            toggleSwitch.checked = true;
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                console.log("Mode gelap aktif, Anggun!");
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                console.log("Mode terang aktif!");
            }    
        });
    }
})
// Rotate cover element when checkbox is checked
const checkboxCover = document.getElementById('checkbox-cover');
const cover = document.querySelector('.cover');

checkboxCover.addEventListener('change', () => {
    if (checkboxCover.checked) {
        gsap.to(cover, { duration: 0.5, rotationY: -180 });
        setTimeout(() => { cover.style.zIndex = "1"; }, 1000);
    } else {
        gsap.to(cover, { duration: 0.5, rotationY: 0 });
        cover.style.zIndex = "4";
    }
});

// Rotate page elements when checkboxes are checked
const checkboxesPage = document.querySelectorAll('.pages input[type="checkbox"]');
const pages = document.querySelectorAll('.page');

checkboxesPage.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            gsap.to(pages[index], { duration: 0.5, rotationY: -180 });
        } else {
            gsap.to(pages[index], { duration: 0.5, rotationY: 0 });
        }
    });
});
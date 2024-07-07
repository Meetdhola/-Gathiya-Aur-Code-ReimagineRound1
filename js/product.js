document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function() {
            mainImage.src = this.src;
            mainImage.classList.remove('fade-in');
            void mainImage.offsetWidth; // trigger reflow
            mainImage.classList.add('fade-in');
        });
    });
});

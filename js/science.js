document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.science-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.science-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 300); // Adjust delay for each section
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

    function updateImageSource() {
        var img1 = document.getElementById('responsive-image1');
        var img2 = document.getElementById('responsive-image2');
        var img3 = document.getElementById('responsive-image3');
        if (window.innerWidth <= 750) {
            img1.src = '../assets/images/science/SPSection_02_Phone_d4a9964e-cb2d-4fbd-93ff-5c5bb0c294b0.svg';
            img2.src = '../assets/images/science/SPSection_04_Phone_41c880e0-158e-46b5-8e5e-bea52633ffa7.svg';
            img3.src = '../assets/images/science/SPSection_06_Phone_9512f080-18fc-4724-8499-987484b8aae1.svg';
        } else {
            img1.src = '../assets/images/science/SPSection_02_Web_1412b975-7278-4858-9663-b6a3d5bf3a6e.svg';
            img2.src = '../assets/images/science/SPSection_04_Web_new.svg';
            img3.src = '../assets/images/science/SPSection_06_Web_6e4bd778-f507-4c16-be17-9478accc490f.svg';
        }
    }

    window.addEventListener('resize', updateImageSource);
    window.addEventListener('load', updateImageSource);
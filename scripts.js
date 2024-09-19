
window.onscroll = function () {
    let button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('toggleButton').addEventListener('click', function () {
    var openingHours = document.getElementById('openingHours');
    if (openingHours.style.display === 'none' || openingHours.style.display === '') {
        openingHours.style.display = 'block';
        this.textContent = 'Öffnungszeiten verstecken';
    } else {
        openingHours.style.display = 'none';
        this.textContent = 'Öffnungszeiten anzeigen';
    }
});

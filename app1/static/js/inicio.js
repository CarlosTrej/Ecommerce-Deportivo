
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
}


var promotionsIndex = 0;
function plusPromotions(n) {
    var promotions = document.querySelector('.promotions-container');
    var items = promotions.querySelectorAll('.promotion-item');
    var visibleItems = Array.from(items).filter(item => item.style.display !== 'none');
    promotionsIndex = (promotionsIndex + n) % Math.ceil(items.length / 3);
    var startPosition = promotionsIndex * 3;
    var endPosition = startPosition + 3;
    items.forEach((item, index) => {
        if (index >= startPosition && index < endPosition) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


const verMasButtons = document.querySelectorAll('.ver-mas-btn');

verMasButtons.forEach(button => {
    button.addEventListener('click', () => {
        const benefitItem = button.closest('.benefit-item');
        // Aquí puedes agregar la lógica para mostrar más detalles del beneficio, como una descripción extendida o un enlace a más información.
        alert('Más detalles del beneficio: ' + benefitItem.querySelector('h3').innerText);
    });
});

// Función para redirigir a una página
function redirectToPage(page) {
    window.location.href = page; // Redirige a la página destino
}
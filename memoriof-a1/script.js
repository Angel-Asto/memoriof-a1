document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Quitar la clase activa de las pestañas
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Mostrar la sección correspondiente
            const sectionId = tab.dataset.section;
            sections.forEach(section => {
                section.classList.remove("active");
                section.classList.add("d-none");
            });

            const activeSection = document.getElementById(sectionId);
            activeSection.classList.remove("d-none");
            activeSection.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll('.photo-card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < photos.length) {
            currentIndex = index;
            lightboxImg.src = photos[currentIndex].src;
        }
    }

    // Abrir el lightbox y mostrar la imagen seleccionada
    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            lightbox.classList.add('active');
            showImage(index);
        });
    });

    // Cerrar el lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Navegar entre imágenes
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });
});

document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (name && message) {
        alert("Gracias " + name + " por tu mensaje que tengas un buen dia " );
        // Aquí podrías agregar código para guardar el mensaje si fuera necesario
        document.getElementById('name').value = '';  // Limpiar el campo de nombre
        document.getElementById('message').value = '';  // Limpiar el campo de mensaje
    } else {
        alert("Por favor, escribe tu nombre y tu mensaje.");
    }
});

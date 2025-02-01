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

    // Manejo del lightbox para fotos
    const photos = document.querySelectorAll('.photo-card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });


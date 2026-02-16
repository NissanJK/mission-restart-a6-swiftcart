const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');
showSection('home');

function showSection(id) {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove("hidden");

    links.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-target="${id}"]`).classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.dataset.target;
        showSection(target);
    });
});

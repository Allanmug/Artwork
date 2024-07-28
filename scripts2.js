document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchArtworks);
});

function toggleMenu() {
    const menu = document.querySelector('.main-menu ul');
    menu.classList.toggle('show');
}

function searchArtworks() {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase();
    const artworks = document.querySelectorAll('.artwork');

    artworks.forEach(artwork => {
        const text = artwork.querySelector('p').textContent.toLowerCase();
        if (text.includes(filter)) {
            artwork.style.display = '';
        } else {
            artwork.style.display = 'none';
        }
    });
}

function filterArtworks(category) {
    const artworks = document.querySelectorAll('.artwork');
    
    artworks.forEach(artwork => {
        if (category === 'all' || artwork.getAttribute('data-category') === category) {
            artwork.style.display = '';
        } else {
            artwork.style.display = 'none';
        }
    });
}

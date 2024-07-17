// script.js

// Slider Drag Functionality
const slider = document.querySelector('.artwork-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

// Auto-Scroll Functionality
function autoScroll() {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        slider.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= slider.offsetWidth / 3) {
            clearInterval(slideTimer);
        }
    }, 25);
}

setInterval(autoScroll, 20000); // Change the interval as needed

// Menu Toggle Functionality
function toggleMenu() {
    const menu = document.querySelector('.main-menu ul');
    menu.classList.toggle('show');
}

// Real-time Search Functionality with Suggestions
const suggestions = document.getElementById('suggestions');
const searchInput = document.getElementById('search-input');
const searchableElements = document.querySelectorAll('[data-searchable]');
const searchableData = Array.from(searchableElements).map(el => el.textContent.trim());

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (filter) {
        const filteredSuggestions = searchableData.filter(text => text.toLowerCase().includes(filter));
        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = suggestion;
            suggestionDiv.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestions.innerHTML = '';
                searchArtworks();
            });
            suggestions.appendChild(suggestionDiv);
        });
    }

    searchArtworks();
});

function searchArtworks() {
    const filter = searchInput.value.toLowerCase();
    searchableElements.forEach(element => {
        const textContent = element.textContent || element.innerText;
        if (textContent.toLowerCase().includes(filter)) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

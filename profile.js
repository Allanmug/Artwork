document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

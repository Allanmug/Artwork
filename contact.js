document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name: name,
            email: email,
            message: message
        }).then(function (response) {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again later.');
        });

        // Reset the form
        contactForm.reset();
    });
});

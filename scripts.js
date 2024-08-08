// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of contact details
document.getElementById('contact-toggle').addEventListener('click', function() {
    const contactDetails = document.getElementById('contact-details');
    if (contactDetails.style.display === 'none' || contactDetails.style.display === '') {
        contactDetails.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        contactDetails.style.display = 'none';
        this.textContent = 'Show More';
    }
});

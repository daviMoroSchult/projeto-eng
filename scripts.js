// JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Optional: Validate form data here
    
    // Display form data (for demonstration)
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }
    
    // Optional: Send form data to server using fetch or XMLHttpRequest
    
    // Reset form
    this.reset();
});

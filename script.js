// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Navigation Menu Toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Form Submission with Fetch API (Optional, if you have a contact form)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('send_message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('form-status').textContent = data.message;
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        document.getElementById('form-status').textContent = 'Error sending message.';
    });
});

// Interactive Button Effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#002244';
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#003366';
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});

// Interactive Link Effects
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#003366';
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#0044cc';
        link.style.textDecoration = 'none';
    });
});

// Image Hover Effect
document.querySelectorAll('.slideshow-container img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.filter = 'brightness(90%)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(100%)';
    });
});

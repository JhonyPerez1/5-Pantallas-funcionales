// contacto.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envio del formulario predeterminado

        // Obtienes los valores ingresados
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        
        console.log("Message sent:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        // Restablecer campos en blanco
        contactForm.reset();
        const endpointUrl = "http://localhost:3000/saveData"; 
    });
});


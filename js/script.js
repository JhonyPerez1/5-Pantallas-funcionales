// script.js1

document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".signin-button");
    
    signInButton.addEventListener("click", function() {
        alert("Se hizo clic en el botón Iniciar sesión. Sólo para fines de presentación.");
    });
});


// script.js2
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Obtiene los valores del nombre y contraseña
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Comprueba si los valores son correctos
        if (username === "Jhony Perez" && password === "123") {
            // Si coninciden envia a la pantalla del dashboard
            window.location.href = "dashboard.html";
        } else {
            // Mensaje de error:
            alert("Invalid username or password. Please try again.");
        }
    });
});


// script.js3

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los datos
    const goToNotificationsButton = document.querySelector(".navigation-button");

    // Detector de eventos
    goToNotificationsButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        // Redirige a la pntalla de notificaciones
        window.location.href = "notificaciones.html";
    });
});

// script.js4

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los datos
    const goToContactButton = document.querySelector(".navigation-button");

    // Detector de eventos
    goToContactButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        // Redirige a la pantalla de contacto
        window.location.href = "contacto.html";
    });
});

// notificacioness.js

document.addEventListener("DOMContentLoaded", function() {
    const notificationList = document.getElementById("notification-list");

    // Notificaciones
    const notifications = [
        { timestamp: "01/10/2023  09:05 am", details: "CAMBIO DE RUTA DEL BUS 123." },
        { timestamp: "01/10/2023  09:06 am", details: "El bus de la ruta de residenciales se atraso 5 minutos." },
        
    ];

    // Recorre las notificaciones
    notifications.forEach(function(notification) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${notification.timestamp}</span> - ${notification.details}`;
        notificationList.appendChild(listItem);
    });
});

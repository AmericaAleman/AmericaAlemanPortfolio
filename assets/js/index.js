document.addEventListener("DOMContentLoaded", function() {
    // Variable para controlar el estado del idioma
    let idiomaActual= 'es'; // 'es' por default es español

    // Función para cambiar el idioma a inglés
    function changeEnglish() {
        document.documentElement.lang = "en"; // Cambia el atributo lang del HTML a 'en' (inglés)
        //INDEX HTML
        document.getElementById("title").textContent = "Hi, I'm América Alemán!"; // Cambia el título a inglés
        document.getElementById("subtitle").textContent = "One of my passions is being able to create solutions with the use of technology."; // Cambia el mensaje a inglés
        document.getElementById("email").textContent = "Email";
        document.getElementById("title-who").textContent = "Who I am?";
        document.getElementById("description-who").textContent = "My experience has led me to specialize digital products, from research, analysis, create and development applications or websites. I am a faithful believer that the good use of technology improves people's lives.";
        document.getElementById("welcome-who").textContent = "Welcome to my site!, I invite you to learn about my experience and my work in UX/UI design and Front End development!";
        document.getElementById("experience").textContent = "My Experience";
        document.getElementById("portfolio").textContent = "My Portfolio";
        document.getElementById("hobbies").textContent = "Coming soon!";
        document.getElementById("btn-change-leng").textContent = "Spanish";
        idiomaActual= 'en'; // Actualiza el idioma actual a inglés
    }

    // Función para cambiar el idioma a español
    function changeSpanishl() {
        document.documentElement.lang = "es"; // Cambia el atributo lang del HTML a 'es' (español)
        //INDEX HTML
        document.getElementById("title").textContent = "¡Hola, Soy América Alemán!"; // Restaura el título a español
        document.getElementById("subtitle").textContent = "Una de mis pasiones es poder crear soluciones con el uso de la tecnologÍa."; // Restaura el mensaje a español
        document.getElementById("email").textContent = "Correo";
        document.getElementById("title-who").textContent = "¿Quién soy?";
        document.getElementById("description-who").textContent = "Yo soy América Alemán trayectoria educativa y profesional me han conducido a especializarme en la creación de productos digitales. Estoy profundamente convencida que la tecnología tiene un impacto significativo en la vida de las personas y que, con un uso adecuado, podemos alcanzar nuestros objetivos de manera efectiva.";
        document.getElementById("welcome-who").textContent = "¡Te doy la bienvenida y te invito a conocer mi experiencia y mi trabajo en diseño UX/UI y desarrollo Front End!";
        document.getElementById("experience").textContent = "Mi Experiencia";
        document.getElementById("portfolio").textContent = "Mi Portafolio";
        document.getElementById("hobbies").textContent = "¡Próximamente!";
        document.getElementById("btn-change-leng").textContent = "English";
        idiomaActual= 'es'; // Actualiza el idioma actual a español
    }

    // Event listener para el botón de cambiar idioma
    document.getElementById("btn-change-leng").addEventListener("click", function() {
        if (idiomaActual=== 'es') {
            changeEnglish(); // Si está en español, cambia a inglés
        } else {
            changeSpanishl(); // Si está en inglés, cambia a español
        }
    });
});

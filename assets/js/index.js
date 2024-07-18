document.addEventListener("DOMContentLoaded", function() {
    // Variable para controlar el estado del idioma
    let idiomaActual= 'es'; // 'es' por default es español

    // Función para cambiar el idioma a inglés
    function changeEnglish() {
        document.documentElement.lang = "en"; // Cambia el atributo lang del HTML a 'en' (inglés)
        //INDEX HTML
        document.getElementById("email").textContent = "Email";
        document.getElementById("welcome-who").textContent = "Welcome to my site!, I invite you to learn about my experience and work in UX/UI design and Front End development.";
        document.getElementById("description-who").textContent = "I am a Mexican passionate about analyzing digital products, looking for added value and proposing solutions with experiences that are consistent with good functionality. My educational and professional experience has led me to specialize in the creation of digital products.";
        document.getElementById("subtitle").textContent = "I am a faithful believer that the good use of technology improves people's lives!";
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
        document.getElementById("subtitle").textContent = "Una de mis pasiones es poder crear soluciones con el uso de la tecnologÍa."; // Restaura el mensaje a español
        document.getElementById("email").textContent = "Correo";
        document.getElementById("welcome-who").textContent = "¡Te doy la bienvenida y te invito a navegar para que conozcas mi experiencia y trabajo en diseño UX/UI y desarrollo Front End!";
        document.getElementById("description-who").textContent = "Soy una Mexicana apasionada en analizar productos digitales, buscar un valor agregado y proponer soluciones con experiencias que vayan de acuerdo a una buena funcionalidad. Mi experiencia educativa y profesional me ha llevado a especializarme en la creación de productos digitales.";
        document.getElementById("subtitle").textContent = "¡Creo firmemente que la tecnología, con un buen uso, mejora nuestras vidas!";
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

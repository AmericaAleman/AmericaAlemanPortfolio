document.addEventListener("DOMContentLoaded", function() {
    // Variable para controlar el estado del idioma
    let idiomaActual= 'es'; // 'es' por default es español

    // Función para cambiar el idioma a inglés
    function changeEnglish() {
        document.documentElement.lang = "en"; // Cambia el atributo lang del HTML a 'en' (inglés)
        //generic html
        document.getElementById("principal-title-generic").textContent = "My Portfolio";
        document.getElementById("title-one").textContent = "How has been my creative process?";
        document.getElementById("description-one").textContent = "Over the years I have participated in different projects, not in all of them I have had the opportunity to document the processes and developments since they have been confidential, however, I would like to share some of the learnings that have helped me in my professional growth process and why I love my profession.";
        document.getElementById("subtitle-one").textContent = "Learning will always open opportunities!";
        document.getElementById("title-two").textContent = "Design System";
        document.getElementById("description-two").textContent = "Using photographs to create moodboards, he developed design systems with tools like Figma. These systems organize projects efficiently and facilitate collaboration. I also use tools to select color palettes and typography, ensuring effective visual communication.";
        document.getElementById("description-three").textContent = "The creation of Journey Maps is essential for effective planning, since it allows me to comprehensively analyze the actions that users must carry out and their experience during the process. With this information, I can also develop Flow Tasks and User Tasks to specifically detail the flow of each task, ensuring a clear implementation focused on user needs.";
        document.getElementById("description-four").textContent = "The Product Brief is essential to understand clearly and generally what a service or product offers. Defines its objectives and main characteristics. On the other hand, the User Persona allows you to identify and thoroughly understand the target users of the product or service. These tools provide a solid foundation for designing user-centered experiences aimed at the success of the product or service.";
        document.getElementById("description-five").textContent = "The Design Thinking methodology has allowed me to not only devise solutions, but also put them into action effectively. With a design-user-centered, it helps me deeply understand that design is more than just aesthetics; as an integrated set of solutions designed to achieve specific objectives and solve problems efficiently.";
        document.getElementById("description-six").textContent = "Made prototypes and preliminary designs of digital products using appropriate tools, allowing me to identify improvements and evaluate usability. In addition, this makes it easier to start analyzing the type of user interface (UI) you want to develop.";
        document.getElementById("usability").textContent = "Usability tests";
        document.getElementById("description-seven").textContent = "I have currently carried out usability tests through usability interviews, where the user can carry out activity(s) within the digital platform to carry out a heuristic evaluation and an analysis to identify common usability problems of a product, with the purpose of proposing improvements.";
        document.getElementById("btn-change-leng-generic").textContent = "Spanish"; // Cambia el texto del botón a 'Español'
        idiomaActual= 'en'; // Actualiza el idioma actual a inglés
    }

    // Función para cambiar el idioma a español
    function changeSpanishl() {
        document.documentElement.lang = "es"; // Cambia el atributo lang del HTML a 'es' (español)
         //generic html
        document.getElementById("principal-title-generic").textContent = "Mi Portafolio";
        document.getElementById("title-one").textContent = "¿Cómo ha sido mi proceso creativo?";
        document.getElementById("description-one").textContent = "A través de los años he participado en diferentes proyectos, no en todos he tenido la oportunidad de documentar los procesos y desarrollos ya que han sido confidenciales, sin embargo, me gustaría compartir algunos de los aprendizajes que me han ayudado en mi proceso de crecimiento profesional y por las cuales amo mi profesión.";
        document.getElementById("subtitle-one").textContent = "¡Aprender siempre te abrirá oportunidades!";
        document.getElementById("title-two").textContent = "Sistemas de diseño";
        document.getElementById("description-two").textContent = "Utilizando fotografías para  crear moodboards, desarrolló sistemas de diseño con herramientas como Figma. Estos sistemas organizan proyectos eficientemente y facilitan la colaboración. También utilizo herramientas para seleccionar paletas de colores y tipografía, asegurando una comunicación visual efectiva.";
        document.getElementById("description-three").textContent = "La creación de Journey Maps es fundamental para una planificación efectiva, ya que me permite analizar de manera integral las acciones que los usuarios deben llevar a cabo y su experiencia durante el proceso. Con esta información, también puedo desarrollar Flow Tasks y User Tasks para detallar específicamente el flujo de cada tarea, asegurando así una implementación clara y centrada en las necesidades del usuario.";
        document.getElementById("description-four").textContent = "El Brief del producto es esencial para comprender de manera clara y general lo que ofrece un servicio o producto. Define sus objetivos y características principales. Por otro lado, el User Persona permite identificar y comprender a fondo a los usuarios objetivo del producto o servicio. Estas herramientas proporcionan una base sólida para diseñar experiencias centradas en el usuario y orientadas al éxito del producto o servicio.";
        document.getElementById("description-five").textContent = "La metodología de Design Thinking me ha permitido no solo idear soluciones, sino también llevarlas a la acción de manera efectiva. Con un enfoque desde el diseño centrado en el usuario me ayuda a comprender profundamente que el diseño es más que solo estética; como un conjunto integrado de soluciones diseñadas para alcanzar objetivos específicos y resolver problemas de manera eficiente.";
        document.getElementById("description-six").textContent = "Realizó prototipos y diseños preliminares de productos digitales utilizando herramientas adecuadas, lo que me permite identificar mejoras y evaluar la usabilidad. Además, esto facilita el inicio del análisis del tipo de interfaz de usuario (UI) que se desea desarrollar.";
        document.getElementById("usability").textContent = "Pruebas de Usabilidad";
        document.getElementById("description-seven").textContent = "Las pruebas de usabilidad actualmente las he realizado por medio de entrevistas de usabilidad, en donde el usuario puede realizar actividad(es) dentro de la plataforma digital para realizar una evaluación heurística y de una análisis poder identificar los problemas comunes de usabilidad de un producto, con la finalidad de proponer mejoras.";
        document.getElementById("btn-change-leng-generic").textContent = "English"; // Cambia el texto del botón a 'Inglés'
        idiomaActual= 'es'; // Actualiza el idioma actual a español
    }

    // Event listener para el botón de cambiar idioma
    document.getElementById("btn-change-leng-generic").addEventListener("click", function() {
        if (idiomaActual=== 'es') {
            changeEnglish(); // Si está en español, cambia a inglés
        } else {
            changeSpanishl(); // Si está en inglés, cambia a español
        }
    });
});

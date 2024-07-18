document.addEventListener("DOMContentLoaded", function() {
    // Variable para controlar el estado del idioma
    let idiomaActual= 'es'; // 'es' por default es español

    // Función para cambiar el idioma a inglés
    function changeEnglish() {
        document.documentElement.lang = "en"; // Cambia el atributo lang del HTML a 'en' (inglés)
        //landing html
        document.getElementById("principal-title-landing").textContent = "My Experience";
        document.getElementById("description-one-landing").textContent = "Thanks to my curiosity, I have explored differents areas that have shaped my professional career. I specialize in market research and analysis, formulation and development of strategies for digital products, encompassing marketing, sales, brand design, product design, leading ecommerce projects, UX design, UI design, and front-end development.";
        document.getElementById("title-one-landing").textContent = "Get to know my professional journey!";
        document.getElementById("subtitle-one-landing").textContent = "Let's build together a new stage!";
        document.getElementById("description-thinkOutside").textContent = "Currently, I have the fortune of working at a Digital Marketing Agency, where previously I was able to do freelance work, allowing me to develop my skills in UX/UI Design and continue applying my knowledge in front-end development.";
        document.getElementById("description-santander").textContent = "Working externally for Santander, my job gave me the opportunity to be internalized by the company. Here, I primarily utilized my skills learned in front-end development, participating in digital projects focused on developing applications for current or prospective customers."
        document.getElementById("description-gft").textContent = "With GFT, I entered the exciting world of financial technology, where I acquired and honed skills in UX and Front-End. I excelled particularly in Front-End development using technologies like Angular and CSS. Additionally, I specialized in UX Research, highlighting significant achievements and gaining additional skills in user experience optimization and effective collaboration within multidisciplinary teams."
        document.getElementById("description-comisa").textContent = "My first job after finishing my university studies, here I learned how a company works and learned about digital marketing, focusing on the development of digital sales strategies. Responsible for leading a project to create a website focused on sales."


        document.getElementById("btn-change-leng-landing").textContent = "Spanish"; // Cambia el texto del botón a 'Español'
        idiomaActual= 'en'; // Actualiza el idioma actual a inglés
    }

    // Función para cambiar el idioma a español
    function changeSpanishl() {
        document.documentElement.lang = "es"; // Cambia el atributo lang del HTML a 'es' (español)
        //landing html
        document.getElementById("principal-title-landing").textContent = "Mi Experiencia";
        document.getElementById("description-one-landing").textContent = "Gracias a mi curiosidad, he explorado diversas áreas que han definido mi carrera profesional. Me especializo en investigación y análisis de mercado, formulación y desarrollo de estrategias para productos digitales, abarcando mercadotecnia, ventas, diseño de marca, diseño de producto, liderazgo de proyectos de ecommerce, diseño de experiencias, diseño UI y desarrollo front-end.";
        document.getElementById("title-one-landing").textContent = "¡Conoce mi recorrido profesional!";
        document.getElementById("subtitle-one-landing").textContent = "¡Construyamos juntos una nueva etapa!";
        document.getElementById("description-thinkOutside").textContent = "Actualmente tengo la fortuna de trabajar en una Agencia de Marketing Digital, con la cual anteriormente pude realizar trabajos individuales, con la oportunidad de desarrollar mis habilidades en Diseño UX/UI y seguir aplicando mis conocimientos en desarrollo Front end.";
        document.getElementById("description-santander").textContent = "Al trabajar de forma externa para Santander, mi trabajó me dio la oportunidad de que la compañía me internalizará. Aquí principalmente usé mis habilidades aprendidas en el desarrollo Front end. Participando en proyectos digitales enfocados en el desarrollo de aplicaciones que los clientes o nuevos clientes pudieran usar."
        document.getElementById("description-gft").textContent = "Con GFT, entré al emocionante mundo de la tecnología financiera, donde adquirí y perfeccioné habilidades en UX y Front-End. Destacándome especialmente en el desarrollo Front-End con tecnologías como Angular y CSS, además me especialicé en UX Research, destacando logros significativos y adquiriendo habilidades adicionales, optimización de experiencia del usuario y colaboración efectiva en equipos multidisciplinarios."
        document.getElementById("description-comisa").textContent = "Mi primer empleo después de terminar mis estudios universitarios, aquí aprendí el funcionamiento de una empresa y conocí acerca del marketing digital, enfocándome en el desarrollo de estrategias de ventas digitales. Encargada de liderar un proyecto de creación de un sitio web enfocado a las ventas."


        document.getElementById("btn-change-leng-landing").textContent = "English"; // Cambia el texto del botón a 'Inglés'
        idiomaActual= 'es'; // Actualiza el idioma actual a español
    }

    // Event listener para el botón de cambiar idioma
    document.getElementById("btn-change-leng-landing").addEventListener("click", function() {
        if (idiomaActual=== 'es') {
            changeEnglish(); // Si está en español, cambia a inglés
        } else {
            changeSpanishl(); // Si está en inglés, cambia a español
        }
    });
});

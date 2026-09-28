```javascript
// ===============================
// ECOAVENTURA - JAVASCRIPT
// ===============================


// ===============================
// PREGUNTAS FRECUENTES
// ===============================

const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach(function (pregunta) {

    pregunta.addEventListener("click", function () {

        const item = pregunta.parentElement;
        const respuesta = item.querySelector(".faq-answer");

        // Cerrar las demás preguntas
        const todosLosItems = document.querySelectorAll(".faq-item");

        todosLosItems.forEach(function (otroItem) {

            if (otroItem !== item) {

                otroItem.classList.remove("active");

                const otraRespuesta =
                    otroItem.querySelector(".faq-answer");

                if (otraRespuesta) {
                    otraRespuesta.style.maxHeight = null;
                }
            }
        });


        // Abrir o cerrar la pregunta
        item.classList.toggle("active");


        if (item.classList.contains("active")) {

            respuesta.style.maxHeight =
                respuesta.scrollHeight + "px";

        } else {

            respuesta.style.maxHeight = null;

        }

    });

});


// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================

const elementos = document.querySelectorAll(
    ".feature-card, .gallery-item, .team-card, .help-card"
);


const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    elemento.classList.add("oculto");

    observador.observe(elemento);

});


// ===============================
// NAVBAR AL HACER SCROLL
// ===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");

    }

});


// ===============================
// NAVEGACIÓN SUAVE
// ===============================

const enlaces = document.querySelectorAll(
    '.navbar a[href^="#"]'
);


enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        evento.preventDefault();


        const destino =
            enlace.getAttribute("href");


        const seccion =
            document.querySelector(destino);


        if (seccion) {

            seccion.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// EFECTO PARALLAX
// ===============================

const hero = document.querySelector(".hero");


window.addEventListener("scroll", function () {

    if (!hero) {
        return;
    }


    const desplazamiento =
        window.scrollY;


    if (desplazamiento < window.innerHeight) {

        hero.style.backgroundPosition =
            "center calc(50% + " +
            desplazamiento * 0.25 +
            "px)";

    }

});


// ===============================
// EFECTO EN BOTONES DE DESCARGA
// ===============================

const botones =
    document.querySelectorAll(".btn-primary");


botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        boton.classList.add("descargando");


        setTimeout(function () {

            boton.classList.remove("descargando");

        }, 1000);

    });

});


// ===============================
// GALERÍA
// ===============================

const imagenes =
    document.querySelectorAll(".gallery-item img");


imagenes.forEach(function (imagen) {

    imagen.addEventListener("click", function () {

        const visor =
            document.createElement("div");


        visor.classList.add("visor-imagen");


        visor.innerHTML =
            '<div class="visor-contenido">' +

                '<button class="cerrar-visor">×</button>' +

                '<img src="' +
                imagen.src +
                '" alt="' +
                imagen.alt +
                '">' +

                '<p>' +
                imagen.alt +
                '</p>' +

            '</div>';


        document.body.appendChild(visor);


        // Botón cerrar
        const botonCerrar =
            visor.querySelector(".cerrar-visor");


        botonCerrar.addEventListener(
            "click",
            function () {

                visor.remove();

            }
        );


        // Cerrar al hacer clic fuera
        visor.addEventListener(
            "click",
            function (evento) {

                if (evento.target === visor) {

                    visor.remove();

                }

            }
        );

    });

});


// ===============================
// MENSAJE DE PRUEBA
// ===============================

console.log("EcoAventura cargado correctamente.");
```

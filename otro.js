// let temas = 
//     {
//         tema1: "Geografia",
//         tema2: "Escritores",
//         tema3: "Pintores",
//         tema4: "Montañas"
//     }

//     let temasstr=JSON.stringify(temas);
//     //let temaspar=JSON.parse(temasstr);
//     localStorage.setItem ("ObjetoTemas", temasstr);
//     let datosStorage = localStorage.getItem("ObjetoTemas");
//     let temasconv = JSON.parse(datosStorage);

//     alert (temasconv.tema1);





// let preguntaActual = 0; // Debes declarar e inicializar la variable preguntaActual

// const preguntas = [
//     {
//         pregunta: "¿Cuál es la capital de Francia?",
//         respuestaCorrecta: "PARIS"
//     },
//     {
//         pregunta: "¿Quién escribió Don Quijote de la Mancha?",
//         respuestaCorrecta: "MIGUEL DE CERVANTES"
//     },
//     {
//         pregunta: "¿Quien pinto la Mona Lisa?",
//         respuestaCorrecta: "LEONARDO DA VINCI"
//     },
//     {
//         pregunta: "¿Cuál es la montaña más alta del mundo?",
//         respuestaCorrecta: "MONTE EVEREST"
//     }
// ];

// const botonesRespuesta = document.getElementsByClassName("juego");

// function mostrarPregunta() {
//     if (preguntaActual < preguntas.length) {
//         document.querySelector("h1").textContent = "CULTURIZATE ";
//         document.querySelector("p").textContent = preguntas[preguntaActual].pregunta;
//     } else {
//         alert("¡Has completado todas las preguntas!");
//     }
// }

// function avanzarPregunta() {
//     preguntaActual++;
//     mostrarPregunta();
// }

// function comprobarRespuesta(respuesta) {
//     const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
//     if (respuesta === respuestaCorrecta) {
//         alert("¡Respuesta correcta!");
//         avanzarPregunta(); // Avanza a la siguiente pregunta
//     } else {
//         alert("Respuesta incorrecta. Inténtalo de nuevo.");
//     }
// }

// for (let i = 0; i < botonesRespuesta.length; i++) {
//     botonesRespuesta[i].addEventListener("click", function () {
//         comprobarRespuesta(botonesRespuesta[i].textContent);
//     });
// }

// mostrarPregunta();
let temas = {
    tema1: "Geografía",
    tema2: "Escritores",
    tema3: "Pintores",
    tema4: "Montañas"
}

let temasstr = JSON.stringify(temas);
localStorage.setItem("ObjetoTemas", temasstr);
let datosStorage = localStorage.getItem("ObjetoTemas");
let temasconv = JSON.parse(datosStorage);

let preguntaActual = 0;

const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestaCorrecta: "PARIS"
    },
    {
        pregunta: "¿Quién escribió Don Quijote de la Mancha?",
        respuestaCorrecta: "MIGUEL DE CERVANTES"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestaCorrecta: "LEONARDO DA VINCI"
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        respuestaCorrecta: "MONTE EVEREST"
    }
];

const botonesRespuesta = document.getElementsByClassName("juego");

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        //document.querySelector("h1").textContent = "CULTURIZATE ";
        document.querySelector("p").textContent = preguntas[preguntaActual].pregunta;
    } else {
        alert("¡Has completado todas las preguntas!");
    }
}

function avanzarPregunta() {
    preguntaActual++;
    mostrarPregunta();

    // Mostrar el tema correspondiente después de avanzar la pregunta
    if (preguntaActual < Object.keys(temasconv).length) {
        const temaActual = Object.keys(temasconv)[preguntaActual];
        alert("Tema actual: " + temasconv[temaActual]);
    }
}

function comprobarRespuesta(respuesta) {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
        avanzarPregunta();
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
}

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click", function () {
        comprobarRespuesta(botonesRespuesta[i].textContent);
    });
}

mostrarPregunta();

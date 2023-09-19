
let temas = [{
    tema1: "Geografía",
},
{
    tema1: "escritores",
},

{
    tema1: "Pintores",
},

{
    tema1: "Montañas",
}

]

localStorage.setItem("ObjetoTemas", JSON.stringify(temas));
let temasconv = JSON.parse(localStorage.getItem("ObjetoTemas"));
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("jugar").addEventListener("click", function () {
        let temasAlmacenados = "Algunos de los temas que veremos hoy:\n";
        for (let i = 0; i < temas.length; i++) {
            temasAlmacenados +=  temas[i].tema1 + "\n";
        }
        alert(temasAlmacenados);
    
    });
});



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
    }
}

function avanzarPregunta() {
    preguntaActual++;
    mostrarPregunta();
}



function comprobarRespuesta(respuesta) {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta.toUpperCase() === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
        avanzarPregunta(); // Avanza solo si la respuesta es correcta
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
}




// function comprobarRespuesta(respuesta) {
//     const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
//     if (respuesta.toUpperCase() === respuestaCorrecta) { // Convertir a mayúsculas para comparar sin importar mayúsculas/ minúsculas
//         alert("¡Respuesta correcta!");
//         avanzarPregunta();
//     } else {
//         alert("Respuesta incorrecta. Inténtalo de nuevo.");
//     }
// }

for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].addEventListener("click",function () {
        comprobarRespuesta(botonesRespuesta[i].textContent);
    });
}

mostrarPregunta();
avanzarPregunta();

function bienvenidaUsuario() {
    let saludo = prompt("Bienvenido, ingrese su nombre:");
    alert("Bienvenido/a " + saludo + " al juego culturizate");
    return saludo;
}

function eleccion() {
    alert("Elija una opcion: ");
}

function eleccion2() {
    let opcion;

    while (true) {
        opcion = parseInt(prompt("1.Jugar \n2 Informacion de paises \n0.Salir"));

        if (opcion === 1) {
            jugar();
        } else if (opcion === 2) {
            mostrarInformacionPaises();
        } else if (opcion === 0) {
            alert("Has salido del juego. ¡Hasta luego!");
            break;
        } else {
            alert("Elija una opcion válida.");
        }
    }
}

function jugar() {
    alert("Bienvenido al juego normal, tienes 3 vidas, así que atento!");

    let vidas = 3;

    for (let nivel = 1; nivel <= 1; nivel++) {
        // Lógica del juego aquí...
        alert("GEOGRAFIA");

        let nivel1 = parseInt(prompt("¿Cuál es la capital de Francia? \n1.MADRID \n2.ROMA \n3.PARIS \n4.LONDRES"));

        if (nivel1 == 3) {
            alert("Correcto. Avanzas al siguiente nivel.");
        } else {
            vidas--;
            alert("Incorrecto. Te quedan " + vidas + " vidas.");
        }
        alert("ESCRITORES");
        let nivel2 = parseInt(prompt("¿Quién escribió Don Quijote de la Mancha? \n1.Miguel de Cervantes \n2.Gabriel García Márquez \n3.Leo Tolstoy \n4.William Shakespeare"));


        if (nivel2 == 1) {
            alert("Correcto. Avanzas al siguiente nivel.");
            // alert("NIVEL " + nivel);

        } else {
            vidas--;
            alert("Incorrecto. Te quedan " + vidas + " vidas.");
        }

        // alert("NIVEL " + nivel);
        alert("PINTORES");
        let nivel3 = parseInt(prompt("¿Quien pinto la Mona Lisa? \n1.VICENTE VAN GOGH \n2.PABLO PICASSO \n3.LEONARDO DA VINCI \n4.MICHELANGELO BUONARROTI"))

        if (nivel3 == 3) {
            alert("Correcto. Avanzas al siguiente nivel.");
            // alert("NIVEL " + nivel);
        } else {
            vidas--;
            alert("Incorrecto. Te quedan " + vidas + " vidas.");
        }

        // alert("NIVEL " + nivel);
        alert("GEOGRAFIA");

        let nivelUltimo = parseInt(prompt("¿Cuál es la montaña más alta del mundo? \n1.KILIMANJARO \n2.MONT BLANC \n3.MONTAÑA DE LA MESA \n4.MONTE EVEREST"))
        if (nivelUltimo == 4) {
            alert("Correcto!");

        }
        if (vidas === 0) {
            alert("Has perdido el juego");
            break; // Sale del juego si las vidas llegan a 0
        }
    }

    const opcionContinuar = parseInt(prompt("¿Deseas jugar nuevamente? (1: Sí, 0: No)"));
    if (opcionContinuar === 0) {
        alert("Gracias por jugar. ¡Hasta luego!");
    }
}

function mostrarInformacionPaises() {
    alert("Bienvenido al apartado de informaciones de países");
    alert("Presta atención y elige un país");

    const paises = [
        {
            pais: "1. Argentina",
            capital: "Buenos Aires",
            habitantes: 46.044703,
            comida: "Asado",
        },
        {
            pais: "2. Rusia",
            capital: "Moscu",
            habitantes: 145.558000,
            comida: "Borsch",
        },
        {
            pais: "3. Estados Unidos",
            capital: "Washington",
            habitantes: 332.314000,
            comida: "Hamburguesas y hot dogs",
        },
    ];

    let opciones = "";

    for (pais of paises) {
        opciones += `${pais.pais}\n`;
    }

    let eleccionIndex;

    while (true) {
        eleccionIndex = parseInt(prompt(opciones)) - 1;

        if (eleccionIndex < 0 || eleccionIndex >= paises.length) {
            alert("País no encontrado. Por favor, elija nuevamente o presione 0 para salir.");
        } else {
            const paisElegido = paises[eleccionIndex];
            alert("Elegiste el país " + paisElegido.pais);
            alert("Capital: " + paisElegido.capital);
            alert("Habitantes: " + paisElegido.habitantes);
            alert("Comida típica: " + paisElegido.comida);
            alert("Gracias por probarnos, estamos en fase beta!");
            alert("Adiós :)");
            break;
        }
    }
}

bienvenidaUsuario();
eleccion();
eleccion2();








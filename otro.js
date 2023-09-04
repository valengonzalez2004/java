function bienvenidaUsuario() {
    let saludo = prompt("Bienvenido, ingrese su nombre:");
    alert("Bienvenido/a " + saludo + " al juego culturizate");
    return saludo;
}

function eleccion() {
    alert("Elija una opcion: ");
}

let nombre = bienvenidaUsuario();
eleccion();
let opcion = parseInt(prompt("1.Jugar \n2.Eleccion al azar"));

while (opcion !== 1 && opcion !== 2) {
    alert("Elija una opcion correcta.");
    opcion = parseInt(prompt("1.Jugar \n2.Eleccion al azar"));
}

if (opcion === 1) {
    alert("Bienvenido al juego normal, tienes 3 vidas, así que atento!");

    let vidas = 3; // Inicialmente, el jugador tiene 3 vidas

    for (let nivel = 1; nivel <= 5; nivel++) {
        alert("NIVEL " + nivel);
        alert("GEOGRAFIA");
        let respuesta = parseInt(prompt("¿Cuál es la capital de Francia? \n1.MADRID \n2.ROMA \n3.PARIS \n4.LONDRES"));


        switch (respuesta) {

            case 3:
                alert("Correcto. Avanzas al siguiente nivel.");
                alert("NIVEL " + nivel);
                break;

            default:
                vidas--;
                alert("Incorrecto. Te quedan " + vidas + " vidas.");

                alert("ESCRITORES");
                let nivel2 = parseInt(prompt("¿Quién escribió Don Quijote de la Mancha? \n1.Miguel de Cervantes \n2.Gabriel García Márquez \n3.Leo Tolstoy \n4.William Shakespeare"));


                if (nivel2 == 1) {
                    alert("Correcto. Avanzas al siguiente nivel.");
                    alert("NIVEL " + nivel);

                } else {
                    vidas--;
                    alert("Incorrecto. Te quedan " + vidas + " vidas.");
                }

                alert("PINTORES");
                let nivel3 = parseInt(prompt("¿Quien pinto la Mona Lisa? \n1.VICENTE VAN GOGH \n2.PABLO PICASSO \n3.LEONARDO DA VINCI \n4.MICHELANGELO BUONARROTI"))

                if (nivel3 == 3) {
                    alert("Correcto. Avanzas al siguiente nivel.");
                    alert("NIVEL " + nivel);
                } else {
                    vidas--;
                    alert("Incorrecto. Te quedan " + vidas + " vidas.");
                }


                alert("GEOGRAFIA");

                let nivelUltimo = parseInt(prompt("¿Cuál es la montaña más alta del mundo? \n1.KILIMANJARO \n2.MONT BLANC \n3.MONTAÑA DE LA MESA \n4.MONTE EVEREST"))
                if (nivelUltimo == 4) {
                    alert("Correcto!");
                } else {
                    vidas--;
                    alert("Incorrecto. Te quedan " + vidas + " vidas.");
                }

                if(vidas===0){
                    alert("Perdiste el juego, no tienes más vidas.");
                    break;
            }

            
        }
        

}


    }

    if (vidas > 0) {
        alert("¡Has ganado el juego!");
    }







// }

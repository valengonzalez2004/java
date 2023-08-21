//Camelcase: cada vez que empezamos una palabra nueva se le pone una letra mayuscula

//Dato tipo string: se pone con comillas y es con texto

//Dato tipo number: se pone sin comillas y se colocan solo numeros

//Variable: un tipo de dato que puede ir variando en todo el trabajo

//Constante: un tipo de dato que despues no cambia

// ParselFloat y Parselint: se utilizan los dos para convertir cadena de texto a numero 


function bienvenida_usuario(){
let saludo=prompt("Bienvenido, ingrese su nombre:")
let nombre=saludo;
alert("Bienvenido/a " +nombre +" al campo de practicas de java script");
}
bienvenida_usuario();


function eleccion(){
alert("Elija una opcion: "); 
}
eleccion();
opcion= parseInt(prompt("1.Entrar al inicio \n2.Configuracion \n3.Registrasrse"));

while((opcion!=1) || (opcion!=2) || (opcion!=3)){

if (opcion==1){
    alert ("Bienvenido al Inicio");
    
    let inicio= parseInt(prompt("Elija un aprendizaje: \n1.Sintaxis y variables \n2.Control de flujos \n3.Ciclo e interacciones"));
    

    switch(inicio){
        case 1:
            alert("Okey hoy veremos sintaxis y variables");
            break;

        case 2:
            alert("Okey hoy veremos Control de flujos!");
            break;

        case 3:
            alert("Okey hoy veremos Ciclo e interacciones!");
            break;    

        default:
            alert("Esa opcion no esta disponible");
            break;
    }
break;

}else if (opcion==2){
    alert("Entraste a la Configuracion");

    let config=parseInt(prompt("Elija su ruta: \n1.Editar Perfil \n2.Pagos y medios \n3.Nuestras Redes"))

    switch (config){
        case 1:
            alert("Bienvenido a la configuracion de su perfil");
            break;

        case 2:
            alert("Bienvenido al apartado de pagos y medios de este curso");
            break;

        case 3:
            alert("Aca tienes mis redes sociales: \nInstagram: @valen.gonzalez04 \nFacebook: Valen Gonzalez Ibach \nLinkedin: https://www.linkedin.com/in/valent%C3%ADn-gonz%C3%A1lez-ibach-47b277238/");
            break;    

        default:
            alert("Esa opcion no esta disponible");
            break;
    }
break;

}else if(opcion==3){
    alert("Entraste al apartado de registro")

    let login=parseInt(prompt("Elija su ruta: \n1.Registrarse con Google \n2.Iniciar sesion \n3.No tengo cuenta, quiero registrarme"))

    switch (login){
        case 1:
            alert("Felicidades " +nombre+ " ya estas registrado/a a nuestra pagina!");
            break;

        case 2:
            alert("Bienvenido/a devuelta " +nombre);
            break;

        case 3:
            alert("Proximamente disponible");
            break;    

        default:
            alert("Esa opcion no esta disponible");
            break;
    }

    break;
}            
else{
    alert("Elija una opcion correcta.")
    }
    
    opcion= parseInt(prompt("1.Entrar al inicio \n2.Configuracion \n3.Registrasrse"));
}
    





// let duenioBuzo= prompt("Escriba el nombre del dueño del buzo:")

// if ((duenioBuzo=="Valen") || (duenioBuzo=="valen")){
//     alert("Verdadero")
// }else if((duenioBuzo=="Zoe") || (duenioBuzo=="zoe")){
//     alert("Tenes otra oportunidad")
// }else{
//     alert("Incorrecto")
// }



// let anioDelVehiculo=parseInt(prompt("Ingrese el año de su vehiculo"))
// let antig=2023-anioDelVehiculo;

// if (antig>=20){
//     alert("Debera pagar 3000 pesos");
// }else if (antig<2003){
//     alert("Debera pagar 10000 pesos");  
// }










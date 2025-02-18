// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declarar variable de arreglo para tener el nombre de los amigos
let nombreAmigo = [];

//Función para que se agregue el nombre ingresado en "amigo" en el arreglo
function agregarAmigo() {
    //Validar el campo para ingresar el nombre del amigo no se encuentre vacío
    if (document.getElementById("amigo").value == "") {
        // console.log("No se puede agregar un nombre vacío")
        alert("No se puede agregar un nombre vacío")

    } else {

        nombreAmigo.push(document.getElementById("amigo").value);

        //Imprimir en la lista el último registro ingresado en el arreglo
        document.getElementById("listaAmigos").innerHTML +=
            "<li>" + nombreAmigo[nombreAmigo.length - 1] + "</li>";

        //limpiar campo de texto luego de se imprima el último
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    //Realizar la selección del elemento del arreglo de forma aleatoria
    let amigos = nombreAmigo[Math.floor(Math.random() * nombreAmigo.length)];
    console.log(amigos);

    //ocultar la lista de amigos cuando se muestre el resultado del sorteo
    document.querySelector("#listaAmigos").style.display = "none";

    //Mostrar el resultado
    if (nombreAmigo.length == 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear";
    } else {
        document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigos;
    } 
    
}



function guardarDatos(){

    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.movil = document.getElementById("movil").value;
}
function recuperarDatos(){
    if((localStorage.nombre != undefined) && (localStorage.movil != undefined)){
        document.getElementById("datos").innerHTML="nombre: "  +localStorage.nombre + "<br> Num. celular: " + localStorage.movil;
    } else {
        document.getElementById("datos").innerHTML= "no ha ingresado datos en la agenda";
    }

}
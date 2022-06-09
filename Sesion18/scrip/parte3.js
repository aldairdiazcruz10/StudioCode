function guardarDato(){
    //capturando Variables
    var nombre = document.getElementById("nombre").value;
    var movil= document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;

    const datos={
           'direccion':direccion,
           'movil': movil,
           'email': email,
    };
    //aldamacenado los datos
    localStorage.setItem(nombre,JSON.stringify(datos));

    //Borrar los datos

    document.getElementById("nombre").value ="";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    //actulizar la lista
    actualizarDatos();

}
function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    let datos = localStorage.getItem(nombre);

     //separar
     datos = JSON.parse(datos);

     document.getElementById("movil").value = datos.movil;
     document.getElementById("email").value = datos.email;
     document.getElementById("direccion").value = datos.direccion;


}
function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function  actualizarDatos() {
 var registro = "";
    if(localStorage.length === 0){
        registro += '<li>Vacio</li>';
    }else{
        for(var i = 0 ; i <= localStorage.length - 1; i++){
            var key = localStorage.key(i);

            let datos = localStorage.getItem(key);

            datos = JSON.parse(datos);

      registro += `<li> <span class="nom"> ${key} </span> 
         <span class="nom"> ${datos.movil} </span> 
         <span class="nomemail"> ${datos.email} </span>
         <span class="nomedireccion"> ${datos.direccion} </span>
         </li><br>`;
            
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}
//para que solo el nombre reciba letras
//faltaria la ñ y las tildes
function Letras(evt){
    var charCode = (evt.charCode);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
        document.getElementById("reporte1").innerHTML = "";
        return true;
    }else{
        //alert("Ingrese solo letras");
        document.getElementById("reporte1").innerHTML = 'Ingresar solo Letras';
        return false;
    }
  }
  
  //para que solo el movil reciba numeros
  function Numeros(evt){
    var charCode = (evt.charCode);
    if (charCode >= 48 && charCode <= 57){
        document.getElementById("reporte2").innerHTML = "";
        return true;
    }else{
        //alert("Ingrese solo numeros");
        document.getElementById("reporte2").innerHTML = 'Ingrese solo numeros';
        return false;
    }
  }
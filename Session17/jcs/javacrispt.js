function compara(){
        var a=2;
        var b=3;
        if(a==b)
            alert("a y b son iguales");
        else
           alert(" a y b son diferentes");
    

}
function resta(x,y){
    var rest= x-y;
    document.write("<h2> la resta es: " + rest + "</h2>");
}
function suma(a,b){
    var sum= a+b;
    document.getElementById("sumar").innerHTML = "La suma es:" + sum;
}
function escribir(){
    valor =document.getElementById('entrada').ariaValueMax;
    document.getElementById('contenido').innerHTML='    '+valor;
}
function Cambios(){
    var Animal = 'Jirafa';
    switch (Animal) {
      case 'Vaca':
      case 'Jirafa':
      case 'Perro':
      case 'Cerdo':
        console.log('Este animal subirá al Arca de Noé.');
        break;
      case 'Dinosaurio':
      default:
        console.log('Este animal no lo hará.');
    }
}
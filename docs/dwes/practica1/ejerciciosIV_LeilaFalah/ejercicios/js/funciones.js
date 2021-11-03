//EJERCICIO 1
        //FUNCION PARA PEDIR EL NOMBRE
        function pedirNombre (){
            var controlStr = /^[0-9]+$/;
            do{
                var nombre = prompt("Nombre" , " ");
            }while(nombre.match(controlStr));
            return document.write("Nombre : " + nombre + "<br/>");
        }

        //FUNCION PARA PEDIR EL APELLIDO
        function pedirApe (){
            var controlStr = /^[0-9]+$/;
            do{
                var apellido = prompt("Apellido" , " ");
            }while(apellido.match(controlStr));
            return document.write("Apellido : " + apellido + "<br/>");
        }

        //FUNCION PARA PEDIR EL DNI
        function pedirDNI(){
            var controlDNI = /^\d{8}[a-zA-Z]$/;
            do{
                var DNI = prompt("DNI","");
            }while(!DNI.match(controlDNI));
            return document.write("DNI : " + DNI + "<br/>");
        }

        //FUNCION PARA PEDIR EL NÚMERO DE TELEFONO
        function pedirNum(){
            var controlNum = /^\d{9}$/;
            do{
                var num = prompt("Número de teléfono", " ");
            }while(!num.match(controlNum))
            return document.write("Num : " + num + "<br/>");
        }



        function pedirCorreo(){
            var controlCorreo = /^(.+\@.+\..+)$/;;
            do{
                var correo = prompt("E-mail", " ");
            }while(!num.match(controlCorreo))
            return document.write("Email : " + correo + "<br/>");
        }


 //EJERCICIO 2       
function eliminarTexto(texto){
    alert("SE VA A ELIMINAR EL TEXTO QUE HAY EN LA PÁGINA");
            document.getElementById("texto").innerHTML = "  ";
    alert("EL TEXTO HA SIDO ELIMINADO CON ÉXITO.");
}

//EJERCICIO 3
function verEnlaces(){

    
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    document.write("Numero de enlaces = "+ enlaces.length);

	// Direccion del penultimo enlace
    var mensaje = "El penultimo enlace apunta a: "+ enlaces[enlaces.length-2].href;
    document.write(mensaje + "<br>");

	// Numero de enlaces que apuntan a http://prueba
    var contador = 0;
    for(var i=0; i<enlaces.length; i++) {
      // Es necesario comprobar los enlaces http://prueba y
      // http://prueba/ por las diferencias entre navegadores

      if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
        contador++;
      }
    }
    document.write ( contador + " enlaces apuntan a http://prueba")
  
	// Numero de enlaces del tercer párrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces2 = parrafos[2].getElementsByTagName("a");
    document.write( "Numero de enlaces del tercer párrafo = "+enlaces2.length);

}

//EJERCICIO 4
function mostrar() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";

    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
  }


//EJERCICIO 5
function añadir() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Prueba");
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);

    var nuevoElemento = "<li>Probando</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
}
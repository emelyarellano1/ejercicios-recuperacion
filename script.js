// Ejercicios de recuperacion 
// #1 Ejercicio de los numeros: 
// Elabora una Funcion a la cual enviemos tres enteros y muestren el menor 
function mostrarelMenor(arreglo){
	var arreglo=[];
	var numMenor = Math.min.apply(null,arreglo);
	for (var i = 0; i < 3; i++) {
		arreglo.push(prompt("Inserte un numero"))
	}
	alert("El numero menor entre" + arreglo[0] + "," + "y" + arreglo[2]+ "es" + Math.min.apply(null,arreglo)); 
}

// #2 Ejercicio de los numeros: 
// Escribe el codigo de una funcion a la que se pasa como paramentro un  numero entero y devuelve como resultado un cadena de texgto que indica si el numero es par o impar


// #3 Ejercicio de los numeros: 
// Realizar una funcion a la cual le envie tres enteros y los mustre ordenados de menor a mayor
function menorAmayor(ordenados){
	var ordenados =[];
	var text ="Numeros ordenados de menor a mayor son";
	for (var i = 0; i < 4; i++) {
		ordenados.push(prompt("ingresa un numeros"))
	}
	function prueva(primero, segundo){
		return primero-segundo;
	}
	alert(text +ordenados.sort(comparacion));
}
// #3 Ejercicio de los numeros: 
// Definir una funcion que muestre informacion sobre una cadena de texto que se le pasa argumento.
// A partir de la cadena que se le pasa la funcion de terminada si esa cadena esta formada solo por mayusculas, solo por minusculas
// o por una mezcla de ambas. 

function cadenadetexto(){

}
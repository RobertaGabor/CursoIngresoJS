/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var largoDeHilo

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;
	largoDeHilo=perimetro/3;
	largoDeHilo=parseInt(largoDeHilo);

	console.log("El terreno se debe alambrar con 3 hilos de alambre de " + largoDeHilo);




}
function Circulo () 
{ 
	var radio;
	var perimetro;
	var largoDeHilo;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	perimetro=radio*2*Math.PI;
	perimetro=parseInt(perimetro);

	largoDeHilo=perimetro/3;
	largoDeHilo=parseInt(largoDeHilo);

	console.log("Se debe alambrar con 3 hilos de " +largoDeHilo + " de largo");
	
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasDeCal;
	var bolsasDeCemento;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	area=largo*ancho;

	bolsasDeCal=area*3;
	bolsasDeCemento=area*2;

	console.log("Se necesita " + bolsasDeCal + " bolsas de cal y " + bolsasDeCemento + " bolsas de cemento");


	
}
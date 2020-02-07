/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaDePrecios;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaDePrecios=primerPrecio+segundoPrecio+tercerPrecio;


	console.log(sumaDePrecios);

	
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaDePrecios;//se puede hacer directo la suma entre parentesis dividido 3?
	var promedioDePrecios;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaDePrecios=primerPrecio+segundoPrecio+tercerPrecio;

	promedioDePrecios=sumaDePrecios/3;
	promedioDePrecios=parseInt(promedioDePrecios);

	console.log(promedioDePrecios);
	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaDePrecios;
	var precioFinal;

	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaDePrecios=primerPrecio+segundoPrecio+tercerPrecio;

	precioFinal=sumaDePrecios+sumaDePrecios*21/100;
	precioFinal=parseInt(precioFinal);


	console.log(precioFinal);


	
}
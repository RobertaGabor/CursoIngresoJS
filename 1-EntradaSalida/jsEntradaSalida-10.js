/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//var importe;
	//var importeConDescuento;

	//importe=document.getElementById('importe').value;
	//importe=parseInt(importe);

	//importeConDescuento=importe+importe*25/100;

	//document.getElementById('resultado').value=importeConDescuento;

	var importe;
	var descuento;
	var importeConDescuento;

	importe=prompt("Ingrese el importe");//que hacer con la casilla de importe
	importe=parseInt(importe);

	descuento=prompt("Ingrese el descuento","Ej:25");
	descuento=parseInt(descuento);

	importeConDescuento=importe-importe*descuento/100;

	document.getElementById('resultado').value=importeConDescuento;





	
}

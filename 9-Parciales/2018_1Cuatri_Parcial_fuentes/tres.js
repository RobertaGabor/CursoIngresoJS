function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;

	precio=prompt("Ingrese precio","Ej:200");
	precio=parseInt(precio);

	descuento=prompt("Ingrese descuento","Ej:25");
	descuento=parseInt(descuento);

	precioConDescuento=precio-precio*descuento/100;

	document.getElementById('elPrecioFinal').value=precioConDescuento


}

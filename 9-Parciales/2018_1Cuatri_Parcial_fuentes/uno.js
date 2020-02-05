
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingresar ancho de rectangulo","Ej:20");
	ancho=parseInt(ancho);
	largo=prompt("Ingresar largo de rectangulo","Ej:10");
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;

	alert(perimetro);
	

}

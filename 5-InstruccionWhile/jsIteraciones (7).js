function mostrar()
{
	var contador;
	var acumulador;
	var numero;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="Si";

	while(numero!=respuesta)
		{
			numero=prompt("Ingrese numero","Para finalizar operacion escribir Si");
			numero=parseInt(numero);
		
			contador= contador+1;
			acumulador=acumulador+numero;
		}
	
		document.getElementByd('suma').value=acumulador
		document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
function mostrar()
{
	var contador;
	var acumulador;
	var numero;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="Si";

	while(respuesta=="Si")
		
		{
			numero=prompt("Ingrese numero");
			numero=parseInt(numero);
		
			contador= contador+1;
			acumulador=acumulador+numero;
		
			respuesta=prompt("Ingrese si para continuar de lo contratio terminara");//doble prompt para dos peticiones
		}
		document.getElementById('suma').value=acumulador
		document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
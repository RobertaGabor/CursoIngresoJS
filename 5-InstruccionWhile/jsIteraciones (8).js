function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var numero;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta="Si";

	while(respuesta=="Si")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		contador=contador+1;
		positivo=positivo+numero;
		negativo=negativo-numero;

		respuesta=prompt("escribir Si para continuar, sino finalizará");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
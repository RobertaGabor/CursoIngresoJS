function mostrar()
{

	var numero
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta="si";

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);

		contador=contador+1

		if(numero>0)
		{
			console.log(numero);
			positivo=positivo+numero;	
		}
		else
		{
			if(numero<0)//si lo hago al reves puedo sacar el segundo if y dejarlo en ese
			{		
				console.log(numero);
				negativo=negativo*numero;
			}
		}	
		respuesta=prompt("Ingrese si para continuar, sino finalizará la operacion","Ej:si");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN

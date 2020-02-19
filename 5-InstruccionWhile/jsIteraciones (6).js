function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)//te pide 5 numeros
	{
		numero = prompt("Ingrese su numero");
		numero=parseInt(numero);
		contador= contador+1;//hasta 5
		console.log(contador);

		acumulador=acumulador+numero;//0 mas el numero que se va ingresando
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroIngresado; 
var contadorIntentos;
var numeroSecreto;

function comenzar()//va solo lo que se ejecuta con este boton
{
	numeroSecreto=Math.floor(Math.random() * 100) + 1;//va antes de poner nuestro numero
	numeroSecreto=parseInt(numeroSecreto);
	console.log(numeroSecreto);


	contadorIntentos=0;//se define antes de la primera vuelta
}

function verificar()//va lo que se ejecuta con este boton, que esta en consideracion
{
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado==numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " +contadorIntentos + " intentos");
	}
	else
	{
		if(numeroIngresado>numeroSecreto)
		{
			alert("Se pasó");
		}
		else
		{
			alert("Le falta");
		}
	}

	contadorIntentos=contadorIntentos+1;//se va anotando cada vez que verificas

	document.getElementById('intentos').value=contadorIntentos;	
}

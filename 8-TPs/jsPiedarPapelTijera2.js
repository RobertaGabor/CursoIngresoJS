var eleccionMaquina;
var contadorDeEmpates;
var contadorDeGanadas;
var contadorDePerdidas;



function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*3 )+1;
	console.log(eleccionMaquina);
	contadorDeEmpates=0;
	contadorDePerdidas=0;
	contadorDeGanadas=0;
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
		alert("Empataste");
		contadorDeEmpates++;
		break;
		case 2:
		alert("Perdiste");
		contadorDePerdidas++;
		break;
		case 3:
		alert("Ganaste");
		contadorDeGanadas++;
		break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
		alert("Ganaste");
		contadorDeGanadas++;		
		break;
		case 2:
		alert("Empataste");
		contadorDeEmpates++;
		break;
		case 3:
		alert("Perdiste");
		contadorDePerdidas++;		
		break;
	}
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
		alert("Perdiste");
		contadorDePerdidas++;		
		break;
		case 2:
		alert("Ganaste");
		contadorDeGanadas++;		
		break;
		case 3:
		alert("Empataste");
		contadorDeEmpates++;
		break;
	}

}//FIN DE LA FUNCIÓN

function mostrarResultado(contadorDeGanadas,contadorDePerdidas,contadorDeEmpates)
{
	document.getElementById('ganadas').value=contadorDeGanadas;
	document.getElementById('perdidas').value=contadorDePerdidas;
	document.getElementById('empatadas').value=contadorDeEmpates;
}
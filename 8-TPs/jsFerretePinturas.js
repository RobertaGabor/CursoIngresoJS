/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaInicial;
	var FahrenheitACentigrados;

	temperaturaInicial=document.getElementById('Temperatura').value;

	FahrenheitACentigrados=(temperaturaInicial-32)*5/9;

	console.log(temperaturaInicial + " Fahrenheit son " + FahrenheitACentigrados + " Centigrados");


	

	
}

function CentigradosFahrenheit () 
{
	var temperaturaInicial;
	var centigradosAFahrenheit;

	temperaturaInicial=document.getElementById('Temperatura').value;

	centigradosAFahrenheit=temperaturaInicial*9/5+32;

	console.log(temperaturaInicial + " centigrados son " + centigradosAFahrenheit + " fahrenheit");
	
}

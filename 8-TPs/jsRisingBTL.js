/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */ 
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;

 	sueldoBruto=0;
 	estadoCivil=0;

 	while(isNaN(edad)||edad<18||edad>90)
 	{
 		edad=prompt("ingresar edad");
 	}

 	while(sexo!="m"&&sexo!="f")
 	{
 		sexo=prompt("Ingrese sexo","ej: m o f");
 	}

 	while(isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4)//lo contrario para que pida devuelta lo que esta mal
 	{
 		estadoCivil=prompt("Ingrese 1-para soltero, 2-para casado, 3-para divorciado, 4-para viudo");
 	}
 	 if(estadoCivil==4)// LA LOGICA SIEMPRE VA AFUERA DE LA VALIDACION, VALIDO --> LOGICA
 	{
 		estadoCivil="Viudo";
 	}
 	else
 	{
 		if(estadoCivil==3)
 		{
 			estadoCivil="Divorciado";
 		}
 		else
 		{
 			if(estadoCivil==2)
 			{
 				estadoCivil="Casado";
 			}
 			else
 			{
 				if(estadoCivil==1)
 				{
 				 	estadoCivil="Soltero";
 				}
 			}
 		}
 	}
 	
 	while(isNaN(sueldoBruto) || sueldoBruto<8000)
 	{
 		sueldoBruto=prompt("Ingrese sueldo bruto");
 	}

 	while(isNaN(numeroLegajo)|| numeroLegajo<1000||numeroLegajo>9999)
 	{
 		numeroLegajo=prompt("Ingrese numero de legajo");
 	}

 	while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
 	{
 		nacionalidad=prompt("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados","ej: A");	
 	}
 	
 	if(nacionalidad=="A")
 		{
 			nacionalidad="Argentino";
 		}
 		else
 		{
 			if(nacionalidad=="E")
 			{
 				nacionalidad="Extranjero";
 			}
 			else
 			{
 				if(nacionalidad=="N")
 				{
 					nacionalidad="Nacionalizado";
 				}
 			}
 		}
 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=numeroLegajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;
}

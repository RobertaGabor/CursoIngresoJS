function mostrar()
{
 	var edad;
 	var nombre;
 	var sexo;
 	var notaFinal;
 	var respuesta;
 	var contadorVaron;
 	var promedioDeMenores;
 	var acumuladorDeMenores;
 	var contadorDeMenores;
 	var promedioAdolescentes;
 	var acumuladorDeAdolescentes;
 	var contadorDeAdolescentes;
 	var acumuladorDeMayores;
 	var contadorDeMayores;
 	var promedioDeMayores;
 	var promedioMujeres;
 	var promedioVarones;
 	var acumuladorDeMujeres;
 	var contadorDeMujeres;
 	var acumuladorDeVarones;
 	var contadorDeVarones;

 	respuesta="si";
 	contadorVaron=0;
 	acumuladorDeMenores=0;
 	contadorDeMenores=0;
 	acumuladorDeAdolescentes=0;
 	contadorDeAdolescentes=0;
 	acumuladorDeMayores=0;
 	contadorDeMayores=0;
 	acumuladorDeMujeres=0;
 	contadorDeMujeres=0;
 	acumuladorDeVarones=0;
 	contadorDeVarones=0;

 	while(respuesta=="si")
 	{
 		nombre=prompt("Ingrese nombre de estudiante");
 		while(!isNaN(nombre))
 		{
 			nombre=prompt("Ingrese nombre de estudiante");
 		}

 		edad=prompt("Ingrese edad");
 		edad=parseInt(edad);
 		while(isNaN(edad)||edad<1||edad>100)
 		{
			edad=prompt("Ingrese edad");
 			edad=parseInt(edad);
 		}

 		sexo=prompt("Ingrese sexo","f o m");

 		while(!isNaN(sexo)||sexo!="m"&&sexo!="f")
 		{
  			sexo=prompt("Ingrese sexo","f o m");	
 		}

 		notaFinal=prompt("Ingrese nota final");
 		notaFinal=parseInt(notaFinal);

 		while(isNaN(notaFinal)||notaFinal<0||notaFinal>10)
 		{
 			notaFinal=prompt("Ingrese nota final");
 			notaFinal=parseInt(notaFinal);
 		}

 		if(sexo=="m"&&notaFinal>6)
 		{
 			contadorVaron++;
 		}

 		if(edad>17)
 		{
 			acumuladorDeMayores=acumuladorDeMayores+notaFinal;
 			contadorDeMayores++;
 		}
 		else
 		{
 			if(edad<18&&edad>11)
 			{
 				acumuladorDeAdolescentes=acumuladorDeAdolescentes+notaFinal;
 				contadorDeAdolescentes++;
 			}
 			else
 			{
 				acumuladorDeMenores=acumuladorDeMenores+notaFinal;
 				contadorDeMenores++;
 			}
 		}
 		if(sexo=="f")
 		{
 			acumuladorDeMujeres=acumuladorDeMujeres+notaFinal;
 			contadorDeMujeres++;
 		}
 		else
 		{
 			acumuladorDeVarones=acumuladorDeVarones+notaFinal;
 			contadorDeVarones++;
 		}

 		respuesta=prompt("Desea continuar?","si para continuar");		
 	}
 	promedioDeMayores=acumuladorDeMayores/contadorDeMayores;
 	promedioAdolescentes=acumuladorDeAdolescentes/contadorDeAdolescentes;
 	promedioDeMenores=acumuladorDeMenores/contadorDeMenores;
 	promedioMujeres=acumuladorDeMujeres/contadorDeMujeres;
 	promedioVarones=acumuladorDeVarones/contadorDeVarones;
 	document.write("<br> varones aprobados: "+contadorVaron);
 	document.write("<br> promedio de menores: "+promedioDeMenores);
 	document.write("<br> promedio de mayores: "+promedioDeMayores);
 	document.write("<br> promedio de adolescentes: "+promedioAdolescentes);
 	document.write("<br> promedio de varones: "+promedioVarones);
 	document.write("<br> promedio de mujeres: "+promedioMujeres);

}

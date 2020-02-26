function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var contador;
	var sumaTotal;

	contador=0;
	contador=parseInt(contador);//preguntar xq parseo
	sumaTotal=0;

	while(contador<5)
	{ 
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		sexo=prompt("Ingrese sexo");
		contador=contador+1;
		sumaTotal=sumaTotal+nota;

		while(isNaN(nota)||nota<0||nota>10)
		{
			nota=prompt("Ingrese nota");
		}
		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("Ingrese sexo");
		}
    }


    promedio=sumaTotal/contador;
    alert("promedio de notas totales: "+promedio);

}

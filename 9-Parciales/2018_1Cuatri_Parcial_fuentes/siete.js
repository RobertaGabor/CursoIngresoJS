function mostrar()
{ 
	var nota;
	var sexo;
	var promedio;
	var contador;
	var sumaTotal;
	var minimo;
	var minimoSexo;//chequear que coño e eto

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
    
    if(contador==1)
    {
    	minimo=nota;
    }
    else
    {
    	if(minimo>nota)
    	{
    		minimo=nota;
    		minimoSexo=sexo;//variable auxiliar, crear por cada cambio
    	}
    }
    

    promedio=sumaTotal/contador;
    alert("promedio de notas totales: "+promedio);
    alert("La nota mas baja es "+minimo+ " de sexo "+minimoSexo);
}

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	//var aumento;
	var resultadoSueldoAumentado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	//aumento=sueldo*10/100;
	//aumento=parseInt(aumento);

	//resultadoSueldoAumentado=sueldo+aumento;//mi forma
	resultadoSueldoAumentado=sueldo+sueldo*10/100;
	document.getElementById('resultado').value=resultadoSueldoAumentado;



	
}

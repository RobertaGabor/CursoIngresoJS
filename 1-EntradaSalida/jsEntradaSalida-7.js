/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno;//no van numeros en las variable 1 es UNO
	var numeroDos;
	var resultadoDeSuma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);//se parsea en ecuaciones si o si para definir que es un caracter numerico
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);//parsear justo despues de asignar valor

	resultadoDeSuma=numeroUno+numeroDos;

	//alert(resultadoDeSuma);

	console.log(resultadoDeSuma);//en vez de que lo vea el usuario lo ves en console de inspeccionar elemento

	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoDeResta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultadoDeResta=numeroUno-numeroDos;

	console.log(resultadoDeResta);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoDeMultiplicacion;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultadoDeMultiplicacion=numeroUno*numeroDos;

	console.log(resultadoDeMultiplicacion);
	
}

function dividir()
{
	var numeroUno
	var numeroDos
	var resultadoDeDivision

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultadoDeDivision=numeroUno/numeroDos;

	console.log(resultadoDeDivision);
}


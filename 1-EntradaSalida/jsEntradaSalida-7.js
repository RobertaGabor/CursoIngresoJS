/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoDeSuma;//no van numeros en las variables

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);//se parsea siempre en las ecuaciones numericas para definir que son núemros si o si
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);//parsear justo despues de asignar el valor

	resultadoDeSuma=primerNumero/segundoNumero;
	console.log(resultadoDeSuma);//visualiza en cosola de inspeccion en chrome, es similar a alert, devuelve datos


	
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}


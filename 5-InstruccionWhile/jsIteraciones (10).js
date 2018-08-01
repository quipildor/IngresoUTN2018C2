function mostrar()
	/*1-Suma de los negativos.
					2-Suma de los positivos.
					3-Cantidad de positivos.
					4-Cantidad de negativos.
					5-Cantidad de ceros.
					6-Cantidad de números pares.
					7-Promedio de positivos.
					8-Promedios de negativos.
					9-Diferencia entre positivos y negativos, (positvos-negativos). 
					*/
{
		var numero
		var acumNegativos = 0;
		var acumPositivos = 0;
		var contPositivos = 0;
		var contNegativos = 0;
		var contCeros = 0;
		var contPares = 0;
		var promedioPositivo;
		var promedioNegativo;
		var diferencia; 
		var respuesta;

do
{
	numero = parseInt(prompt("Ingrese un numero"));

	if ( numero >0 )	
{
		contPositivos++;
		acumPositivos = acumPositivos + numero;

}
		else if ( numero <0)
{	
			contNegativos++;
			acumNegativos = acumNegativos + numero;
}
		else
{	
			contCeros++;
}

		if (numero % 2 == 0){

		contPares++;
		}

	respuesta = prompt ("Desea continuar ");
}while ( respuesta == "si");


if (contNegativos != 0)
{
	promedioNegativo = acumNegativos / contNegativos;

}
if (contPositivos != 0)
{
	promedioPositivo = acumPositivos / contPositivos;

}

diferencia = acumPositivos - acumNegativos;

document.write("1- La suma de los negativos es: " + acumNegativos + "<br>");
document.write("2- La suma de los positivos es: " + acumPositivos + "<br>");
document.write("3- La cantidad de los negativos es: " + contNegativos + "<br>");
document.write("4- La cantidad de los positivos es: " + contPositivos + "<br>");
document.write("5- La cantidad de los ceros es: " + contCeros + "<br>");
document.write("6- La cantidad de los pares es: " + contPares + "<br>");
document.write("7- El promedio de los negativos es: " + promedioNegativo + "<br>");
document.write("8- El promedio de los positivos es: " + promedioPositivo + "<br>");
document.write("9- La diferencia entre positivos y negativos es: " + diferencia + "<br>");

}




//FIN DE LA FUNCIÓN

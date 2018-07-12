function mostrar()
{
var num1;
var num2;
var resultado;

num1 = parseInt(prompt("Escriba un numero"));
num2 = parseInt(prompt("Escriba otro numero"));

if (num1 == num2)
{
    alert(num1.toString() + num2)
}
else if (num1 > num2) 
{
    alert("El resultado es " + (num1 - num2))
}
else
{
    resultado = num1 + num2

    if (resultado > 10)
    alert("La suma es " + resultado + " y supero el 10")
    
}
}

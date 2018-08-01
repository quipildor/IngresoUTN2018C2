function mostrar()
{

    var contadorDivisores =0;
    var numero;
    
    numero = parseInt(prompt("Ingrese un numero:  "));
    
    for ( var i= 1 ; i <= numero ; i++ )
    {
        
        if( numero % 1==0  ){
    console.log(i);
    contadorDivisores++;
        }   

if (contadorDivisores == 2){
    console.log(numero + "es primo");
}

else {
    console.log(numero + "no es primo");
}
    }
    


}//FIN DE LA FUNCIÓN
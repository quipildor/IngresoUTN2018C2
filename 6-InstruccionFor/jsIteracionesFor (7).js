function mostrar()
{

    var contadorDivisores =0;
    var numero;
    
    numero = parseInt(prompt("Ingrese un numero:  "));
    
    for ( var i= 1 ; i <= numero ; i++ )
    {
        
        if( numero % 1==0  )
        {
    console.log(i);
    contadorDivisores++;
        }   
    }
    
    console.log("Cantidad de divisores: " + contadorDivisores);


}//FIN DE LA FUNCIÓN
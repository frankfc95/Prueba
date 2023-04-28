//Ejercicio#1 Promedio de N numeros
function getAverrage(){
    var numero = parseInt(prompt("Inserte la cantidad de numeros a evaluar para el promedio"))
    var contador=0, suma=0, p = 0, miarray= [numero];
    while (contador<numero){
        i = parseFloat(prompt("Inserte numero para el array"))
        miarray[contador] = i;
        suma = suma + i;
        contador++;
    }
    p=suma/numero;
    alert("Los numeros ingresados son: " +miarray +"\nLa suma de los numeros es: " +suma +"\nEl promedio es:"+p)
} 
getAverrage();
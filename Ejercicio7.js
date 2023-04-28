//Ejercicio#7 El reverso de una matriz sin usar una matiz temporal
function reverseInPlace(){
    var condicional = 1, contador = 0, palabras= [];
    while (condicional != 2){
        i = prompt("Inserte una palabra")
        palabras[contador] = i;
        contador++;
        condicional = prompt("Desea ingresar otra variable \n1. SI\n2. NO")
    }
    var reverso = 1
    palabras.reverse();
    alert("Las palabras en reversa son: " +palabras +"\ncantidad de palabras es: " +palabras.length +"\nreverso: "+reverso)
}
reverseInPlace()
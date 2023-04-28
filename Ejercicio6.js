//Ejercicio#6 Palabra mas larga en una matriz
function findLongestWord(){
    var condicional = 1, contador = 0, palabras= [];
    while (condicional != 2){
        i = prompt("Inserte una palabra")
        palabras[contador] = i;
        contador++;
        condicional = prompt("Desea ingresar otra variable \n1. SI\n2. NO")
    }
    let mayor = palabras[0];
    for(var i = palabras.length -1; i >=0; i--){
        if(palabras[i].length >mayor.length) {
            mayor = palabras[i];
        }
    }
    alert("Las palabras ingresadas son: " +palabras +"\nLa palara mas grande es: " +mayor)
}
findLongestWord()
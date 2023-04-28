//Ejercicio#4 Remover Duplicados
function removeDuplicates(){
    var condicional = 1, contador = 0, miarray= [],rduplicados = [];
    while (condicional != 2){
        i = prompt("Inserte una variable para la matriz")
        miarray[contador] = i;
        contador++;
        condicional = prompt("Desea ingresar otra variable \n1. SI\n2. NO")
    }
    for(var i = miarray.length -1; i >=0; i--){
        if(miarray.indexOf(miarray[i]) !== i) {
            rduplicados[i] = ' ';
        }
        else{
            rduplicados[i] = miarray[i];
        }
    }
    alert("Los numeros ingresados son: " +miarray +"\n sin duplicados:" +rduplicados)
}
removeDuplicates();
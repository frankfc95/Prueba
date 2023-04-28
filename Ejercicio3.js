//Ejercicio#3 Cantidad de vocales de una palabra
function countVowels(){
    const palabra = prompt("Inserte una palabra:");
    var vocales = palabra.match(/[aeiou]/gi);
    var numvocales = vocales.length;
    alert("La palabra ingresada es: " +palabra +"\nLas vocales ingresados son: " +vocales +"\nLa cantiddad de vocales ingresados son: " +numvocales)
}
countVowels();
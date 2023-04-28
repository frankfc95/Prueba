//Ejercicio#2 Palabras en reversa
function reverseWords(){
    const palabras = prompt("Inserte una frase:");
    var separadas = palabras.split(" ").reverse().join(" ");
    alert("Las palabras ingresados son: " +palabras +"\ncantidad de palabras es: " +palabras.length +"\nseparadas: "+separadas)
}
reverseWords();
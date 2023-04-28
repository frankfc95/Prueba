//Ejercicio#5 Devuelve primera letra de cada palabra en mayuscula
function capitalizeFirstLetters(){
    const oracion = prompt("Inserte una oracion:");
    var palabras = oracion.split(" ");
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
    palabras = palabras.join(" ");
    alert("La oracion ingresada es: " +oracion +"\nLa oracion con iniciales mayusculas es: : " +palabras)
}
capitalizeFirstLetters()
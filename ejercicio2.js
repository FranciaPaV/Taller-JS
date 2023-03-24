//Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles reposan en la base de datos
//central, para ello debe programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el 
//nombre del piloto asignado a cada nave.
//Tenga en cuenta que el formato de todos los datos es el siguiente:
//ARQ2555: Sara Bel-Sun
//ARQ2556: Nodin Chavdri
//ARQ2557: Finn
//aplicar el metodo Split()

function dividirCadena(codigo){
    let nombre=codigo.split(":")[1]  //El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
    let nave=codigo.split(":")[0]    //sintaxis: cadena.split([separador][,limite])
    console.log("el nombre del piloto asignado a la nave " +nave+ " es: "+nombre)
}
dividirCadena("ABC123:JUANJOSE")

//funcion flecha

const dividirCadenaFlecha = (codigo) => {
    let nombre=codigo.split(":")[1]
    let nave=codigo.split(":")[0]
    console.log("el nombre del piloto asignado a la nave " +nave+ " es: "+nombre)
}
dividirCadenaFlecha("DEF456:FRANCIA")
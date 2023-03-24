//Yoda, necesita enseñar a sus aprendices a calcular la distancia  a la que cualqueira de los planetas de la ruta N-14 
//se encuentra del planeta Naboo.   para calcular la distancia se debe recibir las coordenadas X,Y del palneta en UA
//y establecer la distamcia como: raiz cuadrada de (x2-x1)a la 2 + (y2-y1) a la 2
function medirDistancia1(x1,y1,x2,y2){
    let restax=x2-x1
    let restay=y2-y1
    let potenciax=Math.pow(restax,2)
    let potenciay=Math.pow(restay,2)
    let suma=potenciax+potenciay
    let raiz= Math.sqrt(suma)
    return raiz
}

let distanciaCalculada1= medirDistancia1(10,10,5,5)
console.log(`la distancia calculada fue de ${distanciaCalculada1} UA`)

//Funcion Flecha
let medirDistancia2 = (x1,y1,x2,y2) =>{
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
let distanciaCalculada2= medirDistancia2(10,10,5,5)
console.log(`la distancia calculada fue de ${distanciaCalculada2} UA`)

//esta es otra manera de hacerlo economizando codigo ahorrando variables
function medirDistancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
let distanciaCalculada= medirDistancia(10,10,5,5)
console.log(`la distancia calculada fue de ${distanciaCalculada} UA`)
//La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante, Cree una función de flecha que
//permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día

function temperaturaMedia (temperaturaMaxima, temperaturaMinima){
    let media =  (temperaturaMaxima + temperaturaMinima)/2
    console.log("La temperatura media de la luna del dia de hoy es: " + media)

}
temperaturaMedia(100, 20)

// funcion flecha
const temperaturaMed = (temperaturaMaxima,temperaturaMinima) =>{
    let media =  (temperaturaMaxima + temperaturaMinima)/2
    console.log("La temperatura media de la luna del dia de hoy es: " + media)
}
temperaturaMed(200, 40)
// se necesita clasificar 10 números enteros positivos o negativos que contienen códigos de naves de guerra. Diseño
//un algoritmo que permita recibir dichos 50 números e indicar ¿Cuál fue el más cercano a cero? (Si el número es negativo se
//debe mostrar el resultado del valor absoluto)
function mostrarNumeroMasCercano(){
    let numeroMasCercano = null;
        for(i=0; i < 10; i++){
            let numero = prompt("Ingrese número") //prompt muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto
            let valorAbsoluto = Math.abs(numero);
            if(numeroMasCercano === null){
                numeroMasCercano = valorAbsoluto;
            }
            else{
                if(valorAbsoluto < numeroMasCercano){
                numeroMasCercano = valorAbsoluto;
                }
            }
        }
        return console.log(`El número más cercano a 0 es: ${numeroMasCercano}`)
    }
    mostrarNumeroMasCercano()
    
    //Función Flecha
    
    //const mostrarNumeroMasCercano = () => {
    //let numeroMasCercano = null;
    //	for(i=0; i < 10; i++){
    //		let numero = prompt("Ingrese número")
    //		let valorAbsoluto = Math.abs(numero);
    //		if(numeroMasCercano === null){
    //			numeroMasCercano = valorAbsoluto;
    //		}
    //		else{
    //			if(valorAbsoluto < numeroMasCercano){
    //			numeroMasCercano = valorAbsoluto;
    //			}
    //		}
    //	}
    //	return console.log(`El número más cercano a 0 es: ${numeroMasCercano}`)
    //}
    //mostrarNumeroMasCercano()
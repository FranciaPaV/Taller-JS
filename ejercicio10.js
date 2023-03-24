//Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta:
//alimento = {nombre, tipo (Puede ser vegetal, animal, insecto), nivel de energía aportado (números entre 1 00-500)}
//Cree un programa que permita recibir 300 alimentos y mediante una función primaria después de 5 segundos se pueda obtener solo los
//alimentos de tipo vegetal que entreguen más de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la
//sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu
//generar un aleatorio arreglo de objetos para generar 300 nombres q me piden

// Función que permite crear una palabra aleatoria.
function generarPalabraAleatoria(length){
    const letra = 'abcdefghijklmnopqrstuvwxyz';
    let resultado ='';
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letra.length);
    resultado += letra[randomIndex];
  }
  return resultado;
}

//Función que permite iterar entre Animal, Vegetal e Insecto y elegir uno de forma aleatoria. 
function generarTipo(){
    let tipos = ["Animal", "Vegetal", "Insecto"]
    const tipoRandom = Math.floor(Math.random() * tipos.length)
    return tipos[tipoRandom]
}

//Arreglo vacío de alimentosGrogu, luego se llenará con el objeto alimento grogu. 
let alimentosGrogu=[];

// Creamos el ciclo que nos creará los 300 objetos alimentoGrogu; a su vez las propiedades del objeto alimentoGrogu que son nombre, tipo y nivel de energía, se llenarán con las funciones hechas arriba para generar esos valores de manera aleatoria. 
for(i=0; i<300; i++){
alimentoGrogu ={}
alimentoGrogu["nombre"] = generarPalabraAleatoria(5)
alimentoGrogu["tipo"] = generarTipo()
alimentoGrogu["nivelEnergia"] = Math.floor(Math.random() * 500)
alimentosGrogu.push(alimentoGrogu);
}

//Mostramos el arreglo ahora lleno con los 300 objetos
console.log(alimentosGrogu)

//Falta función principal
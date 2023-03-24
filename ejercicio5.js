//Watto paga a su personal de ventas un salario de 3.500.000 mensuales, más una comisión de 1.500.000 por cada licencia 
//de software vendida, menos el 5% de deducciones por impuestos sobre el total devengadp. Codifica un programa que
//calcule e imprima el salario mensual de un vendedor dado

function salario (salarioMensual, comision){
    let salarioDevengado = (salarioMensual+comision)
    let descuento = (salarioDevengado*0.05)
    let salarioNeto = (salarioDevengado-descuento)
    console.log(`El salario neto del vendedor en este mes fue de: $ ${salarioNeto}`)
}
salario(3500000,1500000)

//Funcion flecha

const salarioFlecha = (salarioMensual, comision) => {
    let salarioDevengado = (salarioMensual+comision)
    let descuento = (salarioDevengado*0.05)
    let salarioNeto = (salarioDevengado-descuento)
    console.log(`El salario neto del vendedor en este mes fue de: $ ${salarioNeto}`)
}
salarioFlecha(4500000,1500000)
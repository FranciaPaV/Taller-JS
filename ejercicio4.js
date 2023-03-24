//QUI-GON JINN está encargado de revisar n sables de luz y contabilizar la cantidad de energía de sables que tienen negativa en Joules.
//Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables defectuosos con energía negativa fue de 2 sables

function sablesDefectuosos(sable) {
	let negativos = 0;
	sable.forEach(num => {        //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
		if (num < 0) negativos++;
	});
	return negativos;
  }
  let defectuosos = [1,2,3,4,5,-1,-2,-3,-4,-5,-6];
console.log("La cantidad de sables defectuosos es de: ", sablesDefectuosos(defectuosos));

//funcion flecha

const sablesDefectFlecha = (sable) =>{
	let negativosFlecha = 0;
	sable.forEach(num => {
		if (num < 0) negativosFlecha++;
	});
	return negativosFlecha;
  }
  let defectuososFlecha = [1,2,3,4,5,-1,-2,-3,-4];
console.log("La cantidad de sables defectuosos es de: ", sablesDefectFlecha(defectuososFlecha));
/* let array = ['string',1,true];
console.log(array); */

let array = ['string',1, true,['array1'],['array2']];


/* array.forEach(function(item,index){console.log(item, index)}) */
/* 
array.push('novo item no final')
console.log(array) */

/* array.pop();
console.log(array) */

/* array.unshift('novo item no inicio');
 */

/* console.log(array.indexOf(true)) */

/* array.splice(0,3)/
console.log(array) */

/* let novoarray = array.slice(0,3)
console.log(novoarray) */

let object = {string: 'string', number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

/* console.log(object)

var string = object.string;
console.log(string)

var arrayInterno = object.array;
console.log(arrayInterno); */

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno)
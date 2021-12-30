function validaArray (array,numero) {
    try{
        if (!array && !numero) throw new ReferenceError("Envie os parâmetros");

        if(typeof array != 'object') throw new TypeError("O array precisa ser do tipo object");
    
        if(typeof numero != 'number') throw new TypeError("O array precisa ser do tipo object");
    
        if(array.length != numero) throw new RangeError("O tamanho é inválido");
        
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um reference error");
            console.log(e.message);
            console.log(e.stack);
        } else if(e instanceof TypeError) {
            console.log("Este erro é um type error");
            console.log(e.message);
            console.log(e.stack);
        } else if(e instanceof RangeError) {
            console.log("Este erro é um range error");
            console.log(e.message);
            console.log(e.stack);
        } else {
            console.log("Ocorreu um tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray(5,5));

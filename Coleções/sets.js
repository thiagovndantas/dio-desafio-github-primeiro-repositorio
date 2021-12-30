const meuArrey = [30,30,40,5,223,20409,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArrey));
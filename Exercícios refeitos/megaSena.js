let numerosEscolhidos = [14, 05, 13, 31, 42];
let numerosNovos = [];

function getRandomInt(min, max) {
    for(let i = 0; i < 1;) {
        min = Math.ceil(min);
        max = Math.floor(max);
        random = Math.floor(Math.random() * (max - min)) + min;
        if (!numerosNovos.includes(random)) {
            numerosNovos.unshift(random);
            i++
        }
    }
    console.log(numerosNovos)
}

getRandomInt(0,60);

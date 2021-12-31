/* const entrada = [6,6,6,6];

function desafio4(entrada) {
    return entrada.reduce(function soma(previus,current){
        return previus + current - 1;
    },1);
}

console.log(desafio4(entrada)) */

const line = [6,6,6,6]
let saida = 0

function desafio4(entrada) {
  for (let i = 0; i< entrada.length; i++) {
    if (i==0) {
      saida = entrada[i]
    } else {
      saida = saida + entrada[i] - 1
    }
  }
}

desafio4(line);

console.log(saida);


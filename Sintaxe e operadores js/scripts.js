/* // Sintaxe e Operadores
Este repositório contém a atividade prática do Curso "Sintaxe e Operadores", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20. */

function funcao() {

    const n1 = Number(prompt('Insira o primeiro número: '));
    const n2 = Number(prompt('Insira o segundo número: '));
    const soma = n1 + n2
    var teste
    var igual

    if (n1 == n2) {
        igual = 'são iguais';
    } else {
        igual = 'não são iguais';
    }
    
    if (soma > 10 && soma < 20) {
        teste = 'maior que 10 e menor que 20';
    } else if (soma > 10 && soma > 20) {
        teste = 'maior que 10 e maior que 20';
    } else if (soma < 10 && soma < 20) {
        teste = 'menor que 10 e menor que 20';
    } else if (soma < 10 && soma > 20) {
        teste = 'menor que 10 e menor que 20';
    }

    console.log(`Os números ${n1} e  ${n2} ${igual}, sua soma é ${soma} que é ${teste}.`)
}

funcao()
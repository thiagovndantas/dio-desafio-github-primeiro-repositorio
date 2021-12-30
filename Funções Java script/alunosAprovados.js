// Aula prática
/* Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

let alunos = [['Anderson',7], ['Andressa',8], ['Igor',6], ['Paulo',5], ['Victor',7], ['Gabi',10], ['Dani',9]];
let aprovados = [];

function alunosAprovados(alunos) {
    for (let i = 0; i < alunos.length ; i++) {
        if (alunos[i][1] >= 7) {
            aprovados.push(alunos[i]);        
        }
    }
    console.log(aprovados)
}

alunosAprovados(alunos) 


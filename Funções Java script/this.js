function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const objeto = {
    nome: 'Thiago',
    idade: 24
}

console.log(calculaIdade.apply(objeto,[5]));


function calculadora () {
    const operacao = Number(prompt('Escolha uma operação\n 1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisão \n 5 - divisão inteira \n 6 - potencialização'));

    if (!operacao || operacao >=7) {
        alert('Erro - operação inválida');

    } else {

        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt ('insira o segundo valor'));
        let resultado;

    if (!n1 || !n2) {
        alert('Erro - parâmetros invaálidos')
        calculadora();

    } else {

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
    
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
    
        }
    
        
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
    
        }
    
        
        function divisaoreal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
    
        }
    
        
        function divisaointeira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a = ${resultado}`)
    
        }
    
        
        function potencializacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a  ${n2} é igual a ${resultado}`)
    
        }
    
    
    
        function novaoperacao( ){
            let opcao = prompt('Deseja fazer uma nova operação? \n 1 - sim \n 2 - não')
    
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!')
            } else {
                alert('Digite uma operação válida!')
            }
        }
    

    }

/*     
    if (operacao == 1){
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if (operacao ==3){
        multiplicacao();
    } else if (operacao ==4){
        divisaoreal()
    } else if (operacao == 5) {
        divisaointeira()
    } else if (operacao == 6) {
        potencializacao();
    } */

    switch(operacao){
        case 1:
            soma();
            break;
            case 2:
                subtracao();
                break;
                case 3:
                    multiplicacao();
                    break;
                    case 4:
                        divisaoreal();
                        break;
                        case 4:
                            divisaointeira();
                            break;
                            case 6:
                                potencializacao();
                                break;
    }

    novaoperacao()
        
    }
    
    

    }




calculadora()


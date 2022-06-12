function calculadora() {
  const operacao = Number(prompt("escolha uma opção:\n 1 - soma (+)\n 2 - substração (-)\n 3 - multiplicação (*)\n 4 - divisão real(/)\n 5 - divisão inteira (%)\n 6 - Potenciação (**)"));
 
  if (!operacao || operacao >= 7 || operacao < 1) {
    alert('Erro - operação invalida');
    calculadora();
  } else {

    let n1 = Number(prompt("digite o primeiro valor"));
    let n2 = Number(prompt("digite o segundo valor"));
    let resultado;

    if (!n1 || !n2) {
      alert('Erro - parametros invalidos!');
      calculadora();
    } else {

      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`o resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt('Deseja realizar outra operação? \n 1 - sim \n 2 - não');
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Valor invalido, digite novamente');
          novaOperacao();
        }
      }

      switch (operacao) {
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
          divisaoReal();
          break;
        case 5:
          divisaoInteira();
          break;
        case 6:
          potenciacao();
          break
      }
    }
  }
}

calculadora();
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

const soma = (valor1, valor2) => {
  return valor1 + valor2;
}
console.log('Função que recebe 2 parametros e soma os dois: ', soma(10, 20));


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const invocacao = soma(2, 5) + 5;
console.log('invocação: ', invocacao);

// Qual o valor atualizado dessa variável?
12

// Declare uma nova variável, sem valor.
let novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoValor (){
  novaVariavel = 1;
  return `O valor da variável agora é ${novaVariavel}`
}
console.log(novoValor());

// Invoque a função criada acima.
novoValor()

// Qual o retorno da função? (Use comentários de bloco).
/* Retorno da função é uma template string com a variavel */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tresArgumentos(arg1, arg2, arg3){
  if(!arg1 || !arg2 || !arg3){
    return 'Preencha todos os valores corretamente!'
  }
  return (arg1 * arg2 * arg3) + 2;
}


// Invoque a função criada acima, passando só dois números como argumento.
console.log(tresArgumentos(1,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* O resultado da invocação acima é a string: Preencha todos os valores corretamente! */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(tresArgumentos(1,2,3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* O resultado da invocação acima é o valor: 8 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function seiQualNomeDaNao(arg1, arg2, arg3){
  if(arg1 && arg2 && arg3){
    return (arg1 + arg2) / arg3;
  }

  if(arg1 && arg2){
    return arg1 + arg2;
  }

  if(arg1){
    return arg1;
  }

  if(arg1 === undefined && arg2 === undefined && arg3 === undefined){
    return false;
  }
  return null
}

console.log(seiQualNomeDaNao())

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log('com nenhum argumento: ', seiQualNomeDaNao());
console.log('com um argumento: ', seiQualNomeDaNao(1));
console.log('com dois argumentos: ', seiQualNomeDaNao(1,2));
console.log('com três argumentos: ', seiQualNomeDaNao(1,2,3));
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
function isTruthy(isTrue){
  if(isTrue){
    return true
  }
  return false
};


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log('Invocando a função isTruthy e passando falsy: ', isTruthy(''));
console.log('Invocando a função isTruthy e passando truthy: ', isTruthy({}));


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy([], {}, true, 1, "alguma coisa dentro de uma string", new Date(), -2, 3.14, -3.14, Infinity, -Infinity);


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  placa: '00uno123',
  ano: 2020,
  cor: 'branco',
  quantasPortas: '4',
  assentos: 5,
  quantidadePessoas: 0
}
/* Fique na dúvida: Existe forma de declarar valores default para o 'value' do objeto?

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor){
  carro.cor = cor;
}
console.log('Testando cor do carro ANTES de mudar: ', carro.cor);
carro.mudarCor('preto')
console.log('Testando cor do carro DEPOIS de mudar: ', carro.cor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor;
console.log('Testando metodo de obter cor: ', carro.obterCor());

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;
console.log('Testando metodo de obter modelo: ', carro.obterModelo());


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca;
console.log('Testando metodo de obter marca: ', carro.obterMarca());


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
  return `Esse carro é um ${carro.marca} ${carro.modelo}`;
}
console.log('Testando metodo de obter marca e modelo: ', carro.obterMarcaModelo());

// const carro = {
//   marca: 'Fiat',
//   modelo: 'Uno',
//   placa: '00uno123',
//   ano: 2020,
//   cor: 'branco',
//   quantasPortas: '4',
//   assentos: 5,
//   quantidadePessoas: 0
// }

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = (quantidadePessoas) => {
  if(carro.assentos <= 0){
    return console.log('O carro já está lotado!')
  }

  if(carro.assentos < quantidadePessoas && carro.assentos >= 1){
    const soCabemXPessoas =  carro.assentos % quantidadePessoas;
    const plural = soCabemXPessoas === 1 ? '' : 's';
    return console.log(`Só cabem mais ${soCabemXPessoas} pessoa${plural}!`)
  }

  carro.quantidadePessoas += quantidadePessoas;
  carro.assentos -= quantidadePessoas;
  const plural = quantidadePessoas === 1 ? '' : 's';
  console.log(`Já temos ${carro.quantidadePessoas} pessoa${plural} no carro!`);
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log();
console.log('---- DAQUI PARA BAIXO SÃO OS CONSOLES LOGS PEDIDOS ----');
console.log();


console.log('obtendo a cor do carro: ', carro.obterCor()); // preto

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
console.log('Agora a cor do carro é: ', carro.obterCor()); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?
console.log('Agora a cor do carro é: ', carro.obterCor()); // verde musgo


// Qual a marca e modelo do carro?
console.log('Obtendo a marca e modelo do carro: ', carro.obterMarcaModelo()); // Esse carro é um Fiat Uno

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.adicionarPessoas(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
/* Não há possibilidade de tirar pessoas do carro */

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // O carro já está lotado!

// Quantas pessoas temos no carro?
console.log('Quantidade de pessoas no carro: ', carro.quantidadePessoas) // 5
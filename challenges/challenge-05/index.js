/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = [1, 'dois', 3 , 'quatro', 'cinco'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const funcaoQueRetornaArray = (array) =>{
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcaoQueRetornaArray(array[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const funcaoDoisParametrosArray = (array, indice) => {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const variavelArray = [true, 'string', 1, 2, 'string2'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for(let i = 0; i < variavelArray.length; i++){
  console.log('Retornando funcao de dois parametros array', funcaoDoisParametrosArray(variavelArray, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeDoLivro){
  const objetoBook = {
    taverna1: {
      quantidadePaginas: 100,
      autor: 'Backes',
      editora: 'Taverna Editora'
    },
    taverna2: {
      quantidadePaginas: 200,
      autor: 'Zangado',
      editora: 'Taverna Editora'
    },
    taverna3: {
      quantidadePaginas: 300,
      autor: 'Santiael',
      editora: 'Taverna Editora'
    }
  }
  if(nomeDoLivro == undefined){
    return objetoBook
  }

  return objetoBook[nomeDoLivro]
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log('Retornando todos os livros', book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let livro = 'taverna1'
console.log(`O livro ${livro} tem ${book(livro).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${livro} é ${book(livro).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${livro} foi publicado pela editora ${book(livro).editora}`);
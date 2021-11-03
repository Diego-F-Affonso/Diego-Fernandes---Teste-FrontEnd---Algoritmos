// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// Leve em consideração que a divisão não deve permitir dividendo 0
// A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
// A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
// Função de multiplicação - Idem
// A função de divisão aceita dois parâmetros: a e b.
const adicao = (array) => {
  var sum = 0

  if (!Array.isArray(array)) throw 'valor inserido não é um array'

  array.map((elem) => {
    if (typeof elem !== "number") throw 'todos os elementos não são numeros'
  })

  sum = array.reduce((total, currentValue) => total + currentValue)

  return sum
}

const subtracao = (array) => {
  var sub = 0

  if (!Array.isArray(array)) throw 'valor inserido não é um array'

  array.map((elem) => {
    if (typeof elem !== "number") throw 'todos os elementos não são numeros'
  })

  sub = array.reduce((total, currentValue) => total - currentValue)

  return sub
}

const multiplicacao = (array) => {
  var mult = 0

  if (!Array.isArray(array)) throw 'valor inserido não é um array'

  array.map((elem) => {
    if (typeof elem !== "number") throw 'todos os elementos não são numeros'
  })

  mult = array.reduce((total, currentValue) => total * currentValue)

  return mult
}

// const funcoesElementares = {
//   'adicao': adicao(),
//   'subtração': 'oi',
//   'multiplicação': 'oi',
//   'divisão': 'oi',
// }

// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
// Obtenha uma array contendo apenas as letras
//  Obtenha uma array contendo apenas os números
//  Obtenha o maior número da array acima

const entrada = [ 'a', 10, 'b', 'hola', 122, 15]

const separarArray = (array) => {
  const letras = new Array
  const numeros = new Array
  array.forEach(element => {
    if (typeof element != 'string' && typeof element != 'number') {
      throw "Array não contem somente letras e numeros"
    } else if (typeof element === 'string') {
      letras.push(element)
    } else {
      numeros.push(element)
    }
  });

  return (
    `
    As letras: ${letras?.length ? letras : 'Array sem letras'}
    Os numeros: ${numeros?.length ? numeros : 'Array sem numero'}
    Maior numero: ${numeros?.length ? Math.max(...numeros) : 'Array sem numero'}`
  )
}

console.log(separarArray(entrada))
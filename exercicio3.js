// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2

const generateID = () => {
  var id = ''
  for (var index = 0; index < 4; index ++) {
    id += Math.random().toString(36).slice(-4)  + '-'
  } 
  // https://www.delftstack.com/pt/howto/javascript/remove-last-character-from-javascript/
  const idFormatada = id.substring(0, id.length - 1)
  return idFormatada
}

console.log(generateID())
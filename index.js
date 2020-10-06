const readline = require('readline-sync')

function start() {
  const content = {}

  content.searchTerm = askAndReturnSearchTerm()

  function askAndReturnSearchTerm() {
    return readline.question('DIGITE O TERMO DE PESQUISA: ')
  }

  console.log(content)
}

start()
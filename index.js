const readline = require('readline-sync')

function start() {
  const content = {}

  content.searchTerm = askAndReturnSearchTerm()

  function askAndReturnSearchTerm() {
    return readline.question('TYPE SEARCH TERM: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['WHO IS', 'WHAT IS', 'THE HISTORY OF']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'CHOOSE ONE OPTION: ')

    console.log(selectedPrefixIndex)
  }

  console.log(content)
}

start()
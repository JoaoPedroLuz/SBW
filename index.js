const readline = require('readline-sync')

function start() {
  const content = {}

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()

  function askAndReturnSearchTerm() {
    return readline.question('TYPE SEARCH TERM: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['WHO IS', 'WHAT IS', 'THE HISTORY OF']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'CHOOSE ONE OPTION: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  console.log(content)
}

start()
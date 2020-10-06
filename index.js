const readline = require('readline-sync')
const robots = {
  userInput: require('./robots/user-input'),
  text: require('./robots/text')
}

function start() {
  const content = {}

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()

  robots.userInput(content)
  robots.text(content)

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
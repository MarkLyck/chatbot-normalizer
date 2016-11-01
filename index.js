var LineByLineReader = require('line-by-line')

const tasks = [
  './data/systemessentials.txt',
  './data/substitutes.txt',
  './data/contractions.txt',
  './data/interjections.txt',
  './data/british.txt',
  './data/spellfix.txt',
  './data/texting.txt'
]

function normalize(message) {
  return new Promise((resolve, reject) => {
    var cleanMessage = message.trim()
    cleanMessage = cleanMessage.replace('.', ' .')
    cleanMessage = ' ' + cleanMessage + ' '
    console.log(cleanMessage)
    cleanFromFile(tasks[0], cleanMessage)
    .then(output => cleanFromFile(tasks[1], output))
    .then(output => cleanFromFile(tasks[2], output))
    .then(output => cleanFromFile(tasks[3], output))
    .then(output => cleanFromFile(tasks[4], output))
    .then(output => cleanFromFile(tasks[5], output))
    .then(output => cleanFromFile(tasks[6], output))
    .then((output) => {
      console.log(output)
      resolve(output)
    })
  })
}

function cleanFromFile(path, msg) {
  return new Promise((resolve, reject) => {
    var lr = new LineByLineReader(path)

    lr.on('line', function (line) {
      var checker = line.split(' ')
      if (checker.length >= 2 && checker[1] !== '') {
        if (msg.indexOf(' ' + checker[1].replace('_', ' ') + ' ') > -1) {
          msg = msg.replace(checker[1], checker[2])
        }
      }

    })

    lr.on('end', function() {
      resolve(msg)
    })
  })
}

module.exports = normalize

var path = require('path');
var LineByLineReader = require('line-by-line')

const tasks = [
  path.join(__dirname, './data/systemessentials.txt'),
  path.join(__dirname, './data/substitutes.txt'),
  path.join(__dirname, './data/contractions.txt'),
  path.join(__dirname, './data/interjections.txt'),
  path.join(__dirname, './data/british.txt'),
  path.join(__dirname, './data/spellfix.txt'),
  path.join(__dirname, './data/texting.txt'),
  path.join(__dirname, './data/numbers.txt')
]

function normalize(message) {
  return new Promise((resolve, reject) => {
    var cleanMessage = message.trim()
    cleanMessage = cleanMessage.replace('.', ' .')
    cleanMessage = ' ' + cleanMessage + ' '
    cleanFromFile(tasks[0], cleanMessage)
    .then(output => cleanFromFile(tasks[1], output))
    .then(output => cleanFromFile(tasks[2], output))
    .then(output => cleanFromFile(tasks[3], output))
    .then(output => cleanFromFile(tasks[4], output))
    .then(output => cleanFromFile(tasks[5], output))
    .then(output => cleanFromFile(tasks[6], output))
    .then(output => cleanFromFile(tasks[7], output))
    .then(output => cleanOutput(output))
    .then(output => {
      resolve(output)
    })
  })
}

function cleanFromFile(path, msg) {
  return new Promise((resolve, reject) => {
    var lr = new LineByLineReader(path)

    lr.on('line', function (line) {
      var checker = line.split(' ')

      if (checker.length >= 2 && checker[0] !== '') {
        if (msg.indexOf(' ' + checker[0].replace('_', ' ') + ' ') > -1) {
          if (checker[1]) {
            console.log(checker[0], ' ' + checker[1].replace('_', ' ') + ' ')
            msg = msg.replace(checker[0], checker[1])
          }
        }
      }

    })

    lr.on('end', function() {
      resolve(msg)
    })

  })
}

function cleanOutput(msg) {
  return new Promise(resolve => {
    msg = msg.trim()
    resolve(msg)
  })
}

module.exports = normalize

var LineByLineReader = require('line-by-line')

function normalize(message) {
  return new Promise((resolve, reject) => {
    var cleanMessage = message.trim()
    cleanMessage = cleanMessage.replace('.', ' .')
    var lr = new LineByLineReader('./data/spellfix.txt')

    lr.on('line', function (line) {
      var checker = line.split(' ')
      if (cleanMessage.indexOf(checker[0] > -1)) {

      }
      console.log(line)
    })
  })
}

function cleanFromFile(path) {
  return new Promise((resolve, reject) => {
    var lr = new LineByLineReader(path)

    lr.on('line', function (line) {
      var checker = line.split(' ')
      if (cleanMessage.indexOf(checker[0] > -1)) {

      }
      console.log(line)
    })

    lr.on('end', function() {

    })
  })
}

normalize('test')

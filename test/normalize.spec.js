var chai = require('chai')
var expect = chai.expect // we are using the "expect" style of Chai
var normalize = require('../index.js')

describe('normalize', () => {
  it('should normalize numbers', () => {
    return normalize('one two three first second third thirteenth tenth ninety').then(output => {
      expect(output).to.equal('1 2 3 1st 2nd 3rd 13th 10th 90')
    })
  })

  it('should normalize dates', () => {
    return normalize('Nov 1st 2016').then(output => {
      expect(output).to.equal('November 1st 2016')
    })
  })

})

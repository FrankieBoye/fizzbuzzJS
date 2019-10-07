var Fizzbuzz = require('../src/fizzbuzzJS')

describe('Fizzbuzz', function(){
  it('knows when a number is divisble by three', function() {
    var fizzbuzz = new Fizzbuzz()
    expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
  })
})

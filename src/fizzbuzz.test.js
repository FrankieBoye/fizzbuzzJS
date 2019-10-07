var Fizzbuzz = require('../src/fizzbuzz')

describe('Fizzbuzz', function(){
  it('knows when a number is divisble by three', function() {
    var fizzbuzz = new Fizzbuzz()
    expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
  })

  it('knows when a number is not divisble by three', function() {
    var fizzbuzz = new Fizzbuzz()
    expect(fizzbuzz.isDivisbleByThree(5)).toBe(false);
  })

  it('knows when a number is divisble by five', function() {
    var fizzbuzz = new Fizzbuzz()
    expect(fizzbuzz.isDivisbleByFive(5)).toBe(true);
  })

})

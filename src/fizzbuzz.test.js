var Fizzbuzz = require('../src/fizzbuzz')

var fizzbuzz = function(){}

beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

describe('Fizzbuzz', function(){
  it('knows when a number is divisble by three', function() {
    expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
  })

  it('knows when a number is not divisble by three', function() {
    expect(fizzbuzz.isDivisbleByThree(5)).toBe(false);
  })

  it('knows when a number is divisble by five', function() {
    expect(fizzbuzz.isDivisbleByFive(5)).toBe(true);
  })

  it('knows when a number is not divisble by five', function() {
    expect(fizzbuzz.isDivisbleByFive(7)).toBe(false);
  })

  it('knows when a number is divisble by both three and five', function() {
    expect(fizzbuzz.isDivisbleByFifteen(15)).toBe(true);
  })

  it('knows when a number is not divisble by both three and five', function() {
    expect(fizzbuzz.isDivisbleByFifteen(16)).toBe(false);
  })

})

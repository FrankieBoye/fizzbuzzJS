module.exports=class Fizzbuzz {
  constructor () {
  }

  isDivisbleByThree (number) {
    return (number % 3 === 0)
  }

  isDivisbleByFive (number) {
    return (number % 5 === 0)
  }

  isDivisbleByFifteen (number) {
    return (number % 15 === 0)
  }
}

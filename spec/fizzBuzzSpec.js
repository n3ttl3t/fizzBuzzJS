describe('fizzbuzz', function (){

  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it ('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    })

    it ('divisible by five', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  })

  describe('knows when a number is NOT', function() {

    it ('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it ('divisible by five', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
    });

  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by three', function() {
      expect(fizzbuzz.says(3)).toEqual('Fizz');
    });

    it('"Buzz" when a number is divisible by five', function() {
      expect(fizzbuzz.says(5)).toEqual('Buzz');
    });

    it('"Fizzbuzz" when a number is divisible by three and five', function() {
      expect(fizzbuzz.says(15)).toEqual('FizzBuzz');
    });

    it('the number passed in when it is not divisible', function() {
      expect(fizzbuzz.says(4)).toEqual(4);
    });

  });

});

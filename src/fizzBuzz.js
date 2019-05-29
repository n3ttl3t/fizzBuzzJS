var Fizzbuzz = function(){};

Fizzbuzz.prototype.says = function(number){

  if(this.isDivisibleByThree(number) && this.isDivisibleByFive(number)){
    return ('FizzBuzz');
  };

  if(this.isDivisibleByThree(number)){
    return ('Fizz');
  };

  if(this.isDivisibleByFive(number)){
    return ('Buzz');
  };

  return(number);

};

Fizzbuzz.prototype.isDivisibleByThree = function(number){
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number){
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor){
  return (number % divisor === 0);
};

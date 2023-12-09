/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(n) {
    this.result += n;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    this.result /= number;
  }
  getResult() {
    return this.result;
  }
  clear() {
    this.result = 0;
  }
  isValidExp = (expression) => {
    let validexp = /^[+\-*/().0-9\s]+$/;
    if (!expression.test(validexp)) {
      throw new Error("Invalid Input");
    }
  };
  calulate() {
    let str = "  10 + 5 - 6";
    let strg = str.split(" ").join("");

    try {
      this.isValidExp(strg);
    } catch (error) {
      console.error(error.message);
    }

    console.log(strg);
  }
}

const cal = new Calculator();

cal.add(5);
cal.calulate();
let b = cal.getResult();
console.log(b);
// module.exports = Calculator;

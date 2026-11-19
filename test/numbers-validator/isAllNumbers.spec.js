const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');

const NumbersValidator = require('../../app/numbers-validator');

describe('is all numbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive tests', () => {
    it('Should return true if every element of array is a number', () => {
      expect(validator.isAllNumbers([1, 2.5, -3, 4, 5])).to.be.true;
    });

    it('Should return false if array contains non-numbers', () => {
      expect(validator.isAllNumbers(['1', 2, 3, '4', 5])).to.be.false;
    });
  });

  describe('Negative tests', () => {
    it('Should return an Error if input is not an array', () => {
      const input = 'this is not an array!';
      expect(() => validator.isAllNumbers(input)).to.throw(
        `[${input}] is not an array`,
      );
    });
  });
});

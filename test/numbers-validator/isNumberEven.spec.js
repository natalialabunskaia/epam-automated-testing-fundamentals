const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');

const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive tests', () => {
    it('should return true if positive number is even', () => {
      expect(validator.isNumberEven(4)).to.be.true;
    });

    it('should return true if negative number is even', () => {
      expect(validator.isNumberEven(-4)).to.be.true;
    });

    it('should return false if positive number is odd', () => {
      expect(validator.isNumberEven(5)).to.be.false;
    });

    it('should return false if negative number is odd', () => {
      expect(validator.isNumberEven(-5)).to.be.false;
    });

    it('should return false if number is non-integer', () => {
      expect(validator.isNumberEven(2.5)).to.be.false;
    });

    it('should return true if number is zero', () => {
      expect(validator.isNumberEven(0)).to.be.true;
    });
  });

  describe('Negative tests', () => {
    it('should throw an error if input is not a number', () => {
      const input = '65';
      const typeOfInput = typeof input;

      expect(() => validator.isNumberEven(input)).to.throw(
        `[${input}] is not of type "Number" it is of type "${typeOfInput}"`,
      );
    });
  });
});

const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');

const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive tests', () => {
    it('should return an array of even numbers from the input array', () => {
      expect(
        validator.getEvenNumbersFromArray([1, -2, 3, 4, 5, 6, 0, 6]),
      ).to.be.deep.equal([-2, 4, 6, 0, 6]);
    });

    it('should return an empty array if the input array contains only odd numbers', () => {
      expect(
        validator.getEvenNumbersFromArray([1, -3, 5, 7, 9]),
      ).to.be.deep.equal([]);
    });

    it('should return an empty array if the input array is empty', () => {
      expect(validator.getEvenNumbersFromArray([])).to.be.deep.equal([]);
    });
  });

  describe('Negative tests', () => {
    it('should return an Error if input array is containing non-numbers', () => {
      const input = ['1', 2, '3', 4, 5];
      expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
        `[${input}] is not an array of "Numbers"`,
      );
    });

    it('should return an Error if input is not an array', () => {
      const input = 'this is not an Array!';
      expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
        `[${input}] is not an array of "Numbers"`,
      );
    });
  });
});

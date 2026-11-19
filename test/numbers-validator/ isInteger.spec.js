const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');

const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  describe('Positive tests', () => {
    it('Should return true if the input is an positive integer', () => {
      expect(validator.isInteger(5)).to.be.true;
    });

    it('Should return true if the input is an negotive integer', () => {
      expect(validator.isInteger(-2)).to.be.true;
    });
    it('Should return true if the input is zero', () => {
      expect(validator.isInteger(0)).to.be.true;
    });
    it('Should return false if the input is a non-integer number', () => {
      expect(validator.isInteger(3.14)).to.be.false;
    });
  });
  describe('Negative tests', () => {
    it('Should throw an Error if the input is not a number', () => {
      const input = 'this is not a number!';
      expect(() => validator.isInteger(input)).to.throw(
        `[${input}] is not a number`,
      );
    });
  });
});

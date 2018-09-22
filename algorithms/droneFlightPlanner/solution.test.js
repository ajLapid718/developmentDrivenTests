const calcDroneMinEnergy = require('./solution.js');
const { expect } = require('chai');

describe("calcDroneMinEnergy(route)", function() {

  describe("examples", function() {

    it("should return the sum of all leaf node values for example one", function() {
      let route = [[0,1,19]];
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(0);
    });

    it("should return the sum of all leaf node values for example two", function() {
      let route = [[0,2,10],[10,10,8]];;
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(0);
    });

    it("should return the sum of all leaf node values for example three", function() {
      let route = [[0,2,6],[10,10,20]];
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(14);
    });

    it("should return the sum of all leaf node values for example four", function() {
      let route = [[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]];
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(5);
    });

    it("should return the sum of all leaf node values for example five", function() {
      let route = [[0,2,2],[3,5,38],[9,20,6],[10,12,15],[10,10,8]];
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(36);
    });

    it("should return the sum of all leaf node values for example six", function() {
      let route = [[0,2,10],[3,5,9],[9,20,6],[10,12,2],[10,10,10],[10,10,2]];
      let actualValue = calcDroneMinEnergy(route);
      expect(actualValue).to.equal(0);
    });

  });

});

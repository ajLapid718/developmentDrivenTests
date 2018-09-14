const { reverseArrRec } = require('./solution.js');
const { expect } = require('chai');
const sinon = require('sinon');

describe("reverseArrRec(arr)", function() {

  let myNumbersArray;
  let myLettersArray;

  const wrapper = {
    reverseArrRec: function(arr) {
      if (arr.length <= 1) return arr;
      return wrapper.reverseArrRec(arr.slice(1)).concat(arr[0]);
    }
  };

  beforeEach(function() {
    myNumbersArray = [1,2,3,4,5];
    myLettersArray = ["a","b","c"];
  });

  it("should reverse the elements of an array", function() {
    let actualValueOne = reverseArrRec(myNumbersArray);
    let expectedValueOne = [5,4,3,2,1];
    expect(actualValueOne).to.eql(expectedValueOne);

    let actualValueTwo = reverseArrRec(myLettersArray);
    let expectedValueTwo = ["c","b","a"];
    expect(actualValueTwo).to.eql(expectedValueTwo);
  });

  it("should be a recursive implementation", function() {
    const mySpy = sinon.spy(wrapper, "reverseArrRec");

    mySpy(myNumbersArray);
    let amountOfTimesInvoked = mySpy.callCount;
    expect(amountOfTimesInvoked).to.equal(5);

    mySpy.callCount = 0;

    mySpy(myLettersArray);
    let amountOfTimesCalled = mySpy.callCount;
    expect(amountOfTimesCalled).to.equal(3);
  });

});

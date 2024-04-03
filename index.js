// Code your solution in this file!
//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
//const
//assign an anonymous function to it
//return a new array containing the first two drivers in the array:

//returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
//selectingDrivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  

const createFareMultiplier = function(multiplyValue) {
    return function (value){
return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn){
  return driversToReturn(drivers);
}
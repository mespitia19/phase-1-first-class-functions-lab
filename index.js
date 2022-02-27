// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(someArray) {
    return [someArray[0], someArray[1]]
}

function returnLastTwoDrivers(someArray) {
    return [someArray[someArray.length-2], someArray[someArray.length-1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplier) {
    return function (fare) {
        return (multiplier * fare)
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoOrLastTwoDrivers) {
    return returnFirstTwoOrLastTwoDrivers(arrayOfDrivers)
}
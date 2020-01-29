console.log("Loops micro challenges");

//Create a function that takes two parameters.
//  The first parameter is an array, the second parameter will be a number.
// Your function should return a string that combines all 
// of the values starting at the index of the number passed
// in through the end of the array.

function arrayFromIndex(myArray, startingIndex){
console.log('in the function arrayFromIndex', myArray, startingIndex );

let stringToReturn = '';
for ( let i=startingIndex; i < myArray.length; i++){
stringToReturn += myArray[ i ] + ' ';
}
return stringToReturn
}//end function


console.log(arrayFromIndex(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
console.log(arrayFromIndex(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));
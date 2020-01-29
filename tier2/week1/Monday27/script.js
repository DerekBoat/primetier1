console.log("js");
//100 addition
function addition(num1, num2){
  return num1 + num2;
};
console.log(addition(2,3));
console.log(addition(2,7));
//100 addition

function conditional(num1,num2){
  if(num1 > num2){
  return "The first number was bigger!";
}
else if(num1 < num2){
  return "The second number was bigger!";
}
else if (num1 == num2){
  return "The numbers are the same!";
}
else{
  return "those aren't numbers!";
}
}//end of Conditional
console.log(conditional(3, 2));
console.log(conditional(2, 7));
console.log(conditional(7, 7));
//finished 110 Conditional

//120 Arrays
//function arrays(array){
//return array[0]+array[array.length-1]
//}
//console.log(arrays([1, 2, 3, 4, 5]));
//console.log(arrays([6, 7, 8, 9, 10, 11, 12]));
//end of 120 Arraysf

//130 Loops
//function loopsArrays(array,num){
  for(let i = 0; i < num; i++){
  let string = array[i].splice;
  console.log(array[i].splice);
  return string;
}
}
//console.log(loopsArrays(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
//console.log(loopsArrays(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2));
//end of 130 loops

//140 Loops Arrays of objects
//function loopsArrayOfObjects(employeeArray){
//for(let i = 0; i < employeeArray.length; i++){
  //return = employeeArray[i].yearsOfExperience

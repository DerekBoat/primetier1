console.log("hello again");

let friendsArray = [];

function addFriends(nameParam, foodParam) {
let friendObject = {
  name: nameParam,
  food: foodParam
};
friendsArray.push(friendObject);
  return(friendObject);
}
addFriends('Derek', 'Pizza');
addFriends('Jay', 'Pizza');
addFriends('Megan', 'Sushi');
addFriends('Matt', 'Steak');
console.log(friendsArray);

function loopThroughArray(arrayToLoop){
for(i = 0; i < arrayToLoop.length; i++) {
console.log(arrayToLoop[i].name + "'s favorite food is " + arrayToLoop[i].food);
}
};
loopThroughArray(friendsArray);

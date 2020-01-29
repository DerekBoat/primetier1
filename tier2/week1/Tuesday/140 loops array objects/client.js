console.log("js");
// Create a function that takes in an array of employee objects. Each employee object 
// will come in with a property called `yearsOfExperience`.
// Your function should return the total years of experience for all of the employees.

function totalYearsExperience( employeesArray){
    console.log('in totalYearsExperience', employeesArray);
    let totalYearsExperience = 0;
    for( let i=0; i<employeesArray.length; i++){
        totalYearsExperience += employeesArray[i].yearsOfExperience; 
    }
return totalYearsExperience
}
// the array in the function is named the same as the function for no particular reason, t
// they can be named anything. 
 console.log(totalYearsExperience([
     { name: "Tony", yearsOfExperience: 10 }, 
     { name: "Carla", yearsOfExperience: 4 }
 ]));

 console.log(totalYearsExperience([
     { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
     { name: "Kris", yearsOfExperience: 14 }
 ]));
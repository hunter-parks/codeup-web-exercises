// Write a function named totalPets that accepts an array of objects where each object represents a person,and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.

// write the function
// one parameter
// deal with the array
// extract what we need AND we probably need a loop
// a place to store our sum

function totalPets(petsArray){
    //for loop
    var sum = 0;
    for(var i = 0; i < petsArray.length; i++){
        sum = sum + petsArray[i].numPets;
        console.log(sum);
        // this is the place we're storing the cumulative numPets
    }
    return sum;

}
console.log("hello there")

var userNumber = Number(prompt(" Give me an odd number between 1 and 50"));
function isNumberInRange(num){
    return num >= 1 && num <= 50;
}
function isNumberEven(num){
    return num % 2 === 0;
}
while (userNumber % 2 === 0 || !isNumberInRange(userNumber)){
    userNumber = prompt(" Give me an odd number between 1 and 50");
    if (!isNumberInRange(userNumber) && isNumberInRange(userNumber)){
        break;
    }
    userNumber = Number(prompt("Give me an odd number between 1 and 50"));

}

console.log("The number to skip: " + userNumber);

for (var i = 1; i <= 49; i += 2){
    if (i === userNumber){
        console.log("Yikes! Skipping number " + userNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}














// var user = prompt("Please pick an odd number between 1 and 50! ");
// for (var i = 1; i < 50; i ++ ) {
//     if (i % 2 === 1) {
//        break;
//     } else if (i % 2 === 1) {
//         user = prompt("Thank you for the number! ")
//     } else {
//         user = prompt("Please pick an Odd Number! ");
//     }
// }



        // } else if (i % 2 === 1){
        //    console.log( "these are odd numbers")
        // } else {
        //      console.log(" this is a false statement! ");
        // }

    // if (i === 27 ){
    //     break;
    // }

    // } else if (i % 2 === 1) {
    //
    // } else {
    //     console.log (" This is false ");
    // }






// Question 2

function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x "+ i + " =  " + (num * i ));
    }
}
showMultiplicationTable(7)


// Question 3
for (var i = 0 ; i < 10 ; i++) {
    var randomNum = Math.floor((Math.random() * (200 - 20 + 1) + 20));
    if (randomNum % 2 === 0) {
        console.log( randomNum + " is even ");
    } else if (randomNum % 2 !== 0 ){
        console.log( randomNum + " is odd ");
    }
 }


// Question 4
for (var outerLoop = 1; outerLoop <= 9; outerLoop++ ){
     var output = "";
    for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
        output = output + outerLoop.toString();

    }
    console.log(output);
}




// Question 5

for (var i = 100; i > 0; i = i  - 5  ){
    console.log(i);
}












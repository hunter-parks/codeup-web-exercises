console.log("Hello there!");

var number = 2

while (number <= 65536){
    console.log(number);
    number = number * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " cones to sell today ");
do {

    var requestedCones = Math.floor(Math.random() * 5) + 1;

    if (requestedCones <= allCones){
        // this means you can sell the cones.
        allCones = allCones - requestedCones;
        console.log("You sold " + requestedCones + ", and have " + allCones + " remaining left ")
    } else {
        // this means you don't have enough cone to sell.
        console.log(" Sorry i don't have " + requestedCones + " cones, I only have " + allCones + "cones left");
    }

} while (allCones > 0)
console.log("Congrats! You sold all my cones for the day! ");

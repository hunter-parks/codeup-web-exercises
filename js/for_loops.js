

for (var i = 0 ; i < 10 ; i++) {
    ((randomNum = Math.floor((Math.random(i) * 200) + 20)));
    if (randomNum % 2 === 0) {
        console.log( randomNum + " is even ");
    } else if (randomNum % 2 !== 0 ){
        console.log( i + " is odd ");
    }
}

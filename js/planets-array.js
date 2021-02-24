console.log(" Hello Planets");

(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
// Question 1
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    planets.unshift("The Sun");
// Question 2
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    planets.push("Pluto");
// Question 3
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    planets.shift();
//  Question 4
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    planets.pop();
// Question 5
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var indexOfEarth = planets.indexOf("Earth");
    console.log("The index of Earth is " + indexOfEarth);
// Question 6
    console.log("Reversing the order of the planets array.");
    console.log(planets);
    planets.reverse();
// Question 7
    console.log("Sorting the planets array.");
    console.log(planets);
    planets.sort();
})();
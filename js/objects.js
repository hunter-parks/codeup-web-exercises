console.log("Hello there!");

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Hunter",
        lastName: "Parks"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
function sayHello(){
    return ("Hello from " + person.firstName + " " + person.lastName + "!");
    }
    console.log(sayHello());
sayHello();

    person.sayHello = function (){
        return "Hello from " + this.firstName + " " + this.lastName + "!"
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discount(amount){
        if (amount > 200){
            return amount - (amount * .12);
        } else {
            return amount;
        }
    }

    shoppers.forEach(function (shopper){
        console.log(shopper.name + " ," +  " you owe $" + shopper.amount +  " before the discount " + " ,"  + " but with the discount you owe $" + discount(shopper.amount));
    });
//     var name;
//     var amountOver200;
//     var storeDeal = alert("We are having a sale today, if you spend more than 200 you get 12% discount!! ");
//     var name = prompt("Hi Cameron, how much did you spend today? ");
//
//
//     function amountSpent(){
//     if (amountSpent >= amountOver200){
//         alert("You get a 12% discount");
//     } else{
//         alert("Sorry you didn't reach the discount limit of $200 or more! ");
//     }
// }
//
//     function applyingDiscount (amountBought, discount){
//         var discountedPrice =  amountBought * (1- discount);
//         return discountedPrice
//     }

    // console.log(applyingDiscount(250,.12));




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
   var books = [
        {
            title: "It",
            author: {
                firstName: "Stephen",
                lastName: "King"
            }
        },
        {
            title: "Beyond the Universe",
            author: {
                firstName: "Bill",
                lastName: "Pearl"
            }
        },
        {
            title: "SuperMarket",
            author: {
                firstName: "Bobby",
                lastName: "Tarotino"
            }
        }]
   console.log(books[0]);
   console.log(books[1]);
   console.log([2]);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function (book,index){
    console.log("Book # " + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
})







    //
    // var theLibrary = [
    //     firstBook,
    //     secondBook,
    //     thirdBook
    // ]
    // console.log(theLibrary);
    //
    // for (var i = 0; i <= 3; i++){
    //     console.log(books.indexOf());
    // }


    // firstBook.turnOn = function() {
    //     console.log(theLibrary.indexOf());
    // }
    // theLibrary.forEach(function (books){
    //     books.turnOn();
    // })


    // var array = ["It", "Harry Potter Series", "Beyond the Universe"]
    // array.forEach(function (item, index) {
    //     console.log(item, index);
    // });



    // var theLibrary = [
    //     books
    // ]
    // console.log(theLibrary);
    //
    // books.turnOn = function() {
    //     console.log(books.indexOf(books));
    // }
    //
    // theLibrary.forEach(function (book){
    //     book.turnOn();
    // })
    // console.log()

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();